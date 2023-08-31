import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VisibilitySensor from 'react-visibility-sensor';

import Header from '../../theme/Header';

/* UTILS IMPORTS */
import QuoteRotator from './components/TextRotator';

const Trials = (props: any) => {
    // GLOBAL JS
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // TRIAL SEARCH VARIABLES
    // const [trials, setTrials] = useState([]);
    const [condition, setCondition] = useState('');

    const renderButton = () => {
        if (condition) return `/trials/${condition}`;
    }

    // Hero Background-Image Slide + Hero Text Fade-In
    useEffect(() => {
        const hero = document.getElementById('heroSlide');
        const bg = document.getElementById('bg');
        const img = document.getElementById('img');
        const text = document.getElementById('text');
        const header = document.getElementById('header');

        hero!.style.width = '100%';
        if (window.innerWidth <= 499) {
            bg!.style.width = '100%';
            img!.style.width = '100%';
        } else {
            bg!.style.width = '100%';
            img!.style.width = '100%';
        };

        setTimeout(() => {
            text!.style.cssText = 'padding-top: 0; opacity: 1;';
            header!.style.cssText = 'opacity: 1;';
        }, 1000);
    }, []);

    const [introVisible, setIntroVisible] = useState(false);
    const [partVisible, setPartVisible] = useState(false);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero blog">
                <div id="heroSlide" className="heroSlide"> </div>
                <div className="heroContent">
                    <div className="image blog">
                        <div id="bg" className="bg">
                            <img id="img" src="/images/theme/6Q3A3920.jpg" alt="" />
                        </div>
                    </div>
                    <div id="text" className="text">
                        <div className="calltext">
                            <h1>Clinical<br /> Research</h1>
                            <p>Clinical trials are research studies that evaluate safety and effectiveness of drugs, medical devices and/or behavioral interventions in people.</p>
                        </div>
                        <div className="callbutton">
                            <a className="button signup" href="https://www.videoask.com/ftmqd7gt3" target="_blank" rel="noopener noreferrer">Share Your Story</a>
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
            <VisibilitySensor partialVisibility onChange={(isVisible) => { if (isVisible) { setIntroVisible(true); } }}>
                <section className="intro tria" style={{ opacity: introVisible ? 1 : 0 }}>
                    <div className="text">
                        <h2>What Is <span>Clinical Research?</span></h2>
                        <p>Clinical Research provides community members an opportunity to participate in studies that directly affect their personal and community health outcomes. After thorough information and consent, participants can take part in studies that address health conditions impacting communities of color. In turn, researchers have an opportunity to build trust with community members and better understand the health outcomes of study participants.</p>
                        <h2>Why Clinical Research <span>Matters for Minorities</span></h2>
                        <p>Racial and ethnic minorities makeup 43% of the U.S. population, and are growing, yet they often represent as little as 2% to 16% of clinical trial participants Source. This leads to treatments that are less effective on people of color.</p>
                    </div>
                    <div className="image">
                        <img src="/images/theme/trialsintro.png" alt="" />
                    </div>
                </section>
            </VisibilitySensor>

            {/* SECTION */}
            <VisibilitySensor partialVisibility onChange={(isVisible) => { if (isVisible) { setPartVisible(true); } }}>
                <section className="participate" style={{ opacity: partVisible ? 1 : 0 }}>
                    <div className="card">
                        <div className="image">
                            <img src="/images/theme/trialspart.png" alt="" />
                        </div>
                        <div className="text">
                            <h2>Why minority participation in <span>clinical trials is important</span></h2>
                            <p>Racial and ethnic minorities makeup 43% of the U.S. population, and are growing, yet they often represent as little as 2% to 16% of clinical trial participants Source. This leads to treatments that are less effective on people of color.</p>
                        </div>
                    </div>
                </section>
            </VisibilitySensor>

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
                                <input className="control" placeholder="Enter a Condition | ex: Cancer" type="text" name="Search" onChange={e => setCondition(e.target.value)} />
                                {/* <input className="control" placeholder="Minimum Age | ex: 18" type="text" name="MinAge" onChange={e => setMinAge(e.target.value)} />
                                <input className="control" placeholder="Maximum Age | ex: 65" type="text" name="MaxAge" onChange={e => setMaxAge(e.target.value)} /> */}
                                <Link to={`${renderButton()}`}>
                                    <div className="submit">
                                        <FontAwesomeIcon icon="search" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="quotes">
                <div className="container">
                    <div className="eight columns offset-by-one box">
                        <div className="four columns it">
                            <img src="/images/theme/trials4.png" alt="" />
                        </div>
                        <div className="six columns up">
                            <h2>Quotes From <span>Our Community</span></h2>
                            <QuoteRotator />
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default Trials;