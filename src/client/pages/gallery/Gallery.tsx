import React, { useState, useEffect } from 'react';

import Header from '../../theme/Header';
import Logo from '../../theme/Logo';
import { Link } from 'react-router-dom';

const Gallery = () => {

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
                                <h1>Gallery</h1>
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
                        <a href="/">Home</a> {'>'} Gallery
                    </div>
                </div>
            </section>

            {/* GALLERY OVERVIEW SECTION */}
            <section className="galview">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="header">
                            <h2>Photo <span>Galleries</span></h2>
                        </div>
                    </div>
                    <div className="six columns offset-by-one gall">
                        <div className="third columns galleries">
                            <Link to="/events/miles">
                                <div className="photo">
                                    <img src="/images/events/miles/IMG_0024.jpg" />
                                    <h4>Bridging the Gap: Miles College</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="third columns galleries">
                            <Link to="/events/miles">
                                <div className="photo">
                                    <img src="/images/events/seniors/6Q3A9343.jpg" />
                                    <h4>Bridging the Gap: Senior 'R Us</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="third columns galleries">
                            <Link to="/events/miles">
                                <div className="photo">
                                    <img src="/images/events/bushconx/IMG_6172.jpg" />
                                    <h4>Bush Hills Connection</h4>
                                </div>
                            </Link>
                        </div>                        
                    </div>

                    <div className="two columns">
                        <div className="menu">
                            <h4>Galleries</h4>
                            <ul>
                                <li><a href="/gallery">Photo Galleries</a></li>
                                <li><a href="/gallery">Video Galleries</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Gallery;
