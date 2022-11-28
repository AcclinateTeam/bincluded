import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

/* COMPONENT IMPORTS */
import Header from '../../components/layout/Header';
import Logo from '../../../components/subComponents/Logo';
import ShareYourStory from '../blog/ShareYourStory';
import Loading from '../../../components/Loading';
import WhoWeAre from './home.whoWeAre';
import WhatWeDo from './home.whatwedo';
import HomeResPortal from './home.resportal';
import HomeStories from './home.stories';

const Home = () => {
    // Window scroll-to-top function
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Metro Track State & Effect
    const [tracker, setTracker] = useState<any>([]);
    const [actuals, setActuals] = useState<any>([]);
    const [beds, setBeds] = useState<any>([]);
    const [metrics, setMetrics] = useState<any>([]);

    // Hook for covid stats tracker
    useEffect(() => {
        getMetroTracker();
        async function getMetroTracker() {
            const response = await fetch('https://api.covidactnow.org/v2/cbsa/13820.json?apiKey=3221244a929540bdb7c557ce3d60b092');
            const metro = await response.json();
            setTracker(metro);
            setActuals(metro.actuals);
            setBeds(metro.actuals.hospitalBeds);
            setMetrics(metro.metrics);
        }

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

    // LOADING ANIMATION STATE CONTROLLER
    const [loading, setLoading] = useState(true);
    // LOADING ANIMATION 
    useEffect(() => {
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
                    <section>
                        <div className="container">
                            <div className="row whyNow">
                                <div className="eight columns offset-by-one whyNum">
                                    <div className="container statis">
                                        <div className="third columns stats">
                                            <div className="ten columns stat">
                                                <div className="point">
                                                    <CountUp start={0} end={51} duration={3} suffix="%" redraw={true}>
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <h3>
                                                                    <span ref={countUpRef} />
                                                                </h3>
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                    <p>of Jefferson County residents are minorities.</p>
                                                </div>
                                            </div>
                                            <div className="ten columns stat">
                                                <div className="point">
                                                    <CountUp start={0} end={54} duration={3} suffix="%" redraw={true}>
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <h3>
                                                                    <span ref={countUpRef} />
                                                                </h3>
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                    <p>of disabled Jefferson County residents are minorities.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="third columns text">
                                            <div className="whyText" style={{ textAlign: 'center' }}>
                                                <h2>Why Now?</h2>
                                                <p>There’s no better time for Black communities to have and claim a space of their own. The longevity of Black communities depends on a collective of people who are focused on improved health, overall wellness, and elevated financial practices.   B-INCLUDED is that space and you can become part of that collective.</p>
                                                <Link className="button signup" to="/WhyNow">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="third columns stats">
                                            <div className="ten columns stat">
                                                <div className="point">
                                                    <CountUp start={0} end={77} duration={3} prefix="" suffix="%" >
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <h3>
                                                                    <span ref={countUpRef} />
                                                                </h3>
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                    <p>of low-income and impoverished Jefferson County residents are minorities.</p>
                                                </div>
                                            </div>
                                            <div className="ten columns stat">
                                                <div className="point">
                                                    <CountUp start={0} end={59} duration={3} prefix="" suffix="%" >
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <h3>
                                                                    <span ref={countUpRef} />
                                                                </h3>
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                    <p>of Jefferson County's years of life lost prematurely came from minority residents.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CLINICAL TRAILS */}
                    <section className="research">
                        <div className="container">
                            <div className="four columns">
                                <div className="panes">
                                    <div className="image">
                                        <img src="/images/clintrials.png" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h1>Have you<br /> participated in<br /> clinical research?</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="five columns">
                                <div className="content">
                                    <div className="text">
                                        <h1>Why you should get involved</h1>
                                        <p>There are many reasons why people choose to join a clinical trial. Some join a trial because the treatments they have tried for their health problem did not work. Others participate because there is no treatment for their health problem.</p>
                                        <div className="button">
                                            <Link className="button solid" to="/trials">More Info</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* COVID-19 COMPONENT */}
                    <section>
                        <div className="container">
                            <div className="row covid">
                                <div className="ten columns">
                                    <div className="eight columns offset-by-one">
                                        <h2>The latest data related to <span className="blue">COVID-19</span></h2>
                                        <h3>for the Metro-Birmingham Area</h3>
                                        <div className="third columns">
                                            <div className="data border">
                                                <CountUp start={0} end={actuals.cases} separator="," duration={3} redraw={true} >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <h4>
                                                                <span ref={countUpRef} />
                                                            </h4>
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                <p>Active Cases</p>
                                            </div>
                                        </div>
                                        <div className="third columns">
                                            <div className="data border">
                                                <CountUp start={0} end={beds.capacity} separator="," duration={3} redraw={true} >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <h4>
                                                                <span ref={countUpRef} />
                                                            </h4>
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                <p>Beds Available</p>
                                            </div>
                                        </div>
                                        <div className="third columns">
                                            <div className="data">
                                                <CountUp start={-0.9999} end={metrics.infectionRate} separator="," decimals={3} decimal="." duration={3} redraw={true} >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <h4>
                                                                <span ref={countUpRef} />
                                                            </h4>
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                <p>Infection Rate</p>
                                            </div>
                                        </div>
                                        <div className="buttonwrap">
                                            <Link className="content button solid" to="/covid">More on Covid-19</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PRE-FOOTER (PARTNERS) COMPONENT */}
                    <section className="partners">
                        <div className="container">
                            <div className="ten columns">
                                <h2>Featured <span className="blue">Partners</span></h2>
                            </div>
                            <div className="fourth columns">
                                <Link to="/partners/coopergreen">
                                    <div className="image" style={{ backgroundImage: `url(/images/partners/cooper.png)` }}>
                                        {/* <img src="/images/partners/uablive.png" alt="" /> */}
                                    </div>
                                </Link>
                            </div>
                            <div className="fourth columns">
                                <Link to="/partners/lhsa">
                                    <div className="image" style={{ backgroundImage: `url(/images/partners/uablive.png)` }}>
                                        {/* <img src="/images/partners/viva.png" alt="" /> */}
                                    </div>
                                </Link>
                            </div>
                            <div className="fourth columns">
                                <Link to="/partners/vivahealth">
                                    <div className="image" style={{ backgroundImage: `url(/images/partners/viva.png)` }}>
                                        {/* <img src="/images/partners/uway.jpg" alt="" /> */}
                                    </div>
                                </Link>
                            </div>
                            <div className="fourth columns">
                                <Link to="/partners/unitedway">
                                    <div className="image" style={{ backgroundImage: `url(/images/partners/uway.jpg)` }}>
                                        {/* <img src="/images/partners/cooper.png" alt="" /> */}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

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
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Home;


