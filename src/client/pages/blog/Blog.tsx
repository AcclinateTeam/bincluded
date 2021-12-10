import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import SubHeader from '../../components/SubHeader';
import Terminal from '../../components/Terminal';
import moment from 'moment';

const Blog = () =>
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
            <SubHeader />

            <div className="blogHeader">
                <svg viewBox="0 0 1430 672" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_275_879" maskUnits="userSpaceOnUse" x="-10" y="-1" width="1440" height="3300">
                        <rect x="-10" y="-1" width="1440" height="3300" fill="white" />
                    </mask>
                    <g mask="url(#mask0_275_879)">
                        <rect y="-152" width="1440" height="3407" fill="white" />
                        <path d="M309.901 -1652.36L1511.57 -45.3275L382.535 549.563L-1028 -651.932L309.901 -1652.36Z" fill="#287FDD" />
                        <path d="M309.901 -1652.36L1404.41 -190.423L382.535 549.562L-756.293 -855.103L309.901 -1652.36Z" fill="#CA1D48" />
                        <path d="M309.901 -1652.36L1333.47 -283.501L382.535 549.562L-877.529 -764.448L309.901 -1652.36Z" fill="#050236" />
                        <path d="M1072.66 614.584L1222.3 573.912L1217.87 618.718L1068.98 657.474L1072.66 614.584Z" fill="#EEC31A" />
                        <path d="M1225.98 531.022L1375.62 490.35L1371.19 535.156L1222.3 573.912L1225.98 531.022Z" fill="#287FDD" />
                        <path d="M1217.87 618.717L1368.02 578.11L1363.59 622.917L1214.7 661.672L1217.87 618.717Z" fill="#ECECEC" />
                    </g>
                </svg>
            </div>

            <section className="blogContent">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h1>News You Can Use</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featStory" style={{ marginTop: '50px', marginBottom: '100px' }}>
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="container story" style={{ backgroundColor: "white" }}>
                            {blogPosts.map((feat, index) =>
                            {
                                if (index === 0)
                                {
                                    return (
                                        <>
                                            <div className="four columns">
                                                <div className="image" style={{ backgroundImage: `url(${feat.imagelink})` }}></div>
                                            </div>
                                            <div className="six columns">
                                                <div className="text">
                                                    <h5>{moment(feat._created).format('MMM Do, YYYY')} | {feat.author}</h5>
                                                    {/* <ul className="featTags">
                                                        <li>Chronic Illness</li>
                                                        <li>Mental Health</li>
                                                    </ul> */}
                                                    <h1>{feat.title}</h1>
                                                    <p>{feat.description}</p>
                                                    <Link to={`/blog/single/${feat.id}`}>Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="blogContent">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="container panel">
                            {blogPosts.map((post, index) =>
                            {
                                if (index > 0)
                                {
                                    return (
                                        <div className="third columns" key={post.id}>
                                            <div className="panes">
                                                <div className="pane">
                                                    <div className="image" style={{ backgroundImage: `url(${post.imagelink})` }}></div>
                                                    <div className="text">
                                                        <h2>{post.title}</h2>
                                                        <p>{post.description}</p>
                                                        <Link to={`/blog/single/${post.id}`}>Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;