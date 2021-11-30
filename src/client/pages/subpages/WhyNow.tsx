import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SubHeader from '../../components/SubHeader';

const WhyNow = () =>
{
    return (
        <>
            <SubHeader />

            <div className="trialback">
                <svg viewBox="0 0 1440 591" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H1440V336L0 564V0Z" fill="#050236" />
                    <path d="M1081.44 382.129L1234.45 350.953L1227.3 395.384L1075.17 424.695L1081.44 382.129Z" fill="#CA1D48" />
                    <path d="M1240.49 309.466L1392.13 276.98L1385.27 321.479L1234.49 352.093L1240.49 309.466Z" fill="#287FDD" />
                    <path d="M1227.64 396.592L1379.76 364.198L1372.91 408.697L1222.13 439.311L1227.64 396.592Z" fill="#ECECEC" />
                    <path d="M213.437 493.129L366.454 461.953L359.305 506.384L207.166 535.695L213.437 493.129Z" fill="#CA1D48" />
                    <path d="M372.49 420.466L524.127 387.98L517.269 432.479L366.494 463.093L372.49 420.466Z" fill="#287FDD" />
                    <path d="M359.637 507.592L511.765 475.198L504.907 519.697L354.132 550.311L359.637 507.592Z" fill="#ECECEC" />
                </svg>
            </div>

            <section className="whyComp">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h1>Why Now?</h1>
                            <Link to="/">Click Here to Read the Blog <FontAwesomeIcon icon="arrow-right" /></Link>
                            <p>B-Included is a movement with a mission to build a community of individuals ready to take control of their health and future.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="whyComp">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="container videoPanel">
                            <div className="seven columns">
                                <div className="vidPanes">
                                    <div className="vidPane">
                                        Video Content Goes Here
                                    </div>
                                </div>
                            </div>
                            <div className="three columns">
                                <div className="container">
                                    <div className="ten columns panes">
                                        <div className="pane">
                                            <h1>Our Mission</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                        </div>
                                    </div>
                                    <div className="ten columns panes">
                                        <div className="pane">
                                            <h1>Our Vision</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                        </div>
                                    </div>
                                    <div className="ten columns panes">
                                        <div className="pane end">
                                            <h1>Our Values</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="leaders">
                <div className="leadersbg">
                    asdasdasdasd

                </div>
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h1>Leadership At Our Core</h1>
                            <h3>Birmingham Included gives its residents a chance at a happier, healthier life. </h3>
                            <p>Acclinate™, a Birmingham-based company specializing in digital health products, is partnering with Jefferson County to help 50,000 county residents control their future by taking charge of their health. The B-Included website will engage residents and provide easy access to pertinent health resources and job assistance.</p>
                        </div>
                        <div className="container">
                            <div className="six columns">
                                <div className="container">
                                    <div className="five columns windows">
                                        <div className="window">
                                            <FontAwesomeIcon icon={['fas', 'rss']} />
                                            <h1>Name Goes Here</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                        </div>
                                    </div>
                                    <div className="five columns windows">
                                        <div className="window">
                                            <FontAwesomeIcon icon={['fas', 'rss']} />
                                            <h1>Name Goes Here</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                        </div>
                                    </div>
                                    <div className="five columns windows">
                                        <div className="window">
                                            <FontAwesomeIcon icon={['fas', 'rss']} />
                                            <h1>Name Goes Here</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                        </div>
                                    </div>
                                    <div className="five columns windows">
                                        <div className="window">
                                            <FontAwesomeIcon icon={['fas', 'rss']} />
                                            <h1>Name Goes Here</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="four columns">
                                <div className="cards">
                                    <div className="card">
                                        <img src="/images/article1.jpg" alt="" />
                                        <h1>Acclinate + Prosper</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                        <a href="">Read About How This Partnership Was Formed <FontAwesomeIcon icon="arrow-right" /></a>
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

export default WhyNow;