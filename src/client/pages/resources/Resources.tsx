import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink as Link } from 'react-router-hash-link';
import React from 'react';

import SubHeader from '../../components/SubHeader';
import Header from '../../theme/Header';

const Resources = () =>
{

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero">
                <div className="container">
                    <div className="columns eight offset-by-one callout">
                        <div className="image blog">
                            <img src="/images/theme/resources.png" alt="" />
                        </div>
                        <div className="text">
                            <div className="calltext">
                                <h1>Community<br /> Resources</h1>
                                <p>B-INCLUDED addresses healthcare needs and subsequently educational, employment, and financial gaps so that residents can work towards improved health.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resources;