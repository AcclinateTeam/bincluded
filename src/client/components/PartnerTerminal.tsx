import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const PartnerTerminal = () =>
{

    const [lhs, setLhs] = useState(false);
    const [viva, setViva] = useState(false);
    const [uway, setUway] = useState(false);
    const [conhealth, setConhealth] = useState(false);

    const lhsLoaded = () =>
    {
        setLhs(true);
        setViva(false);
        setUway(false);
        setConhealth(false);
    }

    const vivaLoaded = () =>
    {
        setLhs(false);
        setViva(true);
        setUway(false);
        setConhealth(false);
    }

    const uwayLoaded = () =>
    {
        setLhs(false);
        setViva(false);
        setUway(true);
        setConhealth(false);
    }

    const conhealthLoaded = () =>
    {
        setLhs(false);
        setViva(false);
        setUway(false);
        setConhealth(true);
    }

    const cooperLoaded = () =>
    {
        setLhs(false);
        setViva(false);
        setUway(false);
        setConhealth(false);
    }


    return (
        // COOPER GREEN LOADED
        <>
            <section className="featured">
                <div className="container">
                    <div className="seven columns offset-by-one-half">
                        <div className="header">
                            <h2>Featured <span className="blue">Partners</span></h2>
                            <p>We partner with brands that are passionate about our mission and our community.<br /> Click on the partner logo below to see more information.</p>
                        </div>

                        <div className="container panel">
                            <div className="fourth columns panet">
                                <Link to="/partners/coopergreen">
                                    <div className="frame">
                                        <div className="panes" onClick={cooperLoaded} style={{ backgroundImage: `url("/images/partners/cooper.png")` }}></div>
                                    </div>
                                </Link>
                            </div>
                            <div className="fourth columns panet">
                                <Link to="/partners/lhsa">
                                    <div className="frame">
                                        <div className="panes" onClick={lhsLoaded} style={{ backgroundImage: `url("/images/partners/uablive.png")` }}></div>
                                    </div>
                                </Link>
                            </div>
                            <div className="fourth columns panet">
                                <Link to="/partners/vivahealth">
                                    <div className="frame">
                                        <div className="panes" onClick={vivaLoaded} style={{ backgroundImage: `url("/images/partners/viva.png")` }}></div>
                                    </div>
                                </Link>
                            </div>
                            <div className="fourth columns panet">
                                <Link to="/partners/unitedway">
                                    <div className="frame">
                                        <div className="panes" onClick={uwayLoaded} style={{ backgroundImage: `url("/images/partners/uway.jpg")` }}></div>
                                    </div>
                                </Link>
                            </div>
                            <div className="fourth columns panet">
                                <Link to="/partners/conHealth">
                                    <div className="frame">
                                        <div className="panes" onClick={uwayLoaded} style={{ backgroundImage: `url("/images/partners/connecthealth.jpg")` }}></div>
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

