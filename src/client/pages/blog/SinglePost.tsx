import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import SubHeader from '../../components/SubHeader';
import Terminal from '../../components/Terminal';
import BlogPosts from '../BlogPosts';

const SinglePost = () =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);


    const { id } = useParams();
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() =>
    {
        fetch(`/api/blogPosts/${id}`)
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    console.log(blogPosts);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <SubHeader />

            <div className="singleHeader">
                {blogPosts.map((post, index) => (
                    <>
                        <div className="image" style={{ backgroundImage: `url(${post.imagelink})` }}></div>
                        <div className="container">
                            <div className="six columns offset-by-two">
                                <div className="text">
                                    <h3>{moment(post._created).format('MMM Do, YYYY')} {/*| Wellness and Health*/} | {post.author}</h3>
                                    <h1>{post.title}</h1>
                                    <p>{post.description}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>

            <section className="singlePost">
                <div className="container">
                    <div className="six columns offset-by-two">
                        <div className="content">
                            {blogPosts.map((post, index) =>
                            {

                                return (
                                    <p>
                                        {post.content.split('\\n').map((para: any, i: any) => (
                                            <>
                                                <p>{para}</p>
                                            </>
                                        ))}
                                    </p>
                                )
                            })}
                        </div>
                        <div className="buttonwrap">
                            <Link className="content button" to="/blog">Back to Blogs <FontAwesomeIcon icon="arrow-right" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="related">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h1>Related Articles</h1>
                        </div>
                        <div className="panel">
                            <div className="container">
                                <BlogPosts />
                                <div className="buttonwrap">
                                    <Link className="content button" to="/blog">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SinglePost;