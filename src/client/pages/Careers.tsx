import moment from 'moment';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../components/Header';
import CareersTerminal from '../components/CareersTerminal';
import BlogPosts from './BlogPosts';
import Prosper from '../components/Prosper';
import Logo from '../components/subComponents/Logo';

const Careers = () =>
{
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

    // Automatic Scroll To Top on Refresh
    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    const [blogPosts, setBlogPosts] = useState([]);

    // Blog Posts Component Fetch
    useEffect(() =>
    {
        fetch('api/blogPosts/blog')
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    return (
        <>
            {/* HEADER COMPONENT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero career" style={{ height: `100vh` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/careerHeader.jpg)`, backgroundPosition: `0 0` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>Career Resources</h1>
                        <p><Logo color="#ffffff" /> connects the community to job education and training resources that will help you find a career that speaks to you.</p>

                    </div>
                    <div className="callbutton">
                        <a className="button signup" style={{ margin: `0` }} href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual">Join The Community</a>
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
                        <a href="/">Home</a> {'>'} Career Resources
                    </div>
                </div>
            </section>

            {/* SECTORS OF INCLUSIVITY */}
            <section className="incCareer">
                <div className="container">
                    <div className="four columns">
                        <div className="heading">
                            <h2>Elevate your <span className="blue">career path</span></h2>
                        </div>
                    </div>
                    <div className="six columns text">
                        <p>The first step to financial success usually starts with job security. If you are looking for training, career counseling, or you want to start the job search take a look at our employment resources.</p>
                    </div>
                </div>
            </section>

            {/* IMAGE DIVIDER SECTION */}
            <section className="divider">
                <img src="/images/careermid.png" alt="birmingham" />
            </section>

            {/* WHY IT MATTERS SECTION */}
            <section className="resCareer">
                <div className="container">
                    <div className="five columns text">
                        <p>Making money is one thing, managing it is another. Check out the financial resources below to learn more about making the money you work for work for you.</p>
                    </div>
                    <div className="five columns">
                        <div className="heading">
                            <h2>Improving access to <span className="blue">growth oppurtunities</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="healthRes">
                <div className="container">
                    <div className="ten columns">
                        <div className="container box">
                            <div className="third columns deck">
                                <div className="cards">
                                    <div className="card">
                                        <img src="/images/eduCareers.jpg" alt="Who_We_Are" />
                                        <div className="text">
                                            <h3>Career Matching</h3>
                                            <p>Services to match those seeking employment with potential employers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="third columns deck">
                                <div className="cards">
                                    <a href="">
                                        <div className="card">
                                            <img src="/images/transpoCareers.jpg" alt="Who_We_Are" />
                                            <div className="text">
                                                <h3>Workforce Development</h3>
                                                <p>Resources offering training, career development and other services to improve the workforce</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="third columns deck">
                                <div className="cards">
                                    <a href="">
                                        <div className="card">
                                            <img src="/images/carCareers.jpg" alt="Who_We_Are" />
                                            <div className="text">
                                                <h3>Finances</h3>
                                                <p>Financial planning on other services to establish health financial habits
</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CareersTerminal />

            {/* <section className="testimony">
                <div className="container">
                    <div className="seven columns offset-by-one-half">
                        <div className="header">
                            <h1>Reviews By Our<br /> Community Members</h1>
                        </div>
                        <div className="slider">
                            <div className="slides">
                                <div className="slide">
                                    <div className="image">
                                        <img src="/images/torry.png" alt="" />
                                    </div>
                                    <h2>Torry Butler</h2>
                                    <h4>Birmingham, Alabama</h4>
                                    <p>"The health of a community is defined by the physical and mental health, education, employment, and finances of its members. "Where You Work, Live and Play Determines Your Health".</p>
                                    <div className="rating">
                                        <FontAwesomeIcon icon={['fas', 'star']} />
                                        <FontAwesomeIcon icon={['fas', 'star']} />
                                        <FontAwesomeIcon icon={['fas', 'star']} />
                                        <FontAwesomeIcon icon={['fas', 'star']} />
                                        <FontAwesomeIcon icon={['far', 'star']} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="related">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h1>Related Articles</h1>
                        </div>
                        <div className="panel">
                            <div className="container">
                                <BlogPosts />
                                <div className="buttonwrap">
                                    <Link className="content button" to="/blog">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
}

export default Careers;