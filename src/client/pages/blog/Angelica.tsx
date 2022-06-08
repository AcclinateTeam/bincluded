import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../components/Header';
import moment from 'moment';
import ShareYourStory from '../../components/ShareYourStory';
import Logo from '../../components/subComponents/Logo';

const Angelica = () =>
{
    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() =>
    {
        fetch('api/blogPosts/blog')
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    console.log(blogPosts)

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
                        <h1>Featured Story</h1>
                        <p>Angelica Woods - Voice From Our Community</p>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="six columns offset-by-two bread">
                        <a href="/">Home</a> {'>'} <a href="/blog">Stories</a> {'>'} Angelica Woods - Voices From Our Community
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="container">
                    <div className="six columns offset-by-two">
                        <div className="storie">
                            <h2>Angelica Woods</h2>
                            <h4>Voices From Our Community</h4>
                            <iframe width="100%" height="550px" src="https://www.youtube.com/embed/UHzjDM6ex98" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="six columns offset-by-two">
                        <div className="text">
                            <p>Angelica shares her personal story and encourages others to <Logo color="#050236" />. Through faith and determination, she recently moved to the Bessemer community in search of opportunities and space for her growing family. Angelica reiterates the importance of working in careers that provide purpose - such as advocacy for women, an area she feels strongly about. As a member of <Logo color="#050236" />, Angelica wants others to access resources to learn more about affordable healthcare, information on mental health and access other tools to help reach their goals.</p>
                            {/* <p>
                                <h3>Q ~ What kind of adversities have you had to face in your life?</h3>
                                <h6>Angelica Woods (00:11):</h6>
                                <p>I have already overcame a lot of adversities. I lost my mom and my dad at a very young age, including my brother so I have been on my own since I was 19 years old. I have a roof over my head. I have a good mind on my shoulders. I am free of any substances. I'm a woman of God so that is something that I thrive off of to know that I've made it this far.</p>
                                <h3>Q ~ What education level did you achieve or work experience do you have?</h3>
                                <h6>Angelica Woods (00:39):</h6>
                                <p>I did graduate high school. I have some college background for massage therapy. While being in school, I developed carpal tunnel. I thought it was short-term, but I get it more often and my hands go numb, I really can't feel, and being in massage therapy you have to be able to feel.</p>
                                <h3>Q ~ How long have you lived in this community</h3>
                                <h6>Angelica Woods (01:08):</h6>
                                <p>I've lived in this community for about two years now. I chose this neighborhood because I was living above my means and I was with child with my second child and I knew I couldn't continue living in the apartment that I was living in with another child. Moving here from Jonesboro was a little bit... it was a lifestyle change.</p>
                                <h3>Q ~ What, if anything has impacted your community</h3>
                                <h6>Angelica Woods (01:40):</h6>
                                <p>One thing that has impacted our community is COVID. When COVID first started, I was working in retail, but now I'm a food deliverer. I switched jobs because of the schedules of the childcare and me not being able to pick my kids up or leave at a certain time.</p>
                                <h3>Q ~ What do you consider to be a good job?</h3>
                                <h6>Angelica Woods (02:02):</h6>
                                <p>I think a good job is somewhere that I am comfortable, I'm happy. We don't always get blessed to be doing something that we're happy doing, but I like helping, I like giving back. Advocacy is something that I would definitely like to be a part of.</p>
                                <div className="image"><img src="/images/bessemer.jpg" alt="" /></div>
                                <h3>Q ~ Do you know af any agencies or resources that might help you?</h3>
                                <h6>Angelica Woods (02:20):</h6>
                                <p>Right now I'm just not aware of a whole lot of resources that provides advocacy for young women or girls.</p>
                                <h3>Q ~ Does your job offer healthcare?</h3>
                                <h6>Angelica Woods (02:34):</h6>
                                <p>It does not, not the one that I'm currently in, no. Healthcare for me is important, but to a certain extent, it's not. You pay all this money and it's not like you're going to the doctor all the time. You go yearly, or if something is really going on with you, then you'll go more often, but you're paying out more money than the services you're actually getting. But it helps for someone like me when I go to the doctor and I really can't afford paying out of pocket so healthcare does become important then. If I'm financially stable, I would rather pay out of pocket than pay an insurance company.</p>
                                <h3>Q ~ What are some things thatt would help you get from point A to Point B</h3>
                                <h6>Angelica Woods (03:22):</h6>
                                <p>Some of the things that I feel like that have helped me get from point A to point B is more information as far as talking to people, knowing what resources are available to me, putting together a plan, setting goals, and setting achievable goals, not goals that are out of my reach, and step-by-step getting there. I think I am afraid to actually go out there and get it. I know I'm capable, but to have someone supporting me, I think that would help a lot.</p>
                                <h3>Q ~ What needs are you most excited to see the B-INCLUDED community meet for county residents. How can B-Included Help you most</h3>
                                <h6>Angelica Woods (04:04):</h6>
                                <p>What I would like to see or be included is more resources for single parents, more resources on mental issues. With mental health, I feel like a lot of people in our community experience that. They're not... How do I put it? Informed on it and what it includes, they think it's something that you have to hide or be shameful about.<br />
                                <br />
                                My name is Angelica Woods and I'm happy to be included. And right now is your time to be included.</p>

                            </p> */}
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

export default Angelica;