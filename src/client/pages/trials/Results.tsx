import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SubHeader from '../../components/SubHeader';
import Header from '../../theme/Header';


const Results = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const { text }: { text: any; } = useParams();

    const [numbers, setNumbers] = useState<any>([]);
    const [trials, setTrials] = useState([]);

    useEffect(() => {
        getTrials();

        async function getTrials() {
            const response = await fetch(`https://clinicaltrials.gov/api/query/full_studies?expr=${text}+AND+AREA%5BLocationCity%5D+Birmingham+AND+AREA%5BLocationState%5D+Alabama&min_rnk=1&max_rnk=10&fmt=json`);
            const trials = await response.json();

            setNumbers(trials.FullStudiesResponse);
            setTrials(trials.FullStudiesResponse.FullStudies);
        }
    }, []);

    const studiesFound = numbers.NStudiesFound;
    const studiesReturned = numbers.NStudiesReturned;

    if (studiesFound < 1 || studiesReturned < 1) {
        return (
            <>
                {/* SUB-HEADER COMPONENT IMPORT */}
                <Header />

                {/* JUMBOTRON COMPONENT */}
                <section id="hero" className="hero">
                    <div className="fill"></div>
                </section>

                {/* BREADCRUMB SECTION */}
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="eight columns offset-by-one bread">
                            <a href="/">Home</a> {'>'} Privacy Policy
                        </div>
                    </div>
                </section>

                <div className="container trials error">
                    <h1>Sorry, your search for <span>{text}</span> did not return any results.</h1>
                    <Link to="/trials">Click here to return to the search page</Link>
                </div>
            </>
        )
    } else {
        return (
            <>
                {/* SUB-HEADER COMPONENT IMPORT */}
                <Header />

                {/* JUMBOTRON COMPONENT */}
                <section id="hero" className="hero">
                    <div className="fill"></div>
                </section>

                {/* BREADCRUMB SECTION */}
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="eight columns offset-by-one bread">
                            <a href="/">Home</a> {'>'} <a href="/trials">Clinical Research</a> {'>'} Search Results
                        </div>
                    </div>
                </section>

                <section className="results">
                    <div className="container space">
                        <div className="eight columns offset-by-one">
                            <div className="info">
                                Showing {numbers.NStudiesReturned} of {numbers.NStudiesFound} Search Results for "{text.replace(/\+/g, " ").replace(/,/g, "")}"
                            </div>

                            <div className="panels">
                                {trials.map((trial: any, index) => (
                                    <Link key={index} to={`/trials/results/study/${text}/${trial.Study.ProtocolSection.IdentificationModule.NCTId}`}>
                                        <div className="panel">
                                            <div className="container">
                                                <div className="seven columns">
                                                    <div className="text">
                                                        <h1>{trial.Study.ProtocolSection.IdentificationModule.BriefTitle}</h1>
                                                        <p>{trial.Study.ProtocolSection.DescriptionModule.BriefSummary}</p>
                                                        <p className="type">{trial.Study.ProtocolSection.IdentificationModule.NCTId} | {trial.Study.ProtocolSection.DesignModule.StudyType}</p>
                                                    </div>
                                                </div>
                                                <div className="three columns">
                                                    <ul>
                                                        <h3>Study Details</h3>
                                                        <li>
                                                            <FontAwesomeIcon icon="users" /> {`Enrolling ` + trial.Study.ProtocolSection.EligibilityModule.Gender.toLowerCase() + ` patients`}
                                                        </li>
                                                        <li>
                                                            <FontAwesomeIcon icon="hospital" /> {`Enrolling patients above ` + trial.Study.ProtocolSection.EligibilityModule.MinimumAge + ` of age.`}
                                                        </li>
                                                        <li>
                                                            <FontAwesomeIcon icon="vial" /> {`Sampling method: ` + trial.Study.ProtocolSection.EligibilityModule.SamplingMethod}
                                                        </li>
                                                        <li>
                                                            <FontAwesomeIcon icon="location-arrow" /> {trial.Study.ProtocolSection.IdentificationModule.Organization.OrgFullName}
                                                        </li>
                                                        {/* <li>
                                                        <FontAwesomeIcon icon="map-marker-alt" /> {trial.Study.ProtocolSection.ContactsLocationsModule.LocationList.Location.map((m: { LocationZip: number; LocationCity: string; LocationState: string }, index: number) => (
                                                            <>
                                                                {m.LocationCity}, {m.LocationState} - ({m.LocationZip})
                                                            </>
                                                        ))}
                                                    </li> */}
                                                    </ul>
                                                    <p className="button">
                                                        Learn More
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}


export default Results;

export interface numbers {
    NStudiesFound: number;
    NStudiesReturned: number;
}