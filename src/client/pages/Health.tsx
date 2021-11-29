import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/* COMPONENT IMPORTS */
import SubHeader from '../components/SubHeader';

const Health = () =>
{
    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <SubHeader />
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
                                    <Link className="button signup" to="/">Join The Community</Link>
                                    <Link className="button learnmore" to="/">Learn More</Link>
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

            <section className="addRes">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="header">
                            <h1>Additional<br /> Health Resources</h1>
                        </div>
                        <ul className="terminal">
                            <a href="#"><li className="active">Personal</li></a>
                            <a href="#"><li>Mental</li></a>
                            <a href="#"><li>Physical</li></a>
                            <a href="#"><li>TeleHealth</li></a>
                        </ul>
                        <div className="panel">
                            <div className="container">
                                <div className="third columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="image">
                                                <img src="/images/christhealth.png" alt="" />
                                            </div>
                                            <h2>Christ Health</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="image">
                                                <img src="/images/cahaba.png" alt="" />
                                            </div>
                                            <h2>Cahaba Medical Care</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="image">
                                                <img src="/images/mpower.png" alt="" />
                                            </div>
                                            <h2>M-POWER Ministries</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttonwrap">
                            <Link className="button" to="/">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                        </div>
                    </div>
                </div>
            </section>

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

            <section className="recComp">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="panel">
                            <div className="four columns">
                                <div className="heading">
                                    <h1>Try Our<br /> Healthy Recipes</h1>
                                    <p>B-Included provides easy access to resources that are beneficial in reaching one’s goals in maintaining a healthy lifestyle.</p>
                                </div>
                            </div>
                            <div className="six columns">
                                <div className="container">
                                    <div className="five columns">
                                        <div className="recwrap">
                                            <div className="recipe">
                                                <div className="image" style={{ backgroundImage: `url(/images/pepperSteak.jpg)` }}></div>
                                                <div className="text">
                                                    <h2>Pepper Steak</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                                    <Link to="">View Recipe <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="five columns">
                                        <div className="recwrap">
                                            <div className="recipe">
                                                <div className="image" style={{ backgroundImage: `url(/images/veganPasta.jpg)` }}></div>
                                                <div className="text">
                                                    <h2>Vegan Pasta</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                                    <Link to="">View Recipe <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
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