import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../theme/Header';
import Logo from '../../components/subComponents/Logo';
import WhyNowIntro from './components/WhyNowIntro';
import WhyNowMission from './components/WhyNowMission';
import WhyNowMeaning from './components/WhyNowMeaning';
import WhyNowDifferent from './components/WhyNowDifferent';
import WhyNowLeaders from './components/WhyNowLeaders';
import ToolTerminal from './components/ToolTerminal';
import PartnerWithUs from '../partners/components/PartnerWithUs';

const ToolKit = () =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    const [print, setPrint] = useState(false);
    const [digital, setDigital] = useState(false);

    return (
        <>
            {/* HEADER COMPONENT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero">
                <div className="container">
                    <div className="columns eight offset-by-one callout">
                        <div className="image blog">
                            <img src="/images/theme/toolkit.png" alt="" />
                        </div>
                        <div className="text">
                            <div className="calltext">
                                <h1>ToolKit</h1>
                                <p>We’ve created template so that you, your organization, and your fellow community members can spread <Logo color="#287fdd" />’s message of inclusion and equality. These templates are easy to use and quick to deploy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} ToolKit
                    </div>
                </div>
            </section>

            <ToolTerminal />

            <PartnerWithUs />
        </>
    )
}

export default ToolKit;