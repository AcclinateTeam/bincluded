import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import General from './subComponents/Family/General';
import Youth from './subComponents/Family/Youth';
import Education from './subComponents/Family/Education';
import Transportation from './subComponents/Family/Transportation';
import Legal from './subComponents/Family/Legal';

const Terminal = () =>
{

    const [mental, setMental] = useState(false);
    const [physical, setPhysical] = useState(false);
    const [tele, setTele] = useState(false);
    const [legal, setLegal] = useState(false);

    const mentalLoaded = () =>
    {
        setMental(true);
        setPhysical(false);
        setTele(false);
        setLegal(false);
    }

    const physicalLoaded = () =>
    {
        setMental(false);
        setPhysical(true);
        setTele(false);
        setLegal(false);
    }

    const teleLoaded = () =>
    {
        setMental(false);
        setPhysical(false);
        setLegal(false);
        setTele(true);
    }


    const personalButton = () =>
    {
        setMental(false);
        setPhysical(false);
        setTele(false);
        setLegal(false);
    }

    const legalLoaded = () =>
    {
        setMental(false);
        setPhysical(false);
        setTele(false);
        setLegal(true);
    }

    if (mental && !physical && !tele && !legal)
    {
        return (
            <>
                <section className="addRes">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Family Resources</h2>
                                <p>Click the button below to select resources by category. Hover over</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li>General</li></a>
                                    <a onClick={mentalLoaded}><li className="active">Youth</li></a>
                                    <a onClick={physicalLoaded}><li>Education</li></a>
                                    <a onClick={teleLoaded}><li>Transportation</li></a>
                                    <a onClick={legalLoaded}><li>Legal</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <Youth />
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
    } else if (!mental && !physical && !tele && legal) {
        return(
            <>
                <section className="addRes">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Family Resources</h2>
                                <p>Click the button below to select resources by category. Hover over</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li>General</li></a>
                                    <a onClick={mentalLoaded}><li>Youth</li></a>
                                    <a onClick={physicalLoaded}><li>Education</li></a>
                                    <a onClick={teleLoaded}><li>Transportation</li></a>
                                    <a onClick={legalLoaded}><li className="active">Legal</li></a>                                    
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <Legal />
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
    } else if (!mental && physical && !tele && !legal) 
    {
        return (
            <>
                <section className="addRes">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Family Resources</h2>
                                <p>Click the button below to select resources by category. Hover over</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li>General</li></a>
                                    <a onClick={mentalLoaded}><li>Youth</li></a>
                                    <a onClick={physicalLoaded}><li className="active">Education</li></a>
                                    <a onClick={teleLoaded}><li>Transportation</li></a>
                                    <a onClick={legalLoaded}><li>Legal</li></a>                                    
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <Education />
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

    } else if (!mental && !physical && !legal && tele)
    {
        return (
            <>
                <section className="addRes">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Family Resources</h2>
                                <p>Click the button below to select resources by category.</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li>General</li></a>
                                    <a onClick={mentalLoaded}><li>Youth</li></a>
                                    <a onClick={physicalLoaded}><li>Education</li></a>
                                    <a onClick={teleLoaded}><li className="active">Transportation</li></a>
                                    <a onClick={legalLoaded}><li>Legal</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <Transportation />
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
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Family Resources</h2>
                                <p>Click the button below to select resources by category. Hover over</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li className="active">General</li></a>
                                    <a onClick={mentalLoaded}><li>Youth</li></a>
                                    <a onClick={physicalLoaded}><li>Education</li></a>
                                    <a onClick={teleLoaded}><li>Transportation</li></a>
                                    <a onClick={legalLoaded}><li>Legal</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <General />
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

