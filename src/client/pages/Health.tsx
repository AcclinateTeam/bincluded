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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus, tellus et convallis fermentum, risus lorem elementum sem, sit amet feugiat urna nibh eu lacus. Vestibulum vel auctor turpis. In vel fermentum metus. Suspendisse vel nisl a mauris congue commodo. Morbi non fermentum leo. Donec feugiat tortor sit amet ullamcorper placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris aliquam diam ante, ut sodales purus aliquam at. Morbi sit amet quam suscipit, vulputate sem id, ullamcorper orci. In ut sagittis nibh. Nulla ullamcorper finibus nisi.</p>
                                <a href="">Visit Site</a>
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
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut lacus vitae massa placerat convallis. Nunc posuere, turpis ut ultrices dignissim, mi mauris bibendum nisi, rutrum ullamcorper magna sapien nec libero.”</p>
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
                                                <h2>Eating Healthy in 2021</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                                <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
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
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                                <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
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
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                                <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttonwrap">
                                    <Link className="content button" to="/recipes">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
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