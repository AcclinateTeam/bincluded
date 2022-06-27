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
                    <div className="seven columns offset-by-one-half addResWide">
                        <div className="header">
                            <h2>Health <span className="blue">Resources</span></h2>
                            <p>Scroll down to view all health related resources. Click the resource card to view more information.</p>
                        </div>
                        <div className="panel">
                            <div className="container">
                                <AllAdult />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Terminal;

