import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';

/* COMPONENT IMPORTS */
import Header from '../components/Header';

const Home = () =>
{
    return (
        <>
            {/* HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section>
                <div className="callout" style={{ backgroundImage: "url(/images/callback.png)" }}>
                    <div className="jumbotron">
                        <div className="container">
                            <div className="eight columns offset-by-one">
                                <div className="five columns">
                                    <div className="calltext">
                                        <h1>Stand Up For Your Health</h1>
                                        <p>
                                            #BIncluded is a movement with a mission to build a community of individuals ready to take control of their health and future.
                                        </p>
                                    </div>
                                    <div className="callbutton">
                                        <Link className="button signup" to="/">Sign Up</Link>
                                        <Link className="button learnmore" to="/">Learn More</Link>

                                    </div>
                                </div>
                                <div className="five columns">
                                    <div className="callimage">
                                        <img className="card-img" src="/images/callimage.png" alt="Callout Image Placeholder" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PORTAL COMPONENT */}
            <section>
                <div className="container">
                    <div className="row portalbg">
                        <svg viewBox="0 0 653 667" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M83.501 -0.00195312H653.001V666.998H0.500977L83.501 -0.00195312Z" fill="#050236" />
                        </svg>

                        <div className="eight columns offset-by-one">
                            <div className="container portal">
                                <div className="third columns ports">
                                    <div className="port">
                                        <h1>Resources at your fingertips</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit vehicula cursus. </p>
                                    </div>
                                </div>
                                <div className="third columns ports">
                                    <div className="port">
                                        <FontAwesomeIcon icon="hard-hat" />
                                        <h4>Careers</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit vehicula cursus. </p>
                                    </div>
                                </div>
                                <div className="third columns ports">
                                    <div className="port">
                                        <FontAwesomeIcon icon="user-md" />
                                        <h4>Health</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit vehicula cursus. </p>
                                    </div>
                                </div>
                                <div className="third columns ports">
                                    <div className="port">
                                        <FontAwesomeIcon icon="users" />
                                        <h4>Family</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit vehicula cursus. </p>
                                    </div>
                                </div>
                                <div className="third columns ports">
                                    <div className="port">
                                        <FontAwesomeIcon icon="calendar-alt" />
                                        <h4>Events</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit vehicula cursus. </p>
                                    </div>
                                </div>
                                <div className="third columns ports">
                                    <div className="port">
                                        <FontAwesomeIcon icon="viruses" />
                                        <h4>COVID-19</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit vehicula cursus. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* WHY_NOW? COMPONENT */}
            <section>
                <div className="container">
                    <div className="row whyNow">
                        <div className="ten columns">
                            <div className="container">
                                <div className="five columns">
                                    <div className="whyText">
                                        <h1>Why Now?</h1>
                                        <p>Acclinate™, a Birmingham-based company specializing in digital health products, is partnering with Jefferson County to help 50,000 county residents control their future by taking charge of their health. The B-Included website will engage residents and provide easy access to pertinent health resources and job assistance.</p>
                                    </div>
                                </div>
                                <div className="three columns stats">
                                    <div className="five columns stat">
                                        <div className="point">
                                            <h3>125k</h3>
                                            <p>Patients Recovered</p>
                                        </div>
                                    </div>
                                    <div className="five columns stat">
                                        <div className="point">
                                            <h3>25k</h3>
                                            <p>Patients Quarantined</p>
                                        </div>
                                    </div>
                                    <div className="five columns stat">
                                        <div className="point">
                                            <h3><span>92k</span></h3>
                                            <p>Patients Under Treatment</p>
                                        </div>
                                    </div>
                                    <div className="five columns stat">
                                        <div className="point">
                                            <h3>12</h3>
                                            <p>Hospitals Active</p>
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
                </div>
            </section>

            {/* COVID-19 COMPONENT */}
            <section>
                <div className="container">
                    <div className="row covid">
                        <div className="ten columns">
                            <div className="container">
                                <div className="six columns offset-by-two">
                                    <h1>The latest data related to Covid-19</h1>
                                    <div className="fourth columns">
                                        <div className="data">
                                            <h3>125k</h3>
                                            <p>Patients Quarantined</p>
                                        </div>
                                    </div>
                                    <div className="fourth columns">
                                        <div className="data">
                                            <h3>12</h3>
                                            <p>Hospitals Active</p>
                                        </div>
                                    </div>
                                    <div className="fourth columns">
                                        <div className="data">
                                            <h3><span>49</span></h3>
                                            <p>Beds Available</p>
                                        </div>
                                    </div>
                                    <div className="fourth columns">
                                        <div className="data">
                                            <h3>175k</h3>
                                            <p>Vaccines Administered</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;