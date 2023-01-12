import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';


const HomeCovid = () => {

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
            <section className="covid">
                <div className="container">
                    <div className="row">
                        <div className="ten columns">
                            <div className="eight columns offset-by-one">
                                <h2>The latest data related to <span className="blue">COVID-19</span></h2>
                                <h3>for the Metro-Birmingham Area</h3>
                                <div className="third columns">
                                    <div className="data border">
                                        <CountUp start={0} end={actuals.cases} separator="," duration={3} redraw={true} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <h4>
                                                        <span ref={countUpRef} />
                                                    </h4>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p>Active Cases</p>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="data border">
                                        <CountUp start={0} end={beds.capacity} separator="," duration={3} redraw={true} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <h4>
                                                        <span ref={countUpRef} />
                                                    </h4>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p>Beds Available</p>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="data">
                                        <CountUp start={-0.9999} end={metrics.infectionRate} separator="," decimals={3} decimal="." duration={3} redraw={true} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <h4>
                                                        <span ref={countUpRef} />
                                                    </h4>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p>Infection Rate</p>
                                    </div>
                                </div>
                                <div className="buttonwrap">
                                    <Link className="content button solid" to="/covid">More on Covid-19</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeCovid;