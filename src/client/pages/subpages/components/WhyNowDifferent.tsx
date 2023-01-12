import React from 'react';
import { useState, useEffect } from 'react';

const WhyNowDifferent = () => {

    // SCROLL TO TOP
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <section className="different">
                <div className="container">
                    <div className="four columns">
                        <div className="image">
                            <img src="/images/theme/whynowbham.png" alt="" />
                        </div>
                    </div>
                    <div className="six columns" style={{ 'position': 'relative'}}>
                        <div className="text">
                            <h2>What Makes<span> B-INCLUDED different</span></h2>
                            <p>B-INCLUDED is different because the platform was designed specifically with you in mind. You are not an afterthought on an already existing platform nor are you being included because it’s trendy. With B-INCLUDED, you are the priority. Everything the platform offers is being provided in consideration of your needs, wants, dreams & aspirations for a healthy and wealthy life. That’s what we all want, right? Each of us wants to live our best lives on our own terms. The B-INCLUDED community can help you get there.</p>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}

export default WhyNowDifferent;