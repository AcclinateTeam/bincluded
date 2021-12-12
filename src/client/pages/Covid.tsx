import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

/* COMPONENT IMPORTS */
import Header from '../components/Header';

const Covid = () =>
{

    // useEffect(() =>
    // {
    //     window.scrollTo(0, 0)
    // }, []);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />
            {/* CALL CONTENT SECTION */}
            <section className="call">
                <div className="callbg">
                    <svg viewBox="0 0 1440 639" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-262.162 -1003.94L1710.77 -637.787L1284.43 565.061L-567 638.585L-262.162 -1003.94Z" fill="#287FDD" />
                        <path d="M-262.163 -1003.94L1533.63 -671.755L1284.43 565.061L-505.092 305.013L-262.163 -1003.94Z" fill="#CA1D48" />
                        <path d="M-262.162 -1003.94L1418.37 -692.054L1284.43 565.06L-532.715 453.854L-262.162 -1003.94Z" fill="#050236" />
                    </svg>
                </div>
                {/* CALLOUT CONTENT START */}
                <div className="callout">
                    <div className="content">
                        <div className="calltext">
                            <h1>Covid-19</h1>
                            <p>#B-Included provides easy access to resources that are beneficial in reaching one’s goals in maintaining a healthy lifestyle.</p>
                        </div>
                        <div className="callbutton">
                            <a className="button signup" href="https://nowincluded.mn.co/groups/6170862?utm_source=manual">Join The Community</a>
                            <a className="button learnmore" href="https://jdsb9zx9r21.typeform.com/to/m2w4i2Ju">Share Your Covid Story</a>
                        </div>
                    </div>
                    <div className="callimage">
                        <img className="card-img" src="/images/covidcall.png" alt="Callout Image Placeholder" />
                    </div>
                </div>
            </section>

            <section>
                <div className="container covid19">
                    <div className="eight columns offset-by-one">
                        <div className="phrase">
                            <div className="face" style={{ backgroundImage: `url("/images/article1.jpg")` }}>
                                <div className="overlay">
                                    <h1>COVID-19 is caused by a coronavirus<br /> called SARS-CoV-2.</h1>
                                </div>
                            </div>
                            <div className="back">
                                <h1>COVID-19</h1>
                                <p>Sign up for updates and resources.</p>
                                <a href="https://coronavirus.jhu.edu/map.html" target="_blank">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container covid19">
                    <div className="eight columns offset-by-one">
                        <div className="panel">
                            <div className="container">
                                <div className="ten columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="container">
                                                <div className="six columns texts">
                                                    <div className="tag">
                                                        <h6>Featured Partner</h6>
                                                    </div>
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
                                                    <div className="tag right">
                                                        <h6>Featured Partner</h6>
                                                    </div>
                                                    <div className="text right">
                                                        <h1>Faith Forward</h1>
                                                        <p>The goal of Faith Forward was to gather influencers together to share their vaccine story. We wanted to get black and brown people to consider, not just the effects of COVID-19. But their overall health issues were at a higher morbidity rate. Due to the fact that we had underlying conditions. We saw a need to try to get our people to start being more proactive about their health. Partnerships are key to this process. This is a work that has been strategically done, the Jefferson County Department of Health over time. But I think it's important for us to understand the multifaceted roles that they play in our community, as it pertains to the health of black and brown people. When you come into the Jefferson County Department of Health. You shouldn't come in just expecting to be vaccinated. You ought to come in with a mindset that I want to really take control of my health.</p>
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
                                                    <div className="tag">
                                                        <h6>Featured Partner</h6>
                                                    </div>
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

            <section>
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
                                            <h1>COVID-19 STATISTICS</h1>
                                            <ul>
                                                <FontAwesomeIcon icon="head-side-mask" /><li>Masks are now recommended for vaccinated individuals in public indoor spaces to reduce the spread of the Delta variant. Unvaccinated people should continue to mask in all public spaces. See guidance on masks.</li>
                                                <FontAwesomeIcon icon="users" /><li>Indoor gatherings should be avoided with people outside the immediate household, unless you are fully vaccinated. See guidance for vaccinated individuals. Outdoor gatherings with masks and distancing are a safer alternative.</li>
                                                <FontAwesomeIcon icon="exclamation-triangle" /><li>Add your phone to Alabama's exposure notification system to receive alerts when you have been in close contact with someone who later tests positive for COVID.</li>
                                                <FontAwesomeIcon icon="school" /><li>Schools can safely offer in-person learning only when these infection control measures are in place.</li>
                                                <FontAwesomeIcon icon="plane-departure" /><li>Travel should be avoided unless it is necessary or you are fully vaccinated.</li>
                                            </ul>
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
            </section>
        </>
    )
}

export default Covid;