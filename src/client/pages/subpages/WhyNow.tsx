import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../components/Header';

const WhyNow = () =>
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

    return (
        <>
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="why hero" style={{ height: `100vh` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/whyNow.jpeg)`, backgroundPosition: `0 0` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>Why Now?</h1>
                        <p>We partner with brands that are passionate about our mission and our community..</p>
                    </div>
                    <div className="callbutton">
                        <a className="button signup" href="https://jdsb9zx9r21.typeform.com/B-INCLUDED">Become a partner</a>
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
                        <a href="/">Home</a> {'>'} Why Now?
                    </div>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="whyWeAre">
                <div className="container">
                    <div className="four columns left">
                        <h2>Why <span className="blue">Now?</span></h2>
                    </div>
                    <div className="six columns">
                        <p><span>Why not now?</span> There’s no better time for Black communities to have and claim a space of their own. The longevity of Black communities depends on a collective of people who are focused on improved health, overall wellness, and elevated financial practices. B-Included is that space and you can become part of that collective</p>

                    </div>
                    <div className="ten columns">
                        <div className="container box">
                            <div className="third columns deck">
                                <div className="cards">
                                    <div className="card">
                                        <img src="/images/ourmission.jpg" alt="Who_We_Are" />
                                        <div className="text">
                                            <h3>Our Mission</h3>
                                            <p>Connect corporate, civic, and community leaders to understand issues and increase equitable economic growth.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="third columns deck">
                                <div className="cards">
                                    <div className="card">
                                        <img src="/images/ourgoals.jpg" alt="Who_We_Are" />
                                        <div className="text">
                                            <h3>Our Vision</h3>
                                            <p>Transforming Birmingham by creating a more prosperous and equitable future.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="third columns deck">
                                <div className="cards">
                                    <div className="card">
                                        <img src="/images/oursome.jpg" alt="Who_We_Are" />
                                        <div className="text">
                                            <h3>Our Values</h3>
                                            <p>Prosper is a coalition of community, civic and business leaders committed to creating a more vibrant, racially and gender inclusive economy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="included">
                <div className="image" style={{ backgroundImage: `url(/images/whyBham.png)` }}></div>
                <div className="vidPane">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MXduRSowWmU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </section>

            <section className="leaders">
                <div className="leadersbg" style={{ backgroundImage: `url("/images/leadersbg.png")` }}></div>
                <div className="container">
                    <div className="seven columns offset-by-one-half">
                        <div className="heading">
                            <h2>Leadership <span className="blue">At Our Core</span></h2>
                            <p>Acclinate™, a Birmingham-based company specializing in digital health products, is partnering with Jefferson County to help 50,000 county residents control their future by taking charge of their health. The B-Included website will engage residents and provide easy access to pertinent health resources and job assistance.</p>
                        </div>
                        <div className="six columns windowSeal">
                            <div className="container">
                                <div className="panel">
                                    <div className="container">

                                        {/* NEW ROW */}
                                        <div className="five columns">
                                            <div className="panes">
                                                <div className="image" style={{ backgroundImage: `url("/images/leaders/jw.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                <div className="pane">
                                                    <h2>J.W. Carpenter</h2>
                                                    <p>Prosper Birmingham</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* NEW ROW */}
                                        <div className="five columns">
                                            <div className="panes">
                                                <div className="image" style={{ backgroundImage: `url("/images/leaders/angela.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                <div className="pane">
                                                    <h2>Angela S. Abdur-Rasheed</h2>
                                                    <p>Prosper Birmingham</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* NEW ROW */}
                                        <div className="five columns">
                                            <div className="panes">
                                                <div className="image" style={{ backgroundImage: `url("/images/joanice.png")`, backgroundColor: '#ffffff' }}></div>
                                                <div className="pane">
                                                    <h2>Joanice Thompson</h2>
                                                    <p>Acclinate</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* NEW ROW */}
                                        <div className="five columns">
                                            <div className="panes">
                                                <div className="image" style={{ backgroundImage: `url("/images/leaders/emily.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                <div className="pane">
                                                    <h2>Emily Wykle</h2>
                                                    <p>UAB</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* NEW ROW */}
                                        <div className="five columns">
                                            <div className="panes">
                                                <div className="image" style={{ backgroundImage: `url("/images/leaders/tiffany.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                <div className="pane">
                                                    <h2>Tiffany Whitlow</h2>
                                                    <p>Acclinate</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* NEW ROW */}
                                        <div className="five columns">
                                            <div className="panes">
                                                <div className="image" style={{ backgroundImage: `url("/images/leaders/del.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                <div className="pane">
                                                    <h2>Del Smith</h2>
                                                    <p>Acclinate</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="four columns deck">
                            <div className="cards">
                                <div className="card">
                                    <div className="image"><img src="/images/plugin.jpg" alt="" /></div>
                                    <div className="text">
                                        <h1>Prosper + Acclinate</h1>
                                        <p>Acclinate and Birmingham Prosper have been hard at work to develop a Birmingham-specific community platform; B-INCLUDED. This platform will further Prosper's initiative to reduce racial inequities in Jefferson County by providing county residents access to long needed resources.</p>
                                        <a href="https://prosperbham.com/">Read About How This Partnership Was Formed <FontAwesomeIcon icon="arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY YOU SHOULD GET INVOLVED SECTION */}
            <section className="whyInvolved">
                <div className="container">
                    <div className="four columns">
                        <div className="text">
                            <h2>What does <span className="blue">this mean?</span></h2>
                            <p>When you sign up to use the platform, you will have access to life-changing resources. These resources can help you make informed decisions about your health. Invite your family and friends, and they will have the opportunity to do the same. All of you will have information about health, education, employment, and financial topics right at your fingertips. The best part? This information comes in many different forms like written, video, audio, and graphic content. There’s literally something for everybody!</p>
                            <p>When you use your access on a regular basis, you should notice a gradual increase in the confidence to not only make better health choices but better life choices as well.</p>
                            <p>Get engaged in the community and compete against your friends!</p>
                        </div>
                    </div>
                    <div className="six columns">
                        <div className="image">
                            <img src="/images/whysome.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY YOU SHOULD GET INVOLVED SECTION */}
            <section className="bInvolved">
                <div className="container">
                    <div className="four columns">
                        <div className="image">
                            <img src="/images/whysome2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="six columns">
                        <div className="text">
                            <h2>What Makes<br /> B-INCLUDED <span className="blue">Different?</span></h2>
                            <p>B-INCLUDED is different because the platform was designed specifically with you in mind.  You are not an afterthought on an already existing platform nor are you being included because it’s trendy.  With B-INCLUDED, you are the priority. Everything the platform offers is being provided in consideration of your needs, wants, dreams & aspirations for a healthy and wealthy life.  That’s what we all want, right? Each of us wants to live our best lives on our own terms. The B-INCLUDED community can help you get there. </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PARTNERS SECTION */}
            <section className="orgs">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h1>Aligned With The <span className="blue">Best Organizations</span></h1>
                            <p>Birmingham Included gives its residents a chance at a happier, healthier life.</p>
                        </div>
                        <div className="container">
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/orgUAB.png")` }}></div>
                            </div>
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/orgVulcan.png")` }}></div>
                            </div>
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/orgProtective.png")` }}></div>
                            </div>
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/cahaba.png")` }}></div>
                            </div>
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/impact.jpg")` }}></div>
                            </div>
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/mpower.jpg")` }}></div>
                            </div>
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/uway.jpg")` }}></div>
                            </div>
                            <div className="fourth columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/m4a.png")` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyNow;