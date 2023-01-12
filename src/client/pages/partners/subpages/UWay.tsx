import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../../theme/Header';
import PartnerWithUs from '../components/PartnerWithUs';


const UWay = () => {

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
                    <img src="/images/partners/viva.jpg" alt="" />
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} <a href="/partners">Featured Partners</a> {'>'} United Way
                    </div>
                </div>
            </section>




            <section className="homies">
                <div className="container">
                    <div className="ten columns">
                        <div className="heading">
                            <h2>The United <span>Way</span></h2>
                            <p>Featured Partner</p>
                        </div>
                    </div>
                    <div className="six columns">
                        <div className="content">
                            <h3>Description</h3>
                            <p>United Way of Central Alabama builds a great community and advances the common good by bringing people together to help others. By pooling our resources and working together, we pave the way for real, tangible change in health, education and financial stability.</p>
                            <h3>Who Will Benefit</h3>
                            <p>Individuals looking for hunger assistance, financial and housing education, health care or information, Veteran services, and/or senior & disability care.</p>
                        </div>
                    </div>
                    <div className="four columns">
                        <div className="contact">
                            <h4>Contact Information</h4>
                            <p><span>General Information:</span> Phone: (205) 251-5131</p>
                            <h4>Address</h4>
                            <p>Frances Spain Hodgess Building<br /> 3600 8th Ave S<br /> Birmingham, AL 35222</p>
                        </div>
                    </div>
                    <div className="ten columns">
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