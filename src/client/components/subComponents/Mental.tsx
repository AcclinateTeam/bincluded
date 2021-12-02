import React from 'react';

const Mental = () =>
{
    return (
        <>
            <div className="third columns">
                <div className="panes">
                    <div className="pane">
                        <div className="image">
                            <img src="/images/partners/impact.jpg" alt="" />
                        </div>
                        <h2>Impact Family Counseling</h2>
                        <p>IMPACT Family Counseling is a 501 (c)(3) Christian-affiliated, United Way agency located in Birmingham, AL.</p>
                        {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                    </div>
                </div>
            </div>
            <div className="third columns">
                <div className="panes">
                    <div className="pane">
                        <div className="image">
                            <img src="images/partners/crisis.webp" alt="" />
                        </div>
                        <h2>Crisis Center</h2>
                        <p>Our mission is to serve the unmet needs of people experiencing personal crisis or mental health issues.</p>
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

export default Mental;