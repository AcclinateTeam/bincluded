import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WhatWeDo = () => {

    return (
        <>
            <section className="whatwedo">
                <div className="container">
                    <div className="four columns offset-by-one">
                        <div className="content">
                            <h3>Your Story Matters</h3>
                            <p>Hear from the community and share your story.</p>
                            <Link to="/covid">See Featured Stories <FontAwesomeIcon className="readmo" icon="arrow-right" /></Link>
                            <hr />
                            <h3>Bettering Birmingham</h3>
                            <p>Learn why now is the time to take control of your health and future. </p>
                            <Link to="/covid">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></Link>
                            <hr />
                            <h3>Join Our Community</h3>
                            <p>Click here to learn, share and grow with others in the <span>B-INCLUDED</span> community. </p>
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

export default WhatWeDo;