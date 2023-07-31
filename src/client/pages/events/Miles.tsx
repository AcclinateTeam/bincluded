import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../theme/Header';
import ImageModal from './ImageModal';


const SinglePartner = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>

            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero">
                <div className="blogcall">
                    <img src="/images/events/miles/IMG_0024.jpg" alt="" />
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} <Link to="/events">Events</Link> {'>'} Bridging the Gap: Miles College
                    </div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="singevent">
                <div className="container">
                    <div className="ten columns intro">
                        <div className="heading">
                            <h2>Bridging the Gap: Miles College</h2>
                        </div>
                    </div>
                    <div className="six columns">
                        <div className="content">
                            <p>Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute irure dolor in repre hen derit in voluptate velit esse.</p>
                            <p>Cillum dolore eu fugiat nulla pariatur cepteur sint occaecat cupidatat eaque ipsa quae illo proident sunt in culpa qui officia deserunt mollit anim id est laborum perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore laudant rem aperiam eaque ipsa quae ab illo inventore veritatis quasi architecto. </p>
                            <h3>Event Details</h3>
                            <ul>
                                <li>Meeting 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Meeting 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Meeting 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Meeting 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Meeting 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Meeting 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="four columns">
                        <div className="image">
                            <img src="/images/events/miles/_Q4A4903.jpg" alt="" />
                        </div>
                    </div>
                    <div className="ten columns">
                        <div className="videos">
                            <div className="heading">
                                <h2>Event Videos</h2>
                            </div>

                            {/* Deleted miles video */}
                            
                            <div className="five columns">
                                <div className="card small">
                                    <video controls>
                                        <source src="/images/events/miles/huyenmiles.mp4" type="video/mp4" />
                                        Sorry, your browser doesn't support videos.
                                    </video>
                                </div>
                            </div>
                            <div className="five columns">
                            <div className="card small">
                                    <video controls>
                                        <source src="/images/events/miles/rosemiles.mp4" type="video/mp4" />
                                        Sorry, your browser doesn't support videos.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ten columns">
                        <div className="photos">
                            <div className="heading">
                                <h2>Event Photos</h2>
                            </div>

                            <div className="third columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/IMG_0018.jpg" />
                                </div>
                            </div>

                            <div className="third columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/_Q4A4570.jpg" />
                                </div>
                            </div>

                            <div className="third columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/_Q4A4661.jpg" />
                                </div>
                            </div>

                            <div className="third columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/_Q4A4882-Edit.jpg" />
                                </div>
                            </div>

                            <div className="third columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/8Q4A4389.jpg" />
                                </div>
                            </div>

                            <div className="third columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/8Q4A4935.jpg" />
                                </div>
                            </div>

                            <div className="third columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/1I2A1482.jpg" />
                                </div>
                            </div>
                            
                            <div className="third columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/6Q3A8925.jpg" />
                                </div>
                            </div>
                            
                            <div className="third columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/8Q4A4418.jpg" />
                                </div>
                            </div>

                            
                            <div className="third columns"></div>
                            <div className="third columns"></div>
                            <div className="third columns"></div>
                            <div className="third columns"></div>
                            <div className="third columns"></div>
                            <div className="third columns"></div>
                            <div className="third columns"></div>
                            <div className="third columns"></div>
                            <div className="third columns"></div>
                            <div className="third columns"></div>
                            <div className="third columns"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default SinglePartner;