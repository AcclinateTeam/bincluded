import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../components/Header';
import Accordion from '../../components/Accordion';
import Terminal from '../../components/FamilyTerminal';

/* UTILS IMPORTS */
import { accordionData } from '../../utils/content';

const Trials = (props: any) =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    // Scrolls to bottom of Hero Section OnClick
    const scrollToRef = () =>
    {
        let hero = document.getElementById('hero');
        let heroHeight = hero.offsetHeight;
        
        window.scrollTo({
            top: heroHeight,
            left: 0,
            behavior: 'smooth'
        });
    }  

    const [trials, setTrials] = useState([]);
    const [text, setText] = useState('');

    useEffect(() =>
    {
        fetch('https://clinicaltrials.gov/api/query/study_fields?min_rnk=1&max_rnk=3&fmt=JSON&fields=NCTId,Condition,InterventionName,StudyType,BriefTitle,BriefSummary,PrimaryCompletionDate,Phase')
            .then(res => res.json())
            .then(threeTrails => setTrials(threeTrails.StudyFieldsResponse.StudyFields));
    }, []);

    return (
        <>
            {/* HEADER COMPONENT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="trials hero" style={{ height: `100vh` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/researchhead.jpg)`, backgroundPosition: `0 0` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>Clinical Research</h1>
                        <p>#B-INCLUDED provides easy access to resources that are beneficial in reaching one’s goals in maintaining a healthy lifestyle.</p>

                    </div>
                    <div className="callbutton">
                        <a className="button signup" href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual">Join The Community</a>
                        <a className="button learnmore" href="https://jdsb9zx9r21.typeform.com/to/m2w4i2Ju">Share Your Covid Story</a>
                    </div>
                </div>
                <div className="scrollDown">
                    <FontAwesomeIcon icon="arrow-down" onClick={scrollToRef} />
                    <h3>Scroll Down</h3>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="seven columns offset-by-one-half bread">
                        <a href="/">Home</a> {'>'} Clinical Research
                    </div>
                </div>
            </section>

            {/* WHAT IS CLINICAL RESEARCH SECTION */}
            <section className="studies">
                <div className="container">
                    <div className="four columns">
                        <div className="heading">
                            <h2>What is <span className="blue">clinical research?</span></h2>
                        </div>
                    </div>
                    <div className="six columns text">
                        <p>Clinical trials are research studies performed in people that are aimed at evaluating a medical, surgical, or behavioral intervention. They are the primary way that researchers find out if a new treatment, like a new drug or diet or medical device (for example, a pacemaker) is safe and effective in people.</p>
                    </div>
                </div>
            </section>

            {/* IMAGE DIVIDER SECTION */}
            <section className="divider">
                <img src="/images/trials2.png" alt="birmingham" />
            </section>

            {/* WHY IT MATTERS SECTION */}
            <section className="whyStudies">
                <div className="container">
                    <div className="five columns text">
                        <p>Racial and ethnic minorities makeup 43% of the U.S. population, and are growing, yet they often represent as little as 2% to 16% of clinical trial participants Source. This leads to treatments that are less effective on people of color. </p>
                    </div>
                    <div className="five columns">
                        <div className="heading">
                            <h2>Why clinical research matters for <span className="blue">minority communities</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY YOU SHOULD GET INVOLVED SECTION */}
            <section className="getInvolved">
                <div className="container">
                    <div className="four columns">
                        <div className="text">
                            <h2>Why you should get involved in <span className="blue">clinical research</span></h2>
                            <p>Racial and ethnic minorities makeup 43% of the U.S. population, and are growing, yet they often represent as little as 2% to 16% of clinical trial participants Source. This leads to treatments that are less effective on people of color. </p>
                        </div>
                    </div>
                    <div className="six columns">
                        <div className="image">
                            <img src="/images/newdoctor.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="trials space">
                <div className="container search">
                    <div className="seven columns offset-by-one-half">
                        <h2>Clinical Trial Search</h2>

                        <div className="container">
                            <div className="six columns offset-by-two">
                                <div className="form">
                                    <input className="control" placeholder="Enter a Condition | ex: Cancer" type="text" name="Search" onChange={e => setText(e.target.value)} />
                                    <Link to={`/trials/results/${text}`}>
                                        <div className="submit">
                                            <FontAwesomeIcon icon="search" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="viewStudies">
                                    <Link to="/">
                                        View Volunteer Studies <FontAwesomeIcon icon="arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trials">
                <div className="container">
                    <div className="seven columns offset-by-one-half">
                        <div className="accordions">
                            <h2>Frequently Asked Questions</h2>
                            <div className="accordion">
                                {accordionData.map(({ title, content }) => (
                                    <Accordion content={content} title={title} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default Trials;