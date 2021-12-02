import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../components/Header';


const Partners = () =>
{
    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />
            {/* CALL CONTENT SECTION */}
            <section className="call">
                <div className="callbg" style={{ backgroundImage: `url("/images/healthbg.png")` }}></div>
                {/* CALLOUT CONTENT START */}
                <div className="container">
                    <div className="ten columns">
                        <div className="callContent">
                            <div className="five columns offset-by-one">
                                <div className="text">
                                    <h1>Partners</h1>
                                    <p>B-Included provides easy access to resources that are beneficial in reaching one’s goals in maintaining a healthy lifestyle.</p>
                                </div>
                                <div className="callbutton">
                                    <Link className="button signup" to="/">Become A Partner</Link>
                                    <Link className="button learnmore" to="/">View Partners</Link>
                                </div>
                            </div>
                            <div className="four columns">
                                <div className="image">
                                    <img className="card-img" src="/images/covidcall.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container covid19">
                    <div className="eight columns offset-by-one">
                        <div className="phrase">
                            <div className="face" style={{ backgroundImage: `url("/images/article1.jpg")` }}>
                                <div className="overlay">
                                    <h1>Partner<br /> Promise</h1>
                                </div>
                            </div>
                            <div className="back">
                                <h1>COVID-19</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container covid19">
                    <div className="eight columns offset-by-one">
                        <div className="panel">
                            <div className="container">
                                <div className="ten columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="container">
                                                <div className="six columns texts">
                                                    <div className="tag">
                                                        <h6>Featured Partner</h6>
                                                    </div>
                                                    <div className="text">
                                                        <h1>Meet Our Latest Partner - Wal-Mart</h1>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ut convallis lacus, turpis ipsum. Sagittis, facilisis quam sollicitudin libero ut. Cagittis, facilisis quam sollicitudin libero.</p>
                                                    </div>
                                                </div>
                                                <div className="four columns video">
                                                    <div className="partnerImg">
                                                        <div className="partnerImg" style={{ backgroundImage: `url("/images/wally.png")`, backgroundColor: '#3872c8' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ten columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="container">
                                                <div className="four columns video">
                                                    <div className="partnerImg" style={{ backgroundImage: `url("/images/jnj.png")`, backgroundColor: '#e43623'  }}></div>
                                                </div>
                                                <div className="six columns texts">
                                                    <div className="tag right">
                                                        <h6>Featured Partner</h6>
                                                    </div>
                                                    <div className="text right">
                                                        <h1>Johnson<br /> &#38; Johnson</h1>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ut convallis lacus, turpis ipsum. Sagittis, facilisis quam sollicitudin libero ut. Cagittis, facilisis quam sollicitudin libero.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="ten columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="container">
                                                <div className="six columns texts">
                                                    <div className="tag">
                                                        <h6>Featured Partner</h6>
                                                    </div>
                                                    <div className="text">
                                                        <h1>Alabama United</h1>
                                                        <p>Birmingham partners are working together to support underserved and vulnerable populations with COVID-19 tests. Led by Michael Mugavero, MD, UAB Professor of Medicine, Division of Infectious Diseases continue to position Birmingham as a leader in serving underserved populations. Community-engaged RADx-UP projects, like Alabama United, help the NIH understand and alleviate the barriers to COVID-19 testing across the nation.</p>
                                                    </div>
                                                </div>
                                                <div className="four columns video">
                                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yIxZsG8Cew4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <div className="container partnerUp">
                    <div className="ten columns">
                        <div className="content">
                            <div className="container">
                                <div className="eight columns offset-by-one">
                                    <div className="seven columns">
                                        <p>We want you to be a part of the health conversation.</p>
                                    </div>
                                    <div className="three columns">
                                        <a href="">Partner With Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Partners;