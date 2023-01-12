import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const PartnerTerminal = () => {

    return (
        // COOPER GREEN LOADED
        <>
            <section className="featured">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="header">
                            <h2>Featured <span>Partners</span></h2>
                            <p>We partner with brands that are passionate about our mission and our community.<br /> Click on the partner logo below to see more information.</p>
                        </div>

                        <div className="container panel">
                            <div className="third columns panet">
                                <Link to="/partners/coopergreen">
                                    <div className="frame">
                                        <div className="panes" style={{ backgroundImage: `url("/images/partners/cooper.png")` }}></div>
                                        <div className="text">
                                            <h3>Cooper Green Mercy Hospital</h3>
                                            <p>Featured Partner</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="third columns panet">
                                <Link to="/partners/lhsa">
                                    <div className="frame">
                                        <div className="panes" style={{ backgroundImage: `url("/images/partners/uablive.png")` }}></div>
                                        <div className="text">
                                            <h3>Live Health Smart Alabama</h3>
                                            <p>Featured Partner</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="third columns panet">
                                <Link to="/partners/vivahealth">
                                    <div className="frame">
                                        <div className="panes" style={{ backgroundImage: `url("/images/partners/viva.png")` }}></div>
                                        <div className="text">
                                            <h3>Viva Health</h3>
                                            <p>Featured Partner</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="container panel">
                            <div className="bottom">a</div>
                            <div className="third columns panet">
                                <Link to="/partners/unitedway">
                                    <div className="frame">
                                        <div className="panes" style={{ backgroundImage: `url("/images/partners/uway.jpg")` }}></div>
                                        <div className="text">
                                            <h3>United Way</h3>
                                            <p>Featured Partner</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="third columns panet">
                                <Link to="/partners/conHealth">
                                    <div className="frame">
                                        <div className="panes" style={{ backgroundImage: `url("/images/partners/connecthealth.jpg")` }}></div>
                                        <div className="text">
                                            <h3>Connect Health</h3>
                                            <p>Featured Partner</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PartnerTerminal;

