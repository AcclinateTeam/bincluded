import moment from 'moment';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../components/Header';
import HealthTerminal from '../components/HealthTerminal';
import Logo from '../components/subComponents/Logo';
import BlogPosts from './BlogPosts';
import Prosper from '../components/Prosper';
import Loading from '../components/Loading';

const Health = () => {
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

    // Automatic Scroll To Top on Refresh
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const [blogPosts, setBlogPosts] = useState([]);

    // Blog Posts Component Fetch
    useEffect(() => {
        fetch('api/blogPosts/blog')
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    return (
        <>
            {/* HEADER COMPONENT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero health" style={{ height: `100vh` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/yoga.jpg)` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>Health Resources</h1>
                        <p><Logo color="#ffffff" /> provides easy access to resources that are beneficial in reaching one’s goals in maintaining a healthy lifestyle.</p>

                    </div>
                    <div className="callbutton">
                        <a className="button signup" style={{ margin: `0` }} href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual">Join The Community</a>
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
                        <a href="/">Home</a> {'>'} Health Resources
                    </div>
                </div>
            </section>

            {/* SECTORS OF INCLUSIVITY */}
            <section className="incHealth">
                <div className="container">
                    <div className="four columns">
                        <div className="heading">
                            <h2>Your health is <span className="blue">your wealth</span></h2>
                        </div>
                    </div>
                    <div className="six columns text">
                        <p>Health doesn’t end at the doctor's office, <Logo color="#050236" /> focuses on all aspects of your health. Here you’ll find the resources available in your community to help you live a healthier lifestyle.</p>
                    </div>
                </div>
            </section>

            {/* IMAGE DIVIDER SECTION */}
            <section className="divider health">
                <img src="/images/healthmid.png" alt="birmingham" />
            </section>

            {/* WHY IT MATTERS SECTION */}
            <section className="resHealth">
                <div className="container reHealth">
                    <div className="five columns text">
                        <p><Logo color="#050236" /> seeks to close the health equity gap in Jefferson County. Health equity is achieved when every person has the opportunity to attain their full health potential, and no one is left behind.</p>
                    </div>
                    <div className="five columns head">
                        <div className="heading">
                            <h2>Holistic approach to <span className="blue">improving wellness</span> </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="healthRes">
                <div className="container">
                    <div className="ten columns">
                        <div className="container box">
                            <div className="third columns deck">
                                <div className="cards">
                                    <div className="card">
                                        <img src="/images/mentalHealth.jpg" alt="Who_We_Are" />
                                        <div className="text">
                                            <h3>Mental Health Resources</h3>
                                            <p>Access local services to support your emotional and behavioral health.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="third columns deck">
                                <div className="cards">
                                    <div className="card">
                                        <img src="/images/physicalHealth.jpg" alt="Who_We_Are" />
                                        <div className="text">
                                            <h3>Physical Health Resources</h3>
                                            <p>Access local community resources to support your overall health and wellness.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="third columns deck">
                                <div className="cards">
                                    <div className="card">
                                        <img src="/images/spiritHealth.jpg" alt="Who_We_Are" />
                                        <div className="text">
                                            <h3>Spiritual Health Resources</h3>
                                            <p>Access faith-based resources to support your spiritual health and wellness.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <HealthTerminal />
        </>
    );
}

export default Health;