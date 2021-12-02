import React from 'react';

const Tele = () =>
{
    return (
        <>
            <div className="third columns">
                <div className="panes">
                    <div className="pane">
                        <div className="image">
                            <img src="/images/christhealth.png" alt="" />
                        </div>
                        <h2>Christ Health</h2>
                        <p>Providing affordable, compassionate care</p>
                        {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                    </div>
                </div>
            </div>
            <div className="third columns">
                <div className="panes">
                    <div className="pane">
                        <div className="image">
                            <img src="/images/cahaba.png" alt="" />
                        </div>
                        <h2>Cahaba Medical Care</h2>
                        <p>Provides comprehensive primary care services</p>
                        {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                    </div>
                </div>
            </div>
            <div className="third columns">
                <div className="panes">
                    <div className="pane">
                        <div className="image">
                            <img src="/images/mpower.png" alt="" />
                        </div>
                        <h2>M-POWER Ministries</h2>
                        <p>Engaging with the people of Birmingham and providing paths out of poverty.</p>
                        {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tele;