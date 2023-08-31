import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';


const FeatArticlesComponent = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('api/stories/storyPosts')
            .then(res => res.json())
            .then(stories => setStories(stories))
    }, []);

    const [visible, setVisible] = useState(false);

    return (
        <>
            <section className="stories">
                <div className="container">
                    <div className="ten columns header">
                        <h2>Featured <span className="blue">Stories</span></h2>
                        <p>Read and listen to stories from community members just like you. </p>
                    </div>

                    <div className="ten columns">
                        <div className="container case">
                            {stories.map((post: any, index) => {
                                if (post.id < 5) {
                                    return (
                                        <VisibilitySensor partialVisibility onChange={(isVisible) => { if (isVisible) { setVisible(true); }}}>
                                            <div className="fourth columns rack" key={index} style={{ opacity: visible ? 1 : 0 }}>
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
                                        </VisibilitySensor>
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

export default FeatArticlesComponent;



