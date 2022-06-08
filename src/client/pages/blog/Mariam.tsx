import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../components/Header';
import moment from 'moment';
import ShareYourStory from '../../components/ShareYourStory';
import Logo from '../../components/subComponents/Logo';

const Jasmine = () =>
{
    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() =>
    {
        fetch('api/blogPosts/blog')
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    console.log(blogPosts)

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section className="singBlog hero" style={{ height: `600px` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/stories.jpg)` }}>

                </div>
                {/* <div className="callbg">
                    <img src="/images/partners.jpg" alt="" />
                </div> */}
                <div className="callout">
                    <div className="calltext">
                        <h1>Featured Story</h1>
                        <p>Mariam Cunningham - Voices From Our Community</p>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="seven columns offset-by-one-half bread">
                        <a href="/">Home</a> {'>'} <a href="/blog">Stories</a> {'>'} Mariam Cunningham - Voices From Our Community
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="container">
                    <div className="seven columns offset-by-one-half">
                        <div className="storie">
                            <h2>Mariam Cunningham</h2>
                            <h4>Voices From Our Community</h4>
                            <iframe width="100%%" height="100%" src="https://www.youtube.com/embed/DhT4qE-CtK8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="six columns offset-by-two">
                        <div className="text">
                            <p>Mariam discusses the importance of shared accountability, living in communities that put health first and setting a strong financial foundation. Mariam’s goal is to establish a career with a company that shares her values and allows her to create a healthy environment for her daughter. Mariam’s dream for <Logo color="#050236" /> is to provide personalized resources to the community.</p>
                        </div>
                    </div>
                    <div className="ten columns">
                        <div className="buttonwrap">
                            <Link className="content button solid" to="/blog">Back To Featured Stories</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SHARE YOUR STORY SECTION */}
            <ShareYourStory />
        </>
    );
}

export default Jasmine;