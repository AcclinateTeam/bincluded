import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../theme/Header';
import Logo from '../../theme/Logo';
import WhyNowIntro from './components/WhyNowIntro';
import WhyNowMission from './components/WhyNowMission';
import WhyNowMeaning from './components/WhyNowMeaning';
import WhyNowDifferent from './components/WhyNowDifferent';
import WhyNowLeaders from './components/WhyNowLeaders';

const WhyNow = () =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            {/* HEADER COMPONENT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero whyy">
                <div className="container">
                    <div className="columns eight offset-by-one callout">
                        <div className="image">
                            <img src="/images/theme/resources.png" alt="" />
                        </div>
                        <div className="text">
                            <div className="calltext">
                                <h1>Why Now?</h1>
                                <p>There’s no better time for Black communities to have and claim a space of their own. The longevity of Black communities depends on a collective of people who are focused on improved health, overall wellness, and elevated financial practices. <Logo color="#287fdd" /> is that space and you can become part of that collective.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} Why Now?
                    </div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <WhyNowIntro />

            {/* PARTNER COMMITMENT SECTION */}
            <WhyNowMission />

            {/* PARTNER INTRO SECTION */}
            <WhyNowMeaning />

            {/* PARTNER COMMITMENT SECTION */}
            <WhyNowDifferent />          

            {/* LEADERSHIP SECTION */}
            <WhyNowLeaders />

            {/* PARTNERS SECTION */}
            <section className="orgs">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h2>Aligned With The <span>Best Organizations</span></h2>
                            <p><Logo color="#287fdd"/> gives its residents a chance at a happier, healthier life.</p>
                        </div>
                        <div className="container">
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/orgUAB.png")` }}></div>
                            </div>
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/orgVulcan.png")` }}></div>
                            </div>
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/orgProtective.png")` }}></div>
                            </div>
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/cahaba.png")` }}></div>
                            </div>
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/impact.jpg")` }}></div>
                            </div>
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/mpower.jpg")` }}></div>
                            </div>
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/uway.jpg")` }}></div>
                            </div>
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/m4a.png")` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyNow;