import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

/* COMPONENT IMPORTS */
import Header from '../../theme/Header';
import Logo from '../../components/subComponents/Logo';

const Covid = () => {
    // SCROLL TO TOP
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero">
                <div className="container">
                    <div className="columns eight offset-by-one callout">
                        <div className="image blog">
                            <img src="/images/theme/covid.png" alt="" />
                        </div>
                        <div className="text">
                            <div className="calltext">
                                <h1>COVID-19</h1>
                                <p>B-INCLUDED addresses healthcare needs and subsequently educational, employment, and financial gaps so that residents can work towards improved health.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} COVID-19
                    </div>
                </div>
            </section>

            {/* COVID INTRO SECTION */}
            <section className="intro">
                <div className="container">
                    <div className="four columns offset-by-one">
                        <div className="text" style={{ 'padding': '0'}}>
                            <h2>What Is <span style={{ 'display': 'inline-block'}}>COVID-19?</span></h2>
                            <p>COVID-19 is a disease caused by a virus called SARS-CoV-2. Most people with COVID-19 have mild symptoms, but some people become severely ill. Older adults and people who have certain underlying medical conditions are more likely to get severely ill. <br /> <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html">Read More</a></p>
                            <h2>How COVID-19 Research <span>Impacted Minority Communities</span></h2>
                            <p>Early in the pandemic, the CDC reported 21.8% of COVID-19 cases in the US were African Americans and 33.8% were LatinX, despite that these groups comprise only 13% and 18% of the US population.</p>
                        </div>
                    </div>
                    <div className="four columns offset-by-one">
                        <img style={{ 'margin': '0 0 -3px'}} src="/images/theme/covidintro.png" alt="" />
                    </div>
                </div>
            </section>

            {/* COVID STATISTICS SECTION */}
            <section className="covidstats">
                <div className="container">
                    <div className="five columns">
                        <div className="stats">
                            <h2>COVID-19 <span className="blue">Statistics</span></h2>
                            <p>Access local services to support your emotional and behavioral health.</p>
                            <div className="frame">
                                <iframe src="https://covidactnow.org/embed/us/fips/01" title="CoVid Act Now" width="345" height="370" frameBorder="0" scrolling="no"></iframe>
                            </div>
                            <h2>Birmingham's <span className="blue">COVID Strategy</span></h2>
                            <p style={{ 'margin': 0 }}>Stay up to date with Birmingham’s COVID strategy. <a href="https://www.birminghamal.gov/coronavirus">Read More</a></p>
                        </div>
                    </div>
                    <div className="five columns">
                        <div className="vaxx">
                            <h2>Get Free <span className="blue">Covid-19 Tests</span></h2>
                            <p>Get access to free at-home COVID tests. <a href="https://www.covid.gov/tests">Order Here</a></p>
                            <div className="frame">
                                <iframe src="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-finder-widget_1.html" scrolling="no" height="400" frameBorder="0" width="280" title="Vaccine Finder Widget" style={{ overflow: 'hidden' }}> </iframe>
                            </div>
                            <h2>Birmingham Vaccination <span>Information</span></h2>
                            <p>Find information on vaccination in Birmingham. <a href="https://www.alabamapublichealth.gov/covid19vaccine/">Read More</a></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* COVID PARTNER INFO SECTION */}
            <section className="covid19">
                <div className="container">
                    <div className="ten columns">
                        <h2 style={{ textAlign: 'center', paddingTop: '100px' }}>COVID <span className="blue">Partners</span></h2>
                    </div>
                    <div className="eight columns offset-by-one addResWide">
                        <div className="panel">
                            <div className="panes">
                                <div className="pane">
                                    <div className="container">
                                        <div className="six columns texts">
                                            <div className="text">
                                                <h2>Alabama <span>United</span></h2>
                                                <p>Alabama United supports new, non-traditional approaches, including rapid detection devices and home-based testing technologies, that address current gaps in COVID-19 testing. The program also supports new or non-traditional applications of existing approaches to make them more usable, accessible, or accurate. These may lead to new ways to identify the current SARS-CoV-2 virus as well as potential future viruses.</p>
                                            </div>
                                        </div>
                                        <div className="four columns video">
                                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/eD052T2gilk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panes">
                                <div className="pane">
                                    <div className="container">
                                        <div className="four columns video">
                                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vNUce0dXKbI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                        <div className="six columns texts">
                                            <div className="text right">
                                                <h2>Faith <span>Forward</span></h2>
                                                <p>The goal of Faith Forward was to gather influencers together to share their vaccine story. We wanted to get black and brown people to consider, not just the effects of COVID-19. But their overall health issues were at a higher morbidity rate. Due to the fact that we had underlying conditions. We saw a need to try to get our people to start being more proactive about their health. Partnerships are key to this process. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panes">
                                <div className="pane">
                                    <div className="container">
                                        <div className="six columns texts">
                                            <div className="text">
                                                <h2>The Responsibility <span>of Doctors</span></h2>
                                                <p>Dr. David Hicks, Deputy Health Director for the Jefferson County Health Department talks about the responsibility of doctors to educate the public on COVID-19 and why it is important to get vaccinated. If doctors don’t step up and offer their educated perspectives, misinformation will fill the information vacuum and all of us will be in a worse position.</p>
                                            </div>
                                        </div>
                                        <div className="four columns video">
                                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gBLvjDFkoxE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Covid;