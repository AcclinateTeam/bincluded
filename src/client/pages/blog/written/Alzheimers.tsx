import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../../components/Header';
import moment from 'moment';
import ShareYourStory from '../../../components/ShareYourStory';
import Logo from '../../../components/subComponents/Logo';
import SingBlogTemp from '../SingBlogTemp';

const Alzheimers = () =>
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
                        <h1 className="textPost">Ten Early Warning Signs of Alzheimer’s Disease</h1>
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
                        <a href="/">Home</a> {'>'} <a href="/blog">Stories</a> {'>'} Ten early warning signs of Alzheimer’s disease
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="container">
                    <div className="six columns offset-by-two">
                        <div className="storie">
                            <h2>Ten early warning signs of Alzheimer’s disease</h2>
                            {/* <h4>Voices From Our Community</h4> */}
                            {/* <iframe width="100%" height="550px" src="https://www.youtube.com/embed/liCjNRWAZrM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                        </div>
                    </div>
                    <div className="six columns offset-by-two">
                        <div className="text">
                            <p>According to the Alzheimer’s Association, there are several <a href="https://www.alz.org/alzheimers-dementia/10_signs">early warning signs</a> of Alzheimer’s disease. Here are 10 you should watch out for<sup>1</sup>:</p>
                            <h4>1. Loss of memory that consistently interferes with your everyday life.</h4>
                            <p>If memory loss affects someone’s everyday life, it could show up in a number of ways. Maybe
                                they forget information they learned recently, or have started to forget important dates or events
                                that they should or used to know.</p>
                            <h4>2. Trouble following instructions, especially if they involve numbers.</h4>
                            <p>If a person is cooking and struggles to follow a recipe, or they’re budgeting or making a
                                purchase and have trouble making change or managing the finances, these may be examples
                                of difficulty following instructions.</p>
                            <h4>3. Difficulty doing normal tasks you used to be able to do easily.</h4>
                            <p>If it becomes more difficult to complete tasks that are normal and typical — for example, driving
                                a route a person drives frequently, or operating a piece of equipment they’re very familiar with,
                                like a TV — these could indicate that a person’s mental abilities are declining.</p>
                            <h4>4. Keeping track of time and setting.</h4>
                            <p>It’s normal to occasionally forget or confuse the date or day and then remember later. But
                                consistent trouble with remembering the day, the time of year, the actual year, or the passage of
                                time may signal a deeper issue.</p>
                            <h4>5. Having a hard time with vision, reading, or visually measuring distance.</h4>
                            <p>While eye diseases like glaucoma and cataracts can certainly affect people as they get older,
                                vision changes can also be a little-known early warning sign of Alzheimer’s disease. A person
                                may have a hard time reading, but also challenges with judging distance, which can be a risk for
                                people who drive.</p>
                            <h4>6. Problems with communicating verbally or in written form.</h4>
                            <p>Difficulty in following conversations or participating in them can indicate that someone is having
                                trouble communicating. A person may suddenly stop speaking and appear to be lost in the
                                conversation, or they may have trouble finding the words they want to say.</p>
                            <h4>7. Putting things in odd places and not being able to remember where.</h4>
                            <p>In the early stages of Alzheimer’s disease, someone might misplace items and find themselves
                                unable to remember where they put them, or to retrace their steps to locate them.</p>
                            <h4>8. Poor judgment or decision-making.</h4>
                            <p>Poor decision-making may show up as neglecting many of the daily tasks or routines a person
                                completes. This could include personal hygiene like brushing teeth or washing. But poor
                                decision-making can also manifest in other ways unrelated to hygiene or day-to-day routines.</p>
                            <h4>9. Dropping hobbies or social activities they used to enjoy.</h4>
                            <p>Sometimes, if you notice concerning changes in someone, they might have noticed them as
                                well. This can make a person feel a variety of emotions — embarrassed, frustrated, and
                                defensive, for example. And as a result, they may distance themselves from activities and
                                people they previously enjoyed.</p>
                            <h4>10. Unexplained shifts in overall mood or personality</h4>
                            <p>Again, a person in the early stages of Alzheimer’s disease may be experiencing a variety of
                                emotions and mental changes. Their overall mood and personality can change too. People with
                                Alzheimer’s may feel more irritable, anxious, and may experience more negative emotions than
                                they did previously.</p>
                            <p>This <a href="https://www.alz.org/media/Documents/alzheimers-dementia-10-steps-to-approach-
                                    memory-concerns.pdf">worksheet</a> from the Alzheimer’s Association may help you better understand and keep
                                track of the warning signs previously discussed.<sup>2</sup> </p>
                            <h4>References</h4>
                            <ul>
                                <li>1. 10 Warning Signs of Alzheimer’s Worksheet -
                                    <a href="https://www.alz.org/media/Documents/alzheimers-dementia-10-signs-worksheet.pdf">https://www.alz.org/media/Documents/alzheimers-dementia-10-signs-worksheet.pdf</a>
                                </li>
                                <li>2. 10 Steps to Approach Memory Concerns Worksheet -
                                    <a href="https://www.alz.org/media/Documents/alzheimers-dementia-10-steps-to-approach-
                                    memory-concerns.pdf">https://www.alz.org/media/Documents/alzheimers-dementia-10-steps-to-approach-
                                    memory-concerns.pdf</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="ten columns">
                        <div className="buttonwrap">
                            <Link className="content button solid" to="/blog">Back To Featured Articles</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SHARE YOUR STORY SECTION */}
            <ShareYourStory />
        </>
    );
}

export default Alzheimers;