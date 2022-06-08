import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ShareYourStory = () =>
{
    return (
        <section className="share">
            <div className="container">
                <div className="four columns image">
                    <img src="/images/face.png" alt="" />
                </div>
                <div className="six columns">
                    <div className="text">
                        <h2>Share <span className="blue">Your Story</span></h2>
                        <p>Our community is built on the shared stories of our members and other community members living, working, and playing in Birmingham. Separate yourself from the noise, share your story with us.</p>
                        <div className="buttonwrap" style={{ textAlign: `left` }}>
                            <a className="content button solid" href="https://www.videoask.com/fyxp7akhq">Share Your Story</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShareYourStory;