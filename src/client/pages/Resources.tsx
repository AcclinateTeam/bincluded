import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink as Link } from 'react-router-hash-link';
import React from 'react';

import SubHeader from '../components/SubHeader';

const Resources = () =>
{
    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
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

            <section className="resources">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h3>Partner Resources</h3>
                            <h1>Let's Improve Our Community Together</h1>
                            {/* <Link to="/blog">Click Here to Read the Blog <FontAwesomeIcon icon="arrow-right" /></Link> */}
                            <p>B-Included is a bold initiative focused on using the power of data and tech to help people find what they need to succeed, easier. Our partners offer products, services, and resources to improve your life.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="resources">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <ul className="terminal">
                            <Link to="/resources#tools"><li>Tools &amp; Services</li></Link>
                            <Link to="/resources#thingsToKnow"><li className="active">Things To Know</li></Link>
                            <Link to="/resources#ourMission"><li>Our Mission</li></Link>
                            <Link to="/resources#becomeApartner"><li>Become a Partner</li></Link>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="tools" className="resources bgBlue">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="six columns">
                            <div className="info">
                                <h3>How To Promote and B-Included</h3>
                                <h1>B-Included Tools And Materials</h1>
                                <p>Jefferson County is making it easy to live healthier and wealthier by providing various information, ideas, and tools. B-Included helps you find your way through the steps of building community collaboration around health and financial well-being. Use these resources for ideas on partnering, rallying your networks, and inspiring others.</p>
                            </div>
                        </div>
                        <div className="four columns">
                            <div className="imgBox">
                                <div className="image">
                                    <img src="images/partnerResource.png" alt="placeholder" />
                                    <svg viewBox="0 0 402 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M402 0H0V298L402 166V0Z" fill="#EEC31A" />
                                    </svg>
                                </div>
                                <ul>
                                    <li><a href="https://www.canva.com/design/DAE0xAXHQSY/i1-_oa3prgnyxQjM303-cg/view?utm_content=DAE0xAXHQSY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton&mode=preview" target="_blank">Sponsor Outreach Guide</a></li>
                                    <li><a href="https://www.canva.com/design/DAE0xfIiSh4/ZkwbWisIWXtoBjtPAQDynw/view?utm_content=DAE0xfIiSh4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton&mode=preview" target="_blank">Messaging Guide</a></li>
                                    <li><a href="https://www.canva.com/design/DAE0xFXTI4w/PRuWi56fglIJY7aR_bkzFg/view?utm_content=DAE0xFXTI4w&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton&mode=preview" target="_blank">Social Media Post Template (Facebook)</a></li>
                                    <li><a href="https://www.canva.com/design/DAE0xFQhQwU/bXp8zwoaRvKZtkfgDMHflw/view?utm_content=DAE0xFQhQwU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton&mode=preview" target="_blank">Business Card Template</a></li>
                                    <li><a href="https://www.canva.com/design/DAE0xB4NwcE/IesEwXjFx_NFmSlO9NOZ8A/view?utm_content=DAE0xB4NwcE&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton&mode=preview" target="_blank">Social Media Post Template (Instagram)</a></li>
                                    <li><a href="https://www.canva.com/design/DAE0xGg10Ck/RcqWZ5Nv5xbGcYvkQ_IYPw/view?utm_content=DAE0xGg10Ck&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton&mode=preview" target="_blank">Advertisement Template</a></li>
                                    <li><a href="https://www.canva.com/design/DAE0xOfr6RM/yKfTWKTdMz4Gv12oRWqtLg/view?utm_content=DAE0xOfr6RM&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton&mode=preview" target="_blank">Letterhead Template</a></li>
                                    <li><a href="https://www.canva.com/design/DAEx4EXYqYA/im0o_qLQi9-bMduGRsU24w/view?utm_content=DAEx4EXYqYA&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" target="_blank">B-INCLUDED Flyer Template</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="thingsToKnow" className="resources knows">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="six columns">
                            <div className="knowImage">
                                <img src="images/callfamily.png" alt="" />
                            </div>
                        </div>
                        <div className="four columns">
                            <div className="know">
                                <h3>Things To Know</h3>
                                <h1>Background</h1>
                                <p>Jefferson County's population is 43.3% African-American and in 2019 they made up more than 65% of the county's residents living in poverty. Prosper has researched this issue and identified a strong correlation to the health of Jefferson County residents, especially African-American individuals, and their financial stability.</p>

                                <p>In addition to economic distress, there is a lack of healthcare professionals within Jefferson County - a patient-to-physician ratio of 920 to 1. Combined with poor health education, black and brown individuals face lower employment rates, preventing them from accessing healthcare options. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ourMission" style={{ marginBottom: '100px' }}>
                <div className="container">
                    <div className="row whyNow">
                        <div className="eight columns offset-by-one">
                            <div className="container">
                                <div className="ten columns">
                                    <div className="whyTextWide">
                                        <h3>Our Mission</h3>
                                        <h1>Stand Up For Your Health</h1>
                                        <p>B-INCLUDED is a digital health platform personalized for the Black community of Jefferson County. Its goal is to empower the county's Black residents and low-income individuals to make informed decisions about their health to improve their financial positions. </p>
                                        <a className="button learnmore" href="https://nowincluded.mn.co/groups/6170862?utm_source=manual">Join The Community</a>
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

            <section id="becomeApartner">
                <div className="container partnerUp">
                    <div className="ten columns">
                        <div className="content">
                            <div className="container">
                                <div className="eight columns offset-by-one">
                                    <div className="seven columns">
                                        <p>We want you to be a part of the health conversation.</p>
                                    </div>
                                    <div className="three columns">
                                        <a href="https://jdsb9zx9r21.typeform.com/B-INCLUDED">Partner With Us</a>
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

export default Resources;