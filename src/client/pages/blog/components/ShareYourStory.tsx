import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ShareYourStory = () => {
    return (
        <section className="shareyourstory">
            <div className="image">
                <img src="/images/theme/sharestory2.png" alt="" />
            </div>
            <div className="text">
                <h2>Share <span>Your Story</span></h2>
                <p>Our community is built on the shared stories of people who live, work, and play in Birmingham. Tell us about your health story. How have you shaped the health of the community? What would you love for people to know and understand about caring for their wellbeing?</p>
                <a className="content button solid shareYourStory" href="https://www.videoask.com/ftmqd7gt3" target="_blank" rel="noopener noreferrer">Share Your Story</a>
            </div>
        </section>
    )
}

export default ShareYourStory;