import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = (props: any) =>
{
    const path = props.path;
    const img = props.img;
    const title = props.title;
    const date = props.date;
    const excerpt = props.excerpt;

    return (
        <>
            {/* NEW ROW */}
            <div className="third columns rack">
                <div className="frames">
                    <div className="image">
                        <Link to={path}><img src={`${img}`} alt="" /></Link>
                    </div>
                    <div className="text">
                        <span>{date}</span>
                        <Link to={path}><h4>{title}</h4></Link>
                        <p>{excerpt}</p>
                        <Link to={path}>Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogItem;