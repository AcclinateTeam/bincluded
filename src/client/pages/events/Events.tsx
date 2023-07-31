import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../theme/Header';
import Logo from '../../theme/Logo';


const Events = () => {
    // AUTO SCROLL TO TOP
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>

            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero par">
                <div className="container">
                    <div className="columns eight offset-by-one callout">
                        <div className="image blog">
                            <img src="/images/theme/events.png" alt="" />
                        </div>
                        <div className="text">
                            <div className="calltext">
                                <h1>Events</h1>
                                <p>We partner with brands that are passionate about our <Logo color="#287fdd" /> mission and our community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} Events
                    </div>
                </div>
            </section>

            {/* UPCOMING EVENTS SECTION */}
            <section className="upcoming">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="header">
                            <h2>Recent <span>Events</span></h2>
                        </div>
                    </div>

                    <div className="eight columns offset-by-one">

                        <div className="panel">
                            <div className="container">
                                {/* <div className="five columns">
                                    <a href="http://joinoben.com" target="_blank" rel="noopener noreferrer">
                                        <div className="card">
                                            <div className="image">
                                                <img src="/images/partners/obenhealth.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <h3>Oben Health</h3>
                                                <p>Oben (formerly Lapis) is a culturally competent digital health treatment that safely and sustainably reverses heart disease without medication or surgery. Starting off with hypertension, the treatment is based on the clinical work of Lapis's Chief Medical Officer (Michelle Routhenstien)  -  where she's been able to help 90% of her patients lower/normalize their blood pressure and 70% achieve medication reductions in 3 months.</p>
                                                <p className="link">Visit Oben Health <FontAwesomeIcon className="icon" icon="arrow-right" /></p>
                                            </div>
                                        </div>
                                    </a>
                                </div> */}

                                <div className="ten columns">
                                    <Link to="/events/miles">
                                        <div className="card">
                                            <div className="image" style={{ backgroundImage: `url("/images/events/miles/IMG_0024.jpg")` }}></div>
                                            <div className="text">
                                                <h4>March 2023</h4>
                                                <h3>Bridging the Gap - Miles College</h3>
                                                <p>Oben (formerly Lapis) is a culturally competent digital health treatment that safely and sustainably reverses heart disease without medication or surgery. Starting off with hypertension, the treatment is based on the clinical work of Lapis's Chief Medical Officer (Michelle Routhenstien)</p>
                                                <p className="link">Visit Oben Health <FontAwesomeIcon className="icon" icon="arrow-right" /></p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="ten columns">
                                    <Link to="/events/miles">
                                        <div className="card">
                                            <div className="image" style={{ backgroundImage: `url("/images/events/seniors/6Q3A9343.jpg")` }}></div>
                                            <div className="text">
                                                <h4>March 2023</h4>
                                                <h3>Bridging the Gap - Seniors 'R Us</h3>
                                                <p>Oben (formerly Lapis) is a culturally competent digital health treatment that safely and sustainably reverses heart disease without medication or surgery. Starting off with hypertension, the treatment is based on the clinical work of Lapis's Chief Medical Officer (Michelle Routhenstien)</p>
                                                <p className="link">Visit Oben Health <FontAwesomeIcon className="icon" icon="arrow-right" /></p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="ten columns">
                                    <Link to="/events/miles">
                                        <div className="card">
                                            <div className="image" style={{ backgroundImage: `url("/images/events/bushconx/IMG_6172.jpg")` }}></div>
                                            <div className="text">
                                                <h4>March 2023</h4>
                                                <h3>Bush Hills Connection</h3>
                                                <p>Oben (formerly Lapis) is a culturally competent digital health treatment that safely and sustainably reverses heart disease without medication or surgery. Starting off with hypertension, the treatment is based on the clinical work of Lapis's Chief Medical Officer (Michelle Routhenstien)</p>
                                                <p className="link">Visit Oben Health <FontAwesomeIcon className="icon" icon="arrow-right" /></p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );

}

export default Events;