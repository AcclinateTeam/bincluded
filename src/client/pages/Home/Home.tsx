import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import Logo from '../../theme/Logo';
import SiteSearch360 from 'site-search-360-react';
import HomePortal from './components/HomePortal';
import ShareYourStory from '../blog/components/ShareYourStory';
import HomeCommunity from './components/HomeCommunity';
import Popup from '../../components/Popup';
import PopupComponent from '../../components/Popup';
import PopSide from '../../components/PopSide';

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
        const hero = document.getElementById('hero');
        const heroHeight = hero!.offsetHeight;

        window.scrollTo({
            top: heroHeight,
            left: 0,
            behavior: 'smooth'
        });
    }
    
    // Hero Background-Image Slide + Hero Text Fade-In
    useEffect(() => {
        const hero = document.getElementById('heroSlide');
        const heroHead = document.getElementById('headText');
        const heroPar = document.getElementById('headPar');
        const heroButt = document.getElementById('headButt');
        const heroLink = document.getElementById('headLink');
        const header = document.getElementById('header');

        hero!.style.height = '100%';
        heroHead!.style.cssText = 'margin-top: 0px; opacity: 1;';
        heroPar!.style.cssText = 'margin-top: 0px; opacity: 1;';
        heroButt!.style.cssText = 'margin-top: 0px; opacity: 1;';
        heroLink!.style.cssText = 'margin-top: 0px; opacity: 1;';
        header!.style.cssText = 'opacity: 1;';
    }, []);   

    return (
        <>
            {/* HEADER COMPONENT IMPORT */}
            <Header /> 

            {/* POPUP COMPONENT */}
            {/* <PopupComponent /> */}

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="home">
                <div id="heroSlide" className="callbg">
                    <video playsInline autoPlay muted loop id="myVideo">
                        <source src='images/theme/hero.mp4' type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
                {/* <div className="scrollDown">
                    <FontAwesomeIcon icon="arrow-down" onClick={scrollToRef} />
                    <h3>Scroll Down</h3>
                </div> */}
            </section>

            <section className="homeintro">
                <div className="header">
                    <h2 id="headText">Stand Up For Your Health</h2>
                </div>
                <div className="text">
                    <p id="headPar">For too long, the Black community has navigated barriers to physical, mental, and financial wellbeing. There must be a space where the community can come together, access helpful resources, and validate lived experiences. <Logo color="#050236" /> is a platform to help navigate and remove barriers. A place designed for us, by us.</p>
                    <a id="headButt" className="button signup joinCommunity" href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual" target="_blank" rel="noopener noreferrer" aria-label="Join the NOWINCLUDED Community - Opens in a new tab">Join The Community</a>
                    <Link id="headLink" className="button learnmore" to="/whynow">Learn More</Link>
                </div>
            </section>            

            {/* HOME - Resource Portal Section */}
            <HomePortal />

            {/* HOME - Upcoming Events Section */}            
            <section className="upcoming" style={{}}>
                <div className="header" style={{ textAlign: 'center' }}>
                    <h2>Upcoming <span>Events</span></h2>
                </div>
                <div className="slider">
                    <div className="slides">
                        <div className="date">
                            <h2>2</h2>
                            <h3>Sept</h3>
                            <span><FontAwesomeIcon icon="clock" /> 7:00pm</span>
                        </div>
                        <div className="details">
                            <h3>District 6 - Movies at the Park</h3>
                            <p>Birmingham City Council Pro Tem Crystal Smitherman, Senator Rodger Smitherman, Commissioner Sheila Tyson and the Titusville community present Movies at the Park.</p>
                            <ul>
                                <li><FontAwesomeIcon icon="map-marker-alt" /> Memorial Park - 524 6th Avenue S. Birmingham, Alabama 35205</li>
                            </ul>
                        </div>
                    </div>

                    <div className="slides">
                        <div className="date">
                            <h2>3</h2>
                            <h3>Sept</h3>
                            <span><FontAwesomeIcon icon="clock" /> 4pm</span>
                        </div>
                        <div className="details">
                            <h3>Summer Music Vibes</h3>
                            <p>FREE entry! Voter Registraion, Music, Food Trucks and more!</p>
                            <ul>
                                <li><FontAwesomeIcon icon="map-marker-alt" /> 633 Cotton Avenue SW, Birmingham, Alabama 35211</li>
                            </ul>
                        </div>
                    </div>

                    <div className="slides">
                        <div className="date">
                            <h2>5</h2>
                            <h3>Sept</h3>
                            <span><FontAwesomeIcon icon="clock" /> 6 - 7:30pm</span>
                        </div>
                        <div className="details">
                            <h3>Birmingham CERT</h3>
                            <p>CERT is a FEMA-sponsored, State supported and locally run training program that prepares you to help yourself, your family, and your neighbors in the event of a disaster.</p>
                            <ul>
                                <li><FontAwesomeIcon icon="map-marker-alt" /> Birmingham Fire Station 2 - 600 11th Street South Birmingham, Alabama 35233</li>
                            </ul>
                        </div>
                    </div>

                    <div className="slides">
                        <div className="date">
                            <h2>7</h2>
                            <h3>Sept</h3>
                            <span><FontAwesomeIcon icon="clock" /> 6pm</span>
                        </div>
                        <div className="details">
                            <h3>BCS Game of The Week</h3>
                            <p>Parker vs Jackson Olin. Click <a href="https://www.bhamcityschools.org/cms/lib/AL01001646/Centricity/Domain/4/300957569_3312159375681238_1050852427943883188_n.jpg">here</a> to view entire schedule.</p>
                            <ul>
                                <li><FontAwesomeIcon icon="map-marker-alt" /> Jackson Olin High School - 1300 Avenue F, Birmingham, AL 35218</li>
                            </ul>
                        </div>
                    </div>

                    <div className="slides">
                        <div className="date">
                            <h2>13</h2>
                            <h3>Sept</h3>
                            <span><FontAwesomeIcon icon="clock" /> 11am</span>
                        </div>
                        <div className="details">
                            <h3>Birmingham Public Library T-Shirt Day</h3>
                            <p>Design your own t-shirts! Adult book club will make their own t-shirts!</p>
                            <ul>
                                <li><FontAwesomeIcon icon="map-marker-alt" /> Birimingham Public Library - 2100 Park Place, Birmingham, AL 35222</li>
                            </ul>
                        </div>
                    </div>

                    <div className="slides">
                        <div className="date">
                            <h2>17</h2>
                            <h3>Sept</h3>
                            <span><FontAwesomeIcon icon="clock" /> 3 - 8pm</span>
                        </div>
                        <div className="details">
                            <h3>The Getdown at Avondale Park</h3>
                            <p>We’re excited to announce THE GET DOWN at Avondale Park: a FREE concert series presented by Seasick & Yellowhammer Creative!</p>
                            <ul>
                                <li><FontAwesomeIcon icon="map-marker-alt" /> Avondale Park - 4101 5th Ave S, Birmingham, AL 35222</li>
                            </ul>
                        </div>
                    </div>                    
                    
                </div>
                <div className="slideImage">
                    <img src="images/events/" alt="" />
                </div>
            </section>

            {/* HOME - Stories Section */}
            <section id="stories" className="homestories">
                <div className="container">
                    <div className="ten columns header">
                        <h2 id="#stories">Featured <span className="blue">Stories</span></h2>
                        <p>Click below to hear from the community</p>
                    </div>

                    <div className="ten columns">
                        <div className="container case">
                            {stories.map((post: any, index) => {
                                if (post.id < 5) {
                                    return (
                                        <div className="fourth columns rack" key={index}>
                                            <Link to={`/stories/${post.slug}`}>
                                                <div className="frames">
                                                    <div className="frame">
                                                        <div className="image">
                                                            <img src={`/images/${post.imagelink}`} alt="" />
                                                        </div>
                                                        <div className="text">
                                                            <h2>{post.title}</h2>
                                                            <p>{post.subTitle}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className="ten columns">
                        <div className="buttonwrap center">
                            <Link className="content button solid" to="/stories">See More Stories</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOME - Share Your Story Section */}
            <ShareYourStory />

            {/* HOME - Why Now? Section */}
            <section className="whyNow">
                <div className="container">
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
            </section>

            {/* HOME - Clinical Research Section */}
            <section className="research">
                <div className="container">
                    <div className="four columns">
                        <div className="panes">
                            <div className="image">
                                <img src="/images/theme/clinres.png" alt="" />
                            </div>
                            <div className="heading">
                                <h1>Have you<br /> participated <br />in clinical research?</h1>
                            </div>
                        </div>
                    </div>
                    <div className="five columns">
                        <div className="content">
                            <div className="text">
                                <h1>Why you should <span>get involved</span></h1>
                                <p>There are many reasons why people choose to join a clinical trial. Some join a trial because the treatments they have tried for their health problem did not work. Others participate because there is no treatment for their health problem.</p>
                                <div className="button">
                                    <Link className="button solid" to="/trials">More Info</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOME - COVID Statistics Section */}
            {/* <section className="covid">
                <div className="container">
                    <div className="row">
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
            </section> */}

            {/* HOME - Partners Section */}
            <section className="homepartners">
                <div className="container">
                    <div className="ten columns">
                        <h2>Featured <span>Partners</span></h2>
                    </div>
                </div>
                <div className="container partner">
                    <div className="two columns">
                        <Link to="/partners/coopergreen">
                            <div className="image">
                                <img src="/images/partners/uablive.png" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="two columns">
                        <Link to="/partners/lhsa">
                            <div className="image">
                                <img src="/images/partners/viva.png" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="two columns">
                        <Link to="/partners/vivahealth">
                            <div className="image">
                                <img src="/images/partners/uway.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="two columns">
                        <Link to="/partners/coopergreen">
                            <div className="image">
                                <img src="/images/partners/cooper.png" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="two columns">
                        <Link to="/partners/connecthealth">
                            <div className="image">
                                <img src="/images/partners/connecthealth.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="ten columns">
                    <div className="buttonwrap center">
                        <Link className="button solid" to="/partners">View Partners</Link>
                    </div>
                </div>
            </section>

            {/* HOME - Join The Community Section */}
            <HomeCommunity />
        </>
    );
}

export default Home;


