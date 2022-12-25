import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import ShareYourStory from '../../components/ShareYourStory';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // Scrolls to bottom of Hero Section OnClick
    const scrollToRef = () => {
        let hero = document.getElementById('hero');
        let heroHeight = hero!.offsetHeight;

        window.scrollTo({
            top: heroHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('api/stories/storyPosts')
            .then(res => res.json())
            .then(stories => setStories(stories))
    }, []);

    console.log(stories);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="blogga hero" style={{ height: `100vh` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/stories.jpg)` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>Featured Stories</h1>
                        <p>Voices from the community.</p>
                    </div>
                    <div className="callbutton">
                        <a className="button signup" href="https://www.videoask.com/ftmqd7gt3" target="_blank" rel="noopener noreferrer">Share Your Story</a>
                    </div>
                </div>
                <div className="scrollDown">
                    <FontAwesomeIcon icon="arrow-down" onClick={scrollToRef} />
                    <h3>Scroll Down</h3>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="seven columns offset-by-one-half bread">
                        <a href="/">Home</a> {'>'} Featured Stories
                    </div>
                </div>
            </section>

            {/* FEATURED STORIES SECTION */}
            <section className="storied">
                <div className="container">
                    <div className="ten columns header">
                        <h2>Featured <span className="blue">Stories</span></h2>
                        <p>Listen to the stories we collected from our community. Click on the story to view the entire video.</p>
                    </div>
                    <div className="ten columns">
                        <div className="container case">

                            {stories.map((post: any, index) => {
                                return (
                                    <>
                                        {/* NEW ROW */}
                                        <div className="third columns rack">
                                            <Link to={`/stories/single/${post.slug}`}>
                                                <div className="frames">
                                                    <div className="frame">
                                                        <div className="image">
                                                            <img src={`/images/${post.imagelink}`} alt="" />
                                                        </div>
                                                        <div className="text">
                                                            <h1>{post.title}</h1>
                                                            <p>{post.subTitle}</p>                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>

            {/* SHAR YOUR STORY SECTION */}
            <ShareYourStory />
        </>
    );
}

export default Blog;