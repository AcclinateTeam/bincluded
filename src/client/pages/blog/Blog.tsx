import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../components/Header';
import ShareYourStory from '../../components/ShareYourStory';
import Loading from '../../components/Loading';
import BlogItem from './BlogItem';
import moment from 'moment';

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

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch('api/blogPosts/blog')
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    console.log(blogPosts);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="blogga hero" style={{ height: `100vh` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/stories.jpg)` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>Featured Articles</h1>
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
                        <a href="/">Home</a> {'>'} Featured Articles
                    </div>
                </div>
            </section>

            {/* FEATURED STORIES SECTION */}
            <section className="stories-grid">
                <div className="container"><div className="ten columns header">
                    <h2>Featured <span className="blue">Articles</span></h2>
                    <p>Listen to the stories we collected from our community. Click on the story to view the entire video.</p>
                </div>
                    <div className="ten columns">
                        <div className="container case">

                            {blogPosts.map((post: any, index) => {
                                return (
                                    <>
                                        <div className="third columns rack" key={post.id}>
                                            <div className="frames">
                                                <div className="image">
                                                    <Link to={`/blog/single/${post.id}`}><img className="image" src={post.imagelink} alt="" /></Link>
                                                </div>
                                                <div className="text">
                                                    <span>{moment(post._created).format('MMM Do, YYYY')}</span>
                                                    <Link to={`/blog/single/${post.id}`}><h4>{post.title}</h4></Link>
                                                    <p>{post.description}</p>
                                                    <Link to={`/blog/single/${post.id}`}>Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    {/* <div className="ten columns">
                                <div className="buttonwrap">
                                    <Link className="content button solid" to="/blog">See More Stories</Link>
                                </div>
                            </div> */}
                </div>
            </section>

            {/* SHAR YOUR STORY SECTION */}
            <ShareYourStory />
        </>
    );
}

export default Blog;