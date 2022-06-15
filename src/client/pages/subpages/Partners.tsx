import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../components/Header';
import PartnerTerminal from '../../components/PartnerTerminal';


const Partners = () =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    // Scrolls to bottom of Hero Section OnClick
    const scrollToRef = () =>
    {
        let hero = document.getElementById('hero');
        let heroHeight = hero.offsetHeight;
        
        window.scrollTo({
            top: heroHeight,
            left: 0,
            behavior: 'smooth'
        });
    }  

    return (
        <>

            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="partna hero" style={{ height: `100vh` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/partners.jpg)` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>Partners</h1>
                        <p>We partner with brands that are passionate about our mission and our community..</p>
                    </div>
                    <div className="callbutton">
                        <a className="button signup" href="https://jdsb9zx9r21.typeform.com/B-INCLUDED">Become a partner</a>
                    </div>
                </div>
                <div className="scrollDown">
                    <FontAwesomeIcon icon="arrow-down" onClick={scrollToRef} />
                    <h3>Scroll Down</h3>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="seven columns offset-by-one-half bread">
                        <a href="/">Home</a> {'>'} Partners
                    </div>
                </div>
            </section>

            {/* PARTNER PROMISE SECTION */}
            <section className="promise">
                <div className="container">
                    <div className="four columns">
                        <div className="heading">
                            <h2>Making a promise<br /> of prosperity<br /> <span className="blue">to our city</span></h2>
                        </div>
                    </div>
                    <div className="six columns text">
                        <p>As a B-INCLUDED Partner we agree to support B-INCLUDED stakeholders, the residents living, working, and playing in Jefferson County, by deploying our resources in a way that enriches their lives and helps to move them from dependency to self-sufficiency. </p>
                        {/* <video playsInline autoPlay muted loop id="myVideo">
                            <source src='http://nowincluded.com/wp-content/uploads/2022/05/together.mp4' type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video> */}
                    </div>
                </div>
            </section>

            {/* IMAGE DIVIDER SECTION */}
            <section className="divider partna">
                <img src="/images/bham.jpg" alt="birmingham" />
            </section>

            {/* PARTNER COMMIT SECTION */}
            <section className="commit">
                <div className="container rePartna">
                    <div className="six columns text">
                        <p>We commit to the collaborative effort to build a healthier and wealthier Jefferson County that drives Birmingham to become a world leader in developing health solutions that benefit an increasingly diverse population and deliver better health outcomes for the residents of Jefferson County. </p>
                    </div>
                    <div className="four columns head">
                        <div className="heading">
                            <h2>Committed to a better future for <span className="blue">all of us</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED PARTNER LOGOS */}
            <PartnerTerminal />

            <section className="partners">
                <div className="container partnerUp">
                    <div className="ten columns">
                        <div className="content">
                            <div className="container">
                                <div className="eight columns offset-by-one">
                                    <div className="seven columns">
                                        <p>We want you to be a part of the health conversation.</p>
                                    </div>
                                    <div className="three columns">
                                        <a href="https://jdsb9zx9r21.typeform.com/B-INCLUDED">Partner With Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Partners;