import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

/* COMPONENT IMPORTS */
import Header from '../components/Header';

const Home = () =>
{
    // Window scroll-to-top function
    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, [])

    // Metro Track State & Effect
    const [tracker, setTracker] = useState<any>([]);
    const [actuals, setActuals] = useState<any>([]);
    const [beds, setBeds] = useState<any>([]);
    const [metrics, setMetrics] = useState<any>([]);

    // Hook for covid stats tracker
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

    // Close Play Modal by clicking the 'whitespace' area of the modal.
    const whiteSpace = document.querySelector('.homeVideo');
    
    document.body.addEventListener('click', (e) => function (e: { target: Node; })
    {
        if (whiteSpace.contains(e.target))
        {
            console.log('This is the white space');
        } else
        {
            console.log('This is not the white space');
        }
    });

    const openPlayModal = async () =>
    {
        // console.log('This opens the play modal');

        // Play Modal container element selector
        const playContainer = document.getElementById('playContainer');

        // New div (sub-container) element creation and class name assignment
        const newDiv = document.createElement('div');
        newDiv.className = 'homeVideo';

        // New Frame (sub-div container) element creation and class name assignment
        const newFrame = document.createElement('div');
        newFrame.className = 'frame';

        // New Close Button (sub-div container) element creation and class name assignment
        const newCloseBtn = document.createElement('div');
        newCloseBtn.className = 'popClose';

        // New Close Button Image
        const newCloseBtnImg = document.createElement('img');
        newCloseBtnImg.src = '/images/close.png';
        newCloseBtnImg.addEventListener('click', () => { closePlayModal() }); // Closes Play Modal by clicking the image.

        // Create iframe for youtube video and set attributes
        const newVideo = document.createElement('iframe');
        newVideo.setAttribute('src', 'https://www.youtube.com/embed/MXduRSowWmU?autoplay=1');
        newVideo.setAttribute('frameborder', '0');
        newVideo.setAttribute('allow', 'autoplay');
        newVideo.setAttribute('style', 'width: 100%; height: 100%;');

        // Constructs "HomeVideoObject" with appended elements.
        playContainer.appendChild(newDiv);
        newDiv.appendChild(newFrame);
        newFrame.appendChild(newVideo);
        newFrame.appendChild(newCloseBtn);
        newCloseBtn.appendChild(newCloseBtnImg);

        // Play Modal animations
        const wait = (t: number) => new Promise(r => setTimeout(r, t));
        await wait(20);
        newDiv.style.opacity = '1';
        newFrame.style.top = '20%';       

        // Close Play Modal function 
        const closePlayModal = async () =>
        {
            // console.log('This closes the play modal');

            // Animate "homeVideo" and "frame" div(s).
            newDiv.style.opacity = '0';
            newFrame.style.top = '35%';

            // Wait first, then remove parent "homeVideo" element, which resets the play modal. Wait is used BEFORE remove() to ensure the animation is complete.
            await wait(500);
            newDiv.remove();
        }
    }

    return (
        <>
            {/* HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section className="home">
                <div className="calloutbg">
                    <svg viewBox="0 0 1440 778" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1244.23 447.955L1393.88 407.283L1389.45 452.089L1240.56 490.845L1244.23 447.955Z" fill="#EEC31A" />
                        <path d="M1397.55 364.393L1547.2 323.721L1542.77 368.527L1393.88 407.283L1397.55 364.393Z" fill="#287FDD" />
                        <path d="M1389.45 452.088L1539.59 411.482L1535.16 456.288L1386.27 495.044L1389.45 452.088Z" fill="#ECECEC" />
                        <path d="M1022.07 385.467L1148.81 296.106L1159.96 339.73L1033.27 427.029L1022.07 385.467Z" fill="#CA1D48" />
                        <path d="M1133.61 264.545L1260.35 178.502L1274 223.5L1144.81 306.108L1133.61 264.545Z" fill="#287FDD" />
                        <path d="M1159.96 339.728L1287.19 250.26L1298.33 293.883L1171.65 381.183L1159.96 339.728Z" fill="#F8F8F8" />
                        <path d="M0 0H934.5L841.5 587L0 728V0Z" fill="#287FDD" />
                        <path d="M0 0L850.5 -0.5L841.5 587L0 620V0Z" fill="#CA1D48" />
                        <path d="M0 0H796L841.499 587L0 690.5V0Z" fill="#050236" />
                    </svg>
                </div>
                <div className="callout">
                    <div className="content">
                        <div className="calltext">
                            <h1>Stand Up For Your Health</h1>
                            <p>
                                #BIncluded is a movement with a mission to build a community of individuals ready to take control of their health and future.

                            </p>
                        </div>
                        <div className="callbutton">
                            <a className="button signup" href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual">Join The Community</a>
                            <Link className="button learnmore" to="/whynow">Learn More</Link>
                        </div>
                    </div>
                    <div className="playModal">
                        <a onClick={openPlayModal} className="">
                            <img className="card-img" src="/images/callhome.png" />
                            <img className="playButton" src="/images/play.png" />
                        </a>
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
                                    <p>These resources are all located within one area for ease of use. </p>
                                </div>
                            </div>
                            <Link to="/health">
                                <div className="third columns ports">
                                    <div className="port shadow hover">
                                        <FontAwesomeIcon icon="user-md" />
                                        <h4>Health</h4>
                                        <p>Find reliable, fact-based health information you can trust.</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/family">
                                <div className="third columns ports">
                                    <div className="port shadow hover">
                                        <FontAwesomeIcon icon="users" />
                                        <h4>Family</h4>
                                        <p>Find information on how to make your family’s health a priority.</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/careers">
                                <div className="third columns ports">
                                    <div className="port shadow hover">
                                        <FontAwesomeIcon icon="hard-hat" />
                                        <h4>Careers</h4>
                                        <p>Connect with resources to elevate your careers and increase your wealth.</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/covid">
                                <div className="third columns ports">
                                    <div className="port shadow hover">
                                        <FontAwesomeIcon icon="viruses" />
                                        <h4>COVID-19</h4>
                                        <p>Stay up-to-date on the latest COVID-19 news and stats.</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/blog">
                                <div className="third columns ports">
                                    <div className="port shadow hover">
                                        <FontAwesomeIcon icon="newspaper" />
                                        <h4>Blog</h4>
                                        <p>Share your story! We’d love to feature you.</p>
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
                                        <p>There’s no better time for Black communities to have and claim a space of their own. The longevity of Black communities depends on a collective of people who are focused on improved health, overall wellness, and elevated financial practices.   B-INCLUDED is that space and you can become part of that collective.<br /><br />B-INCLUDED is meant to address healthcare needs and subsequently educational, employment, and financial gaps so that residents can work towards improved health and financial sustainability.</p>
                                        <Link className="button learnmore" to="/WhyNow">Learn More</Link>
                                    </div>
                                </div>
                                <div className="six columns stats">
                                    <div className="five columns stat">
                                        <div className="point">
                                            <CountUp start={0} end={43} duration={3} suffix="%" redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <h3>
                                                            <span ref={countUpRef} />
                                                        </h3>
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                            <p>of Jefferson County's population is Black or African-American</p>
                                        </div>
                                    </div>
                                    <div className="five columns stat">
                                        <div className="point">
                                            <CountUp start={0} end={16} duration={3} suffix="%" redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <h3>
                                                            <span ref={countUpRef} />
                                                        </h3>
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                            <p>of Black Residents in Jefferson County live with a disability</p>
                                        </div>
                                    </div>
                                    <div className="five columns stat">
                                        <div className="point">
                                            <CountUp start={0} end={43} duration={3} prefix="" suffix="%" >
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <h3>
                                                            <span ref={countUpRef} />
                                                        </h3>
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                            <p>of the county's residents who live in impoverished or low-income communities are Black</p>
                                        </div>
                                    </div>
                                    <div className="five columns stat">
                                        <div className="point">
                                            <CountUp start={0} end={15} duration={3} prefix="" suffix="%" >
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <h3>
                                                            <span ref={countUpRef} />
                                                        </h3>
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
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
                                <h2>for the Metro-Birmingham Area</h2>
                                <div className="fourth columns">
                                    <div className="data border">
                                        <CountUp start={0} end={actuals.cases} separator="," duration={3} redraw={true} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <h3>
                                                        <span ref={countUpRef} />
                                                    </h3>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p>Active Cases</p>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="data border">
                                        <CountUp start={0} end={beds.capacity} separator="," duration={3} redraw={true} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <h3>
                                                        <span ref={countUpRef} />
                                                    </h3>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p>Beds Available</p>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="data border">
                                        <CountUp start={-0.9999} end={metrics.infectionRate} separator="," decimals={3} decimal="." duration={3} redraw={true} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <h3>
                                                        <span ref={countUpRef} />
                                                    </h3>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p>Infection Rate</p>
                                    </div>
                                </div>
                                <div className="fourth columns">
                                    <div className="data">
                                        <CountUp start={-0.9999} end={metrics.vaccinationsInitiatedRatio} separator="," decimals={3} decimal="." duration={3} suffix="%" redraw={true} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <h3>
                                                        <span ref={countUpRef} />
                                                    </h3>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p>Vaccines Initiated Ratio</p>
                                    </div>
                                </div>
                                <div className="buttonwrap">
                                    <Link className="content button solid" to="/covid">More on Covid-19</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Popup/> */}

            {/* <div id="homeVideo" className="homeVideo">
                <div className="frame">
                    <div className="popClose" onClick={openPlayModal}>
                        <FontAwesomeIcon id="button-close" className="close" icon="times" />
                    </div>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MXduRSowWmU?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div> */}

            <div id="playContainer"></div>
        </>
    );
}

export default Home;
