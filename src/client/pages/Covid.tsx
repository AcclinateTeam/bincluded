import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

/* COMPONENT IMPORTS */
import Header from '../components/Header';

const Covid = () =>
{

    // Scrolls to bottom of Hero Section OnClick
    const scrollToRef = () =>
    {
        let hero = document.getElementById('hero');
        let heroHeight = hero.offsetHeight;
        
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
                <div className="calloutbg" style={{ backgroundImage: `url(/images/covid.jpg)`, backgroundPosition: `0 0` }}></div>
                <div className="callout">
                    <div className="calltext">
                        <h1>COVID-19</h1>
                        <p>#B-INCLUDED provides easy access to resources that are beneficial in reaching one’s goals in maintaining a healthy lifestyle.</p>

                    </div>
                    <div className="callbutton">
                        <a className="button signup" href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual">Join The Community</a>
                        <a className="button learnmore" href="https://www.videoask.com/ftmqd7gt3">Share Your Covid Story</a>
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
            <section className="studies">
                <div className="container">
                    <div className="four columns">
                        <div className="heading">
                            <h2>What is<br /> <span className="blue">COVID-19</span></h2>
                        </div>
                    </div>
                    <div className="six columns text">
                        <p>Clinical trials are research studies performed in people that are aimed at evaluating a medical, surgical, or behavioral intervention. They are the primary way that researchers find out if a new treatment, like a new drug or diet or medical device (for example, a pacemaker) is safe and effective in people.</p>
                    </div>
                </div>
            </section>

            {/* IMAGE DIVIDER SECTION */}
            <section className="divider">
                <img src="/images/covidsplit.png" alt="birmingham" />
            </section>

            {/* WHY IT MATTERS SECTION */}
            <section className="whyStudies">
                <div className="container">
                    <div className="five columns text">
                        <p>Racial and ethnic minorities makeup 43% of the U.S. population, and are growing, yet they often represent as little as 2% to 16% of clinical trial participants Source. This leads to treatments that are less effective on people of color. </p>
                    </div>
                    <div className="five columns">
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
                            <h2>COVID <span className="blue">Statsistics</span></h2>
                            <iframe src="https://covidactnow.org/embed/us/fips/01" title="CoVid Act Now" width="330" height="370" frameBorder="0" scrolling="no"></iframe>
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
                                <FontAwesomeIcon icon="head-side-mask" /><li>Masks are now recommended for vaccinated individuals in public indoor spaces to reduce the spread of the Delta variant. Unvaccinated people should continue to mask in all public spaces. See guidance on masks.</li>
                                <FontAwesomeIcon icon="users" /><li>Indoor gatherings should be avoided with people outside the immediate household, unless you are fully vaccinated. See guidance for vaccinated individuals. Outdoor gatherings with masks and distancing are a safer alternative.</li>
                                <FontAwesomeIcon icon="exclamation-triangle" /><li>Add your phone to Alabama's exposure notification system to receive alerts when you have been in close contact with someone who later tests positive for COVID.</li>
                                <FontAwesomeIcon icon="school" /><li>Schools can safely offer in-person learning only when these infection control measures are in place.</li>
                                <FontAwesomeIcon icon="plane-departure" /><li>Travel should be avoided unless it is necessary or you are fully vaccinated.</li>
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
                    <div className="seven columns offset-by-one-half">
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

            {/* <section>
                <div className="container partnerUp">
                    <div className="ten columns">
                        <div className="content">
                            <div className="container">
                                <div className="eight columns offset-by-one">
                                    <div className="seven columns">
                                        <p>We want you to be a part of the health conversation.</p>
                                    </div>
                                    <div className="three columns">
                                        <a href="https://jdsb9zx9r21.typeform.com/to/m2w4i2Ju">Share Your Covid Story</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container covid19">
                    <div className="seven columns offset-by-one-half">
                        <div className="views">
                            <div className="ten columns" style={{ marginBottom: '100px' }}>
                                <div className="container">
                                    <div className="six columns">
                                        <div className="vue">

                                        </div>
                                    </div>
                                    <div className="four columns">
                                        <div className="view">
                                            <iframe src="https://covidactnow.org/embed/us/fips/01" title="CoVid Act Now" width="330" height="370" frameBorder="0" scrolling="no"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ten columns">
                                <div className="container">
                                    <div className="four columns">
                                        <div className="view">
                                            <iframe src="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-finder-widget_1.html" scrolling="no" height="400" frameBorder="0" width="280" title="Vaccine Finder Widget" style={{ overflow: 'hidden' }}> </iframe>
                                        </div>
                                    </div>
                                    <div className="six columns">
                                        <div className="vue">
                                            <h1>Vaccination Information</h1>
                                            <ul>
                                                <FontAwesomeIcon icon="head-side-mask" /><li>Masks are now recommended for vaccinated individuals in public indoor spaces to reduce the spread of the Delta variant. Unvaccinated people should continue to mask in all public spaces. See guidance on masks.</li>
                                                <FontAwesomeIcon icon="users" /><li>Indoor gatherings should be avoided with people outside the immediate household, unless you are fully vaccinated. See guidance for vaccinated individuals. Outdoor gatherings with masks and distancing are a safer alternative.</li>
                                                <FontAwesomeIcon icon="exclamation-triangle" /><li>Add your phone to Alabama's exposure notification system to receive alerts when you have been in close contact with someone who later tests positive for COVID.</li>
                                                <FontAwesomeIcon icon="school" /><li>Schools can safely offer in-person learning only when these infection control measures are in place.</li>
                                                <FontAwesomeIcon icon="plane-departure" /><li>Travel should be avoided unless it is necessary or you are fully vaccinated.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Covid;