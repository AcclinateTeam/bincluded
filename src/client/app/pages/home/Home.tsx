import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

/* COMPONENT IMPORTS */
import Header from '../../components/layout/Header';
import ShareYourStory from '../blog/ShareYourStory';
import WhoWeAre from './home.whoWeAre';
import WhatWeDo from './home.whatwedo';
import HomeResPortal from './home.resportal';
import HomeStories from './home.stories';
import HomeWhyNow from './home.whynow';
import HomeCovid from './home.covid';
import HomeResearch from './home.research';
import HomePartners from './home.partners';

const Home = () => {
    // Window scroll-to-top function
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])    

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

    return (
        <>
            <>
                {/* HEADER COMPONENT IMPORT */}
                <Header />

                {/* JUMBOTRON COMPONENT */}
                <section id="hero" className="home">
                    <div className="callbg">
                        <video playsInline autoPlay muted loop id="myVideo">
                            <source src='images/header.mp4' type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                    <div className="callout">
                        <div className="calltext">
                            <h1>Stand Up For Your Health</h1>
                            <p>
                                <span>B-INCLUDED</span> is a movement with a mission to build a community of individuals ready to take control of their health and future.
                            </p>
                        </div>
                        <div className="callbutton">
                            <a className="button signup joinCommunity" href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual" target="_blank" rel="noopener noreferrer">Join The Community</a>
                            <Link className="button learnmore" to="/whynow">Learn More</Link>
                        </div>
                    </div>
                    <div className="scrollDown">
                        <FontAwesomeIcon icon="arrow-down" onClick={scrollToRef} />
                        <h3>Scroll Down</h3>
                    </div>
                </section>

                {/* WHO WE ARE */}
                <WhoWeAre />

                {/* WHAT WE DO */}
                <WhatWeDo />

                {/* WHAT WE DO SECTION */}
                <HomeResPortal />

                {/* FEATURED STORIES SECTION */}
                <HomeStories />

                {/* SHAR YOUR STORY SECTION */}
                <ShareYourStory />

                {/* WHY_NOW? COMPONENT */}
                <HomeWhyNow />

                {/* CLINICAL TRAILS */}
                <HomeResearch />

                {/* COVID-19 COMPONENT */}
                <HomeCovid />

                {/* PRE-FOOTER (PARTNERS) COMPONENT */}
                <HomePartners />

                {/* PRE-FOOTER JOIN THE COMMUNITY */}
                <section>
                    <div className="community">
                        <div className="bg" style={{ backgroundImage: "url(/images/laptop.png)" }}></div>
                        <div className="container">
                            <div className="three columns">
                                <div className="content">
                                    <h2>Join our <span className="blue">Community</span></h2>
                                    <p>We are a community that shares stories and supports minority communities. We are here to be informative, relational, helpful, and supportive. By joining this community, you will find engaging content about preventative care, clinical research, and funding options from experts and people just like you.</p>
                                </div>
                            </div>
                            <div className="three columns">
                                <div className="con">
                                    <div className="container">
                                        <div className="ten columns right">
                                            <h3>What We Offer</h3>
                                            <ul>
                                                <li><FontAwesomeIcon icon="star" />
                                                    <p>Community Engagement</p>
                                                </li>
                                                <li><FontAwesomeIcon icon="star" />
                                                    <p>Clinical Research Opportunities</p>
                                                </li>
                                                <li><FontAwesomeIcon icon="star" />
                                                    <p>Educational Forums</p>
                                                </li>
                                                <li><FontAwesomeIcon icon="star" />
                                                    <p>Shared Perspectives</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="ten columns left">
                                            <h3>Get Started</h3>
                                            <ul>
                                                <li>
                                                    <a href="https://play.google.com/store/apps/details?id=com.mightybell.nowincluded">
                                                        <FontAwesomeIcon icon={['fab', 'google-play']} />
                                                        <h6>Google Play Store</h6>
                                                        <p>Click <span>here</span> to download and install our app from Google Play App Store.</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://apps.apple.com/ng/app/nowincluded/id1597990720">
                                                        <FontAwesomeIcon icon={['fab', 'itunes']} />
                                                        <h6>Apple Itunes Store</h6>
                                                        <p>Click <span>here</span> to download and install our app from Apple Itunes Store.</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="four columns">
                                <div className="image1">
                                    <img src="images/screens.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </>
    );
}

export default Home;


