import React from 'react';
import { useState, useEffect } from 'react';

const WhyNowIntro = () => {

    // SCROLL TO TOP
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            {/* RESOURCE INTRO SECTION */}
            <section className="intro whyn">
                <div className="container">
                    <div className="four columns offset-by-one">
                        <div className="text">
                            <h2>Why <span style={{ 'display': 'inline-block' }}>Not Now?</span></h2>
                            <p>There’s no better time for Black communities to have and claim a space of their own. The longevity of Black communities depends on a collective of people who are focused on improved health, overall wellness, and elevated financial practices. B-Included is that space and you can become part of that collective</p>
                        </div>
                    </div>
                    <div className="four columns offset-by-one">
                        <div className="image">
                            <img src="/images/theme/whynowintro.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyNowIntro;