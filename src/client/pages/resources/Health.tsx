import React, { useEffect, useState, useRef } from 'react';
import VisibilitySensor from 'react-visibility-sensor';


/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import Logo from '../../theme/Logo';
import HealthTerminal from './components/HealthTerminal';

const Health = () => {

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
                            <img id="img" src="/images/theme/1I2A1166.jpg" alt="" />
                        </div>
                    </div>
                    <div id="text" className="text">
                        <div className="calltext">
                            <h1>Health<br /> Resources</h1>
                            <p>We understand how important  your health is to your livelihood. Find local resources that fit your health and wellness needs from our <Logo color="#287fdd" /> community.</p>
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
                        <a href="/">Home</a> {'>'} <a href="/resources">Resources</a> {'>'} Health Resources
                    </div>
                </div>
            </section>

            {/* RESOURCE INTRO SECTION */}
            <section className="intro">
                <div className="container visible">
                    <div className="four columns offset-by-one">
                        <VisibilitySensor partialVisibility onChange={(isVisible) => { if (isVisible) { setVisible(true); } }}>
                            <div className="text" style={{ opacity: visible ? 1 : 0 }}>
                                <h2>Your Health <span>Is Your Wealth</span></h2>
                                <p>Health doesn’t end at the doctor's office, <Logo color="#287fdd" /> focuses on all aspects of your health. Here you’ll find the resources available in your community to help you live a healthier lifestyle.</p>
                                <h2>Hollistic approach <span>to improving Wellness</span></h2>
                                <p><Logo color="#287fdd" /> seeks to close the health equity gap in Jefferson County. Health equity is achieved when every person has the opportunity to attain their full health potential, and no one is left behind.</p>
                            </div>
                        </VisibilitySensor>
                    </div>
                    <div className="four columns offset-by-one">
                        <img src="/images/theme/healthintro.png" alt="" />
                    </div>
                </div>
            </section>

            {/* RESOURCE TERMINAL */}
            <HealthTerminal />
        </>
    );
}

export default Health;