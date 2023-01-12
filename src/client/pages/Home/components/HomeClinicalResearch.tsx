import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';


const HomeResearch = () => {

    return (
        <>
            <section className="research">
                <div className="container">
                    <div className="four columns">
                        <div className="panes">
                            <div className="image">
                                <img src="/images/theme/clinres.png" alt="" />
                            </div>
                            <div className="heading">
                                <h1>Have you<br /> participated <br />in clinical research?</h1>
                            </div>
                        </div>
                    </div>
                    <div className="five columns">
                        <div className="content">
                            <div className="text">
                                <h1>Why you should <span>get involved</span></h1>
                                <p>There are many reasons why people choose to join a clinical trial. Some join a trial because the treatments they have tried for their health problem did not work. Others participate because there is no treatment for their health problem.</p>
                                <div className="button">
                                    <Link className="button solid" to="/trials">More Info</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeResearch;