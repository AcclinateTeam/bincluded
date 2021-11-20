import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Home = () =>
{
    return (
        <>
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

            <section>
                <div className="container">
                    <div className="row whyNow">
                        <div className="ten columns">
                            <div className="container">
                                <div className="five columns">
                                    <div className="whyText">
                                        <h1>Why Now?</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit vehicula cursus.</p>
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
                            <div className="two columns whyimage" style={{ backgroundColor: '#a4ac98' }}>
                                He Going Crazy on this beat right now
                            </div>
                            <div className="two columns whyimage" style={{ backgroundColor: '#51fac8' }}>
                                He Going Crazy on this beat right now
                            </div>
                            <div className="two columns whyimage" style={{ backgroundColor: '#9fcc11' }}>
                                He Going Crazy on this beat right now
                            </div>
                            <div className="two columns whyimage" style={{ backgroundColor: '#15ca18' }}>
                                He Going Crazy on this beat right now
                            </div>
                            <div className="two columns whyimage" style={{ backgroundColor: '#ff9878' }}>
                                He Going Crazy on this beat right now
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

            <section>
                <div className="container">
                    <div className="row foot">
                        <div className="ten columns">
                            <div className="sponsors">
                                <h1>Brought to you by</h1>
                                <div className="images">
                                    <img className="prosper" src="/images/prosper2.png" alt="" />
                                    <img className="uab" src="/images/uab2.png" alt="" />
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