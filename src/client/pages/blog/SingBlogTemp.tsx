import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../components/Header';
import moment from 'moment';
import ShareYourStory from '../../components/ShareYourStory';
import Logo from '../../components/subComponents/Logo';

const SingBlogTemp = (props: any) =>
{
    const member = props.member;
    const title = props.title;
    const embed = props.embed;
    const content = props.content;

    return (
        <>
            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="singBlog hero" style={{ height: `600px` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/stories.jpg)` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>Featured Stories</h1>
                        <p>{member} - {title}</p>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="six columns offset-by-two bread">
                        <a href="/">Home</a> {'>'} <a href="/blog">Stories</a> {'>'} {member} - {title}
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="container">
                    <div className="six columns offset-by-two">
                        <div className="storie">
                            <h2>{member}</h2>
                            <h4>{title}</h4>
                            <iframe width="100%" height="550px" src={embed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="six columns offset-by-two">
                        <div className="text">
                            <p>{content}</p>

                        </div>
                    </div>
                    <div className="ten columns">
                        <div className="buttonwrap">
                            <Link className="content button solid" to="/blog">Back To Featured Stories</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SingBlogTemp;