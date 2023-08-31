import React, { useEffect, useState, useRef } from 'react';
import VisibilitySensor from 'react-visibility-sensor';


/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import Prosper from '../../components/Prosper';
import Logo from '../../theme/Logo';
import CareersTerminal from './components/CareersTerminal';

const Careers = () => {
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
                            <img id="img" src="/images/theme/_Q4A4567.jpg" alt="" />
                        </div>
                    </div>
                    <div id="text" className="text">
                        <div className="calltext">
                            <h1>Career<br /> Resources</h1>
                            <p>Our jobs help us sustain our lifestyles and community. Find employment oppurtunities from local businesses and organizations from our <Logo color="#287fdd" /> community.</p>
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
                        <a href="/">Home</a> {'>'} <a href="/resources">Resources</a> {'>'} Career Resources
                    </div>
                </div>
            </section>

            {/* RESOURCE INTRO SECTION */}
            <section className="intro">
                <VisibilitySensor partialVisibility onChange={(isVisible) => { if (isVisible) { setVisible(true); } }}>
                    <div className="container visible" style={{ opacity: visible ? 1 : 0 }}>
                        <div className="four columns offset-by-one">
                            <div className="text">
                                <h2>Elevate Your <span>Career Path</span></h2>
                                <p>The first step to financial success usually starts with job security. Take a look at our employment resources for training, career counseling, and job search resources.</p>
                                <h2>Improving Access To <span>growth oppurtunities</span></h2>
                                <p>Making money is one thing, managing it is another. Check out the financial resources below to learn more about making the money you work for work for you.
                                </p>
                            </div>
                        </div>
                        <div className="four columns offset-by-one">
                            <img src="/images/theme/careerintro.png" alt="" />
                        </div>
                    </div>
                </VisibilitySensor>
            </section>

            <CareersTerminal />
        </>
    );
}

export default Careers;