import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VisibilitySensor from 'react-visibility-sensor';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import ShareYourStory from '../blog/components/ShareYourStory';


const SinglePost = () => {
    // GLOBAL JS
    useEffect(() => {
        window.scrollTo(0, 0);
        const header = document.getElementById('header');
        const bgSlide = document.getElementById('bgSlide');
        header!.style.cssText = 'opacity: 1;';
        bgSlide!.style.height = '100%';
    }, []);

    // GET STORY POST
    const { slug } = useParams();
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch(`/api/blogPosts/${slug}`)
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    const [visible, setVisible] = useState(false);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="subHero" className="subHero">
                <div id="bgSlide" className="subCall" >
                    {blogPosts.map((post: any, index) => (
                        <img id="bgImg" src={`${post.imagelink}`} alt="" key={index} />
                    ))}
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    {blogPosts.map((post: any, index) => (
                        <div className="eight columns offset-by-one bread" key={index}>
                            <a href="/">Home</a> {'>'} <a href="/articles">Featured Articles</a> {'>'} {post.title}
                        </div>
                    ))}
                </div>
            </section>

            <section className="story">
                <div className="container">
                    <div className="eight columns offset-by-one wide">
                        {blogPosts.map((post: any, index) => (
                            <div className="storie" key={index}>
                                {/* <span>{moment(post._created).format('MMM Do, YYYY')}</span> */}
                                <h2>{post.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="container">
                    <VisibilitySensor partialVisibility onChange={(visible) => { if (visible) { setVisible(true); } }}>
                        <div className="eight columns offset-by-one wide" style={{ opacity: visible ? 1 : 0 }}>
                            {blogPosts.map((post: any, index) => {
                                var htmlText = post.content;

                                return (
                                    <div className="text" dangerouslySetInnerHTML={{ __html: htmlText }} key={index}></div>
                                )
                            })}
                            <div className="buttonwrap">
                                <Link className="content button" to="/blog">Back to Blogs <FontAwesomeIcon icon="arrow-right" /></Link>
                            </div>
                        </div>
                    </VisibilitySensor>
                </div>
            </section>

            {/* SHARE YOUR STORY SECTION */}
            <ShareYourStory />
        </>
    );
}

export default SinglePost;