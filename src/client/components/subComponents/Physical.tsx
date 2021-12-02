import React from 'react';

const Physical = () =>
{
    return (
        <>
            <div className="third columns">
                <div className="panes">
                    <div className="pane">
                        <div className="image">
                            <img src="/images/partners/medicaid.png" alt="" />
                        </div>
                        <h2>Medicaid</h2>
                        <p>Providing affordable, compassionate care</p>
                        {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                    </div>
                </div>
            </div>
            <div className="third columns">
                <div className="panes">
                    <div className="pane">
                        <div className="image">
                            <img src="/images/partners/medicare.svg" alt="" />
                        </div>
                        <h2>Medicare</h2>
                        <p>Provides comprehensive primary care services</p>
                        {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                    </div>
                </div>
            </div>
            <div className="third columns">
                <div className="panes">
                    <div className="pane">
                        <div className="image">
                            <img src="/images/partners/m4a.png" alt="" />
                        </div>
                        <h2>M4a</h2>
                        <p>Engaging with the people of Birmingham and providing paths out of poverty.</p>
                        {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Physical;