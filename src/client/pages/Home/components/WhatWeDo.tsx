import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../components/subComponents/Logo';


const HomeWhatWeDo = () => {

    return (
        <>
            <section className="HomeWhatWeDo">
                <div className="container">
                    <div className="four columns offset-by-one">
                        <div className="content">
                            <h3>Your Story <span>Matters</span></h3>
                            <p>Hear from the community and share your story.</p>
                            <Link to="/covid">See Featured Stories <FontAwesomeIcon className="readmo" icon="arrow-right" /></Link>
                            <hr />
                            <h3>Bettering Birmingham</h3>
                            <p>Learn why now is the time to take control of your health and future. </p>
                            <Link to="/covid">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></Link>
                            <hr />
                            <h3>Join Our Community</h3>
                            <p>Click here to learn, share and grow with others in the <Logo color="#050236" /> community. </p>
                            <Link to="/covid">Join Now <FontAwesomeIcon className="readmo" icon="arrow-right" /></Link>
                        </div>
                    </div>
                    <div className="four columns">
                        <div className="image">
                            <img src="/images/homewhatwedo.png" alt="Who_We_Are" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeWhatWeDo;