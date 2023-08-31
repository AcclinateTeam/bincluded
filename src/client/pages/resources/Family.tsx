import React, { useEffect, useState, useRef } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import FamilyTerminal from './components/FamilyTerminal';
import Logo from '../../theme/Logo';

const Family = () => {

    // Automatic Scroll To Top on Refresh
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // Hero Background-Image Slide + Hero Text Fade-In
    useEffect(() => {
        const hero = document.getElementById('heroSlide');
        const bg = document.getElementById('bg');
        const img = document.getElementById('img');
        const text = document.getElementById('text');
        const header = document.getElementById('header');

        hero!.style.width = '100%';
        if (window.innerWidth <= 499) {
            bg!.style.width = '100%';
            img!.style.width = '100%';
        } else {
            bg!.style.width = '100%';
            img!.style.width = '100%';
        };

        setTimeout(() => {
            text!.style.cssText = 'padding-top: 0; opacity: 1;';
            header!.style.cssText = 'opacity: 1;';
        }, 1000);
    }, []);

    const [visible, setVisible] = useState(false);


    return (
        <>
            {/* HEADER COMPONENT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero blog">
                <div id="heroSlide" className="heroSlide"> </div>
                <div className="heroContent">
                    <div className="image blog">
                        <div id="bg" className="bg">
                            <img id="img" src="/images/theme/1I2A0700.jpeg" alt="" />
                        </div>
                    </div>
                    <div id="text" className="text">
                        <div className="calltext">
                            <h1>Family<br /> Resources</h1>
                            <p>Our families are central units in our communities. We understand how important your family is to you, and want to ensure you have the appropriate resources needed to fully support them. Find resources related to your family’s needs from our <Logo color="#287fdd" /> community. </p>
                        </div>
                        <div className="callbutton">
                            <a className="button signup" href="https://www.videoask.com/ftmqd7gt3" target="_blank" rel="noopener noreferrer">Share Your Story</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} <a href="/resources">Resources</a> {'>'} Family Resources
                    </div>
                </div>
            </section>

            {/* RESOURCE INTRO SECTION */}
            <section className="intro">
                <VisibilitySensor partialVisibility onChange={(isVisible) => { if (isVisible) { setVisible(true); } }}>
                    <div className="container visible" style={{ opacity: visible ? 1 : 0 }}>
                        <div className="four columns offset-by-one">
                            <div className="text sizing">
                                <h2 className="size">Our Families <span>Are Our Foundation</span></h2>
                                <p>Family is the cornerstone of community. <Logo color="#287fdd" /> provides a place for families to access local resources and connect with the broader community.</p>
                                <h2 className="size">Strengthening Community <span>Through Family Resources</span></h2>
                                <p>Every family deserves to thrive and have access to a strong and effective support network.

                                </p>
                            </div>
                        </div>
                        <div className="four columns offset-by-one">
                            <img src="/images/theme/careerintro.png" alt="" />
                        </div>
                    </div>
                </VisibilitySensor>
            </section>

            {/* FAMILY RESOURCE TERMINAL */}
            <FamilyTerminal />
        </>
    );
}

export default Family;