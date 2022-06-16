import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


import AllAdult from './subComponents/Health/AllAdult';

const Terminal = () =>
{
    return (
        <>
            <section className="addRes health">
                <div className="container">
                    <div className="seven columns offset-by-one-half">
                        <div className="header">
                            <h2>Health <span className="blue">Resources</span></h2>
                            <p>Click the button below to select resources by category. Hover over</p>
                        </div>
                        <div className="panel">
                            <div className="container">
                                <AllAdult />
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

}

export default Terminal;

