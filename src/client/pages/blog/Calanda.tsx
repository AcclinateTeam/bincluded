import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../components/Header';
import moment from 'moment';
import ShareYourStory from '../../components/ShareYourStory';
import Logo from '../../components/subComponents/Logo';

const Calanda = () =>
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
                        <p>Calanda Marks - Voices From Our Community</p>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="seven columns offset-by-one-half bread">
                        <a href="/">Home</a> {'>'} <a href="/blog">Stories</a> {'>'} Calanda Marks - Voices From Our Community
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="container">
                    <div className="seven columns offset-by-one-half">
                        <div className="storie">
                            <h2>Calanda Marks</h2>
                            <h4>Voices From Our Community</h4>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5WJQW9DZ-Ko" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="six columns offset-by-two">
                        <div className="text">
                            <p>Calanda, an administrative assistant, is passionate about building her own business to care for others. She shares her health journey to lose weight and lower her blood pressure, including her own challenges such as finding the right information and locating a doctor / clinic that would support her without insurance. Calanda emphasizes the importance of having access to informative financial and health resources like <Logo color="#050236" /> so that everyone can live a healthy lifestyle.</p>
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

export default Calanda;