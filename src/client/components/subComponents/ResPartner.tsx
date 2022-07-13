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

    return (
        <>
            {/* NEW ROW */}
            <div className="third columns">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/${image}")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <h2>Who Will Benefit</h2>
                            <p>{benefit}</p>
                            <a href={url} target="_blank" rel="noopener noreferrer">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></a>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Logo;