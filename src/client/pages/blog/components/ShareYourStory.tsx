import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ShareYourStory = () => {
    return (
        <section className="shareyourstory">
            <div className="image">
                <img src="/images/theme/shareyourstory.png" alt="" />
            </div>
            <div className="text">
                <h2>Share <span>Your Story</span></h2>
                <p>Our community is built on the shared stories of our members and other community members living, working, and playing in Birmingham. Separate yourself from the noise, share your story with us.</p>
                <a className="content button solid shareYourStory" href="https://www.videoask.com/ftmqd7gt3" target="_blank" rel="noopener noreferrer">Share Your Story</a>
            </div>
        </section>
    )
}

export default ShareYourStory;