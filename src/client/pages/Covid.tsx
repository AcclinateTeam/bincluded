import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

/* COMPONENT IMPORTS */
import Header from '../theme/Header';
import Logo from '../components/subComponents/Logo';

const Covid = () =>
{

    // Scrolls to bottom of Hero Section OnClick
    const scrollToRef = () =>
    {
        let hero = document.getElementById('hero');
        let heroHeight = hero!.offsetHeight;
        
        window.scrollTo({
            top: heroHeight,
            left: 0,
            behavior: 'smooth'
        });
    }  

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="cov hero" style={{ height: `100vh` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/covid.jpg)` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>COVID-19</h1>
                        <p><Logo color="#ffffff" /> provides Birmingham residents COVID-19 information, current statistics and resources to take action against the virus</p>

                    </div>
                    <div className="callbutton">
                        <a className="button signup" href="https://www.videoask.com/ftmqd7gt3">Share Your Covid Story</a>
                        <a className="button signup" href="https://www.cealcommunicationsengine.com/partners">Download Covid-19 Assets</a>
                    </div>
                </div>
                <div className="scrollDown">
                    <FontAwesomeIcon icon="arrow-down" onClick={scrollToRef} />
                    <h3>Scroll Down</h3>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="seven columns offset-by-one-half bread">
                        <a href="/">Home</a> {'>'} COVID-19
                    </div>
                </div>
            </section>

            {/* WHAT IS COVID-19 SECTION */}
            <section className="covids">
                <div className="container">
                    <div className="four columns">
                        <div className="heading">
                            <h2>What is<br /> <span className="blue">COVID-19</span></h2>
                        </div>
                    </div>
                    <div className="six columns text">
                        <p>COVID-19 is a disease caused by a virus called SARS-CoV-2. Most people with COVID-19 have mild symptoms, but some people become severely ill. Older adults and people who have certain underlying medical conditions are more likely to get severely ill. <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html">Read More</a></p>
                    </div>
                </div>
            </section>

            {/* IMAGE DIVIDER SECTION */}
            <section className="divider trials">
                <img src="/images/covidsplit.png" alt="birmingham" />
            </section>

            {/* WHY IT MATTERS SECTION */}
            <section className="whyStudies">
                <div className="container reTrials">
                    <div className="five columns text">
                        <p>Early in the pandemic, the CDC reported 21.8% of COVID-19 cases in the US were African Americans and 33.8% were LatinX, despite that these groups comprise only 13% and 18% of the US population.</p>
                    </div>
                    <div className="five columns head">
                        <div className="heading">
                            <h2>How COVID-19 research impacted <span className="blue">minority communities</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY YOU SHOULD GET INVOLVED SECTION */}
            <section className="covidstats">
                <div className="container">
                    <div className="six columns">
                        <div className="image">
                            <img src="/images/covidstats.jpg" alt="" />
                        </div>
                    </div>
                    <div className="four columns">
                        <div className="text">
                            <h2>COVID <span className="blue">Statistics</span></h2>
                            <iframe src="https://covidactnow.org/embed/us/fips/01" title="CoVid Act Now" width="10" height="370" frameBorder="0" scrolling="no"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* VACCINATION INFO SECTION */}
            <section className="vaxxinfo">
                <div className="container">
                    <div className="ten columns">
                        <h2>COVID Vaccination <span className="blue">Information</span></h2>
                    </div>
                    <div className="seven columns">
                        <div className="heading">
                            <ul>
                                <FontAwesomeIcon icon="users" /><li>Stay up to date with Birmingham’s COVID strategy. <a href="https://www.birminghamal.gov/coronavirus">Read More</a></li>
                                <FontAwesomeIcon icon="head-side-mask" /><li>Get access to free at-home COVID tests. <a href="https://www.covid.gov/tests">Order Here</a></li>
                                <FontAwesomeIcon icon="exclamation-triangle" /><li>Find information on vaccination in Birmingham. <a href="https://www.alabamapublichealth.gov/covid19vaccine/">Read More</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="three columns">
                        <div className="text">
                            <iframe src="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-finder-widget_1.html" scrolling="no" height="400" frameBorder="0" width="280" title="Vaccine Finder Widget" style={{ overflow: 'hidden' }}> </iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className="covid19"> 
                <div className="container">
                <div className="ten columns">
                        <h2 style={{ textAlign: 'center', paddingTop: '100px'}}>COVID <span className="blue">Partners</span></h2>
                    </div>
                    <div className="seven columns offset-by-one-half addResWide">
                        <div className="panel">
                            <div className="container">
                                <div className="ten columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="container">
                                                <div className="six columns texts">
                                                    <div className="text">
                                                        <h1>Alabama United</h1>
                                                        <p>Alabama United supports new, non-traditional approaches, including rapid detection devices and home-based testing technologies, that address current gaps in COVID-19 testing. The program also supports new or non-traditional applications of existing approaches to make them more usable, accessible, or accurate. These may lead to new ways to identify the current SARS-CoV-2 virus as well as potential future viruses.</p>
                                                    </div>
                                                </div>
                                                <div className="four columns video">
                                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/eD052T2gilk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ten columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="container">
                                                <div className="four columns video">
                                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vNUce0dXKbI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                </div>
                                                <div className="six columns texts">
                                                    <div className="text right">
                                                        <h1>Faith Forward</h1>
                                                        <p>The goal of Faith Forward was to gather influencers together to share their vaccine story. We wanted to get black and brown people to consider, not just the effects of COVID-19. But their overall health issues were at a higher morbidity rate. Due to the fact that we had underlying conditions. We saw a need to try to get our people to start being more proactive about their health. Partnerships are key to this process. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ten columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="container">
                                                <div className="six columns texts">
                                                    <div className="text">
                                                        <h1>The Responsibility of Doctors</h1>
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
                    </div>
                </div>
            </section>            
        </>
    )
}

export default Covid;