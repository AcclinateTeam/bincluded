import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/* COMPONENT IMPORTS */
import Header from '../components/Header';
import Terminal from '../components/Terminal';
import RecipeComp from '../components/RecipeComp';
import BlogPosts from './BlogPosts';

const Health = () =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
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
                            <h1>Health Resources</h1>
                            <p>
                                #BIncluded is a movement with a mission to build a community of individuals ready to take control of their health and future.
                            </p>
                        </div>
                        <div className="callbutton">
                            <a className="button signup" href="https://nowincluded.mn.co/groups/6170862?utm_source=manual">Join The Community</a>
                            <Link className="button learnmore" to="/whynow">Learn More</Link>
                        </div>
                    </div>
                    <div className="callimage">
                        <img className="card-img" src="/images/healthcall.png" alt="Callout Image Placeholder" />
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

            <section className="health content">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="featured">
                            <div className="face">
                                <div className="tag">
                                    <h6>Featured Resource</h6>
                                </div>
                                <img className="health" src="/images/xllentlife.png" alt="PatchRX" />
                            </div>
                            <div className="back">
                                <h3>Xcellent Life</h3>
                                <p>Xcellent Life provides a comprehensive digital health platform that evaluates more factors utilizing a three-dimensional approach involving advanced methodologies (Relational Bayesian Networks, Polytomous, Kaplan-Meier and our Proprietary Method for RtHD) for predictive analytics and Artificial Intelligence and as a result, can provide more personalized health insights and identify potential issues more accurately and faster than any of the other solutions. Our approach of being data source agnostic coupled with our analytics capabilities sets us aside from the existing vendors who are providing generalized insights but not personalized Real-time Human Diagnostics as our solution is designed to do.</p>

                                <a href="https://xcellentlife.com/" target="_blank">Visit Site</a> or <a href="https://nlp.xcellentlife.com/">Sign Up</a>
                            </div>
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

            <RecipeComp />

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

export default Health;