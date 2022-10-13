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
                                <h1>Featured Articles</h1>
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
                                <a href="/">Home</a> {'>'} Featured Articles
                            </div>
                        </div>
                    </section>

                    {/* FEATURED STORIES SECTION */}
                    <section className="stories-grid">
                        <div className="container"><div className="ten columns header">
                            <h2>Featured <span className="blue">Articles</span></h2>
                            <p>Listen to the stories we collected from our community. Click on the story to view the entire video.</p>
                        </div>
                            <div className="ten columns">
                                <div className="container case">

                                    <BlogItem path="SickleCell" img="blogs/sicklecell1.webp" title="How to Support a Loved One with Sickle Cell Disease" date="Oct. 13, 2022" excerpt="People living with SCD benefit from the support of family and friends. Below, you’ll learn more about SCD and ways..." />

                                    <BlogItem path="BrainHealth" img="blogs/brainhealth2.jpeg" title="How to Talk to Family Members About Brain Health" date="Oct. 6, 2022" excerpt="If you suspect you or a loved one may have Alzheimer’s disease, you may be balancing many different thoughts, fears, and feelings..." />

                                    <BlogItem path="alzheimers" img="blogs/alzheimers.jpeg" title="Ten Early Warning Signs of Alzheimer’s Disease" date="Oct. 4, 2022" excerpt="According to the Alzheimer’s Association, there are several early warning signs of Alzheimer’s disease..." />

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