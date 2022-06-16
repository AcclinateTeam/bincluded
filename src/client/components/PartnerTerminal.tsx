import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Terminal = () =>
{

    const [lhs, setLhs] = useState(false);
    const [viva, setViva] = useState(false);
    const [uway, setUway] = useState(false);

    const lhsLoaded = () =>
    {
        setLhs(true);
        setViva(false);
        setUway(false);
    }

    const vivaLoaded = () =>
    {
        setLhs(false);
        setViva(true);
        setUway(false);
    }

    const uwayLoaded = () =>
    {
        setLhs(false);
        setViva(false);
        setUway(true);
    }


    const cooperLoaded = () =>
    {
        setLhs(false);
        setViva(false);
        setUway(false);
    }

    return (
        // COOPER GREEN LOADED
        <>
            <section className="featured">
                <div className="container">
                    <div className="seven columns offset-by-one-half">
                        <div className="header">
                            <h2>Featured <span className="blue">Partners</span></h2>
                            <p>We partner with brands that are passionate about our mission and our community..</p>
                        </div>

                        <div className="container panel">
                            <div className="fourth columns">
                                <a href="http://google.com">
                                    <div className="frame">
                                        <div className="panes active" onClick={cooperLoaded} style={{ backgroundImage: `url("/images/partners/cooper.png")` }}></div>
                                    </div>
                                </a>
                            </div>
                            <div className="fourth columns">
                                <div className="frame">
                                    <div className="panes" onClick={lhsLoaded} style={{ backgroundImage: `url("/images/partners/uablive.png")` }}></div>
                                </div>
                            </div>
                            <div className="fourth columns">
                                <div className="frame">
                                    <div className="panes" onClick={vivaLoaded} style={{ backgroundImage: `url("/images/partners/viva.png")` }}></div>
                                </div>
                            </div>
                            <div className="fourth columns">
                                <div className="frame">
                                    <div className="panes" onClick={uwayLoaded} style={{ backgroundImage: `url("/images/partners/uway.jpg")` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Terminal;

