import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeatStoriesComponent = () => {

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch('api/blogPosts/blog')
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    return (
        <>
            <section className="stories-grid">
                <div className="container">
                    <div className="ten columns header">
                        <h2>Featured <span className="blue">Articles</span></h2>
                        <p>Read articles we collected from our community.</p>
                    </div>
                    <div className="ten columns">
                        <div className="container case">

                            {blogPosts.map((post: any, index) => {
                                return (
                                    <>
                                        <div className="fourth columns rack" key={post.id}>
                                            <div className="frames">
                                                <div className="image">
                                                    <Link to={`/blog/single/${post.id}`}><img className="image" src={post.imagelink} alt="" /></Link>
                                                </div>
                                                <div className="text">
                                                    <span>{moment(post._created).format('MMM Do, YYYY')}</span>
                                                    <Link to={`/blog/single/${post.id}`}><h4>{post.title}</h4></Link>
                                                    <Link to={`/blog/single/${post.id}`}>Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className="ten columns">
                        <div className="buttonwrap center">
                            <Link className="content button solid" to="/articles">See More Articles</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatStoriesComponent;



