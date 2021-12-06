import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SubHeader from '../../components/SubHeader';

const WhyNow = () =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <SubHeader />

            <div className="trialback">
                <svg viewBox="0 0 1440 591" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H1440V336L0 564V0Z" fill="#050236" />
                    <path d="M1081.44 382.129L1234.45 350.953L1227.3 395.384L1075.17 424.695L1081.44 382.129Z" fill="#CA1D48" />
                    <path d="M1240.49 309.466L1392.13 276.98L1385.27 321.479L1234.49 352.093L1240.49 309.466Z" fill="#287FDD" />
                    <path d="M1227.64 396.592L1379.76 364.198L1372.91 408.697L1222.13 439.311L1227.64 396.592Z" fill="#ECECEC" />
                    <path d="M213.437 493.129L366.454 461.953L359.305 506.384L207.166 535.695L213.437 493.129Z" fill="#CA1D48" />
                    <path d="M372.49 420.466L524.127 387.98L517.269 432.479L366.494 463.093L372.49 420.466Z" fill="#287FDD" />
                    <path d="M359.637 507.592L511.765 475.198L504.907 519.697L354.132 550.311L359.637 507.592Z" fill="#ECECEC" />
                </svg>
            </div>

            <section className="whyComp">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h1>Why Now?</h1>
                            <Link to="https://nowincluded.com/explore/">Click Here to Read the Blog <FontAwesomeIcon icon="arrow-right" /></Link>
                            <p>B-Included is a movement with a mission to build a community of individuals ready to take control of their health and future.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="whyComp">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="container videoPanel">
                            <div className="seven columns">
                                <div className="vidPanes">
                                    <div className="vidPane">
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MXduRSowWmU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="three columns">
                                <div className="container">
                                    <div className="ten columns panes">
                                        <div className="pane">
                                            <h1>Our Mission</h1>
                                            <p>Connect corporate, civic, and community leaders to understand issues and increase equitable economic growth.</p>
                                        </div>
                                    </div>
                                    <div className="ten columns panes">
                                        <div className="pane">
                                            <h1>Our Vision</h1>
                                            <p>Transforming Birmingham by creating a more prosperous and equitable future.</p>
                                        </div>
                                    </div>
                                    <div className="ten columns panes">
                                        <div className="pane end">
                                            <h1>Our Values</h1>
                                            <p>Prosper is a coalition of community, civic and business leaders committed to creating a more vibrant, racially and gender inclusive economy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ten columns">
                                <h1>Why Now?</h1>
                                <p>Why not now? There’s no better time for Black communities to have and claim a space of their own. The longevity of Black communities depends on a collective of people who are focused on improved health, overall wellness, and elevated financial practices. B-Included is that space and you can become part of that collective</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="leaders">
                <div className="leadersbg" style={{ backgroundImage: `url("/images/leadersbg.png")` }}></div>
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h1>Leadership At Our Core</h1>
                            <h3>Birmingham Included gives its residents a chance at a happier, healthier life. </h3>
                            <p>Acclinate™, a Birmingham-based company specializing in digital health products, is partnering with Jefferson County to help 50,000 county residents control their future by taking charge of their health. The B-Included website will engage residents and provide easy access to pertinent health resources and job assistance.</p>
                        </div>
                        <div className="six columns windowSeal">
                            <div className="container">
                                <div className="five columns windows">
                                    <div className="window">
                                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                        <h1>Melanie Bridgeforth</h1>
                                        <h6>Women's Fund of Greater Birmingham</h6>
                                    </div>
                                </div>
                                <div className="five columns windows">
                                    <div className="window">
                                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                        <h1>Jimmie Coleman</h1>
                                        <h6>Birmingham Citizen's Advisory Board</h6>
                                    </div>
                                </div>
                                <div className="five columns windows">
                                    <div className="window">
                                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                        <h1>Kelly Caruso</h1>
                                        <h6>Shipt</h6>
                                    </div>
                                </div>
                                <div className="five columns windows">
                                    <div className="window">
                                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                        <h1>Mark Crosswhite</h1>
                                        <h6>Alabama Power</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="four columns deck">
                            <div className="cards">
                                <div className="card">
                                    <div className="image"><img src="/images/prosperAcclinate.png" alt="" /></div>
                                    <div className="text">
                                        <h1>Prosper + Acclinate</h1>
                                        <p>Acclinate and Birmingham Prosper have been hard at work to develop a Birmingham-specific community platform; B-INCLUDED. This platform will further Prosper's initiative to reduce racial inequities in Jefferson County by providing county residents access to long needed resources.</p>
                                        <a href="https://prosperbham.com/">Read About How This Partnership Was Formed <FontAwesomeIcon icon="arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="orgs">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h1>Aligned With The Best Organizations</h1>
                            <h3>Birmingham Included gives its residents a chance at a happier, healthier life.</h3>
                        </div>
                        <div className="container">
                            <div className="third columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/orgUAB.png")` }}></div>
                            </div>
                            <div className="third columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/orgVulcan.png")` }}></div>
                            </div>
                            <div className="third columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/orgProtective.png")` }}></div>
                            </div>
                            <div className="third columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/cahaba.png")` }}></div>
                            </div>
                            <div className="third columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/impact.jpg")` }}></div>
                            </div>
                            <div className="third columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/mpower.jpg")` }}></div>
                            </div>
                            <div className="third columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/uway.jpg")` }}></div>
                            </div>
                            <div className="third columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/m4a.png")` }}></div>
                            </div>
                            <div className="third columns">
                                <div className="orgImg" style={{ backgroundImage: `url("/images/partners/christ-health.png")` }}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default WhyNow; 