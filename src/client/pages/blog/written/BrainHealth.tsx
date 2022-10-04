import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../../components/Header';
import moment from 'moment';
import ShareYourStory from '../../../components/ShareYourStory';
import Logo from '../../../components/subComponents/Logo';
import SingBlogTemp from '../SingBlogTemp';

const BrainHealth = () =>
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

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="singBlog hero" style={{ height: `100vh` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/blogs/alzheimers.jpeg)` }}>

                </div>
                <div className="callout btext">
                    <div className="calltext">
                        <h1 className="textPost">How to Talk to Family Members About Brain Health</h1>
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
                    <div className="six columns offset-by-two bread">
                        <a href="/">Home</a> {'>'} <a href="/blog">Stories</a> {'>'} How to Talk to Family Members About Brain Health
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="container">
                    <div className="six columns offset-by-two">
                        <div className="storie">
                            <h2>How to Talk to Family Members About Brain Health</h2>
                            {/* <h4>Voices From Our Community</h4> */}
                            {/* <iframe width="100%" height="550px" src="https://www.youtube.com/embed/liCjNRWAZrM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                        </div>
                    </div>
                    <div className="six columns offset-by-two">
                        <div className="text">
                            <p>Recently, NOWINCLUDED community member Cheryl Adams shared that she’s committed to understanding Alzheimer’s disease better so that she can “identify any signs of Alzheimer’s early in [her] family.”</p>
                            <p>The word “early” is key.</p>
                            <p>Think about your own experiences. Before someone you know was diagnosed with Alzheimer’s disease, were there early signs that their mental ability was declining? Oftentimes, there are.</p>
                            <p>Detecting and diagnosing Alzheimer’s as early as possible is important.1 If someone knows they have the disease, they can get treated for it sooner. And treatment is essential for helping slow down the progress of the disease.</p>
                            <h4>Why talking about brain health with your loved ones is important for Black families</h4>
                            <p>According to the <a href="https://www.alz.org/help-support/resources/black-americans-and-alzheimers">Alzheimer’s Association</a>, Black Americans are twice as likely as white Americans to develop Alzheimer’s or other types of dementia.<sup>2</sup> In fact, scientists predict that <a href="https://www.cdc.gov/media/releases/2018/p0920-alzheimers-burden-double-2060.html">more than 2 million</a> Black Americans will be living with Alzheimer’s disease or other types of dementia by the year 2060.<sup>3</sup></p>
                            <div className="blockquote">
                                “I know people that passed that had Alzheimer's disease."
                                <span>NOWINCLUDED community member Esther Richard</span>
                            </div>
                            <p>Because this disease affects Black communities at such high rates, it is critical to talk about it openly with loved ones. While the conversation likely won’t be comfortable, it’s a necessary one to have.</p>
                            <p>There’s an old saying that hindsight is 20/20. It means that, looking back on a situation, you can more clearly understand what was happening and why. Right now, there’s no cure for Alzheimer’s disease, and it’s a progressive disease, which means a person’s condition gets worse over time.</p>
                            <p>For these reasons, it’s best not to rely on hindsight, if possible. Instead, learn and be aware of the early warning signs of Alzheimer’s disease. That way, if someone begins to show these signs, they can get help as soon as possible and hopefully slow the progression of the disease.</p>
                            <div className="image">
                                <img src="/images/blogs/brainhealth2.jpeg" alt="" />
                            </div>
                            <h4>What to do if you suspect a loved one may have Alzheimer’s</h4>
                            <div className="blockquote">
                                “[Understanding Alzheimer’s disease is] important for all of us. [Alzheimer’s] does not run in my family."
                                <span>NOWINCLUDED community member Janice Thomas</span>
                            </div>
                            <p>As Janice Thomas noted, it is important for everyone to understand Alzheimer’s disease, whether or not you know someone with the condition.</p>
                            <p>If you suspect you or a loved one may have Alzheimer’s disease, you may be balancing many different thoughts, fears, and feelings. But any uncomfortable conversations or reflections that might follow are necessary because when it comes to Alzheimer’s disease, early testing and detection is key.</p>
                            <p>If you think a loved one is showing early signs of Alzheimer’s disease, you could start by figuring out who might be the best person to speak with them. Maybe you are, or maybe there’s another trusted loved one who would be a better person to bring up the concerns. Whomever it is should reflect beforehand about how to start the conversation.</p>
                            <p>Try to make it clear that you care for the person and their well-being, without making them feel defensive or embarrassed. <b>For example: [Name], you know how much I care about you. I noticed [example] and that worried me a bit. How are you feeling these days?</b></p>
                            <p>The <a href="https://www.alz.org/media/Documents/alzheimers-dementia-10-steps-to-approach-memory-concerns.pdf">Alzheimer’s Association</a> has a wealth of resources that may give you other ideas on how to approach the conversation.<sup>4</sup> But note that you may not get through to the person with just one talk. It may take more time and more conversations to get through to the person before they decide to be seen by a health professional. This can be a sensitive topic, but it’s worth continuing to follow up if needed.</p>

                            <h4>References</h4>
                            <ul>
                                <li>1. Alzheimer’s Association. Early Detection and Diagnosis. - <a href="https://www.alz.org/professionals/public-health/public-health-topics/early-detection-diagnosis">https://www.alz.org/professionals/public-health/public-health-topics/early-detection-diagnosis</a>
                                </li>
                                <li>2. Black Americans and Alzheimer's - <a href="https://www.alz.org/help-support/resources/black-americans-and-alzheimers">https://www.alz.org/help-support/resources/black-americans-and-alzheimers</a></li>
                                <li>3. U.S. burden of Alzheimer’s disease, related dementias to double by 2060 - <a href="https://www.cdc.gov/media/releases/2018/p0920-alzheimers-burden-double-2060.html">https://www.cdc.gov/media/releases/2018/p0920-alzheimers-burden-double-2060.html</a></li>
                                <li>4. 10 Steps to Approach Memory Concerns Worksheet - <a href="https://www.alz.org/media/Documents/alzheimers-dementia-10-steps-to-approach-memory-concerns.pdf">https://www.alz.org/media/Documents/alzheimers-dementia-10-steps-to-approach-memory-concerns.pdf</a></li>
                            </ul>
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

export default BrainHealth;