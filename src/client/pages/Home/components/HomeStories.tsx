import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeStories = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('api/stories/storyPosts')
            .then(res => res.json())
            .then(stories => setStories(stories))
    }, []);

    return (
        <>
            <section className="homestories">
                <div className="container">
                    <div className="ten columns header">
                        <h2>Featured <span className="blue">Stories</span></h2>
                        <p>Click below to hear from the community</p>
                    </div>

                    <div className="ten columns">
                        <div className="container case">
                            {stories.map((post: any, index) => {
                                if (post.id < 5) {
                                    return (
                                        <>
                                            {/* NEW ROW */}
                                            <div className="fourth columns rack">
                                                <Link to={`/stories/${post.slug}`}>
                                                    <div className="frames">
                                                        <div className="frame">
                                                            <div className="image">
                                                                <img src={`/images/${post.imagelink}`} alt="" />
                                                            </div>
                                                            <div className="text">
                                                                <h1>{post.title}</h1>
                                                                <p>{post.subTitle}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </>
                                    )
                                }

                            })}
                        </div>
                    </div>
                    <div className="ten columns">
                        <div className="buttonwrap center">
                            <Link className="content button solid" to="/stories">See More Stories</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeStories;