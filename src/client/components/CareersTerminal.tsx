import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import All from './subComponents/Careers/All';
import Career from './subComponents/Careers/Career';
import WorkDev from './subComponents/Careers/WorkDev';
import Finances from './subComponents/Careers/Finances';

const Terminal = () =>
{

    const [mental, setMental] = useState(false);
    const [physical, setPhysical] = useState(false);
    const [tele, setTele] = useState(false);

    const mentalLoaded = () =>
    {
        setMental(true);
        setPhysical(false);
        setTele(false);
    }

    const physicalLoaded = () =>
    {
        setMental(false);
        setPhysical(true);
        setTele(false);
    }

    const teleLoaded = () =>
    {
        setMental(false);
        setPhysical(false);
        setTele(true);
    }


    const personalButton = () =>
    {
        setMental(false);
        setPhysical(false);
        setTele(false);
    }

    const careersLoaded = () =>
    {
        setMental(false);
        setPhysical(false);
        setTele(false);
    }

    if (mental && !physical && !tele)
    {
        return (
            <>
                <section className="addRes cars">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Career Resources</h2>
                                <p>Click the button below to select resources by category. Click the resource card to view more information.</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li>All</li></a>
                                    <a onClick={mentalLoaded}><li className="active">Career Matching</li></a>
                                    <a onClick={physicalLoaded}><li>Workforce Development</li></a>
                                    <a onClick={teleLoaded}><li>Finances</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <Career />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    } else if (!mental && physical && !tele)
    {
        return (
            <>
                <section className="addRes cars">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Career Resources</h2>
                                <p>Click the button below to select resources by category. Click the resource card to view more information.</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li>All</li></a>
                                    <a onClick={mentalLoaded}><li>Career Matching</li></a>
                                    <a onClick={physicalLoaded}><li className="active">Workforce Development</li></a>
                                    <a onClick={teleLoaded}><li>Finances</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <WorkDev />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );

    } else if (!mental && !physical && tele)
    {
        return (
            <>
                <section className="addRes cars">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Career Resources</h2>
                                <p>Click the button below to select resources by category. Click the resource card to view more information.</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li>All</li></a>
                                    <a onClick={mentalLoaded}><li>Career Matching</li></a>
                                    <a onClick={physicalLoaded}><li>Workforce Development</li></a>
                                    <a onClick={teleLoaded}><li className="active">Finances</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <Finances />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );

    } else 
    {
        return (
            <>
                <section className="addRes cars">
                    <div className="container">
                        <div className="seven columns offset-by-one-half addResWide">
                            <div className="header">
                                <h2>Career Resources</h2>
                                <p>Click the button below to select resources by category. Click the resource card to view more information.</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li className="active">All</li></a>
                                    <a onClick={mentalLoaded}><li>Career Matching</li></a>
                                    <a onClick={physicalLoaded}><li>Workforce Development</li></a>
                                    <a onClick={teleLoaded}><li>Finances</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <All />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Terminal;

