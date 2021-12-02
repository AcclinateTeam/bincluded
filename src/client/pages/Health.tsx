import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/* COMPONENT IMPORTS */
import Header from '../components/Header';
import Terminal from '../components/Terminal';
import RecipeComp from '../components/RecipeComp';

const Health = () =>
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
                            <div className="four columns">
                                <div className="image">
                                    <img className="card-img" src="/images/healthcall.png" />
                                </div>
                            </div>
                        </div>
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
                                <img className="health" src="/images/patchrx.png" alt="PatchRX" />
                            </div>
                            <div className="back">
                                <h3>PatchRX</h3>
                                <p>
                                    How can we use technology to help people be healthier? Since then, our mission has evolved and expanded more than we could have ever expected. With personal instances of non-adherence effecting both founders, it became their dedicated mission to help patients get the most from their medications. And that’s what PatchRx is designed to do. We’re improving prescription adherence and helping our users remember to take their medication through data-driven technology. The service – a universal smart pill bottle device, a patient-facing app, and a pharmacy web app – helps...</p>

                                <a href="https://www.patchrx.io/">Visit Site</a>
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
                                <div className="third columns">
                                    <div className="articles">
                                        <div className="article">
                                            <div className="image" style={{ backgroundImage: `url(/images/healthy.jpg)` }}></div>
                                            <div className="text">
                                                <h2>Eating Healthy in 2022</h2>
                                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                                <p>With more time spent at home in 2020 and 2021, there’s been a rise in baking, cooking (and eating) across the country. As a new year begins, it’s time to...</p>

                                                <Link to="https://www.gohealthuc.com/library/tips-eating-healthier-2022">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="articles">
                                        <div className="article">
                                            <div className="image" style={{ backgroundImage: `url(/images/yoga.jpg)` }}></div>
                                            <div className="text">
                                                <h2>3 Yoga Tips For You</h2>
                                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                                <p>Yoga is a practice that can include everyone, with modifications available for most poses. It also can help you to notice what your mind and body are telling...</p>


                                                <Link to="https://health.clevelandclinic.org/considering-yoga-3-tips-for-finding-the-right-class-for-you/">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="articles">
                                        <div className="article">
                                            <div className="image" style={{ backgroundImage: `url(/images/yellow.jpg)` }}></div>
                                            <div className="text">
                                                <h2>Staying Fit on a Budget</h2>
                                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                                <p>Want to get in shape? Don't worry—it doesn't have to cost you half your paycheck. Whether you’re trying to get bigger biceps or you just want to be able to...</p>
                                                <Link to="https://www.discover.com/online-banking/banking-topics/tips-for-getting-fit-on-a-budget/">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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