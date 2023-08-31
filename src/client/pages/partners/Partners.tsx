import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../theme/Header';
import Logo from '../../theme/Logo';
import HealthTechTerminal from './components/HealthTechTerminal';
import PartnerWithUs from './components/PartnerWithUs';


const Partners = () => {
    // AUTO SCROLL TO TOP
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/api/resources/partners')
            .then(res => res.json())
            .then(cards => setCards(cards))
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

            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero blog">
                <div id="heroSlide" className="heroSlide"> </div>
                <div className="heroContent">
                    <div className="image blog">
                        <div id="bg" className="bg">
                            <img id="img" src="/images/theme/6Q3A4055.jpg" alt="" />
                        </div>
                    </div>
                    <div id="text" className="text">
                        <div className="calltext">
                            <h1>Partners</h1>
                            <p>We partner with brands that are passionate about our <Logo color="#287fdd" /> mission and our community.</p>
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
                        <a href="/">Home</a> {'>'} Partners
                    </div>
                </div>
            </section>

            {/* PARTNER INTRO SECTION */}
            <section className="intro part">
                <div className="container">
                    <div className="four columns offset-by-one">
                        <div className="text">
                            <h2>Making a promise of <span>prosperity to our city</span></h2>
                            <p>Our <Logo color="#287fdd" /> Partners agree to support <Logo color="#287fdd" /> stakeholders, the residents living, working, and playing in Jefferson County, by deploying resources in a way that enriches lives and helps us move towards healthy dependency as a collective unit.</p>
                        </div>
                    </div>
                    <div className="four columns offset-by-one">
                        <div className="image">
                            <img src="/images/theme/partnerintro.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* PARTNER COMMITMENT SECTION */}
            <section className="commitment">
                <div className="container">
                    <div className="four columns">
                        <div className="image">
                            <img src="/images/theme/partnercommit.png" alt="" />
                        </div>
                    </div>
                    <div className="six columns" style={{ 'position': 'relative' }}>
                        <div className="text">
                            <h2>Committed to a better<span> future for all of us</span></h2>
                            <p>We commit to the collaborative effort to build a healthier and wealthier Jefferson County that drives Birmingham to become a world leader in developing health solutions that benefit an increasingly diverse population and deliver better health outcomes for the residents of Jefferson County. </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED PARTNER LOGOS */}
            <section className="featured">
                <div className="container">
                    <div className="eight columns offset-by-one tes">
                        <div className="header">
                            <h2>Featured <span>Partners</span></h2>
                            <p>We partner with brands that are passionate about our mission and our community.<br /> Click on the partner logo below to see more information.</p>
                        </div>

                        <div className="container panel">
                            {cards.map((p: any, index) => {
                                if (p.id >= 1) {
                                    return (
                                        <div className="third columns panet" key={index}>
                                            <Link to={`/partners/${p.slug}`}>
                                                <div className="frame">
                                                    <div className="panes" style={{ backgroundImage: `url(${p.logo})` }}></div>
                                                    <div className="text">
                                                        <h3>{p.title}</h3>
                                                        <p>Featured Partner</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                            })}
                        </div>

                        {/* <div className="container panel">
                            {cards.map((p: any, index) => {
                                if (p.id <= 3) {
                                    return (
                                        <div className="third columns panet" key={index}>
                                            <Link to={`/partners/${p.slug}`}>
                                                <div className="frame">
                                                    <div className="panes" style={{ backgroundImage: `url(${p.logo})` }}></div>
                                                    <div className="text">
                                                        <h3>{p.title}</h3>
                                                        <p>Featured Partner</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <div className="container panel">
                            <div className="bottom">a</div>
                            {cards.map((p: any, index) => {
                                if (p.id >= 4) {
                                    return (
                                        <div className="third columns panet" key={index}>
                                            <Link to={`/partners/${p.slug}`}>
                                                <div className="frame">
                                                    <div className="panes" style={{ backgroundImage: `url(${p.logo})` }}></div>
                                                    <div className="text">
                                                        <h3>{p.title}</h3>
                                                        <p>Featured Partner</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                            })}
                        </div> */}
                    </div>
                </div>
            </section>

            {/* PROSPER HEALTH-TECH LOGOS */}
            <HealthTechTerminal />

            <PartnerWithUs />
        </>
    )
}


export default Partners;