import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';


const HomeWhyNow = () => {

    return (
        <>
            <section className="whyNow">
                <div className="container">
                    <div className="eight columns offset-by-one whyNum">
                        <div className="container statis">
                            <div className="third columns stats">
                                <div className="ten columns stat">
                                    <div className="point">
                                        <CountUp start={0} end={51} duration={3} suffix="%" redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <h3>
                                                        <span ref={countUpRef} />
                                                    </h3>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p>of Jefferson County residents are minorities.</p>
                                    </div>
                                </div>
                                <div className="ten columns stat">
                                    <div className="point">
                                        <CountUp start={0} end={54} duration={3} suffix="%" redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <h3>
                                                        <span ref={countUpRef} />
                                                    </h3>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p>of disabled Jefferson County residents are minorities.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="third columns text">
                                <div className="whyText" style={{ textAlign: 'center' }}>
                                    <h2>Why Now?</h2>
                                    <p>There’s no better time for Black communities to have and claim a space of their own. The longevity of Black communities depends on a collective of people who are focused on improved health, overall wellness, and elevated financial practices.   B-INCLUDED is that space and you can become part of that collective.</p>
                                    <Link className="button signup" to="/WhyNow">Learn More</Link>
                                </div>
                            </div>
                            <div className="third columns stats">
                                <div className="ten columns stat">
                                    <div className="point">
                                        <CountUp start={0} end={77} duration={3} prefix="" suffix="%" >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <h3>
                                                        <span ref={countUpRef} />
                                                    </h3>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p>of low-income and impoverished Jefferson County residents are minorities.</p>
                                    </div>
                                </div>
                                <div className="ten columns stat">
                                    <div className="point">
                                        <CountUp start={0} end={59} duration={3} prefix="" suffix="%" >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <h3>
                                                        <span ref={countUpRef} />
                                                    </h3>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p>of Jefferson County's years of life lost prematurely came from minority residents.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeWhyNow;