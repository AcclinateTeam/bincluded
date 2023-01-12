import React from 'react';
import { useState, useEffect } from 'react';

const WhyNowMeaning = () => {

    // SCROLL TO TOP
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <section className="intro">
                <div className="container">
                    <div className="four columns offset-by-one">
                        <div className="text" style={{ 'padding': '120px 0 0' }}>
                            <h2>What Does <span style={{ 'display': 'inline-block'}}>This Mean?</span></h2>
                            <p>When you sign up to use the platform, you will have access to life-changing resources. These resources can help you make informed decisions about your health. Invite your family and friends, and they will have the opportunity to do the same. All of you will have information about health, education, employment, and financial topics right at your fingertips. The best part? This information comes in many different forms like written, video, audio, and graphic content. There’s literally something for everybody!<br />
                            <br />
                            When you use your access on a regular basis, you should notice a gradual increase in the confidence to not only make better health choices but better life choices as well. Get engaged in the community and compete against your friends!</p>
                        </div>
                    </div>
                    <div className="four columns offset-by-one">
                        <img style={{ 'margin': '0 0 -3px'}} src="/images/theme/whynowkid.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyNowMeaning;