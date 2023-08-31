import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SiteSearch360 from 'site-search-360-react';
import VisibilitySensor from 'react-visibility-sensor';


const HomePortal = () => {

    const [healthVisible, setHealthVisible] = useState(false);
    const [familyVisible, setFamilyVisible] = useState(false);
    const [careerVisible, setCareerVisible] = useState(false);
    const [commVisible, setCommVisible] = useState(false);
    const [storyVisible, setStoryVisible] = useState(false);
    const [covidVisible, setCovidVisible] = useState(false);

    return (
        <>
            <section className="portal">
                <div className="container">

                    <div className="ten columns">
                        <div className="text">
                            <h2>Resources At Your <span className="blue">Fingertips</span></h2>
                            <p>Learn more about each of the resources available to you in the Birmingham area.</p>
                        </div>
                    </div>

                    <div className="ten columns">
                        <div className="deck">
                            <div className="container">
                                {/* <div className="ten columns featured">
                                    <div className="six columns text">
                                        <h4>Featured Resource</h4>
                                        <p>B-INCLUDED members can get their health questions and concerns answered by a licensed doctor 24/7, through Ask Me Your MD.</p>
                                        <Link to="/resources/amymd"><p className="link">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></p></Link>
                                    </div>
                                    <div className="four columns image">
                                        <img src="/images/partners/amymd.png" alt="" />
                                    </div>
                                </div> */}


                                {/* HEALTH CARD */}
                                <VisibilitySensor partialVisibility onChange={(isVisible) => { if (isVisible) { setHealthVisible(true); }}}>
                                    <div className="third columns split" style={{ opacity: healthVisible ? 1 : 0 }}>
                                        <div id="fadeCard" className="cards1">
                                            <Link to="/resources/health">
                                                <div className="bgImage" style={{ backgroundImage: `url(/images/theme/1I2A0938.jpg)` }}></div>
                                                <div className="content">
                                                    <h4>Health</h4>
                                                    <p>Find reliable, fact-based health information you can trust.</p>
                                                    <p className="link">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </VisibilitySensor>

                                {/* FAMILY CARD */}
                                <VisibilitySensor partialVisibility onChange={(isVisible) => { if (isVisible) { setFamilyVisible(true); }}}>
                                    <div className="third columns split" style={{ opacity: familyVisible ? 1 : 0 }}>
                                        <div id="fadeCard" className="cards1">
                                            <Link to="/resources/family">
                                                <div className="bgImage" style={{ backgroundImage: `url(/images/theme/1I2A0943.jpg)` }}></div>
                                                <div className="content">
                                                    <h4>Family</h4>
                                                    <p>Find information on how  to make your family's health a priority.</p>
                                                    <p className="link">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </VisibilitySensor>

                                {/* CAREERS CARD */}
                                <VisibilitySensor partialVisibility onChange={(isVisible) => { if (isVisible) { setCareerVisible(true); }}}>
                                    <div className="third columns split" style={{ opacity: careerVisible ? 1 : 0 }}>
                                        <div id="fadeCard" className="cards1">
                                            <Link to="/resources/careers">
                                                <div className="bgImage" style={{ backgroundImage: `url(/images/theme/1I2A0949.jpg)` }}></div>
                                                <div className="content">
                                                    <h4>Careers</h4>
                                                    <p>Connect with resources to elevate your careers and increase your wealth.</p>
                                                    <p className="link">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </VisibilitySensor>

                                {/* COMMUNITY CARD */}
                                <VisibilitySensor partialVisibility onChange={(isVisible) => { if (isVisible) { setCommVisible(true); }}}>
                                    <div className="third columns split" style={{ opacity: commVisible ? 1 : 0 }}>
                                        <div id="fadeCard" className="cards1">
                                            <a href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual" target="_blank" rel="noopener noreferrer">
                                                <div className="bgImage" style={{ backgroundImage: `url(/images/theme/1I2A0932.jpg)` }}></div>
                                                <div className="content">
                                                    <h4>Community</h4>
                                                    <p>Join to the community to like, share, comment, and connect with people like you.</p>
                                                    <p className="link">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </VisibilitySensor>

                                {/* STORIES CARD */}
                                <VisibilitySensor partialVisibility onChange={(isVisible) => { if (isVisible) { setStoryVisible(true); }}}>
                                    <div className="third columns split" style={{ opacity: storyVisible ? 1 : 0 }}>
                                        <div id="fadeCard" className="cards1">
                                            <Link to="/stories">
                                                <div className="bgImage" style={{ backgroundImage: `url(/images/theme/1I2A0951.jpg)` }}></div>
                                                <div className="content">
                                                    <h4>Stories</h4>
                                                    <p>Share your story! We’d love to feature you.</p>
                                                    <p className="link">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </VisibilitySensor>

                                {/* COVID CARD */}
                                <VisibilitySensor partialVisibility onChange={(isVisible) => { if (isVisible) { setCovidVisible(true); }}}>
                                    <div className="third columns split" style={{ opacity: covidVisible ? 1 : 0 }}>
                                        <div id="fadeCard" className="cards1">
                                            <Link to="/covid">
                                                <div className="bgImage" style={{ backgroundImage: `url(/images/theme/1I2A0959.jpg)` }}></div>
                                                <div className="content">
                                                    <h4>COVID-19</h4>
                                                    <p>Stay up-to-date on the latest COVID-19 news, stats, and resources.</p>
                                                    <p className="link">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </VisibilitySensor>                                
                            </div>
                        </div>
                    </div>
                    <div className="ten columns">
                        <div className="search">
                            <h2>Looking for something <span className="blue">specific?</span></h2>
                            <p>Use the search feature below to search our resources.</p>
                            <div className="searchbox">
                                <SiteSearch360 siteId="b-included.com_1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePortal;