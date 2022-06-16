import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../components/Header';
import moment from 'moment';
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
        let heroHeight = hero.offsetHeight;

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
                                <a href="/">Home</a> {'>'} Stories
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

                                    <BlogItem path="pmj" img="media/pastormike.jpg" member="Pastor Mike Jr." title="Voice From Our Community" />                                    

                                    <div className="third columns rack">
                                        <Link to="/blog/angelica">
                                            <div className="frames">
                                                <div className="frame">
                                                    <div className="image">
                                                        <video playsInline autoPlay muted loop id="myVideo">
                                                            <source src='http://nowincluded.com/wp-content/uploads/2022/05/angelicaWoods.mp4' type="video/mp4" />
                                                            Your browser does not support HTML5 video.
                                                        </video>
                                                    </div>
                                                    <div className="text">
                                                        <h1>Angelica Woods</h1>
                                                        <p>Voices From Our Community</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <BlogItem path="angela" img="media/angela.jpg" member="Angela Abdur-Rasheed" title="Voice From Our Community" />


                                    <div className="third columns rack">
                                        <Link to="/blog/calanda">
                                            <div className="frames">
                                                <div className="frame">
                                                    <div className="image">
                                                        <video playsInline autoPlay muted loop id="myVideo">
                                                            <source src='/images/media/calanda.mp4' type="video/mp4" />
                                                            Your browser does not support HTML5 video.
                                                        </video>
                                                    </div>
                                                    <div className="text">
                                                        <h1>Calanda Marks</h1>
                                                        <p>Voices From Our Community</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="third columns rack">
                                        <Link to="/blog/mariam">
                                            <div className="frames">
                                                <div className="frame">
                                                    <div className="image" style={{ backgroundImage: `url(/images/charger1.jpg)` }}>
                                                        <video playsInline autoPlay muted loop id="myVideo">
                                                            <source src='http://nowincluded.com/wp-content/uploads/2022/05/miriamC.mp4' type="video/mp4" />
                                                            Your browser does not support HTML5 video.
                                                        </video>
                                                    </div>
                                                    <div className="text">
                                                        <h1>Mariam Cunningham</h1>
                                                        <p>Voices From Our Community</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <BlogItem path="gaynell" img="media/gaynell.jpg" member="Gaynell Hendricks" title="Voice From Our Community" />

                                    <div className="third columns rack">
                                        <Link to="/blog/jasmine">
                                            <div className="frames">
                                                <div className="frame">
                                                    <div className="image" style={{ backgroundImage: `url(/images/charger1.jpg)` }}>
                                                        <video playsInline autoPlay muted loop id="myVideo">
                                                            <source src='http://nowincluded.com/wp-content/uploads/2022/05/jasmineDebruce.mp4' type="video/mp4" />
                                                            Your browser does not support HTML5 video.
                                                        </video>
                                                    </div>
                                                    <div className="text">
                                                        <h1>Jasmine DeBruce</h1>
                                                        <p>Voices From Our Community</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* <BlogItem path="" img="media/" member="" title="Voice From Our Community" /> */}

                                    <BlogItem path="willy" img="media/willy.jpg" member="Willy Etheridge" title="Voice From Our Community" />

                                    <BlogItem path="jbrooklere" img="media/jbrook.jpg" member="Johnny Brooklere" title="Voices From Our Community" />

                                    <BlogItem path="celeste" img="media/drharris.jpg" member="Dr. Celeste Reese-Willis" title="Voices From Our Community" />

                                    <BlogItem path="danny" img="media/danny.jpg" member="Danny Carr" title="Voices From Our Community" />

                                    <BlogItem path="sonja" img="media/sonja.jpg" member="Sonja Smith" title="Voices From Our Community" />

                                    <BlogItem path="walladean" img="media/walladean.jpg" member="Walladean Streeter" title="Voices From Our Community" />

                                </div>
                            </div>
                            <div className="ten columns">
                                <div className="buttonwrap">
                                    <Link className="content button solid" to="/blog">See More Stories</Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SHAR YOUR STORY SECTION */}
                    <ShareYourStory />
                </>
            ) : (
                <Loading />
            )}22
        </>
    );
}

export default Blog;