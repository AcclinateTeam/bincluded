import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import AllFamily from './subComponents/Health/AllFamily';
import AllYouth from './subComponents/Health/AllYouth';
import AllAdult from './subComponents/Health/AllAdult';
import AllSenior from './subComponents/Health/AllSenior';

const Terminal = () =>
{

    const [lhs, setLhs] = useState(false);
    const [viva, setViva] = useState(false);
    const [uway, setUway] = useState(false);

    const lhsLoaded = () =>
    {
        setLhs(true);
        setViva(false);
        setUway(false);
    }

    const vivaLoaded = () =>
    {
        setLhs(false);
        setViva(true);
        setUway(false);
    }

    const uwayLoaded = () =>
    {
        setLhs(false);
        setViva(false);
        setUway(true);
    }


    const cooperLoaded = () =>
    {
        setLhs(false);
        setViva(false);
        setUway(false);
    }

    if (lhs && !viva && !uway)
    {
        return (
            <>
                <section className="featured">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Featured <span className="blue">Partners</span></h2>
                                <p>We partner with brands that are passionate about our mission and our community..</p>
                            </div>

                            <div className="container panel">
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes" onClick={cooperLoaded} style={{ backgroundImage: `url("/images/partners/cooper.png")` }}></div>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes active" onClick={lhsLoaded} style={{ backgroundImage: `url("/images/partners/uablive.png")` }}></div>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes" onClick={vivaLoaded} style={{ backgroundImage: `url("/images/partners/viva.png")` }}></div>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes" onClick={uwayLoaded} style={{ backgroundImage: `url("/images/partners/uway.jpg")` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="seven columns offset-by-one-half deck">
                            <div className="third columns">
                                <div className="data">
                                    <h3>Live Health Smart Alabama</h3>
                                    <p>Live HealthSmart Alabama (LHSA) is a transformational movement to make good health simple for all Alabamians. Fueled by a network of more than 100 trusted community relationships and partners LHSA strives to decrease the incidence of chronic disease and provide greater health equity across the state. LHSA deploys a mobile health clinic and mobile market to bring health screenings and food directly to the communities that need it most.</p>
                                    <h3>Who Will Benefit</h3>
                                    <p>Residents of the Bush Hills, East Lake, Kingston, or Titusville communities. Anyone interested in learning how to lead a healthy lifestyle, seeking access to healthy food options, or access to health screenings.</p>
                                    <div className="buttonwrap" style={{ textAlign: `left` }}>
                                        <a className="content button solid" href="https://www.uab.edu/livehealthsmartal/">Visit Site</a>
                                    </div>
                                </div>
                            </div>
                            <div className="twothird columns">
                                <div className="image" style={{ backgroundImage: `url("/images/partners/coopergreen.png")` }}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    } else if (!lhs && viva && !uway)
    {
        return (
            // VIVA HEALTH LOADED
            <>
                <section className="featured">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Featured <span className="blue">Partners</span></h2>
                                <p>We partner with brands that are passionate about our mission and our community..</p>
                            </div>

                            <div className="container panel">
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes" onClick={cooperLoaded} style={{ backgroundImage: `url("/images/partners/cooper.png")` }}></div>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes" onClick={lhsLoaded} style={{ backgroundImage: `url("/images/partners/uablive.png")` }}></div>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes active" onClick={vivaLoaded} style={{ backgroundImage: `url("/images/partners/viva.png")` }}></div>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes" onClick={uwayLoaded} style={{ backgroundImage: `url("/images/partners/uway.jpg")` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="seven columns offset-by-one-half deck">
                            <div className="third columns">
                                <div className="data">
                                    <h3>Viva Health</h3>
                                    <p>Viva Health, Inc. is a health maintenance organization providing quality, accessible health care. We simplify and improve health care through a network that includes many of the most respected physicians and hospital providers in the market.</p>
                                    <h3>Who Will Benefit</h3>
                                    <p>Viva Health offers a continuum of care that covers everything from routine office visits, emergencies, and major and minor care to adult, obstetrical, and pediatric care. Individuals seeking a primary care physician, a particular medication or prescription, or information of medicare insurance would find Viva Health beneficial.</p>
                                    <div className="buttonwrap" style={{ textAlign: `left` }}>
                                        <a className="content button solid" href="https://www.vivahealth.com/">Visit Site</a>
                                    </div>
                                </div>
                            </div>
                            <div className="twothird columns">
                                <div className="image">
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lT4zfk1xOew" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );

    } else if (!lhs && !viva && uway)
    {
        return (
            // UNITED WAY LOADED
            <>
                <section className="featured">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Featured <span className="blue">Partners</span></h2>
                                <p>We partner with brands that are passionate about our mission and our community..</p>
                            </div>

                            <div className="container panel">
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes" onClick={cooperLoaded} style={{ backgroundImage: `url("/images/partners/cooper.png")` }}></div>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes" onClick={lhsLoaded} style={{ backgroundImage: `url("/images/partners/uablive.png")` }}></div>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes" onClick={vivaLoaded} style={{ backgroundImage: `url("/images/partners/viva.png")` }}></div>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes active" onClick={uwayLoaded} style={{ backgroundImage: `url("/images/partners/uway.jpg")` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="seven columns offset-by-one-half deck">
                            <div className="third columns">
                                <div className="data">
                                    <h3>The United Way</h3>
                                    <p>United Way of Central Alabama builds a great community and advances the common good by bringing people together to help others. By pooling our resources and working together, we pave the way for real, tangible change in health, education and financial stability.</p>
                                    <h3>Who Will Benefit</h3>
                                    <p>Individuals looking for hunger assistance, financial and housing education, health care or information, Veteran services, and/or senior & disability care.</p>
                                    <div className="buttonwrap" style={{ textAlign: `left` }}>
                                        <a className="content button solid" href="https://www.unitedway.org/">Visit Site</a>
                                    </div>
                                </div>
                            </div>
                            <div className="twothird columns">
                                <div className="image">
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Stte_ohBdq8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );

    } else 
    {
        return (
            // COOPER GREEN LOADED
            <>
                <section className="featured">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Featured <span className="blue">Partners</span></h2>
                                <p>We partner with brands that are passionate about our mission and our community..</p>
                            </div>

                            <div className="container panel">
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes active" onClick={cooperLoaded} style={{ backgroundImage: `url("/images/partners/cooper.png")` }}></div>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes" onClick={lhsLoaded} style={{ backgroundImage: `url("/images/partners/uablive.png")` }}></div>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes" onClick={vivaLoaded} style={{ backgroundImage: `url("/images/partners/viva.png")` }}></div>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="frame">
                                        <div className="panes" onClick={uwayLoaded} style={{ backgroundImage: `url("/images/partners/uway.jpg")` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="seven columns offset-by-one-half deck">
                            <div className="third columns">
                                <div className="data">
                                    <h3>Cooper Green Mercy Hospital</h3>
                                    <p>Full-service ambulatory care facility that includes both primary and specialty care, urgent care, physical, occupational, and speech therapy, laboratory services, radiology and a pharmacy, regardless of ability to pay.</p>
                                    <h3>Who Will Benefit</h3>
                                    <p>Individuals with or without health care seeking any type of medical care including a primary physician, specialist, or pharmacy.</p>
                                    <div className="buttonwrap" style={{ textAlign: `left` }}>
                                        <a className="content button solid" href="https://coopergreen.org/">Visit Site</a>
                                    </div>
                                </div>
                            </div>
                            <div className="twothird columns">
                                <div className="image">
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XtX3qBtvFkc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Terminal;

