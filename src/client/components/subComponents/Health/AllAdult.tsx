import React from 'react';

const AllAdult = () =>
{
    return (
        <>
            {/* NEW ROW */}
            <div className="five columns">
                <a href="https://www.cahabamedicalcare.com/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/prosperPath.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Prosper's Path To Wellness</h2>
                            <p>Provides comprehensive primary care services</p>
                            <div className="callbutton">
                                <a className="button signup" style={{ margin: `0` }}>Learn More</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="five columns">
                <a href="https://www.cahabamedicalcare.com/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/cahaba.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Cahaba Medical Care</h2>
                            <p>Provides comprehensive primary care services</p>
                            <div className="callbutton">
                                <a className="button signup" style={{ margin: `0` }}>Learn More</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="five columns">
                <a href="https://www.mpowerministries.org/health-center/#.YVcS1FrMLC8">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/mpower.jpg")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>M-POWER Ministries</h2>
                            <p>Engaging with the people of Birmingham and providing paths out of poverty.</p>
                            <div className="callbutton">
                                <a className="button signup" style={{ margin: `0` }}>Learn More</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="five columns">
                <a href="https://www.birminghamal.gov/community-development/community-resource-services-division/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/cofbham.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>City of Birmingham Community Resources</h2>
                            <p>Providing affordable, compassionate care</p>
                            <div className="callbutton">
                                <a className="button signup" style={{ margin: `0` }}>Learn More</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );


}

export default AllAdult;