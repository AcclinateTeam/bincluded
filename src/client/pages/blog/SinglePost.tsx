import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../components/Header';
import BlogPosts from '../BlogPosts';

const SinglePost = () =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    const { id } = useParams();
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() =>
    {
        fetch(`/api/blogPosts/${id}`)
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    // Scrolls to bottom of Hero Section OnClick
    const scrollToRef = () =>
    {
        let hero = document.getElementById('hero');
        let heroHeight = hero!.offsetHeight;

        window.scrollTo({
            top: heroHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="singBlog hero" style={{ height: `100vh` }}>
                {blogPosts.map((post: any, index) => (
                    <>
                        <div className="calloutbg" style={{ backgroundImage: `url(${post.imagelink})` }}></div>
                        <div className="callout btext">
                            <div className="calltext">
                                <h1 className="textPost">{post.title}</h1>
                            </div>
                        </div>
                        <div className="scrollDown">
                            <FontAwesomeIcon icon="arrow-down" onClick={scrollToRef} />
                            <h3>Scroll Down</h3>
                        </div>
                    </>
                ))}
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="six columns offset-by-two bread">
                        {blogPosts.map((post: any, index) => (
                            <>
                                <a href="/">Home</a> {'>'} <a href="/blog">Stories</a> {'>'} {post.title}
                            </>
                        ))}
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="container">
                    <div className="six columns offset-by-two">
                        <div className="storie">
                            {blogPosts.map((post: any, index) => (
                                <>
                                    <span>{moment(post._created).format('MMM Do, YYYY')}</span>
                                    <h2>{post.title}</h2>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="container">
                    <div className="six columns offset-by-two">
                        {blogPosts.map((post: any, index) =>
                        {
                            var htmlText = post.content;

                            return (
                                <div className="text" dangerouslySetInnerHTML={{ __html: htmlText }}></div>
                            )
                        })}
                        <div className="buttonwrap">
                            <Link className="content button" to="/blog">Back to Blogs <FontAwesomeIcon icon="arrow-right" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="related">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h1>Related Articles</h1>
                        </div>
                        <div className="panel">
                            <div className="container">
                                <BlogPosts />
                                <div className="buttonwrap">
                                    <Link className="content button" to="/blog">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
}

export default SinglePost;