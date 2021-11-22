import React from 'react';

/* COMPONENT IMPORTS */
import SubHeader from '../components/SubHeader';

const Covid = () =>
{
    return (
        <>
            <SubHeader />
            <section className="call">
                <div className="callbg" style={{ backgroundImage: `url("/images/health.jpg")` }}></div>
                {/* CALLOUT CONTENT START */}
                <div className="container">
                    <div className="row">
                        <div className="eight columns offset-by-one">
                            <div className="text">
                                <h1>COVID</h1>
                                <p>B-Included provides easy access to resources that are beneficial in reaching one’s goals in maintaining a healthy lifestyle.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <h1>COVID PAGE</h1>
        </>
    )
}

export default Covid;