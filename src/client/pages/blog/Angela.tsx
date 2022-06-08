import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../components/Header';
import moment from 'moment';
import ShareYourStory from '../../components/ShareYourStory';
import Logo from '../../components/subComponents/Logo';

const Angela = () =>
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
            <section id="hero" className="singBlog hero" style={{ height: `600px` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/stories.jpg)` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>Featured Stories</h1>
                        <p>Angela Abdur-Rasheed - Voices from the community.</p>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="seven columns offset-by-one-half bread">
                        <a href="/">Home</a> {'>'} <a href="/blog">Stories</a> {'>'} Angela Abdur-Rasheed - Voices From Our Community
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="container">
                    <div className="seven columns offset-by-one-half">
                        <div className="storie">
                            <h2>Angela Abdur-Rasheed</h2>
                            <h4>Voices From Our Community</h4>                            
                        </div>
                    </div>
                    <div className="six columns offset-by-two">
                        <div className="text">
                            <p>As we continue to live in a world where COVID-19 still exists, it's important to recognize the role burnout plays in people’s decision-making. Many people, especially those who are still deciding whether or not they want to be vaccinated, have already been told to do so. This approach, often accompanied by strong feelings and little explanation, can lead to further skepticism. Angela Abdur Rasheed is sharing her story in order to encourage others to be vaccinated.</p>
                            
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

export default Angela;