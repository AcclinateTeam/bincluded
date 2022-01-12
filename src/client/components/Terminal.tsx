import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import Personal from './subComponents/Personal';
import Mental from './subComponents/Mental';
import Physical from './subComponents/Physical';
import Tele from './subComponents/Tele';
import Careers from './subComponents/Careers';

const Terminal = () =>
{
    
    const [mental, setMental] = useState(false);
    const [physical, setPhysical] = useState(false);
    const [tele, setTele] = useState(false);
    const [careers, setCareers] = useState(false);

    const mentalLoaded = () =>
    {
        setMental(true);
        setPhysical(false);
        setTele(false);
        setCareers(false);
    }

    const physicalLoaded = () =>
    {
        setMental(false);
        setPhysical(true);
        setTele(false);
        setCareers(false);
    }

    const teleLoaded = () =>
    {
        setMental(false);
        setPhysical(false);
        setTele(true);
        setCareers(false);
    }


    const personalButton = () =>
    {
        setMental(false);
        setPhysical(false);
        setTele(false);
        setCareers(false);
    }

    const careersLoaded = () =>
    {
        setMental(false);
        setPhysical(false);
        setTele(false);
        setCareers(true);
    }

    if (mental && !physical && !tele && !careers)
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
                                <a onClick={personalButton}><li>Personal</li></a>
                                <a onClick={mentalLoaded}><li className="active">Mental</li></a>
                                <a onClick={physicalLoaded}><li>Physical</li></a>
                                <a onClick={teleLoaded}><li>TeleHealth</li></a>
                                <a onClick={careersLoaded}><li>Careers</li></a>
                            </ul>
                            <div className="panel">
                                <div className="container">
                                    <Mental />
                                </div>
                            </div>
                            <div className="buttonwrap">
                                <Link className="button" to="/partners">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    } else if (!mental && physical && !tele && !careers)
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
                                <a onClick={personalButton}><li>Personal</li></a>
                                <a onClick={mentalLoaded}><li>Mental</li></a>
                                <a onClick={physicalLoaded}><li className="active">Physical</li></a>
                                <a onClick={teleLoaded}><li>TeleHealth</li></a>
                                <a onClick={careersLoaded}><li>Careers</li></a>
                            </ul>
                            <div className="panel">
                                <div className="container">
                                    <Physical />
                                </div>
                            </div>
                            <div className="buttonwrap">
                                <Link className="button" to="/partners">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    
    } else if (!mental && !physical && !tele && careers)
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
                                <a onClick={personalButton}><li>Personal</li></a>
                                <a onClick={mentalLoaded}><li>Mental</li></a>
                                <a onClick={physicalLoaded}><li>Physical</li></a>
                                <a onClick={teleLoaded}><li>TeleHealth</li></a>
                                <a onClick={careersLoaded}><li className="active">Careers</li></a>
                            </ul>
                            <div className="panel">
                                <div className="container">
                                    <Careers />
                                </div>
                            </div>
                            <div className="buttonwrap">
                                <Link className="button" to="/partners">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
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
                <section className="addRes">
                    <div className="container">
                        <div className="eight columns offset-by-one">
                            <div className="header">
                                <h1>Additional<br /> Health Resources</h1>
                            </div>
                            <ul className="terminal">
                                <a onClick={personalButton}><li className="active">Personal</li></a>
                                <a onClick={mentalLoaded}><li>Mental</li></a>
                                <a onClick={physicalLoaded}><li>Physical</li></a>
                                <a onClick={teleLoaded}><li>TeleHealth</li></a>
                                <a onClick={careersLoaded}><li>Careers</li></a>
                            </ul>
                            <div className="panel">
                                <div className="container">
                                    <Personal />
                                </div>
                            </div>
                            <div className="buttonwrap">
                                <Link className="button" to="/partners">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Terminal;

