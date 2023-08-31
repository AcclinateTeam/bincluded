import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';


const FeatStoriesComponent = () => {
    // GET BLOG POSTS
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch('api/blogPosts/blog')
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    const [visible, setVisible] = useState(false);

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
                                    <VisibilitySensor partialVisibility onChange={(visible) => { if (visible) { setVisible(true); } }}>
                                        <div className="fourth columns rack" style={{ opacity: visible ? 1 : 0 }} key={index}>
                                            <div className="frames">
                                                <div className="image">
                                                    <Link to={`/articles/${post.slug}`}><img className="image" src={post.imagelink} alt="" /></Link>
                                                </div>
                                                <div className="text">
                                                    {/* <span>{moment(post._created).format('MMM Do, YYYY')}</span> */}
                                                    <Link to={`/articles/${post.slug}`}><h4>{post.title}</h4></Link>
                                                    <Link to={`/articles/${post.slug}`}>Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </VisibilitySensor>
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



