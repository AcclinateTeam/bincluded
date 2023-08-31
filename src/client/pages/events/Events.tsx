import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../theme/Header';
import Logo from '../../theme/Logo';


const Events = () => {
    // AUTO SCROLL TO TOP
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const [recentEvents, setRecentEvents] = useState([]);

    useEffect(() => {
        fetch('api/recentEvents/events')
            .then(res => res.json())
            .then(recentEvents => setRecentEvents(recentEvents))
    }, []);

    console.log(recentEvents)

    // Hero Background-Image Slide + Hero Text Fade-In
    useEffect(() => {
        const hero = document.getElementById('heroSlide');
        const bg = document.getElementById('bg');
        const img = document.getElementById('img');
        const text = document.getElementById('text');
        const header = document.getElementById('header');

        hero!.style.width = '100%';
        if (window.innerWidth <= 499) {
            bg!.style.width = '100%';
            img!.style.width = '100%';
        } else {
            bg!.style.width = '100%';
            img!.style.width = '100%';
        };

        setTimeout(() => {
            text!.style.cssText = 'padding-top: 0; opacity: 1;';
            header!.style.cssText = 'opacity: 1;';
        }, 1000);
    }, []);

    const [visible, setVisible] = useState(false);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero blog">
                <div id="heroSlide" className="heroSlide"> </div>
                <div className="heroContent">
                    <div className="image blog">
                        <div id="bg" className="bg">
                            <img id="img" src="/images/theme/1I2A6081.jpg" alt="" />
                        </div>
                    </div>
                    <div id="text" className="text">
                        <div className="calltext">
                            <h1>Events</h1>
                            <p>We partner with brands that are passionate about our <Logo color="#287fdd" /> mission and our community.</p>
                        </div>
                        <div className="callbutton">
                            <a className="button signup" href="https://www.videoask.com/ftmqd7gt3" target="_blank" rel="noopener noreferrer">Share Your Story</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} Events
                    </div>
                </div>
            </section>

            <section className="upcoming">
                <div className="header">
                    <h2>Upcoming <span>Events</span></h2>
                </div>
                <div className="slider">
                    <div className="slides">
                        <div className="date">
                            <h2>2</h2>
                            <h3>Sept</h3>
                            <span><FontAwesomeIcon icon="clock" /> 7:00pm</span>
                        </div>
                        <div className="details">
                            <h3>District 6 - Movies at the Park</h3>
                            <p>Birmingham City Council Pro Tem Crystal Smitherman, Senator Rodger Smitherman, Commissioner Sheila Tyson and the Titusville community present Movies at the Park.</p>
                            <ul>
                                <li><FontAwesomeIcon icon="map-marker-alt" /> Memorial Park - 524 6th Avenue S. Birmingham, Alabama 35205</li>
                            </ul>
                        </div>
                    </div>

                    <div className="slides">
                        <div className="date">
                            <h2>3</h2>
                            <h3>Sept</h3>
                            <span><FontAwesomeIcon icon="clock" /> 4pm</span>
                        </div>
                        <div className="details">
                            <h3>Summer Music Vibes</h3>
                            <p>FREE entry! Voter Registraion, Music, Food Trucks and more!</p>
                            <ul>
                                <li><FontAwesomeIcon icon="map-marker-alt" /> 633 Cotton Avenue SW, Birmingham, Alabama 35211</li>
                            </ul>
                        </div>
                    </div>

                    <div className="slides">
                        <div className="date">
                            <h2>5</h2>
                            <h3>Sept</h3>
                            <span><FontAwesomeIcon icon="clock" /> 6 - 7:30pm</span>
                        </div>
                        <div className="details">
                            <h3>Birmingham CERT</h3>
                            <p>CERT is a FEMA-sponsored, State supported and locally run training program that prepares you to help yourself, your family, and your neighbors in the event of a disaster.</p>
                            <ul>
                                <li><FontAwesomeIcon icon="map-marker-alt" /> Birmingham Fire Station 2 - 600 11th Street South Birmingham, Alabama 35233</li>
                            </ul>
                        </div>
                    </div>

                    <div className="slides">
                        <div className="date">
                            <h2>7</h2>
                            <h3>Sept</h3>
                            <span><FontAwesomeIcon icon="clock" /> 6pm</span>
                        </div>
                        <div className="details">
                            <h3>BCS Game of The Week</h3>
                            <p>Parker vs Jackson Olin. Click <a href="https://www.bhamcityschools.org/cms/lib/AL01001646/Centricity/Domain/4/300957569_3312159375681238_1050852427943883188_n.jpg">here</a> to view entire schedule.</p>
                            <ul>
                                <li><FontAwesomeIcon icon="map-marker-alt" /> Jackson Olin High School - 1300 Avenue F, Birmingham, AL 35218</li>
                            </ul>
                        </div>
                    </div>

                    <div className="slides">
                        <div className="date">
                            <h2>13</h2>
                            <h3>Sept</h3>
                            <span><FontAwesomeIcon icon="clock" /> 11am</span>
                        </div>
                        <div className="details">
                            <h3>Birmingham Public Library T-Shirt Day</h3>
                            <p>Design your own t-shirts! Adult book club will make their own t-shirts!</p>
                            <ul>
                                <li><FontAwesomeIcon icon="map-marker-alt" /> Birimingham Public Library - 2100 Park Place, Birmingham, AL 35222</li>
                            </ul>
                        </div>
                    </div>

                    <div className="slides">
                        <div className="date">
                            <h2>17</h2>
                            <h3>Sept</h3>
                            <span><FontAwesomeIcon icon="clock" /> 3 - 8pm</span>
                        </div>
                        <div className="details">
                            <h3>The Getdown at Avondale Park</h3>
                            <p>We’re excited to announce THE GET DOWN at Avondale Park: a FREE concert series presented by Seasick & Yellowhammer Creative!</p>
                            <ul>
                                <li><FontAwesomeIcon icon="map-marker-alt" /> Avondale Park - 4101 5th Ave S, Birmingham, AL 35222</li>
                            </ul>
                        </div>
                    </div>                    
                    
                </div>
                <div className="slideImage">
                    <img src="images/events/" alt="" />
                </div>
            </section>

            {/* RECENT EVENTS SECTION */}
            <section className="recent">
                <div className="header">
                    <h2>Recent <span>Events</span></h2>
                </div>
                <div className="panel">
                    {recentEvents.map((post: any, index) => {
                        return (
                            <div className="pane" >
                                <Link to={`/events/${post.slug}`}>
                                    <div className="pan" key={index}>
                                        <div className="image" style={{ backgroundImage: `url("/images/events/${post.slug}/${post.imgLink}")` }}></div>
                                        <div className="text">
                                            <h4>{post.date}</h4>
                                            <h3>{post.title}</h3>
                                            <p>{post.description}</p>
                                            <p className="link">Read More <FontAwesomeIcon className="icon" icon="arrow-right" /></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default Events;