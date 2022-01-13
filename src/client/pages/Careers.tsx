import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* COMPONENT IMPORTS */
import SubHeader from '../components/SubHeader';
import Terminal from '../components/Terminal';
import BlogPosts from './BlogPosts';
import RecipeComp from '../components/RecipeComp';

<script async src="https://cse.google.com/cse.js?cx=6706cfd20be09ae17"></script>
const Careers = () =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <SubHeader />
            {/* CALL CONTENT SECTION */}
            <section className="careers">
                <div className="callout">
                    <img className="imgcallLeft" src="images/careerCallLeft.png" />
                    <img className="imgcallRight" src="images/careerCallRight.png" />
                    {/* <p className="tagline"><span>Use the above search tool to find jobs in Jefferson County.</span></p> */}
                    <div className="container">
                        <div className="eight columns offset-by-one">
                            <div className="heading">
                                <span/>
                                <h1>Find Your Next Career</h1>
                                <div className="gcse-search"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Terminal />

            <section>
                <div className="container">
                    <div className="row whyNow">
                        <div className="eight columns offset-by-one">
                            <div className="container">
                                <div className="ten columns">
                                    <div className="whyTextWide">
                                        <h1>Why Now?</h1>
                                        <p>There’s no better time for Black communities to have and claim a space of their own. The longevity of Black communities depends on a collective of people who are focused on improved health, overall wellness, and elevated financial practices. B-INCLUDED is that space and you can become part of that collective.<br /><br /> B-INCLUDED is meant to address healthcare needs and subsequently educational, employment, and financial gaps so that residents can work towards improved health and financial sustainability.</p>
                                        <Link className="button learnmore" to="/whynow">Learn More</Link>
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
                                <BlogPosts />
                                <div className="buttonwrap">
                                    <Link className="content button" to="/blog">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RecipeComp />
        </>
    );
}

export default Careers;
