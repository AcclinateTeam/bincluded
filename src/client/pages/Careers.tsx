import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/* COMPONENT IMPORTS */
import SubHeader from '../components/SubHeader';

const Careers = () =>
{
    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <SubHeader />
            {/* CALL CONTENT SECTION */}
            <section className="careers">
                <div className="callout">
                    <img className="imgcallLeft" src="images/careerCallLeft.png" />
                    <img className="imgcallRight" src="images/careerCallRight.png" />
                    <p className="tagline">Hundred of roles across <span>all industries.</span></p>
                    <div className="container">
                        <div className="eight columns offset-by-one">
                            <div className="heading">
                                <h1>Find Your Next Career</h1>
                                {/*Programmable Search Engine for Job Search*/}
                                <script async src="https://cse.google.com/cse.js?cx=e27038f2a37daf23e"></script>
                                <div class="gcse-search"></div>
                                {/* <form>
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            {/* MAIN CONTENT SECTION */}
            <section className="careers">
                <div className="container">
                    <div className="row">
                        {/* CONTENT START */}
                        <div className="eight columns offset-by-one">
                            <div className="container cardpanel">
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Patient Care</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Patient Care</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Patient Care</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Patient Care</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Patient Care</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Patient Care</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Patient Care</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Patient Care</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/bhampromise.png" alt="" />
                                            <h2>Patient Care</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row whyNow">
                        <div className="eight columns offset-by-one">
                            <div className="container">
                                <div className="ten columns">
                                    <div className="whyTextWide">
                                        <h1>Why Now?</h1>
                                        <p>There’s no better time for Black communities to have and claim a space of their own. The longevity of Black communities depends on a collective of people who are focused on improved health, overall wellness, and elevated financial practices. B-INCLUDED is that space and you can become part of that collective.<br /><br /> B-INCLUDED is meant to address healthcare needs and subsequently educational, employment, and financial gaps so that residents can work towards improved health and financial sustainability.</p>
                                        <Link className="button learnmore" to="/">Learn More</Link>
                                    </div>
                                </div>                                
                            </div>
                        </div>

                        {/* IMAGE BACKGROUNDS */}
                        <div className="two columns whyimage" style={{ backgroundImage: `url(/images/whynow1.jpg)` }}></div>
                        <div className="two columns whyimage" style={{ backgroundImage: `url(/images/whynow4.jpg)` }}></div>
                        <div className="two columns whyimage" style={{ backgroundImage: `url(/images/whynow3.jpg)` }}></div>
                        <div className="two columns whyimage" style={{ backgroundImage: `url(/images/whynow2.jpg)` }}></div>
                        <div className="two columns whyimage" style={{ backgroundImage: `url(/images/whynow5.jpg)` }}></div>
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
                                            <div className="image" style={{ backgroundImage: `url(/images/blog6.jpg)` }}></div>
                                            <div className="text">
                                                <h2>Top In-Demand Skills for 2022</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                                <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="articles">
                                        <div className="article">
                                            <div className="image" style={{ backgroundImage: `url(/images/blog5.jpg)` }}></div>
                                            <div className="text">
                                                <h2>How To Stay Focused</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                                <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="articles">
                                        <div className="article">
                                            <div className="image" style={{ backgroundImage: `url(/images/blog4.jpg)` }}></div>
                                            <div className="text">
                                                <h2>#WFH Tips and Tricks</h2>
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

export default Careers;
