import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import ShareYourStory from '../blog/components/ShareYourStory';


const SinglePost = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const { slug } = useParams();
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch(`/api/blogPosts/${slug}`)
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero">
                {blogPosts.map((post: any, index) => (
                    <>
                        <div className="blogcall">
                            <img src={`${post.imagelink}`} alt="" />
                        </div>
                    </>
                ))}
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        {blogPosts.map((post: any, index) => (
                            <>
                                <a href="/">Home</a> {'>'} <a href="/articles">Featured Articles</a> {'>'} {post.title}
                            </>
                        ))}
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="container">
                    <div className="eight columns offset-by-one">
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
                    <div className="eight columns offset-by-one">
                        {blogPosts.map((post: any, index) => {
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

            {/* SHARE YOUR STORY SECTION */}
            <ShareYourStory />

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