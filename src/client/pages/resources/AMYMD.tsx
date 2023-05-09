import moment from 'moment';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import Prosper from '../../components/Prosper';
import Logo from '../../theme/Logo';
import CareersTerminal from './components/CareersTerminal';

const AMYMD = () => {
    // Automatic Scroll To Top on Refresh
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero">
                <div className="landinghero">
                    adasdasdassd
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} <a href="/resources">Resources</a> {'>'} Ask Me Your MD
                    </div>
                </div>
            </section>

            {/* RESOURCE INTRO SECTION */}
            <section className="landing">
                <div className="flex">
                    <div className="six order1">
                        <div className="text">
                            <h2>Ask Me <span>Your MD</span></h2>
                            <p>For the month of May, Acclinate and Ask Me Your MD are providing the B-INCLUDED community with free, 24/7 chat services with licensed doctors.</p>
                            <p>Ask Me Your MD is a Black-owned healthcare technology platform that provides direct digital access to licensed doctors that can answer medical questions. For too long, this level of white-glove access to doctors hasn't been readily available for communities of color. This partnership offers another tool for people of color to help them make better informed health decisions.</p>
                        </div>
                    </div>
                    <div className="four order2">
                        <img className="landingimg" src="/images/partners/amymd.png" alt="" />
                    </div>
                </div>
            </section>

            {/* RESOURCE INTRO SECTION */}
            <section className="landing">
                <div className="flex rev">
                    <div className="four order1">
                        <img src="/images/theme/kimbly.png" alt="" />
                    </div>
                    <div className="six order2">
                        <div className="text land">
                            <p><b>Ask Me Your MD has already helped members like Kimbly:</b><br />
                                "It was very easy. They gave me pointers above and beyond what I asked for. They offered to give me an accountability partner to help me reduce my caffeine intake. Right after the chat, they immediately sent me the info for my accountability partner for no additional fee. They gave me education about caffeine intake instead of just telling me what to do."</p>
                            <p>Join the B-INCLUDED community to try Ask Me Your MD for yourself.</p>
                            <a className="content button solid landingCTA" href="https://get.nowincluded.com/amymd-b-included" target="_blank" rel="noopener noreferrer">Join B-INCLUDED</a>
                        </div>
                    </div>
                </div>
            </section>

            

            {/* RESOURCE INTRO SECTION */}
            <section className="landing">
                <div className="container video">
                    <div className="ten columns head">
                        <h2>About <span>AMYMD</span></h2>
                        <p>Dr. Patrica Marsh, CEO of Ask Me Your MD tells us about sit amet luctus. Vivamus magna arcu, dictum ut sapien et, tempus tempus dui. Vestibulum id turpis et dolor auctor iaculis fringilla et neque.</p>
                    </div>
                    <div className="five columns">
                        <div className="box">
                            <iframe src="https://www.youtube.com/embed/Po01sKow_fQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <h3>Introduction to <span>AMYMD</span></h3>
                            <p>Dr. Patrica Marsh introduces Ask Me Your MD Nam vestibulum vel risus sit amet luctus. Vivamus magna arcu, dictum ut sapien et, tempus tempus dui. Vestibulum id turpis et dolor auctor iaculis fringilla et neque.</p>
                        </div>
                    </div>
                    <div className="five columns">
                        <div className="box">
                            <iframe src="https://www.youtube.com/embed/cdkZVKB4F-g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <h3>Cancer <span>Screening</span></h3>
                            <p>Dr. Patrica Marsh introduces Ask Me Your MD Nam vestibulum vel risus sit amet luctus. Vivamus magna arcu, dictum ut sapien et, tempus tempus dui. Vestibulum id turpis et dolor auctor iaculis fringilla et neque.</p>
                        </div>
                    </div>
                    <div className="five columns">
                        <div className="box">
                            <iframe src="https://www.youtube.com/embed/RD9tOcfUiRs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <h3>Gut <span>Health</span></h3>
                            <p>Dr. Patrica Marsh introduces Ask Me Your MD Nam vestibulum vel risus sit amet luctus. Vivamus magna arcu, dictum ut sapien et, tempus tempus dui. Vestibulum id turpis et dolor auctor iaculis fringilla et neque.</p>
                        </div>
                    </div>
                    <div className="five columns">
                        <div className="box">
                            <iframe src="https://www.youtube.com/embed/XrbeFan-imA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <h3>What is <span>Telehealth?</span></h3>
                            <p>Dr. Patrica Marsh introduces Ask Me Your MD Nam vestibulum vel risus sit amet luctus. Vivamus magna arcu, dictum ut sapien et, tempus tempus dui. Vestibulum id turpis et dolor auctor iaculis fringilla et neque.</p>
                        </div>
                    </div>
                </div>
            </section>




        </>
    );
}

export default AMYMD;