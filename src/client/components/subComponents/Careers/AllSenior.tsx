import React from 'react';

const AllSenior = () =>
{
    return (
        <>
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
            <div className="third columns">
                <a href="https://wfalabama.org/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/womensfoa.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Women's Foundation of Greater Birmingham</h2>
                            <p>Engaging with the people of Birmingham and providing paths out of poverty.</p>
                            <div className="callbutton">
                                <a className="button signup" style={{ margin: `0` }}>Learn More</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            {/* NEW ROW  */}
            <div className="third columns">
                <a href="https://www.uab.edu/livehealthsmartal/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/uablive.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Live HealthSmart Alabama</h2>
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

export default AllSenior;