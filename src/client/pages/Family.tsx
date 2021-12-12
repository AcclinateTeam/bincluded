import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../components/Header';
import Terminal from '../components/Terminal';
import BlogPosts from './BlogPosts';

const Family = () =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() =>
    {
        fetch('api/blogPosts/blog')
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />
            {/* CALL CONTENT SECTION */}
            <section className="call">
                <div className="callbg">
                    <svg viewBox="0 0 1440 639" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-262.162 -1003.94L1710.77 -637.787L1284.43 565.061L-567 638.585L-262.162 -1003.94Z" fill="#287FDD" />
                        <path d="M-262.163 -1003.94L1533.63 -671.755L1284.43 565.061L-505.092 305.013L-262.163 -1003.94Z" fill="#CA1D48" />
                        <path d="M-262.162 -1003.94L1418.37 -692.054L1284.43 565.06L-532.715 453.854L-262.162 -1003.94Z" fill="#050236" />
                    </svg>
                </div>
                {/* CALLOUT CONTENT START */}
                <div className="callout">
                    <div className="content">
                        <div className="calltext">
                            <h1>Family Resources</h1>
                            <p>#B-Included provides easy access to resources that are beneficial in reaching one’s goals in maintaining a healthy lifestyle.</p>
                        </div>
                        <div className="callbutton">
                            <a className="button signup" href="https://nowincluded.mn.co/groups/6170862?utm_source=manual">Join The Community</a>
                            <Link className="button learnmore" to="/whynow">Learn More</Link>
                        </div>
                    </div>
                    <div className="callimage">
                        <img className="card-img" src="/images/callfamily.png" alt="Callout Image Placeholder" />
                    </div>
                </div>
            </section>

            {/* CONTENT HEADER SECTION */}
            <section className="health content">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="header">
                            <h2>Helping Jefferson County's Community and More</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featStory">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="container story" style={{ backgroundColor: "white" }}>
                            {blogPosts.map((feat, index) =>
                            {
                                if (index === 0)
                                {
                                    return (
                                        <>
                                            <div className="four columns">
                                                <div className="image" style={{ backgroundImage: `url(${feat.imagelink})` }}></div>
                                            </div>
                                            <div className="six columns">
                                                <div className="text">
                                                    <h5>{moment(feat._created).format('MMM Do, YYYY')} | {feat.author}</h5>
                                                    {/* <ul className="featTags">
                                                        <li>Chronic Illness</li>
                                                        <li>Mental Health</li>
                                                    </ul> */}
                                                    <h1>{feat.title}</h1>
                                                    <p>{feat.description}</p>
                                                    <Link to={`/blog/single/${feat.id}`}>Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <Terminal />

            <section className="testimony">
                <div className="container">
                    <div className="eight columns offset-by-one">
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
            </section>
        </>
    );
}

export default Family;