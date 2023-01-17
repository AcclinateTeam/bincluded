import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const HealthTech = () => {

    return (
        // COOPER GREEN LOADED
        <>
            <section className="healthTech">
                <div className="container">
                    <div className="ten columns">
                        <div className="header">
                            <h2>Prosper Health-Tech <span className="blue">Companies</span></h2>
                            <p>Spring Cohort 22</p>
                        </div>

                        <div className="panel">
                            <div className="container">

                                <div className="five columns">
                                    <a href="http://joinoben.com" target="_blank" rel="noopener noreferrer">
                                        <div className="card">
                                            <div className="image" style={{ backgroundImage: `url("/images/partners/obenhealth.png")` }}></div>
                                            <div className="text">
                                                <h3>Oben Health</h3>
                                                <p>Oben (formerly Lapis) is a culturally competent digital health treatment that safely and sustainably reverses heart disease without medication or surgery. Starting off with hypertension, the treatment is based on the clinical work of Lapis's Chief Medical Officer (Michelle Routhenstien)  -  where she's been able to help 90% of her patients lower/normalize their blood pressure and 70% achieve medication reductions in 3 months.</p>
                                                <p className="link">Visit Oben Health <FontAwesomeIcon className="icon" icon="arrow-right" /></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="five columns">
                                    <a href="http://healthopx.com" target="_blank" rel="noopener noreferrer">
                                        <div className="card">
                                            <div className="image" style={{ backgroundImage: `url("/images/partners/healthopx.png")` }}></div>
                                            <div className="text">
                                                <h3>HealthOpX</h3>
                                                <p>HealthOpX is a software platform that partners community-based organizations and home care
                                                    agencies with health insurers, providers, and government to engage and improve the health of
                                                    at-risk patients.</p>
                                                <p className="link">Visit HealthOpX <FontAwesomeIcon className="icon" icon="arrow-right" /></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="five columns">
                                    <a href="http://trudiary.com" target="_blank" rel="noopener noreferrer">
                                        <div className="card">
                                            <div className="image" style={{ backgroundImage: `url("/images/partners/trudiary.png")` }}></div>
                                            <div className="text">
                                                <h3>TruDiary</h3>
                                                <p>TruDiary provides culturally relevant value-based care to Black and Brown maternal patients in
                                                    underserved communities. TruDiary’s digital health platform eliminates barriers to quality
                                                    prenatal care by connecting patients to the right doctor, offering inclusive educational content
                                                    and providing social determinants of health (SDOH) services such as food security, mental
                                                    health, lactation services and transportation.</p>
                                                <p className="link">Visit TruDiary <FontAwesomeIcon className="icon" icon="arrow-right" /></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="five columns">
                                    <a href="http://joinkaya.com" target="_blank" rel="noopener noreferrer">
                                        <div className="card">
                                            <div className="image" style={{ backgroundImage: `url("/images/partners/kaya.png")` }}></div>
                                            <div className="text">
                                                <h3>Kaya</h3>
                                                <p>Kaya offers virtual mental health groups connecting employees from different companies
                                                    together based on shared experiences. Our groups are led by experienced licensed clinicians
                                                    creating safe places for people to gather, learn, and grow with other peers who share similar
                                                    journeys.</p>
                                                <p className="link">Visit Kaya <FontAwesomeIcon className="icon" icon="arrow-right" /></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="five columns">
                                    <a href="http://peakmindllc.com" target="_blank" rel="noopener noreferrer">
                                        <div className="card">
                                            <div className="image" style={{ backgroundImage: `url("/images/partners/peakmind.jpg")` }}></div>
                                            <div className="text">
                                                <h3>PeakMind</h3>
                                                <p>Peak Mind’s mental well-being platform addresses the $1.1T problem of work-related stress,
                                                    related chronic disease, work-related injury, and employee disengagement. Peak Mind uses
                                                    Artificial Emotional Intelligence (AEI), and Machine Learning (ML) to analyze particular
                                                    personalities and work environments that affect the stress levels of workers, and how they can
                                                    be influenced by well-being nudges and action steps.</p>
                                                <p className="link">PeakMind <FontAwesomeIcon className="icon" icon="arrow-right" /></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HealthTech;

