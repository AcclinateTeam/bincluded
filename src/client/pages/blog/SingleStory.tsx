import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../components/Header';
import BlogPosts from '../BlogPosts';
import ShareYourStory from '../../components/ShareYourStory';

const SingleStory = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const { slug } = useParams();
    const [single, setSingle] = useState([]);

    useEffect(() => {
        fetch(`/api/stories/${slug}`)
            .then(res => res.json())
            .then(single => setSingle(single))
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
                        {single.map((post: any, index) => {
                            return (
                                <>
                                    <h1>Featured Story</h1>
                                    <p>{post.title} - {post.subTitle}</p>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="six columns offset-by-two bread">
                        {single.map((post: any, index) => {
                            return (
                                <>
                                    <a href="/">Home</a> {'>'} <a href="/stories">Stories</a> {'>'} {post.title} - {post.subTitle}
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="container">
                    {single.map((post: any, index) => {
                        var htmlText = post.content;
                        
                        return (
                            <>
                                <div className="six columns offset-by-two">
                                    <div className="storie">
                                        <h2>{post.title}</h2>
                                        <h4>{post.subTitle}</h4>
                                        <iframe width="100%" height="100%" src={post.videolink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                                <div className="six columns offset-by-two">
                                    <div className="text" dangerouslySetInnerHTML={{ __html: htmlText }}></div>
                                </div>
                            </>
                        )
                    })}
                    <div className="ten columns">
                        <div className="buttonwrap">
                            <Link className="content button solid" to="/stories">Back To Featured Stories</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SHARE YOUR STORY SECTION */}
            <ShareYourStory />

        </>
    );
}

export default SingleStory;