import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import Logo from '../../theme/Logo';
import Loading from '../../components/Loading';
import SiteSearch360 from 'site-search-360-react';
import HomeWhoWeAre from './components/WhoWeAre';
import WhoWeAre from './components/WhoWeAre';
import HomeWhatWeDo from './components/WhatWeDo';
import HomePortal from './components/HomePortal';
import HomeStories from './components/HomeStories';
import ShareYourStory from '../blog/components/ShareYourStory';
import HomeWhyNow from './components/HomeWhyNow';
import HomeResearch from './components/HomeClinicalResearch';
import HomeCovid from './components/HomeCovid';
import HomePartners from './components/HomePartners';
import HomeCommunity from './components/HomeCommunity';

const Home = () => {
    // Window scroll-to-top function
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('api/stories/storyPosts')
            .then(res => res.json())
            .then(stories => setStories(stories))
    }, []);

    // Metro Track State & Effect
    const [tracker, setTracker] = useState<any>([]);
    const [actuals, setActuals] = useState<any>([]);
    const [beds, setBeds] = useState<any>([]);
    const [metrics, setMetrics] = useState<any>([]);

    // // Hook for covid stats tracker
    // useEffect(() => {
    //     getMetroTracker();
    //     async function getMetroTracker() {
    //         const response = await fetch('https://api.covidactnow.org/v2/cbsa/13820.json?apiKey=3221244a929540bdb7c557ce3d60b092');
    //         const metro = await response.json();
    //         setTracker(metro);
    //         setActuals(metro.actuals);
    //         setBeds(metro.actuals.hospitalBeds);
    //         setMetrics(metro.metrics);
    //     }

    // }, []);

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
            {/* HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="home">
                <div className="callbg">
                    <video playsInline autoPlay muted loop id="myVideo">
                        <source src='images/theme/hero.mp4' type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
                <div className="callout">
                    <div className="calltext">
                        <h1>Stand Up For Your Health</h1>
                        <p>
                            <Logo color="#ffffff" /> is a movement with a mission to build a community of individuals ready to take control of their health and future

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

            {/* HOME - Who We Are Section */}
            <WhoWeAre />

            {/* HOME - What We Do Section */}
            <HomeWhatWeDo />

            {/* HOME - Resource Portal Section */}
            <HomePortal />

            {/* HOME - Stories Section */}
            <HomeStories />

            {/* HOME - Share Your Story Section */}
            <ShareYourStory />

            {/* HOME - Why Now? Section */}
            <HomeWhyNow />

            {/* HOME - Clinical Research Section */}
            <HomeResearch />

            {/* HOME - COVID Statistics Section */}
            <HomeCovid />

            {/* HOME - Partners Section */}
            <HomePartners />

            {/* HOME - Join The Community Section */}
            <HomeCommunity />
        </>
    );
}

export default Home;


