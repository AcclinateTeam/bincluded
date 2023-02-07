import React, { useEffect, useState } from 'react';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import ShareYourStory from './components/ShareYourStory';
import FeatStoriesComponent from './components/FeatStoriesComponent';
import FeatArticlesComponent from './components/FeatArticlesComponent';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Articles = () => {

    // AUTO-SCROLL
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // FETCH
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch('api/blogPosts/blogComp')
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    const postlength = blogPosts.length;

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
                        <a href="/">Home</a> {'>'} Featured Articles
                    </div>
                </div>
            </section>

            {/* FEATURED STORIES SECTION */}
            <section className="stories-grid">
                <div className="container">
                    <div className="ten columns header">
                        <h2>Featured <span className="blue">Articles</span></h2>
                        <p>Read articles we collected from our community.</p>
                    </div>
                    <div className="ten columns">
                        <div className="container case sub">

                            {blogPosts.map((post: any, index) => {
                                if (post.id === postlength) {
                                    return (
                                        <div className="ten columns rack" key={index}>
                                                <div className="frames">
                                                    <div className="image lead">
                                                        <Link to={`/articles/${post.slug}`}><img className="image" src={post.imagelink} alt="" /></Link>
                                                    </div>
                                                    <div className="text lead">
                                                        <span>{moment(post._created).format('MMM Do, YYYY')}</span>
                                                        <Link to={`/articles/${post.slug}`}><h4>{post.title}</h4></Link>
                                                        <p>{post.description}</p>
                                                        <Link to={`/articles/${post.slug}`}>Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                } else if (post.id < postlength) {
                                    return (
                                        <div className="third columns rack" key={index}>
                                            <div className="frames">
                                                <div className="image">
                                                    <Link to={`/articles/${post.slug}`}><img className="image" src={post.imagelink} alt="" /></Link>
                                                </div>
                                                <div className="text">
                                                    <span>{moment(post._created).format('MMM Do, YYYY')}</span>
                                                    <Link to={`/articles/${post.slug}`}><h4>{post.title}</h4></Link>
                                                    <Link to={`/articles/${post.slug}`}>Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <p key={index}>
                                            This failed!
                                        </p>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Articles;


// if (post.id > 1) {
//     return (
//         <>
            
//         </>
//     )
// }