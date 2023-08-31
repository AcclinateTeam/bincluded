import React, { useEffect, useState } from 'react';


/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import ShareYourStory from '../blog/components/ShareYourStory';
import FeatStoriesComponent from './components/FeatStoriesComponent';
import FeatArticlesComponent from './components/FeatArticlesComponent';
import Logo from '../../theme/Logo';

const Blog = () => {
    // SCROLL TO TOP ON PAGE LOAD
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

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
                            <img id="img" src="images/theme/1I2A0687.jpeg" alt="" />
                        </div>
                    </div>
                    <div id="text" className="text">
                        <div className="calltext">
                            <h1>Stories &<br /> Articles</h1>
                            <p>A community is founded on the history and culture of a collective group. To honor our history, present experiences, and in preparation of what’s to come; our Articles and Stories page is here to help you understand our <Logo color="#287fdd" /> community.</p>
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
                        <a href="/">Home</a> {'>'} Stories & Articles
                    </div>
                </div>
            </section>

            {/* FEATURED STORIES SECTION */}
            <FeatStoriesComponent />

            {/* FEATURED STORIES SECTION */}
            <FeatArticlesComponent />

            {/* SHAR YOUR STORY SECTION */}
            <ShareYourStory />
        </>
    );
}

export default Blog;