import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState, useEffect } from 'react';

const WhyNowLeaders = () => {

    // SCROLL TO TOP
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <section className="leaders">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h2>Leadership <span className="blue">At Our Core</span></h2>
                            <p>Acclinate™, a Birmingham-based company specializing in digital health products, is partnering with Jefferson County to help 50,000 county residents control their future by taking charge of their health. The B-Included website will engage residents and provide easy access to pertinent health resources and job assistance.</p>
                        </div>
                        <div className="ten columns windowSeal">
                            <div className="container">
                                <div className="panel">
                                    <div className="container">

                                        {/* NEW ROW */}
                                        <div className="third columns">
                                            <div className="panes">
                                                <div className="image" style={{ backgroundImage: `url("/images/leaders/jw.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                <div className="pane">
                                                    <h2>J.W. Carpenter</h2>
                                                    <p>Prosper Birmingham</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* NEW ROW */}
                                        <div className="third columns">
                                            <div className="panes">
                                                <div className="image" style={{ backgroundImage: `url("/images/leaders/angela.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                <div className="pane">
                                                    <h2>Angela S. Abdur-Rasheed</h2>
                                                    <p>Prosper Birmingham</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* NEW ROW */}
                                        <div className="third columns">
                                            <div className="panes">
                                                <div className="image" style={{ backgroundImage: `url("/images/leaders/joanice.webp")`, backgroundColor: '#ffffff' }}></div>
                                                <div className="pane">
                                                    <h2>Joanice Thompson</h2>
                                                    <p>Acclinate</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* NEW ROW */}
                                        <div className="third columns">
                                            <div className="panes">
                                                <div className="image" style={{ backgroundImage: `url("/images/leaders/emily.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                <div className="pane">
                                                    <h2>Emily Wykle</h2>
                                                    <p>UAB</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* NEW ROW */}
                                        <div className="third columns">
                                            <div className="panes">
                                                <div className="image" style={{ backgroundImage: `url("/images/leaders/tiffany.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                <div className="pane">
                                                    <h2>Tiffany Whitlow</h2>
                                                    <p>Acclinate</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* NEW ROW */}
                                        <div className="third columns">
                                            <div className="panes">
                                                <div className="image" style={{ backgroundImage: `url("/images/leaders/del.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                <div className="pane">
                                                    <h2>Del Smith</h2>
                                                    <p>Acclinate</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ten columns">
                            <div className="cards">
                                <div className="card">
                                    <div className="image">
                                        <img src="/images/theme/whynowacc.png" alt="" />
                                    </div>
                                    <div className="text">
                                        <h2>Prosper + <span>Acclinate</span></h2>
                                        <p>Acclinate and Birmingham Prosper have been hard at work to develop a Birmingham-specific community platform; B-INCLUDED. This platform will further Prosper's initiative to reduce racial inequities in Jefferson County by providing county residents access to long needed resources.</p>
                                        <a href="https://www.bizjournals.com/birmingham/inno/stories/news/2022/01/12/acclinate-and-prosper-partner-on-new-platform.html">Read About How This Partnership Was Formed <FontAwesomeIcon icon="arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyNowLeaders;