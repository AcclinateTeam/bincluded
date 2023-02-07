import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SubHeader from '../../components/SubHeader';
import Header from '../../theme/Header';

const FullStudy = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const { condition, id }: { condition: any; id: any } = useParams();

    const [studies, setStudies] = useState([]);

    useEffect(() => {
        fetch(`https://clinicaltrials.gov/api/query/full_studies?expr=AREA%5BNCTId%5D+${id}&min_rnk=&max_rnk=&fmt=json`)
            .then(res => res.json())
            .then(fullStudy => setStudies(fullStudy.FullStudiesResponse.FullStudies));
    }, []);

    console.log(studies);

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

            <div className="container study">

                {studies.map((study: any, index) => {
                    if (!condition) {
                        return (
                            <section key={index}>
                                <div className="container study space">
                                    <div className="eight columns offset-by-one">
                                        {studies.map((study: any, index) => (
                                            <div className="panel" key={index}>
                                                <div className="container">
                                                    <div className="seven columns">
                                                        <h1>About</h1>
                                                        <p>{study.Study.ProtocolSection.DescriptionModule.DetailedDescription}</p>
                                                        <h1>Eligibility Criteria</h1>
                                                        <p>{study.Study.ProtocolSection.EligibilityModule.EligibilityCriteria}</p>
                                                        <h1>Outcomes</h1>
                                                        <p>
                                                            {study.Study.ProtocolSection.OutcomesModule.PrimaryOutcomeList.PrimaryOutcome.map((p: { PrimaryOutcomeMeasure: string; PrimaryOutcomeDescription: string; }, index: number) => (
                                                                <>
                                                                    <h3>{p.PrimaryOutcomeMeasure}</h3>
                                                                    <p>{p.PrimaryOutcomeDescription}</p>
                                                                </>
                                                            ))}
                                                        </p>
                                                    </div>
                                                    <div className="three columns">
                                                        <h1>Details</h1>
                                                        <ul>
                                                            <li>
                                                                {/* <FontAwesomeIcon icon="hourglass-start" />*/} Start Date (Actual): {study.Study.ProtocolSection.StatusModule.StartDateStruct.StartDate}
                                                            </li>
                                                            <li>
                                                                {/* <FontAwesomeIcon icon="hourglass-end" />*/} End Date (Anticipated): {study.Study.ProtocolSection.StatusModule.CompletionDateStruct.CompletionDate}
                                                            </li>
                                                            <li>
                                                                {/* <FontAwesomeIcon icon="venus-mars" />*/} {`Enrolling ` + study.Study.ProtocolSection.EligibilityModule.Gender.toLowerCase() + ` patients`}
                                                            </li>
                                                            <li>
                                                                {/* <FontAwesomeIcon icon="birthday-cake" />*/} {`Enrolling patients above ` + study.Study.ProtocolSection.EligibilityModule.MinimumAge + ` of age.`}
                                                            </li>
                                                            <li>
                                                                {/* <FontAwesomeIcon icon="vial" />*/} {`Sampling method: ` + study.Study.ProtocolSection.EligibilityModule.SamplingMethod}
                                                            </li>
                                                            <li>
                                                                {/* <FontAwesomeIcon icon="location-arrow" />*/} {study.Study.ProtocolSection.IdentificationModule.Organization.OrgFullName}
                                                            </li>
                                                            <li>
                                                                {/* <FontAwesomeIcon icon="door-open" />*/} Overall Status: {study.Study.ProtocolSection.StatusModule.OverallStatus}
                                                            </li>
                                                            <li>
                                                                <FontAwesomeIcon icon="pills" /> Intervention Type: {study.Study.ProtocolSection.ArmsInterventionsModule.InterventionList.Intervention.map((m: { InterventionType: string; }, index: number) => (
                                                                    <>
                                                                        {m.InterventionType}
                                                                    </>
                                                                ))}
                                                            </li>
                                                            <li>
                                                                <FontAwesomeIcon icon="thumbs-up" /> FDA Approval: {study.Study.ProtocolSection.OversightModule.IsFDARegulatedDrug}
                                                            </li>
                                                        </ul>
                                                        <h1>Contact Information</h1>
                                                        {study.Study.ProtocolSection.ContactsLocationsModule.OverallOfficialList.OverallOfficial.map((m: { OverallOfficialName: number; OverallOfficialAffiliation: string; OverallOfficialRole: string }, index: number) => (
                                                            <>
                                                                <h3 className="contact">{m.OverallOfficialName}</h3>
                                                                <p className="contact">{m.OverallOfficialRole} | {m.OverallOfficialAffiliation}</p>
                                                            </>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="return">
                                            <Link className="button" to="/trials">
                                                Back To Clinical Trial Search
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        )
                    } else {
                        return (
                            <section key={index}>
                                <div className="callout">
                                    <div className="eight columns offset-by-one heading">
                                        <h1>{study.Study.ProtocolSection.IdentificationModule.BriefTitle}</h1>
                                        <p className="type">{study.Study.ProtocolSection.IdentificationModule.NCTId} | {study.Study.ProtocolSection.DesignModule.StudyType}</p>
                                    </div>
                                </div>

                                <div className="container study space">
                                    <div className="eight columns offset-by-one">
                                        <div className="head">
                                            <div className="info">
                                                <Link to={`/trials/results/${condition}`}>
                                                    <FontAwesomeIcon icon="arrow-left" /> Back To Search Results for "{condition.replace(/\+/g, " ").replace(/,/g, ", ")}"
                                                </Link>
                                            </div>
                                            <div className="bread">
                                                <p>
                                                    <Link to="/">Home</Link> / <Link to="/trials">Clinical Trials</Link> / <Link to={`/trials/results/${condition}`}>{condition.replace(/\+/g, " ").replace(/,/g, ", ")}</Link>
                                                </p>
                                            </div>
                                        </div>
                                        {studies.map((study: any, index) => (
                                            <div className="panel" key={index}>
                                                <div className="container">
                                                    <div className="seven columns">
                                                        <h1>About</h1>
                                                        <p>{study.Study.ProtocolSection.DescriptionModule.DetailedDescription}</p>
                                                        <h1>Eligibility Criteria</h1>
                                                        <p>{study.Study.ProtocolSection.EligibilityModule.EligibilityCriteria}</p>
                                                        <h1>Outcomes</h1>
                                                        <p>
                                                            {study.Study.ProtocolSection.OutcomesModule.PrimaryOutcomeList.PrimaryOutcome.map((p: { PrimaryOutcomeMeasure: string; PrimaryOutcomeDescription: string; }, index: number) => (
                                                                <>
                                                                    <h3>{p.PrimaryOutcomeMeasure}</h3>
                                                                    <p>{p.PrimaryOutcomeDescription}</p>
                                                                </>
                                                            ))}
                                                        </p>
                                                    </div>
                                                    <div className="three columns">
                                                        <div className="details">
                                                            <h3>Details</h3>
                                                            <ul>
                                                                <li>
                                                                    <FontAwesomeIcon icon="hourglass-start" /> Start Date (Actual): {study.Study.ProtocolSection.StatusModule.StartDateStruct.StartDate}
                                                                </li>
                                                                <li>
                                                                    <FontAwesomeIcon icon="hourglass-end" /> End Date (Anticipated): {study.Study.ProtocolSection.StatusModule.CompletionDateStruct.CompletionDate}
                                                                </li>
                                                                <li>
                                                                    <FontAwesomeIcon icon="venus-mars" /> {`Enrolling ` + study.Study.ProtocolSection.EligibilityModule.Gender.toLowerCase() + ` patients`}
                                                                </li>
                                                                <li>
                                                                    <FontAwesomeIcon icon="birthday-cake" /> {`Enrolling patients above ` + study.Study.ProtocolSection.EligibilityModule.MinimumAge + ` of age.`}
                                                                </li>
                                                                <li>
                                                                    <FontAwesomeIcon icon="vial" /> {`Sampling method: ` + study.Study.ProtocolSection.EligibilityModule.SamplingMethod}
                                                                </li>
                                                                <li>
                                                                    <FontAwesomeIcon icon="location-arrow" /> {study.Study.ProtocolSection.IdentificationModule.Organization.OrgFullName}
                                                                </li>
                                                                <li>
                                                                    <FontAwesomeIcon icon="door-open" /> Overall Status: {study.Study.ProtocolSection.StatusModule.OverallStatus}
                                                                </li>
                                                                {/* <li>
                                                                <FontAwesomeIcon icon="pills" /> Intervention Type: {study.Study.ProtocolSection.ArmsInterventionsModule.InterventionList.Intervention.map((m: { InterventionType: string; }, index: number) => (
                                                                    <>
                                                                        {m.InterventionType}
                                                                    </>
                                                                ))}
                                                            </li> */}
                                                                <li>
                                                                    <FontAwesomeIcon icon="thumbs-up" /> FDA Approval: {study.Study.ProtocolSection.OversightModule.IsFDARegulatedDrug}
                                                                </li>
                                                            </ul>
                                                            <h3>Contact Information</h3>
                                                            {/* {study.Study.ProtocolSection.ContactsLocationsModule.OverallOfficialList.OverallOfficial.map((m: { OverallOfficialName: number; OverallOfficialAffiliation: string; OverallOfficialRole: string }, index: number) => (
                                                                <>
                                                                    <h3 className="contact">{m.OverallOfficialName}</h3>
                                                                    <p className="contact">{m.OverallOfficialRole} | {m.OverallOfficialAffiliation}</p>
                                                                </>
                                                            ))} */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="return">
                                            <Link className="button" to="/trials">
                                                Back To Clinical Trial Search
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        )
                    }
                })}

                {/* {studies.map((study, index) => (
                    <section key={index}>
                        <div className="callout">
                            <div className="overlay"></div>
                            <div className="seven columns offset-by-one-half heading">
                                <h1>{study.Study.ProtocolSection.IdentificationModule.BriefTitle}</h1>
                                <p className="type">{study.Study.ProtocolSection.IdentificationModule.NCTId} | {study.Study.ProtocolSection.DesignModule.StudyType}</p>
                            </div>
                        </div>

                        <div className="container study space">
                            <div className="seven columns offset-by-one-half">
                                <div className="head">
                                    <div className="info">
                                        <Link to={`/trials/results/${condition}`}>
                                            {/* <FontAwesomeIcon icon="arrow-left" /> Back To Search Results for "{text}"
                                        </Link>
                                    </div>
                                    <div className="bread">
                                        <p>
                                            <a href="http://b-included.com">Home</a> / <Link to="/trials">Clinical Trials</Link> / <Link to={`/trials/results/${text}`}>{text}</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))} */}
            </div>
        </>
    )
}


export default FullStudy;