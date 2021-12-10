import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* COMPONENT IMPORTS */
import SubHeader from '../components/SubHeader';
import BlogPosts from './BlogPosts';
import RecipeComp from '../components/RecipeComp';

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
                    <p className="tagline"><span>B-Included places employment opportunities around Birmingham in a central place so that you can level up your career.</span></p>
                    <div className="container">
                        <div className="gcse-search"></div>
                        <div className="eight columns offset-by-one">
                            <div className="heading">
                                <h1>Find Your Next Career</h1>
                                {/* <div>
                                
                                </div> */}
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
                                            <img src="/images/UAB5.png" alt="" />
                                            <h2>Patient Care Tech</h2>
                                            
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                            <p>To assume responsibility for certain technical aspects of patient care as directed by the RN/LPN for the hospital. To obtain and record vitals, weight, inputs...</p>
                                            {/* <Link to="https://uab.taleo.net/careersection/ext/jobdetail.ftl?job=T192849&tz=GMT-06%3A00&tzname=America%2FChicago">More Details <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                            <a href="https://uab.taleo.net/careersection/ext/jobdetail.ftl?job=T192849&tz=GMT-06%3A00&tzname=America%2FChicago" target="_blank">More Details <FontAwesomeIcon icon="arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                        <img src="/images/UAB5.png" alt="" />
                                            <h2>Mechanic</h2>
                                            <p>Reads, understands and interprets blueprints drawings, floor plans, schedules and manufacturers’ operating and/or maintenance specifications as related...</p>
                                            {/* <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                            <a href="https://uab.taleo.net/careersection/ext/jobdetail.ftl?job=T192850&tz=GMT-06%3A00&tzname=America%2FChicago" target="_blank">More Details <FontAwesomeIcon icon="arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/UAB5.png" alt="" />
                                            <h2>Office Associate</h2>
                                            <p>Under general supervision, performs standard clerical and administrative duties. Requires demonstrated knowledge of the fundamental concepts, practices...</p>
                                            {/* <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                            <a href="https://uab.taleo.net/careersection/ext/jobdetail.ftl?job=T192507&tz=GMT-06%3A00&tzname=America%2FChicago" target="_blank">More Details <FontAwesomeIcon icon="arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/UAB5.png" alt=""/>
                                            <h2>Registered Nurse</h2>
                                            <p>To utilize the nursing process to care and/or counsel individuals in the promotion and maintenance of health and the prevention of illness and...</p>
                                            {/* <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                            <a href="https://uab.taleo.net/careersection/ext/jobdetail.ftl?job=T188742&tz=GMT-06%3A00&tzname=America%2FChicago" target="_blank">More Details <FontAwesomeIcon icon="arrow-right" /></a>

                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/UAB5.png" alt="" />
                                            <h2>Educational Liaison</h2>
                                            <p>Serves as an educational liaison and provides oversight for various projects initiated by internal organizations or departments. Related...</p>
                                            {/* <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                            <a href="https://uab.taleo.net/careersection/ext/jobdetail.ftl?job=T192748&tz=GMT-06%3A00&tzname=America%2FChicago" target="_blank">More Details <FontAwesomeIcon icon="arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/UAB5.png" alt="" />
                                            <h2>Administrator</h2>
                                            <p>This position provides secretarial and administrative support to departmental Section Chiefs and various Radiology faculty members, while also...</p>
                                            {/* <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                            <a href="https://uab.taleo.net/careersection/ext/jobdetail.ftl?job=T191330&tz=GMT-06%3A00&tzname=America%2FChicago" target="_blank">More Details <FontAwesomeIcon icon="arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/UAB5.png" alt="" />
                                            <h2>Dispatcher-Police</h2>
                                            <p>Sends and receives radio transmissions from sworn and non-sworn field units and surrounding agencies. Answers the telephone and determines the form of assistance....</p>
                                            {/* <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                            <a href="https://uab.taleo.net/careersection/ext/jobdetail.ftl?job=T189504&tz=GMT-06%3A00&tzname=America%2FChicago" target="_blank">More Details <FontAwesomeIcon icon="arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/UAB5.png" alt="" />
                                            <h2>Floor Care Tech</h2>
                                            <p>Performs floor care, maintenance and finishing duties. Cares for a variety of surfaces including carpet, tile, stone, vinyl and wood. Uses professional cleaning products...</p>
                                            {/* <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                            <a href="https://uab.taleo.net/careersection/ext/jobdetail.ftl?job=T192294&tz=GMT-06%3A00&tzname=America%2FChicago" target="_blank">More Details <FontAwesomeIcon icon="arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="cardwrap">
                                        <div className="card">
                                            <img src="/images/UAB5.png" alt="" />
                                            <h2>Electrician</h2>
                                            <p>Performs routine and preventive maintenance and repair, modify, replace and install a wide variety of low and high voltage electrical and non-medical electronic fixed or portable...</p>
                                            {/* <Link to="">More Details <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                            <a href="https://uab.taleo.net/careersection/ext/jobdetail.ftl?job=T186474&tz=GMT-06%3A00&tzname=America%2FChicago" target="_blank">More Details <FontAwesomeIcon icon="arrow-right" /></a>
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
