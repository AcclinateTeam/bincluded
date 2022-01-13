import React from 'react';

const Careers = () =>
{
    return (
        <>
            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://www.globalteamstaffing.com/copy-of-employee-portal">
                    <div className="panes">
                        <div className="pane">
                            <div className="image" style={{ backgroundImage: `url("/images/partners/GlobalTeamStaffing.jpeg")`, backgroundColor: '#ffffff' }}></div>
                            <h2>Global Team Staffing</h2>
                            <p>A reliable staffing company that serves many industries.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="third columns">
                <a href="https://www.expresspros.com/SBirminghamAL/Job-Openings.aspx">
                    <div className="panes">
                        <div className="pane">
                            <div className="image" style={{ backgroundImage: `url("/images/partners/ExpressEmploymentPros.jpeg")`, backgroundColor: '#ffffff' }}></div>
                            <h2>Express Employment Professionals</h2>
                            <p>A leading staffing provider helping job seekers find work with a wide variety of local businesses.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="third columns">
                <a href="https://www.pridestaff.com/job-seekers/">
                    <div className="panes">
                        <div className="pane">
                            <div className="image" style={{ backgroundImage: `url("/images/partners/PrideStaff.png")`, backgroundColor: '#ffffff' }}></div>
                            <h2>Pride Staff</h2>
                            <p>Goal is to help people reach their personal and professional goals and assist job seekers.</p>
                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                        </div>
                    </div>
                </a>
            </div>
            {/* NEW ROW */}
            <div className="third columns">
                <a href="http://dedicatedpersonnel.com/employee/">
                    <div className="panes">
                        <div className="pane">
                            <div className="image" style={{ backgroundImage: `url("/images/partners/DedicatedPersonnel.png")`, backgroundColor: '#ffffff' }}></div>
                            <h2>Dedicated Personnel</h2>
                            <p>A professional staffing service, independently owned and operated.</p>
                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                        </div>
                    </div>
                </a>
            </div>
            <div className="third columns">
                <a href="https://birmingham.snelling.com/job-seekers-employment-opportunities/">
                    <div className="panes">
                        <div className="pane">
                            <div className="image" style={{ backgroundImage: `url("/images/partners/Snelling.png")`, backgroundColor: '#ffffff' }}></div>
                            <h2>Snelling</h2>
                            <p>Snelling Birmingham specializes in placing great talent in several demanding business sectors.</p>
                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                        </div>
                    </div>
                </a>
            </div>
            <div className="third columns">
                <a href="https://www.kellyservices.us/">
                    <div className="panes">
                        <div className="pane">
                            <div className="image" style={{ backgroundImage: `url("/images/partners/kelly.png")`, backgroundColor: '#ffffff' }}></div>
                            <h2>Kelly Services</h2>
                            <p>Goal is to help bold companies and bright people connect and work together.</p>
                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}

export default Careers;