import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../../theme/Header';
import PartnerWithUs from '../../../components/PartnerWithUs';


const LHSA = () =>
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
                <div className="calloutbg" style={{ backgroundImage: `url(/images/LHSA.webp)` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>Live Health Smart Alabama</h1>
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
                        <a href="/">Home</a> {'>'} <Link to="/partners">Partners</Link> {'>'} Live Health Smart Alabama
                    </div>
                </div>
            </section>

            <section className="homies">
                <div className="container">
                    <div className="ten columns">
                        <div className="heading">
                            <h2>Live Health <span className="blue">Smart Alabama</span></h2>
                        </div>
                    </div>
                    <div className="four columns">
                        <div className="content">
                            <h3>Description</h3>
                            <p>Live HealthSmart Alabama (LHSA) is a transformational movement to make good health simple for all Alabamians. Fueled by a network of more than 100 trusted community relationships and partners LHSA strives to decrease the incidence of chronic disease and provide greater health equity across the state. LHSA deploys a mobile health clinic and mobile market to bring health screenings and food directly to the communities that need it most.</p>
                            <h3>Who Will Benefit</h3>
                            <p>Residents of the Bush Hills, East Lake, Kingston, or Titusville communities. Anyone interested in learning how to lead a healthy lifestyle, seeking access to healthy food options, or access to health screenings.</p>
                            <div className="container">
                                <div className="five columns">
                                    <h4>Contact Information</h4>
                                    <p><span>General Information:</span> Phone: (205) 996-2304</p>
                                </div>
                                <div className="five columns">
                                    <h4>Address</h4>
                                    <p>Watts Tower<br /> 1717 11th Ave S<br /> Birmingham, AL 35294</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="six columns">
                        <div className="image">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CSk5bNDafVc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <PartnerWithUs />
        </>
    )
}


export default LHSA;