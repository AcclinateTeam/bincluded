import moment from 'moment';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../components/Header';
import FamilyTerminal from '../components/FamilyTerminal';
import BlogPosts from './BlogPosts';
import Prosper from '../components/Prosper';
import Logo from '../components/subComponents/Logo';

const Family = () =>
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
            <section id="hero" className="hero family" style={{ height: `100vh` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/familyhead.jpg)`, backgroundPosition: `0 0` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>Family Resources</h1>
                        <p><Logo color="#ffffff" /> provides easy access to resources that inspire well-being and success in the lives of families.</p>

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
                        <a href="/">Home</a> {'>'} Family Resources
                    </div>
                </div>
            </section>

            {/* SECTORS OF INCLUSIVITY */}
            <section className="incFamily">
                <div className="container">
                    <div className="four columns">
                        <div className="heading">
                            <h2>Our families are <span className="blue">our foundation</span></h2>
                        </div>
                    </div>
                    <div className="six columns text">
                        <p>Family is the cornerstone of community. Building a healthier community starts with healthy families. <Logo color="#050236" /> provides a place for families to access local resources and connect with the broader community </p>
                    </div>
                </div>
            </section>

            {/* IMAGE DIVIDER SECTION */}
            <section className="divider">
                <img src="/images/familymid.png" alt="birmingham" />
            </section>

            {/* WHY IT MATTERS SECTION */}
            <section className="resFam">
                <div className="container">
                    <div className="five columns text">
                        <p>Every family deserves to thrive and have access to a strong and effective support network through family.</p>
                    </div>
                    <div className="five columns">
                        <div className="heading">
                            <h2>Strengthening community through <span className="blue">family resources</span></h2>
                        </div>
                    </div>
                </div>
            </section>           

            {/* WHO WE ARE */}
            <section className="familyRes">
                <div className="container">
                    <div className="ten columns">
                        <div className="container box">
                            <div className="fourth columns deck">
                                <div className="cards">
                                    <Link to="/whyNow">
                                        <div className="card">
                                            <img src="/images/youthRes.jpg" alt="Who_We_Are" />
                                            <div className="text">
                                                <h3>Educational Resources</h3>
                                                <p>Access education services to support learning and development.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="fourth columns deck">
                                <div className="cards">
                                    <a href="">
                                        <div className="card">
                                            <img src="/images/research.jpg" alt="Who_We_Are" />
                                            <div className="text">
                                                <h3>Transportation Resources</h3>
                                                <p>Access affordable transportation services across the Birmingham area</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="fourth columns deck">
                                <div className="cards">
                                    <a href="">
                                        <div className="card">
                                            <img src="/images/youthRes.jpg" alt="Who_We_Are" />
                                            <div className="text">
                                                <h3>Youth Resources</h3>
                                                <p>Access child development, mentoring and other resources for children and youth</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="fourth columns deck">
                                <div className="cards">
                                    <a href="">
                                        <div className="card">
                                            <img src="/images/seniorRes.jpg" alt="Who_We_Are" />
                                            <div className="text">
                                                <h3>Legal Resources</h3>
                                                <p>Access child development, mentoring and other resources for children and youth</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>           

            <FamilyTerminal />            
        </>
    );
}

export default Family;