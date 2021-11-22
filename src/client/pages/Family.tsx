import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/* COMPONENT IMPORTS */
import SubHeader from '../components/SubHeader';

const Family = () =>
{
    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <SubHeader />
            {/* CALL CONTENT SECTION */}
            <section className="call">
                <div className="callbg" style={{ backgroundImage: `url("/images/health.jpg")` }}></div>
                {/* CALLOUT CONTENT START */}
                <div className="container">
                    <div className="row">
                        <div className="eight columns offset-by-one">
                            <div className="text">
                                <h1>Family</h1>
                                <p>B-Included provides easy access to resources that are helpful in building and maintaining strong family units in Birmingham.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT SECTION */}
            <section className="health content">
                <div className="container">
                    <div className="row">
                        {/* CONTENT START */}
                        <div className="eight columns offset-by-one">
                            <h1>Family Resources</h1>

                            <div className="cardpanel">
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Birmingham Promise</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Birmingham Promise</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Birmingham Promise</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Birmingham Promise</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Birmingham Promise</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Birmingham Promise</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Birmingham Promise</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Birmingham Promise</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Birmingham Promise</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
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
                        <h1>Related Articles</h1>
                        <div className="panel">
                            <div className="container">
                                <div className="third columns">
                                    <div className="relwrap">
                                        <div className="article">
                                            <div className="image" style={{ backgroundImage: `url(/images/article1.jpg)` }}></div>
                                            <div className="text">
                                                <h2>Article #1</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                                <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="relwrap">
                                        <div className="article">
                                            <div className="image" style={{ backgroundImage: `url(/images/article2.jpg)` }}></div>
                                            <div className="text">
                                                <h2>Article #2</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                                <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="relwrap">
                                        <div className="article">
                                            <div className="image" style={{ backgroundImage: `url(/images/article3.jpg)` }}></div>
                                            <div className="text">
                                                <h2>Article #3</h2>
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

            {/* <section className="recipes">
                <div className="container">
                    <div className="row">
                        <div className="eight columns offset-by-one">
                            <h1>Recipes</h1>
                            <div className="recpanel">

                                <div className="third columns">
                                    <div className="recipe">
                                        <div className="image">
                                            <img src="/images/food2.jpg" alt="" />
                                        </div>
                                        <h2>Birmingham Promise</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                        <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="recipe">
                                        <div className="image">
                                            <img src="/images/food1.jpg" alt="" />
                                        </div>
                                        <h2>Birmingham Promise</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                        <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="recipe">
                                        <div className="image">
                                            <img src="/images/food3.jpg" alt="" />
                                        </div>
                                        <h2>Birmingham Promise</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                        <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            
        </>
    );
}

export default Family;