import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../../theme/Header';
import PartnerWithUs from '../components/PartnerWithUs';


const CooperGreen = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // Scrolls to bottom of Hero Section OnClick
    const scrollToRef = () => {
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
            <section id="hero" className="hero">
                <div className="blogcall">
                    <img src="/images/partners/coopergreen.jpg" alt="" />
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} <a href="/partners">Featured Partners</a> {'>'} Cooper Green Mercy Hospital
                    </div>
                </div>
            </section>

            <section className="homies">
                <div className="container">
                    <div className="ten columns">
                        <div className="heading">
                            <h2>Cooper Green <span className="blue">Mercy Hospital</span></h2>
                            <p>Featured Partner</p>
                        </div>
                    </div>
                    <div className="six columns">
                        <div className="content">
                            <h3>Description</h3>
                            <p>Full-service ambulatory care facility that includes both primary and specialty care, urgent care, physical, occupational, and speech therapy, laboratory services, radiology and a pharmacy, regardless of ability to pay.</p>
                            <h3>Who Will Benefit</h3>
                            <p>Individuals with or without health care seeking any type of medical care including a primary physician, specialist, or pharmacy.</p>
                        </div>
                    </div>
                    <div className="four columns">
                        <div className="contact">
                            <h4>Contact Information</h4>
                            <p><span>General Information:</span> (205) 930-3200 <span>Appointment Center:</span> (205) 930-3350 <span>Enrollment:</span> (205) 930-3377</p>
                            <h4>Address</h4>
                            <p>Cooper Green Mercy Health Services<br /> 1515 6th Avenue South<br /> Birmingham, Alabama 35233</p>
                        </div>
                    </div>
                    <div className="ten columns">
                        <div className="image">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XtX3qBtvFkc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <PartnerWithUs />
        </>
    )
}


export default CooperGreen;