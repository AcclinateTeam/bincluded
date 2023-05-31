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

            {/* POPUP COMPONENT */}
            <PopupComponent />

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
                        <h2>Stand Up For Your Health</h2>
                        <p>In the <Logo color="#ffffff" /> community, you and fellow Jefferson County residents come together to share your health stories, connect to local resources, and inspire each other to maximize health and wellbeing.</p>
                    </div>
                    <div className="callbutton">
                        <a className="button signup joinCommunity" href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual" target="_blank" rel="noopener noreferrer" aria-label="Join the NOWINCLUDED Community - Opens in a new tab">Join The Community</a>
                        <Link className="button learnmore" to="/whynow">Learn More</Link>
                    </div>
                </div>
                <div className="scrollDown">
                    <FontAwesomeIcon icon="arrow-down" onClick={scrollToRef} />
                    <h3>Scroll Down</h3>
                </div>
            </section>

            {/* HOME - Who We Are Section */}
            {/* <section className="whoWeAre">
                <div className="image">
                    <img src="/images/theme/homewhoweare.png" alt="Who_We_Are" />
                </div>
                <div className="text">
                    <h2>We <span className="blue">Listen.</span><br /> We <span className="blue">Represent.</span><br /> We <span className="blue">Share.</span></h2>
                    <p>For too long, the Black community has navigated barriers to physical, mental, and financial wellbeing. There must be a space where the community can come together, access helpful resources, and validate lived experiences. <Logo color="#287FDD" /> is a platform to help navigate and remove barriers. A place designed for us, by us.</p>
                </div>
            </section> */}

            {/* HOME - What We Do Section */}
            {/* <section className="HomeWhatWeDo">
                <div className="content">
                    <h3>Your Story <span>Matters</span></h3>
                    <p>Hear from the community and share your story.</p>
                    <Link to="/blog">See Featured Stories <FontAwesomeIcon className="readmo" icon="arrow-right" /></Link>
                    <hr />
                    <h3>Bettering <span>Birmingham</span></h3>
                    <p>Learn why now is the time to take control of your health and future. </p>
                    <Link to="/whynow">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></Link>
                    <hr />
                    <h3>Join Our <span>Community</span></h3>
                    <p>Click here to learn, share and grow with others in the <Logo color="#287fdd" /> community. </p>
                    <a href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual" target="_blank" rel="noopener noreferrer">Join Now <FontAwesomeIcon className="readmo" icon="arrow-right" /></a>
                </div>
                <div className="image">
                    <img src="/images/theme/homewhatwedo.png" alt="Who_We_Are" />
                </div>
            </section> */}

            {/* HOME - Resource Portal Section */}
            <HomePortal />

            {/* HOME - Stories Section */}
            <section className="homestories">
                <div className="container">
                    <div className="ten columns header">
                        <h2>Featured <span className="blue">Stories</span></h2>
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
            <section className="covid">
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
            </section>

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


