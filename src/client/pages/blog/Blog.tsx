import React, { useEffect, useState } from 'react';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import ShareYourStory from '../blog/components/ShareYourStory';
import FeatStoriesComponent from './components/FeatStoriesComponent';
import FeatArticlesComponent from './components/FeatArticlesComponent';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero">
                <div className="container">
                    <div className="columns eight offset-by-one callout">
                        <div className="image blog">
                            <img src="images/theme/blog.png" alt="" />
                        </div>
                        <div className="text">
                            <div className="calltext">
                                <h1>Stories &<br /> Articles</h1>
                                <p>B-INCLUDED addresses healthcare needs and subsequently educational, employment, and financial gaps so that residents can work towards improved health.</p>
                            </div>
                            <div className="callbutton">
                                <a className="button signup" href="https://www.videoask.com/ftmqd7gt3" target="_blank" rel="noopener noreferrer">Share Your Story</a>
                            </div>
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