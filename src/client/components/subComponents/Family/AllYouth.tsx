import React from 'react';

const AllYouth = () =>
{
    return (
        <>
            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://www.birminghamal.gov/community-development/community-resource-services-division/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/christ-health.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Christ Health Center</h2>
                            <p>IMPACT Family Counseling is a 501 (c)(3) Christian-affiliated, United Way agency located in Birmingham, AL.</p>
                            <div className="callbutton">
                                <a className="button signup" style={{ margin: `0` }}>Learn More</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="third columns">
                <a href="https://railroadpark.org/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/rrpark.jpg")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Railroad Park</h2>
                            <p>Provides comprehensive primary care services</p>
                            <div className="callbutton">
                                <a className="button signup" style={{ margin: `0` }}>Learn More</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="third columns">
                <a href="https://www.crisiscenterbham.org/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/crisis.webp")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Crisis Center</h2>
                            <p>Providing affordable, compassionate care</p>
                            <div className="callbutton">
                                <a className="button signup" style={{ margin: `0` }}>Learn More</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://www.m4a.org/greatdiet/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/m4a.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>M4A Senior Citizen & Cargiver Support</h2>
                            <p>Engaging with the people of Birmingham and providing paths out of poverty.</p>
                            <div className="callbutton">
                                <a className="button signup" style={{ margin: `0` }}>Learn More</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="third columns">
                <a href="https://www.medicaid.gov/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/medicaid.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Medicaid</h2>
                            <p>Provides comprehensive primary care services</p>
                            <div className="callbutton">
                                <a className="button signup" style={{ margin: `0` }}>Learn More</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="third columns">
                <a href="https://www.medicare.gov">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/medicare.svg")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Medicare</h2>
                            <p>Engaging with the people of Birmingham and providing paths out of poverty.</p>
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

export default AllYouth;