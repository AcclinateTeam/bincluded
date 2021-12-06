import React from 'react';

const Physical = () =>
{
    return (
        <>
            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://www.birminghamal.gov/community-development/community-resource-services-division/">
                    <div className="panes">
                        <div className="pane">
                            <div className="image" style={{ backgroundImage: `url("/images/partners/christ-health.png")`, backgroundColor: '#ffffff' }}></div>
                            <h2>Christ Health Center</h2>
                            <p>IMPACT Family Counseling is a 501 (c)(3) Christian-affiliated, United Way agency located in Birmingham, AL.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="third columns">
                <a href="https://www.mpowerministries.org/health-center/#.YVcS1FrMLC8">
                    <div className="panes">
                        <div className="pane">
                            <div className="image" style={{ backgroundImage: `url("/images/partners/mpower.jpg")`, backgroundColor: '#ffffff' }}></div>
                            <h2>M-POWER Ministries</h2>
                            <p>Engaging with the people of Birmingham and providing paths out of poverty.</p>
                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                        </div>
                    </div>
                </a>
            </div>
            <div className="third columns">
                <a href="https://www.feedingal.org/">
                    <div className="panes">
                        <div className="pane">
                            <div className="image" style={{ backgroundImage: `url("/images/partners/commfood.png")`, backgroundColor: '#ffffff' }}></div>
                            <h2>Community Food Bank of Central Alabama</h2>
                            <p>Engaging with the people of Birmingham and providing paths out of poverty.</p>
                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                        </div>
                    </div>
                </a>
            </div>
            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://railroadpark.org/">
                    <div className="panes">
                        <div className="pane">
                            <div className="image" style={{ backgroundImage: `url("/images/partners/rrpark.jpg")`, backgroundColor: '#ffffff' }}></div>
                            <h2>Railroad Park</h2>
                            <p>Provides comprehensive primary care services</p>
                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}

export default Physical;