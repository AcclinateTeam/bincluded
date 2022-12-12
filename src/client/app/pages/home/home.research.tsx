import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';


const HomeResearch = () => {

    // Metro Track State & Effect
    const [tracker, setTracker] = useState<any>([]);
    const [actuals, setActuals] = useState<any>([]);
    const [beds, setBeds] = useState<any>([]);
    const [metrics, setMetrics] = useState<any>([]);

    // Hook for covid stats tracker
    useEffect(() => {
        getMetroTracker();
        async function getMetroTracker() {
            const response = await fetch('https://api.covidactnow.org/v2/cbsa/13820.json?apiKey=3221244a929540bdb7c557ce3d60b092');
            const metro = await response.json();
            setTracker(metro);
            setActuals(metro.actuals);
            setBeds(metro.actuals.hospitalBeds);
            setMetrics(metro.metrics);
        }

    }, []);

    return (
        <>
            <section className="research">
                <div className="container">
                    <div className="five columns">
                        <div className="panes">
                            <div className="image">
                                <img src="/images/clintrials1.png" alt="" />
                            </div>
                            <div className="heading">
                                <h1>Have you<br /> participated in<br /> clinical research?</h1>
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