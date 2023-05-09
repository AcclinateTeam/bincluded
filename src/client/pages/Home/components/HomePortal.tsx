import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SiteSearch360 from 'site-search-360-react';

const HomePortal = () => {

    return (
        <>
            <section className="portal">
                <div className="container">
                    <div className="third columns">
                        <div className="text">
                            <h2>Resources<br /> At Your <span className="blue">Fingertips</span></h2>
                            <p>Learn more about each of the resources available to you in the Birmingham area.</p>
                            <h4>Looking for something <span className="blue">specific?</span></h4>
                            <p>Use the search feature below to search our resources.</p>
                            <SiteSearch360 siteId="b-included.com_1" />
                        </div>
                    </div>
                    <div className="twothird columns">
                        <div className="deck">
                            <div className="container">
                                <div className="ten columns featured">
                                    <div className="six columns text">
                                        <h4>Featured Resource</h4>
                                        <p>B-INCLUDED members can get their health questions and concerns answered by a licensed doctor 24/7, for free, through Ask Me Your MD.</p>
                                        <Link to="/resources/amymd"><p className="link">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></p></Link>
                                    </div>
                                    <div className="four columns image">
                                        <img src="/images/partners/amymd.png" alt="" />
                                    </div>
                                </div>
                                <div className="third columns split">
                                    <Link to="/resources/health">
                                        <div className="cards shadow hover">
                                            <FontAwesomeIcon className="icon" icon="user-md" />
                                            <h4>Health</h4>
                                            <p>Find reliable, fact-based health information you can trust.</p>
                                            <p className="link">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="third columns split">
                                    <Link to="/resources/family">
                                        <div className="cards shadow hover">
                                            <FontAwesomeIcon className="icon" icon="users" />
                                            <h4>Family</h4>
                                            <p>Find information on how  to make your family's health a priority.</p>
                                            <p className="link">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="third columns split">
                                    <Link to="/resources/careers">
                                        <div className="cards shadow hover">
                                            <FontAwesomeIcon className="icon" icon="hard-hat" />
                                            <h4>Careers</h4>
                                            <p>Connect with resources to elevate your careers and increase your wealth.</p>
                                            <p className="link">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="third columns split">
                                    <a href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual" target="_blank" rel="noopener noreferrer">
                                        <div className="cards shadow hover">
                                            <FontAwesomeIcon className="icon" icon="comments" />
                                            <h4>Community</h4>
                                            <p>Join to the community to like, share, comment, and connect with people like you.</p>
                                            <p className="link">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></p>
                                        </div>
                                    </a>
                                </div>
                                <div className="third columns split">
                                    <Link to="/blog">
                                        <div className="cards shadow hover">
                                            <FontAwesomeIcon className="icon" icon="newspaper" />
                                            <h4>Stories</h4>
                                            <p>Share your story! We’d love to feature you.</p>
                                            <p className="link">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="third columns split">
                                    <Link to="/covid">
                                        <div className="cards shadow hover">
                                            <FontAwesomeIcon className="icon" icon="viruses" />
                                            <h4>COVID-19</h4>
                                            <p>Stay up-to-date on the latest COVID-19 news, stats, and resources.</p>
                                            <p className="link">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePortal;