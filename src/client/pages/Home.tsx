import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

/* COMPONENT IMPORTS */
import Header from '../components/Header';

const Home = () =>
{

    const [tracker, setTracker] = useState<any>([]);
    const [actuals, setActuals] = useState<any>([]);
    const [beds, setBeds] = useState<any>([]);
    const [metrics, setMetrics] = useState<any>([]);

    function kFormatter (num: number)
    {
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    }

    useEffect(() =>
    {


        getMetroTracker();
        async function getMetroTracker ()
        {
            const response = await fetch('https://api.covidactnow.org/v2/cbsa/13820.json?apiKey=3221244a929540bdb7c557ce3d60b092');
            const metro = await response.json();
            setTracker(metro);
            setActuals(metro.actuals);
            setBeds(metro.actuals.hospitalBeds);
            setMetrics(metro.metrics);
        }

    }, []);


    return (
        <>
            {/* HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section>
                <div className="callout" style={{ backgroundImage: "url(/images/callback.png)" }}>
                    <div className="jumbotron">
                        <div className="container">
                            <div className="eight columns offset-by-one">
                                <div className="five columns">
                                    <div className="calltext">
                                        <h1>Stand Up For Your Health</h1>
                                        <p>
                                            #BIncluded is a movement with a mission to build a community of individuals ready to take control of their health and future.
                                        </p>
                                    </div>
                                    <div className="callbutton">
                                        <Link className="button signup" to="/">Join The Community</Link>
                                        <Link className="button learnmore" to="/">Learn More</Link>
                                    </div>
                                </div>
                                <div className="five columns">
                                    <div className="callimage">
                                        <img className="card-img" src="/images/callimage.png" alt="Callout Image Placeholder" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PORTAL COMPONENT */}
            <section>
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="portal">
                            <div className="third columns ports">
                                <div className="port">
                                    <h1>Resources at your fingertips</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit vehicula cursus. </p>
                                </div>
                            </div>
                            <Link to="/health">
                                <div className="third columns ports">
                                    <div className="port shadow">
                                        <FontAwesomeIcon icon="user-md" />
                                        <h4>Health</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit vehicula cursus. </p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="">
                                <div className="third columns ports">
                                    <div className="port shadow">
                                        <FontAwesomeIcon icon="users" />
                                        <h4>Family</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit vehicula cursus. </p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="">
                                <div className="third columns ports">
                                    <div className="port shadow">
                                        <FontAwesomeIcon icon="hard-hat" />
                                        <h4>Careers</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit vehicula cursus. </p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="">
                                <div className="third columns ports">
                                    <div className="port shadow">
                                        <FontAwesomeIcon icon="viruses" />
                                        <h4>COVID-19</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit vehicula cursus. </p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="">
                                <div className="third columns ports">
                                    <div className="port shadow">
                                        <FontAwesomeIcon icon="newspaper" />
                                        <h4>Events</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit vehicula cursus. </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* WHY_NOW? COMPONENT */}
            <section>
                <div className="container">
                    <div className="row whyNow">
                        <div className="eight columns offset-by-one">
                            <div className="container">
                                <div className="four columns">
                                    <div className="whyText">
                                        <h1>Why Now?</h1>
                                        <p>There’s no better time for Black communities to have and claim a space of their own. The longevity of Black communities depends on a collective of people who are focused on improved health, overall wellness, and elevated financial practices. B-INCLUDED is that space and you can become part of that collective.<br /><br />B-INCLUDED is meant to address healthcare needs and subsequently educational, employment, and financial gaps so that residents can work towards improved health and financial sustainability.</p>
                                        <Link className="button learnmore" to="/">Learn More</Link>
                                    </div>
                                </div>
                                <div className="six columns stats">
                                    <div className="five columns stat">
                                        <div className="point">
                                            <h3>43%</h3>
                                            <p>of Jefferson County's population is Black or African-American</p>
                                        </div>
                                    </div>
                                    <div className="five columns stat">
                                        <div className="point">
                                            <h3>16.3%</h3>
                                            <p>of Black Residents in Jefferson County live with a disability</p>
                                        </div>
                                    </div>
                                    <div className="five columns stat">
                                        <div className="point">
                                            <h3><span>65%</span></h3>
                                            <p>of the county's residents who live in impoverished or low-income communities are Black</p>
                                        </div>
                                    </div>
                                    <div className="five columns stat">
                                        <div className="point">
                                            <h3>15%</h3>
                                            <p>of Jefferson County's Black residents are more likely to die from all causes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* IMAGE BACKGROUNDS */}
                        <div className="two columns whyimage" style={{ backgroundImage: `url(/images/whynow1.jpg)` }}></div>
                        <div className="two columns whyimage" style={{ backgroundImage: `url(/images/whynow4.jpg)` }}></div>
                        <div className="two columns whyimage" style={{ backgroundImage: `url(/images/whynow3.jpg)` }}></div>
                        <div className="two columns whyimage" style={{ backgroundImage: `url(/images/whynow2.jpg)` }}></div>
                        <div className="two columns whyimage" style={{ backgroundImage: `url(/images/whynow5.jpg)` }}></div>
                    </div>
                </div>
            </section>

            {/* COVID-19 COMPONENT */}
            <section>
                <div className="container">
                    <div className="row covid">
                        <div className="ten columns">
                            <div className="eight columns offset-by-one">
                                <h1>The latest data related to Covid-19</h1>
                                <div className="fourth columns">
                                    <div className="data border">
                                        <h3>{kFormatter(actuals.cases)}</h3>
                                        <p>Active Cases</p>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="data border">
                                        <h3><span>{kFormatter(beds.capacity)}</span></h3>
                                        <p>Beds Available</p>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="data border">
                                        <h3>{kFormatter(metrics.infectionRate)}%</h3>
                                        <p>Infection Rate</p>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="data">
                                        <h3>{metrics.vaccinationsInitiatedRatio}%</h3>
                                        <p>Vaccines Initiated Ratio</p>
                                    </div>
                                </div>
                                <div className="buttonwrap">
                                    <Link className="content button solid" to="/recipes">More on Covid-19</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;