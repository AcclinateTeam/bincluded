import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../components/Header';
import PartnerTerminal from '../../components/PartnerTerminal';


const CooperGreen = () =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>

            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="partna hero" style={{ height: `100vh` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/coopergreen.jpg)` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>Cooper Green Mercy Hospital</h1>
                        <p>We partner with brands that are passionate about our mission and our community..</p>
                    </div>
                    <div className="callbutton">
                        <a className="button signup" href="https://jdsb9zx9r21.typeform.com/B-INCLUDED">Become a partner</a>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="seven columns offset-by-one-half bread">
                        <a href="/">Home</a> {'>'} <Link to="/partners">Partners</Link> {'>'} Cooper Green Mercy Hospital
                    </div>
                </div>
            </section>

            <section className="homies">
                <div className="container">
                    <div className="ten columns">
                        <div className="heading">
                            <h2>Cooper Green <span className="blue">Mercy Hospital</span></h2>
                        </div>
                    </div>
                    <div className="four columns">
                        <div className="content">
                            <h3>Description</h3>
                            <p>Full-service ambulatory care facility that includes both primary and specialty care, urgent care, physical, occupational, and speech therapy, laboratory services, radiology and a pharmacy, regardless of ability to pay.</p>
                            <h3>Who Will Benefit</h3>
                            <p>Individuals with or without health care seeking any type of medical care including a primary physician, specialist, or pharmacy.</p>
                            <div className="container">
                                <div className="five columns">
                                    <h4>Contact Information</h4>
                                    <p><span>General Information:</span> (205) 930-3200 <span>Appointment Center:</span> (205) 930-3350 <span>Enrollment:</span> (205) 930-3377</p>
                                </div>
                                <div className="five columns">
                                    <h4>Address</h4>
                                    <p>Cooper Green Mercy Health Services<br /> 1515 6th Avenue South<br /> Birmingham, Alabama 35233</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="six columns">
                        <div className="image">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XtX3qBtvFkc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

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


export default CooperGreen;