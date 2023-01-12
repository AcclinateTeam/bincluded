import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const HomePartners = () => {



    return (
        <>
            <section className="homepartners">
                <div className="container">
                    <div className="ten columns">
                        <h2>Featured Partners</h2>
                    </div>
                </div>
                <div className="container partner">
                    <div className="two columns">
                        <Link to="/partners/coopergreen">
                            <div className="image">
                                <img src="/images/partners/uablive.png" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="two columns">
                        <Link to="/partners/lhsa">
                            <div className="image">
                                <img src="/images/partners/viva.png" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="two columns">
                        <Link to="/partners/vivahealth">
                            <div className="image">
                                <img src="/images/partners/uway.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="two columns">
                        <Link to="/partners/coopergreen">
                            <div className="image">
                                <img src="/images/partners/cooper.png" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="two columns">
                        <Link to="/partners/connecthealth">
                            <div className="image">
                                <img src="/images/partners/connecthealth.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="ten columns">
                    <div className="buttonwrap center">
                        <Link className="button solid" to="/stories">View Partners</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePartners;