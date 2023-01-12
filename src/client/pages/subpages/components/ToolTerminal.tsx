import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../../theme/Header';
import Logo from '../../../components/subComponents/Logo';



const ToolTerminal = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const [print, setPrint] = useState(false);
    const [digital, setDigital] = useState(false);

    const printLoaded = () => {
        setPrint(true);
        setDigital(false);
    }

    const digitalLoaded = () => {
        setDigital(true);
        setPrint(false);
    }

    if (digital && !print) {
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
                                    <a onClick={printLoaded}><li>Print</li></a>
                                    <a onClick={digitalLoaded}><li className="active">Digital</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <div className="third columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                    <div className="third columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                    <div className="third columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                    <div className="third columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                    <div className="third columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                    <div className="third columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                    <div className="ten columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    } else {
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
                                    <a onClick={printLoaded}><li className="active">Print</li></a>
                                    <a onClick={digitalLoaded}><li>Digital</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <div className="fourth columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                    <div className="threefours columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                    <div className="third columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                    <div className="third columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                    <div className="third columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                    <div className="five columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                    <div className="five columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                    <div className="ten columns">
                                        <div className="panes">
                                            asd
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default ToolTerminal;