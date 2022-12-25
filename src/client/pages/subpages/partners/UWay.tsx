import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../../theme/Header';
import PartnerWithUs from '../../../components/PartnerWithUs';


const UWay = () =>
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
                <div className="calloutbg" style={{ backgroundImage: `url(/images/viva.jpg)` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>The United Way</h1>
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
                        <a href="/">Home</a> {'>'} <Link to="/partners">Partners</Link> {'>'} The United Way
                    </div>
                </div>
            </section>

            <section className="homies">
                <div className="container">
                    <div className="ten columns">
                        <div className="heading">
                            <h2>The United <span className="blue">Way</span></h2>
                        </div>
                    </div>
                    <div className="four columns">
                        <div className="content">
                            <h3>Description</h3>
                            <p>United Way of Central Alabama builds a great community and advances the common good by bringing people together to help others. By pooling our resources and working together, we pave the way for real, tangible change in health, education and financial stability.</p>
                            <h3>Who Will Benefit</h3>
                            <p>Individuals looking for hunger assistance, financial and housing education, health care or information, Veteran services, and/or senior & disability care.</p>
                            <div className="container">
                                <div className="five columns">
                                    <h4>Contact Information</h4>
                                    <p><span>General Information:</span> Phone: (205) 251-5131</p>
                                </div>
                                <div className="five columns">
                                    <h4>Address</h4>
                                    <p>Frances Spain Hodgess Building<br /> 3600 8th Ave S<br /> Birmingham, AL 35222                                                   </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="six columns">
                        <div className="image">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Stte_ohBdq8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <PartnerWithUs />
        </>
    )
}


export default UWay;