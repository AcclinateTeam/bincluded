import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';    
import Logo from '../../../components/subComponents/Logo';

const WhoWeAre = () => {

    return (
        <>
            <section className="whoWeAre">
                <div className="container">
                    <div className="three columns offset-by-one">
                        <div className="image">
                            <img src="/images/theme/homewhoweare.png" alt="Who_We_Are" />
                        </div>
                    </div>
                    <div className="six columns">
                        <div className="text">
                            <h2>We <span className="blue">Listen.</span><br /> We <span className="blue">Represent.</span><br /> We <span className="blue">Share.</span></h2>
                            <p><Logo color="#287FDD" /> addresses healthcare needs and subsequently educational, employment, and financial gaps so that residents can work towards improved health.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhoWeAre;