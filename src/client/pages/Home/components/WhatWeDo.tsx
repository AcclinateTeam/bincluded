import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../theme/Logo';


const HomeWhatWeDo = () => {

    return (
        <>
            <section className="HomeWhatWeDo">
                <div className="content">
                    <h3>Your Story <span>Matters</span></h3>
                    <p>Hear from the community and share your story.</p>
                    <Link to="/covid">See Featured Stories <FontAwesomeIcon className="readmo" icon="arrow-right" /></Link>
                    <hr />
                    <h3>Bettering <span>Birmingham</span></h3>
                    <p>Learn why now is the time to take control of your health and future. </p>
                    <Link to="/covid">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></Link>
                    <hr />
                    <h3>Join Our <span>Community</span></h3>
                    <p>Click here to learn, share and grow with others in the <Logo color="#287fdd" /> community. </p>
                    <Link to="/covid">Join Now <FontAwesomeIcon className="readmo" icon="arrow-right" /></Link>
                </div>
                <div className="image">
                    <img src="/images/theme/homewhatwedo.png" alt="Who_We_Are" />
                </div>
            </section>
        </>
    )
}

export default HomeWhatWeDo;