import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

/* COMPONENT IMPORTS */
import Header from '../components/Header';
import Logo from '../components/subComponents/Logo';
import ShareYourStory from '../components/ShareYourStory';
import Loading from '../components/Loading';
import SiteSearch360 from 'site-search-360-react';
import HomeWhoWeAre from '../components/subComponents/HomePage/HomeWhoWeAre';

const Home = () =>
{
    // Window scroll-to-top function
    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, [])

    const [stories, setStories] = useState([]);

    useEffect(() =>
    {
        fetch('api/stories/storyPosts')
            .then(res => res.json())
            .then(stories => setStories(stories))
    }, []);

    console.log(stories);

    // Metro Track State & Effect
    const [tracker, setTracker] = useState<any>([]);
    const [actuals, setActuals] = useState<any>([]);
    const [beds, setBeds] = useState<any>([]);
    const [metrics, setMetrics] = useState<any>([]);

    // Hook for covid stats tracker
    useEffect(() =>
    {
        getMetroTracker();
        async function getMetroTracker ()
        {
            const response = await fetch('https://api.covidactnow.org/v2/cbsa/13820.json?apiKey=3221244a929540bdb7c557ce3d60b092');
            const metro = await response.json();
            setTracker(metro);
            setActuals(metro.actuals);
            setBeds(metro.actuals.hospitalBeds);
            setMetrics(metro.metrics);
        }

    }, []);

    // Scrolls to bottom of Hero Section OnClick
    const scrollToRef = () =>
    {
        let hero = document.getElementById('hero');
        let heroHeight = hero!.offsetHeight;

        window.scrollTo({
            top: heroHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    // LOADING ANIMATION STATE CONTROLLER
    const [loading, setLoading] = useState(true);
    // LOADING ANIMATION 
    useEffect(() =>
    {
        setTimeout(() => setLoading(false), 0)
    }, []);


    return (
        <>
            {loading === false ? (
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

                    HELLO WORLD!
                </>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Home;


