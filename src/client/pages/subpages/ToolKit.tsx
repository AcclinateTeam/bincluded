import React from 'react';
import { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import Header from '../../theme/Header';
import Logo from '../../theme/Logo';
import ToolTerminal from './components/ToolTerminal';
import PartnerWithUs from '../partners/components/PartnerWithUs';

const ToolKit = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const [print, setPrint] = useState(false);
    const [digital, setDigital] = useState(false);

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
                            <img id="img" src="/images/theme/6Q3A3920.jpg" alt="" />
                        </div>
                    </div>
                    <div id="text" className="text">
                        <div className="calltext">
                            <h1>ToolKit</h1>
                            <p>We’ve created template so that you, your organization, and your fellow community members can spread <Logo color="#287fdd" />’s message of inclusion and equity. These templates are easy to download and share.</p>
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
                        <a href="/">Home</a> {'>'} ToolKit
                    </div>
                </div>
            </section>

            <ToolTerminal />

            <PartnerWithUs />
        </>
    )
}

export default ToolKit;