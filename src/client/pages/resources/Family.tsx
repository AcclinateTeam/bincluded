import moment from 'moment';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import FamilyTerminal from './components/FamilyTerminal';
import Logo from '../../theme/Logo';

const Family = () => {

    // Automatic Scroll To Top on Refresh
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const [blogPosts, setBlogPosts] = useState([]);

    // Blog Posts Component Fetch
    useEffect(() => {
        fetch('api/blogPosts/blog')
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    return (
        <>
            {/* HEADER COMPONENT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero resc">
                <div className="container">
                    <div className="columns eight offset-by-one callout">
                        <div className="image blog">
                            <img src="/images/theme/resources.png" alt="" />
                        </div>
                        <div className="text">
                            <div className="calltext">
                                <h1>Family<br /> Resources</h1>
                                <p>Our families are central units in our communities. We understand how important your family is to you, and want to ensure you have the appropriate resources needed to fully support them. Find resources related to your family’s needs from our <Logo color="#287fdd" /> community. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} <a href="/resources">Resources</a> {'>'} Family Resources
                    </div>
                </div>
            </section>

            {/* RESOURCE INTRO SECTION */}
            <section className="intro">
                <div className="container">
                    <div className="four columns offset-by-one">
                        <div className="text">
                            <h2>Our Families <span>Are Our Foundation</span></h2>
                            <p>Family is the cornerstone of community. Building a healthier community starts with healthy families. <Logo color="#287fdd" /> provides a place for families to access local resources and connect with the broader community</p>
                            <h2>Strengthening Community <span>Through Family Resources</span></h2>
                            <p>Every family deserves to thrive and have access to a strong and effective support network through family.

                            </p>
                        </div>
                    </div>
                    <div className="four columns offset-by-one">
                        <img src="/images/theme/familyintro.png" alt="" />
                    </div>
                </div>
            </section>

            {/* FAMILY RESOURCE TERMINAL */}
            <FamilyTerminal />
        </>
    );
}

export default Family;