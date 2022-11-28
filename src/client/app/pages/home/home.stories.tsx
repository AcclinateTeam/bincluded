import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeStories = () => {

    return (
        <>
            <section className="homestories">
                <div className="container">
                    <div className="ten columns header">
                        <h2>Featured Stories</h2>
                        <p>Click below to hear from the community</p>
                    </div>

                    <div className="ten columns">
                        <div className="container case">
                            {/* HOME-STORY ITEM */}
                            <div className="third columns rack">
                                <Link to="/stories/walladean">
                                    <div className="frames">
                                        <div className="frame">
                                            <div className="image">
                                                <img src='images/media/walladean.webp' alt="" />
                                            </div>
                                            <div className="text">
                                                <h1>Walladean Streeter</h1>
                                                <p>Voices From Our Community</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* HOME-STORY ITEM */}
                            <div className="third columns rack">
                                <Link to="/stories/angela">
                                    <div className="frames">
                                        <div className="frame">
                                            <div className="image">
                                                <img src='images/media/angela.webp' alt="" />
                                            </div>
                                            <div className="text">
                                                <h1>Angela Abdur-Rasheed</h1>
                                                <p>Voices From Our Community</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* HOME-STORY ITEM */}
                            <div className="third columns rack">
                                <Link to="/stories/willy">
                                    <div className="frames">
                                        <div className="frame">
                                            <div className="image" style={{ backgroundImage: `url(/images/charger1.jpg)` }}>
                                                <img src='images/media/willy.webp' alt="" />
                                            </div>
                                            <div className="text">
                                                <h1>Willy Etheridge</h1>
                                                <p>Voices From Our Community</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* HOME-STORY ITEM */}
                            {/* <div className="fourth columns rack">
                                <Link to="/stories/celeste">
                                    <div className="frames">
                                        <div className="frame">
                                            <div className="image" style={{ backgroundImage: `url(/images/charger1.jpg)` }}>
                                                <img src='images/media/drharris.webp' alt="" />
                                            </div>
                                            <div className="text">
                                                <h1>Dr. Celeste Reese-Willism</h1>
                                                <p>Voices From Our Community</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div> */}

                        </div>
                    </div>
                    <div className="ten columns">
                        <div className="buttonwrap">
                            <Link className="content button solid" to="/stories">See More Stories</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeStories;