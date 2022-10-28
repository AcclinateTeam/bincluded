import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../../components/Header';
import PartnerWithUs from '../../../components/PartnerWithUs';


const CooperGreen = () =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    // Scrolls to bottom of Hero Section OnClick
    const scrollToRef = () =>
    {
        let hero = document.getElementById('hero');
        let heroHeight = hero!.offsetHeight;
        
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
                <div className="calloutbg" style={{ backgroundImage: `url(/images/coopergreen.jpg)` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>Connection Health</h1>
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
                        <a href="/">Home</a> {'>'} <Link to="/partners">Partners</Link> {'>'} Connection Health
                    </div>
                </div>
            </section>

            <section className="homies">
                <div className="container">
                    <div className="ten columns">
                        <div className="heading">
                            <h2>Connection <span className="blue">Health</span></h2>
                        </div>
                    </div>
                    <div className="four columns">
                        <div className="content">
                            <h3>Description</h3>
                            <p>Connection Health is a nonprofit organization founded in Birmingham, Alabama dedicated to providing community-based support to patients so they can achieve a healthy lifestyle. As part of their program, Community Health Workers work in partnership with a patient's care team to provide services through education, advocacy, and social support. </p>
                            <h3>Who Will Benefit</h3>
                            <p>Connection Health trains and employs Community Health Workers to meet the needs of Alabama’s citizens. Connection Health is currently providing services to residents of Jefferson County and throughout the Black Belt region of Alabama.</p>
                            <div className="container">
                                <div className="five columns">
                                    <h4>Contact Information</h4>
                                    <p><span>Phone:</span> (205) 603-2066</p>
                                </div>
                                <div className="five columns">
                                    <h4>Address</h4>
                                    <p>2101 Magnolia Avenue South<br /> Suite 420<br /> Birmingham, AL 35205</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="six columns">
                        <div className="image">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aYuSTT9Asa4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <PartnerWithUs />
        </>
    )
}


export default CooperGreen;