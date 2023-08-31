import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../theme/Header';
import ImageModal from './ImageModal';


const SingleEvent = () => {

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
                            <p>Through “Bridging the Gap,” we are aiming to help communities of color recognize ways they can use artificial intelligence and machine learning to be healthy.</p>
                            <p>Over the last few months, we have hosted interactive educational sessions about artificial intelligence and machine learning that have reached over 265 Birmingham residents. This is remarkable as communities of color have been historically left out of conversations around the latest technology in healthcare and how it can be used to help people have better health outcomes.</p>
                            <h3>Event Details</h3>
                            <ul>
                                <li>Meeting 1 - Curator Pilot</li>
                                <li>Meeting 2 - Health Equity and AI/ML in Healthcare</li>
                                <li>Meeting 3 - Participatory Action Research: Research Topic</li>
                                <li>Meeting 4 - Data Collection</li>
                                <li>Meeting 5 - Data Evaluation</li>
                                <li>Meeting 6 - Community Member Lead Report(s)</li>
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

                            <div className="fourth columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/IMG_0018.jpg" />
                                </div>
                            </div>

                            <div className="fourth columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/_Q4A4570.jpg" />
                                </div>
                            </div>

                            <div className="fourth columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/8Q4A4418.jpg" />
                                </div>
                            </div>

                            <div className="fourth columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/_Q4A4882-Edit.jpg" />
                                </div>
                            </div>

                            <div className="fourth columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/8Q4A4389.jpg" />
                                </div>
                            </div>

                            <div className="fourth columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/8Q4A4935.jpg" />
                                </div>
                            </div>

                            <div className="fourth columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/1I2A1482.jpg" />
                                </div>
                            </div>

                            <div className="fourth columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/6Q3A8925.jpg" />
                                </div>
                            </div>

                            {/* <div className="fourth columns">
                                <div className="photo">
                                    <ImageModal imageUrl="/images/events/miles/8Q4A4418.jpg" />
                                </div>
                            </div> */}


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


export default SingleEvent;