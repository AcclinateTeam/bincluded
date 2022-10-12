import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const Logo = (props: any) =>
{
    const size = props.size;
    const image = props.image;
    const url = props.url;
    const title = props.title;
    const description = props.description;
    const benefit = props.benefit;
    const tags = props.tags;

    return (
        <>
            {/* NEW ROW */}
            <div className="third columns">

                <div className="panes">
                    <a href={url} className={tags} target="_blank" rel="noopener noreferrer">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/${image}")`, backgroundColor: '#ffffff' }}></div>
                    </a>
                    <a href={url} className={tags} target="_blank" rel="noopener noreferrer">
                        <div className="pane">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <h2>Who Will Benefit</h2>
                            <p>{benefit}</p>
                            <span>Read More</span> <FontAwesomeIcon className="readmo" icon="arrow-right" />
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Logo;