import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogPosts = () =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() =>
    {
        fetch('/api/blogPosts/blogComp')
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    console.log(blogPosts);

    return (
        <>
            <div className="container featwrap">
                {blogPosts.map((post: any, index) => (
                    <div className="third columns" key={post.id}>
                        <div className="articles">
                            <div className="article">
                                <div className="image" style={{ backgroundImage: `url(${post.imagelink})` }}></div>                                
                                <div className="text">
                                    <h2>{post.title}</h2>
                                    <p>{post.description}</p>
                                    <Link to={`/blog/single/${post.id}`}>Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BlogPosts;