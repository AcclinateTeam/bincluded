import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import ShareYourStory from '../blog/components/ShareYourStory';

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

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero">
                <div className="fill"></div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} Featured Stories
                    </div>
                </div>
            </section>

            {/* FEATURED STORIES SECTION */}
            <section className="stories" style={{ marginBottom: `100px` }}>
                <div className="container">
                    <div className="ten columns header">
                        <h2>Featured <span className="blue">Stories</span></h2>
                        <p>Check out these stories from our community. Click on the stories below to read and watch more.</p>
                    </div>
                    <div className="ten columns">
                        <div className="container case">

                            {stories.map((post: any, index) => {
                                if (index === 0) {
                                    return (
                                        <div className="ten columns rack" key={index}>
                                            <Link to={`/stories/${post.slug}`}>
                                                <div className="frames">
                                                    <div className="frame">
                                                        <div className="image lead">
                                                            <img src={`/images/${post.imagelink}`} alt="" />
                                                        </div>
                                                        <div className="text lead">
                                                            <p className="top">{post.subTitle}</p>
                                                            <h1>{post.title}</h1>
                                                            <p>{post.description}</p>
                                                            <p className="link">Read More <FontAwesomeIcon icon="arrow-right" /></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                } else if (index > 0) {
                                    return (
                                        <div className="third columns rack" key={index}>
                                            <Link to={`/stories/${post.slug}`}>
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
                                    )
                                } else {
                                    return (
                                        <>This did not work!</>
                                    )
                                }
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

