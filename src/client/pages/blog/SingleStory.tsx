import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import ShareYourStory from '../blog/components/ShareYourStory';


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

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero">
                {single.map((post: any, index) => (
                    <>
                        <div className="blogcall">
                            <img src={`/images/${post.imagelink}`} alt="" />
                        </div>
                    </>
                ))}
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        {single.map((post: any, index) => {
                            return (
                                <>
                                    <a href="/">Home</a> {'>'} <a href="/stories">Featured Stories</a> {'>'} {post.title} - {post.subTitle}
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
                        if (post.type == 'YouTube video player') {
                            return (
                                <>
                                    <div className="eight columns offset-by-one">
                                        <div className="storie">
                                            <span>{post.subTitle}</span>
                                            <h2>{post.title}</h2>
                                            <iframe width="100%" height="100%" src={post.videolink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="eight columns offset-by-one">
                                        <div className="text" dangerouslySetInnerHTML={{ __html: htmlText }}></div>
                                    </div>
                                </>
                            )
                        } else if (post.type == 'vimeo-player') {
                            return (
                                <>
                                    <div className="eight columns offset-by-one">
                                        <div className="storie">
                                            <h2>{post.title}</h2>
                                            <h4>{post.subTitle}</h4>
                                            <iframe title="vimeo-player" src={"https://player.vimeo.com/video/773985832?h=802b4f3948"} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="eight columns offset-by-one">
                                        <div className="text" dangerouslySetInnerHTML={{ __html: htmlText }}></div>
                                    </div>
                                </>
                            )
                        }
                        
                    })}
                    <div className="ten columns">
                        <div className="buttonwrap center">
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