import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const HomePartners = () => {



    return (
        <>
            <section className="partners">                
                <div className="container">
                    <div className="ten columns">
                        <h2>Featured Partners</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="two columns">
                            <Link to="/partners/coopergreen">
                                <div className="image" style={{ backgroundImage: `url(/images/partners/cooper.png)` }}>
                                    <img src="/images/partners/uablive.png" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="two columns">
                            <Link to="/partners/lhsa">
                                <div className="image" style={{ backgroundImage: `url(/images/partners/viva.png)` }}>
                                    <img src="/images/partners/viva.png" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="two columns">
                            <Link to="/partners/vivahealth">
                                <div className="image" style={{ backgroundImage: `url(/images/partners/uway.png)` }}>
                                    <img src="/images/partners/uway.jpg" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="two columns">
                            <Link to="/partners/unitedway">
                                <div className="image" style={{ backgroundImage: `url(/images/partners/cooper.jpg)` }}>
                                    <img src="/images/partners/cooper.png" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="two columns">
                            <Link to="/partners/unitedway">
                                <div className="image" style={{ backgroundImage: `url(/images/partners/connecthealth.jpg)` }}>
                                    <img src="/images/partners/connecthealth.png" alt="" />
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePartners;