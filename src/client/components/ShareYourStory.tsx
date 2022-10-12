import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ShareYourStory = () =>
{
    return (
        <section className="share">
            <div className="container sharr">
                <div className="four columns image">
                    <img src="/images/face.webp" alt="" />
                </div>
                <div className="six columns words">
                    <div className="text">
                        <h2>Share <span className="blue">Your Story</span></h2>
                        <p>Our community is built on the shared stories of our members and other community members living, working, and playing in Birmingham. Separate yourself from the noise, share your story with us.</p>
                        <a className="content button solid shareYourStory" href="https://www.videoask.com/ftmqd7gt3" target="_blank" rel="noopener noreferrer">Share Your Story</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShareYourStory;