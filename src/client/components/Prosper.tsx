import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Prosper = () =>
{
    return (
        <section>
            <div className="container covid19">
                <div className="seven columns offset-by-one-half">
                    <div className="views">
                        <div className="ten columns" style={{ marginBottom: '100px' }}>
                            <div className="container">
                                <div className="seven columns">
                                    <div className="vue">
                                        <h1>Prosper's Path To Wellness</h1>
                                        <p>Prosper's Path to Wellness program is a way for you to earn and learn and build a healthier community by apprenticing as a Community Health Worker (CHW). CHWs help community members connect to healthcare resources and help healthcare systems better understand community needs. </p>
                                        <ul>
                                            <FontAwesomeIcon icon="check-circle" /><li>You can commit appromimately 35 hours per week to this training program from April - August.</li>
                                            <FontAwesomeIcon icon="check-circle" /><li>You are curious about a career related to health or technology.</li>
                                            <FontAwesomeIcon icon="check-circle" /><li>You are someone that your family and friends look to for help and support.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="three columns">
                                    <div className="view" style={{ padding: '30px' }}>
                                        <img className="card-img" style={{ width: '100%' }} src="/images/prosperPath.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Prosper;