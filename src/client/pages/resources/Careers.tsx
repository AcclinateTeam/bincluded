import moment from 'moment';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import Prosper from '../../components/Prosper';
import Logo from '../../components/subComponents/Logo';
import CareersTerminal from './components/CareersTerminal';

const Careers = () => {
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
            <section id="hero" className="hero">
                <div className="container">
                    <div className="columns eight offset-by-one callout">
                        <div className="image blog">
                            <img src="/images/theme/resources.png" alt="" />
                        </div>
                        <div className="text" style={{ 'margin': '140px 0 0'}}>
                            <div className="calltext">
                                <h1>Career<br /> Resources</h1>
                                <p>Employment provides us with the opportunity to build a fulfilling career in a field that serves a purpose to the greater community. Find employment opportunities from local businesses and organizations from our <Logo color="#287fdd" /> community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} <a href="/resources">Resources</a> {'>'} Career Resources
                    </div>
                </div>
            </section>

            {/* RESOURCE INTRO SECTION */}
            <section className="intro">
                <div className="container">
                    <div className="four columns offset-by-one">
                        <div className="text">
                            <h2>Elevate Your <span>Career Path</span></h2>
                            <p>The first step to financial success usually starts with job security. If you are looking for training, career counseling, or you want to start the job search take a look at our employment resources.</p>
                            <h2>Improving Access To <span>growth oppurtunities</span></h2>
                            <p>Making money is one thing, managing it is another. Check out the financial resources below to learn more about making the money you work for work for you.

                            </p>
                        </div>
                    </div>
                    <div className="four columns offset-by-one">
                        <img src="/images/theme/careerintro.png" alt="" />
                    </div>
                </div>
            </section>

            <CareersTerminal />
        </>
    );
}

export default Careers;