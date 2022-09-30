import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../components/Header';
import ShareYourStory from '../../components/ShareYourStory';
import Loading from '../../components/Loading';
import BlogItem from './BlogItem';

const Blog = () =>
{
    useEffect(() =>
    {
        window.scrollTo(0, 0)
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

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() =>
    {
        fetch('api/blogPosts/blog')
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    // LOADING ANIMATION STATE CONTROLLER
    const [loading, setLoading] = useState(true);
    // LOADING ANIMATION 
    useEffect(() =>
    {
        setTimeout(() => setLoading(false), 0)
    }, []);

    return (
        <>
            {loading === false ? (
                <>
                    {/* SUB-HEADER COMPONENT IMPORT */}
                    <Header />

                    {/* JUMBOTRON COMPONENT */}
                    <section id="hero" className="blogga hero" style={{ height: `100vh` }}>
                        <div className="calloutbg" style={{ backgroundImage: `url(/images/stories.jpg)` }}></div>
                        <div className="callout">
                            <div className="calltext">
                                <h1>Featured Stories</h1>
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
                                <a href="/">Home</a> {'>'} Featured Stories
                            </div>
                        </div>
                    </section>

                    {/* FEATURED STORIES SECTION */}
                    <section className="storied">
                        <div className="container">
                            <div className="ten columns header">
                                <h2>Featured <span className="blue">Stories</span></h2>
                                <p>Listen to the stories we collected from our community. Click on the story to view the entire video.</p>
                            </div>
                            <div className="ten columns">
                                <div className="container case">

                                    <BlogItem path="walladean" img="media/walladean.webp" member="Walladean Streeter" title="Voices From Our Community" />

                                    <BlogItem path="pmj" img="media/pastormike.webp" member="Pastor Mike Jr." title="Voice From Our Community" />

                                    <BlogItem path="angelica" img="media/angelica.webp" member="Angelica Woods" title="Voice From Our Community" />

                                    <BlogItem path="angela" img="media/angela.webp" member="Angela Abdur-Rasheed" title="Voice From Our Community" />

                                    <BlogItem path="calanda" img="media/calanda.webp" member="Calanda Marks" title="Voice From Our Community" />

                                    <BlogItem path="mariam" img="media/miriam.webp" member="Mariam Cunningham" title="Voice From Our Community" />

                                    <BlogItem path="gaynell" img="media/gaynell.webp" member="Gaynell Hendricks" title="Voice From Our Community" />

                                    {/* <BlogItem path="" img="media/" member="" title="Voice From Our Community" /> */}
                                    <BlogItem path="jasmine" img="media/jasmine.webp" member="Jasmine DeBruce" title="Voice From Our Community" />

                                    <BlogItem path="willy" img="media/willy.webp" member="Willy Etheridge" title="Voice From Our Community" />

                                    <BlogItem path="jbrooklere" img="media/jbrook.webp" member="Johnny Brooklere" title="Voices From Our Community" />

                                    <BlogItem path="celeste" img="media/drharris.webp" member="Dr. Celeste Reese-Willis" title="Voices From Our Community" />

                                    <BlogItem path="danny" img="media/danny.webp" member="Danny Carr" title="Voices From Our Community" />

                                    <BlogItem path="sonja" img="media/sonja.webp" member="Sonja Smith" title="Voices From Our Community" />

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
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Blog;