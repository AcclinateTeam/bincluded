import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import ShareYourStory from '../blog/components/ShareYourStory';


const SingleStory = () => {
    // GLOBAL JS
    useEffect(() => {
        window.scrollTo(0, 0);
        const header = document.getElementById('header');
        const bgSlide = document.getElementById('bgSlide');
        header!.style.cssText = 'opacity: 1;';
        bgSlide!.style.height = '100%';
    }, []);

    const [videoVisible, setVideoVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);

    // GET STORY POST
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
            <section id="subHero" className="subHero">
                <div id="bgSlide" className="subCall" >
                    {single.map((post: any, index) =>
                        <img id="bgImg" src={`/images/${post.imagelink}`} alt="" key={index} />
                    )}
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        {single.map((post: any, index) => {
                            return (
                                <div key={index}>
                                    <a href="/">Home</a> {'>'} <a href="/stories">Stories</a> {'>'} {post.title} - {post.subTitle}
                                </div>
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
                                <div key={index}>
                                    <div className="eight columns offset-by-one wide">
                                        <div className="storie">
                                            <span>{post.subTitle}</span>
                                            <h2>{post.title}</h2>
                                            <VisibilitySensor partialVisibility onChange={(videoVisible) => { if (videoVisible) { setVideoVisible(true); } }}>
                                                <iframe width="100%" height="100%" src={post.videolink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ opacity: videoVisible ? 1 : 0 }}></iframe>
                                            </VisibilitySensor>
                                        </div>
                                    </div>
                                    <div className="eight columns offset-by-one wide">
                                        <VisibilitySensor partialVisibility onChange={(textVisible) => { if (textVisible) { setTextVisible(true); } }}>
                                            <div className="text" dangerouslySetInnerHTML={{ __html: htmlText }} style={{ opacity: textVisible ? 1 : 0 }}></div>
                                        </VisibilitySensor>
                                    </div>
                                </div>
                            )
                        } else if (post.type == 'vimeo-player') {
                            return (
                                <div key={index}>
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
                                </div>
                            )
                        }

                    })}
                    <div className="ten columns">
                        <div className="buttonwrap center storiesb">
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

