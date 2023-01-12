import React from 'react';
import { useState, useEffect } from 'react';

const WhyNowMission = () => {

    // SCROLL TO TOP
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <section className="mission">
                <div className="container">
                    <div className="four columns">
                        <div className="image">
                            <img src="/images/theme/whynow2.png" alt="" />
                        </div>
                    </div>
                    <div className="six columns" style={{ 'position': 'relative'}}>
                        <div className="text">
                            <h2>Our <span> Mission</span></h2>
                            <p>Connect corporate, civic, and community leaders to understand issues and increase equitable economic growth.</p>
                            <hr />
                            <h2>Our <span> Vision</span></h2>
                            <p>Transforming Birmingham by creating a more prosperous and equitable future.</p>
                            <hr />
                            <h2>Our <span> Values</span></h2>
                            <p>Prosper is a coalition of community, civic and business leaders committed to creating a more vibrant, racially and gender inclusive economy.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyNowMission;