import moment from 'moment';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import Logo from '../../components/subComponents/Logo';
import BlogPosts from '../BlogPosts';
import Prosper from '../../components/Prosper';
import Loading from '../../components/Loading';
import HealthTerminal from './components/HealthTerminal';

const Health = () => {

    // Automatic Scroll To Top on Refresh
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            {/* HEADER COMPONENT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero">
                <div className="container">
                    <div className="columns eight offset-by-one callout">
                        <div className="image blog">
                            <img src="/images/theme/resources.png" alt="" />
                        </div>
                        <div className="text">
                            <div className="calltext">
                                <h1>Health<br /> Resources</h1>
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
                        <a href="/">Home</a> {'>'} <a href="/resources">Resources</a> {'>'} Health Resources
                    </div>
                </div>
            </section>

            {/* RESOURCE INTRO SECTION */}            
            <section className="intro">
                <div className="container">
                    <div className="four columns offset-by-one">
                        <div className="text">
                            <h2>Your Health <span>Is Your Wealth</span></h2>
                            <p>Health doesn’t end at the doctor's office, <Logo color="#287fdd" /> focuses on all aspects of your health. Here you’ll find the resources available in your community to help you live a healthier lifestyle.</p>
                            <h2>Hollistic approach <span>to improving Wellness</span></h2>
                            <p><Logo color="#287fdd" /> seeks to close the health equity gap in Jefferson County. Health equity is achieved when every person has the opportunity to attain their full health potential, and no one is left behind.</p>
                        </div>
                    </div>
                    <div className="four columns offset-by-one">
                        <img src="/images/theme/resourceintro.png" alt="" />
                    </div>
                </div>
            </section>

            {/* RESOURCE TERMINAL */}
            <HealthTerminal />
        </>
    );
}

export default Health;