import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../../theme/Header';
import PartnerWithUs from '../components/PartnerWithUs';


const VivaHealth = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

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
                        <a href="/">Home</a> {'>'} <a href="/partners">Featured Partners</a> {'>'} Viva Health
                    </div>
                </div>
            </section>

            <section className="homies">
                <div className="container">
                    <div className="ten columns">
                        <div className="heading">
                            <h2>Viva <span className="blue">Health</span></h2>
                            <p>Featured Partner</p>
                        </div>
                    </div>
                    <div className="six columns">
                        <div className="content">
                            <h3>Description</h3>
                            <p>Viva Health, Inc. is a health maintenance organization providing quality, accessible health care. With backing from the UAB Health System, a world leader in quaternary and tertiary health care services Viva Health simplifies and improves health care through a network that includes many of the most respected physicians and hospital providers in the market.</p>
                            <h3>Who Will Benefit</h3>
                            <p>Viva Health offers a continuum of care that covers everything from routine office visits, emergencies, and major and minor care to adult, obstetrical, and pediatric care. Individuals seeking a primary care physician, a particular medication or prescription, or information of medicare insurance would find Viva Health beneficial.</p>

                        </div>
                    </div>
                    <div className="four columns">
                        <div className="contact">
                            <h4>Contact Information</h4>
                            <p><span>General Information:</span> Phone: 205-558-7474<br /> Monday - Friday<br /> 8am - 5pm</p>
                            <h4>Address</h4>
                            <p>Birmingham Cafe<br /> 417 20th Street N, Suite 100<br />Birmingham, AL 35203</p>
                        </div>
                    </div>
                    <div className="ten columns">
                        <div className="image">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lT4zfk1xOew" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <PartnerWithUs />
        </>
    )
}


export default VivaHealth;