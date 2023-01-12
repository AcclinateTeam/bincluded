import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../theme/Header';
import Accordion from '../../components/Accordion';
import Terminal from '../resources/components/FamilyTerminal';

/* UTILS IMPORTS */
import { accordionData } from '../../utils/content';
import Logo from '../../components/subComponents/Logo';
import HomeCommunity from '../Home/components/HomeCommunity';

const Trials = (props: any) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // Scrolls to bottom of Hero Section OnClick
    const scrollToRef = () => {
        let hero = document.getElementById('hero');
        let heroHeight = hero!.offsetHeight;

        window.scrollTo({
            top: heroHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    const [trials, setTrials] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('https://clinicaltrials.gov/api/query/study_fields?min_rnk=1&max_rnk=3&fmt=JSON&fields=NCTId,Condition,InterventionName,StudyType,BriefTitle,BriefSummary,PrimaryCompletionDate,Phase')
            .then(res => res.json())
            .then(threeTrails => setTrials(threeTrails.StudyFieldsResponse.StudyFields));
    }, []);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero">
                <div className="container">
                    <div className="columns eight offset-by-one callout">
                        <div className="image blog">
                            <img src="images/theme/trials.png" alt="" />
                        </div>
                        <div className="text">
                            <div className="calltext">
                                <h1>Clinical<br /> Research</h1>
                                <p>B-INCLUDED addresses healthcare needs and subsequently educational, employment, and financial gaps so that residents can work towards improved health.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} Clinical Research
                    </div>
                </div>
            </section>

            {/* PARTNER INTRO SECTION */}
            <section className="intro">
                <div className="container">
                    <div className="four columns offset-by-one">
                        <div className="text">
                            <h2>What Is <span>Clinical Research?</span></h2>
                            <p>Clinical trials are research studies that evaluate safety and effectiveness of drugs, medical devices and/or behavioral interventions in people.</p>
                            <h2>Why Clinical Research <span>Matters for Minorities</span></h2>
                            <p>Racial and ethnic minorities makeup 43% of the U.S. population, and are growing, yet they often represent as little as 2% to 16% of clinical trial participants Source. This leads to treatments that are less effective on people of color.</p>
                        </div>
                    </div>
                    <div className="four columns offset-by-one">
                        <img style={{ 'margin': '0 0 -3px' }} src="/images/theme/trialsintro.png" alt="" />
                    </div>
                </div>
            </section>

            {/* SECTION */}
            <section className="participate">
                <div className="container">
                    <div className="ten columns">
                        <div className="cards">
                            <div className="card">
                                <div className="image">
                                    <img src="/images/theme/trialspart.png" alt="" />
                                </div>
                                <div className="text">
                                    <h2>Prosper + <span>Acclinate</span></h2>
                                    <p>Acclinate and Birmingham Prosper have been hard at work to develop a Birmingham-specific community platform; B-INCLUDED. This platform will further Prosper's initiative to reduce racial inequities in Jefferson County by providing county residents access to long needed resources.</p>
                                    <a href="https://www.bizjournals.com/birmingham/inno/stories/news/2022/01/12/acclinate-and-prosper-partner-on-new-platform.html">Read About How This Partnership Was Formed <FontAwesomeIcon icon="arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PARTNER COMMITMENT SECTION */}
            <section className="search">
                <div className="container">
                    <div className="four columns">
                        <div className="image">
                            <img src="/images/theme/trialssearch.png" alt="" />
                        </div>
                    </div>
                    <div className="six columns" style={{ 'position': 'relative' }}>
                        <div className="text">
                            <h2>Clinical Trial <span>Search Tool</span></h2>
                            <p>Enter a condition below to search clinical trials in the Birmingham area.</p>

                            <div className="form">
                                <input className="control" placeholder="Enter a Condition | ex: Cancer" type="text" name="Search" onChange={e => setText(e.target.value)} />
                                <Link to={`/trials/results/${text}`}>
                                    <div className="submit">
                                        <FontAwesomeIcon icon="search" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOME - Join The Community Section */}
            <HomeCommunity />
        </>


    )
}

export default Trials;