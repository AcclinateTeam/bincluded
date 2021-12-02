import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Terminal = () =>
{
    return (
        <>
            <section className="addRes">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="header">
                            <h1>Additional<br /> Health Resources</h1>
                        </div>
                        <ul className="terminal">
                            <a href="#"><li className="active">Personal</li></a>
                            <a href="#"><li>Mental</li></a>
                            <a href="#"><li>Physical</li></a>
                            <a href="#"><li>TeleHealth</li></a>
                        </ul>
                        <div className="panel">
                            <div className="container">
                                <div className="third columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="image">
                                                <img src="/images/christhealth.png" alt="" />
                                            </div>
                                            <h2>Christ Health</h2>
                                            <p>Providing affordable, compassionate care</p>
                                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="image">
                                                <img src="/images/cahaba.png" alt="" />
                                            </div>
                                            <h2>Cahaba Medical Care</h2>
                                            <p>Provides comprehensive primary care services</p>
                                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="image">
                                                <img src="/images/mpower.png" alt="" />
                                            </div>
                                            <h2>M-POWER Ministries</h2>
                                            <p>Engaging with the people of Birmingham and providing paths out of poverty.</p>
                                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttonwrap">
                            <Link className="button" to="/">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Terminal;