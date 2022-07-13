import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const HomeWhoWeAre = () =>
{

    return (
        <>
            <section className="whoWeAre">
                <div className="container">
                    <div className="four columns left">
                        <h2>We <span className="blue">Listen.</span><br /> We <span className="blue">Represent.</span><br /> We <span className="blue">Share.</span></h2>
                    </div>
                    <div className="six columns">
                        <p>
                            <Logo color="#050236" /> addresses healthcare needs and subsequently educational, employment, and financial gaps so that metro-Birmingham area residents can work towards improved health.
                        </p>
                    </div>
                    <div className="ten columns">
                        <div className="container box">
                            <div className="third columns deck">
                                <div className="cards">
                                    <Link to="/blog">
                                        <div className="card">
                                            <img src="/images/joanice.png" alt="Who_We_Are" />
                                            <div className="text">
                                                <h3>Your story matters</h3>
                                                <p>Hear from the community and share your story.</p>
                                                <Link to="/blog">Read More <FontAwesomeIcon className="icon" icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="third columns deck">
                                <div className="cards">
                                    <Link to="/whynow">
                                        <div className="card">
                                            <img src="/images/callout3.jpg" alt="Who_We_Are" />
                                            <div className="text">
                                                <h3>Bettering Birmingham</h3>
                                                <p>Learn why now is the time to take control of your health and future.</p>
                                                <Link to="/whynow">Read More <FontAwesomeIcon className="icon" icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="third columns deck">
                                <div className="cards">
                                    <a href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual" target="_blank" rel="noopener noreferrer">
                                        <div className="card">
                                            <img src="/images/charger1.jpg" alt="Who_We_Are" />
                                            <div className="text">
                                                <h3>Join our community</h3>
                                                <p>Click here to learn, share and grow with others in the B-INCLUDED community.</p>
                                                <a href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual" target="_blank" rel="noopener noreferrer">Read More <FontAwesomeIcon className="icon" icon="arrow-right" /></a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeWhoWeAre;