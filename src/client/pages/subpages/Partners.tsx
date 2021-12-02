import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../components/Header';


const Partners = () =>
{
    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />
            {/* CALL CONTENT SECTION */}
            <section className="call">
                <div className="callbg" style={{ backgroundImage: `url("/images/healthbg.png")` }}></div>
                {/* CALLOUT CONTENT START */}
                <div className="container">
                    <div className="ten columns">
                        <div className="callContent">
                            <div className="five columns offset-by-one">
                                <div className="text">
                                    <h1>Partners</h1>
                                    <p>We partner with brands that are passionate about our mission and our community..</p>
                                </div>
                                <div className="callbutton">
                                    <Link className="button signup" to="https://nowincluded.com/explore/">Become A Partner</Link>
                                    <Link className="button learnmore" to="https://nowincluded.com/explore/">View Partners</Link>
                                </div>
                            </div>
                            <div className="four columns">
                                <div className="image">
                                    <img className="card-img" src="/images/covidcall.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container covid19">
                    <div className="eight columns offset-by-one">
                        <div className="phrase">
                            <div className="face" style={{ backgroundImage: `url("/images/article1.jpg")` }}>
                                <div className="overlay">
                                    <h1>Partner<br /> Promise</h1>
                                </div>
                            </div>
                            <div className="back">
                                <h1>COVID-19</h1>
                                <p>Sign up for updates and resources.</p>
                                <a href="https://nowincluded.com/explore/">Read More</a>
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

                                {/* TEXT-LEFT */}
                                <div className="ten columns">
                                    <a href="http://christhealthcenter.org/">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="six columns texts">
                                                        <div className="tag">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text">
                                                            <h1>Christ Health Center</h1>
                                                            <p>Providing affordable, compassionate care to improve the physical, mental and spiritual wellbeing of children, women and families.</p>
                                                        </div>
                                                    </div>
                                                    <div className="four columns video">
                                                        <div className="partnerImg">
                                                            <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/christ-health.png")`, backgroundColor: '#ffffff' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* TEXT-RIGHT */}
                                <div className="ten columns">
                                    <a href="https://www.cahabamedicalcare.com/">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="four columns video">
                                                        <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/cahaba.png")`, backgroundColor: '#ffffff' }}></div>
                                                    </div>
                                                    <div className="six columns texts">
                                                        <div className="tag right">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text right">
                                                            <h1>Cahaba Medical Center</h1>
                                                            <p>A local community-based health organization that aims to be an incarnation of love, peace and justice by guiding our patients through their journey toward physical, mental and social well-being, and to be a center for transformational medical education and primary care training in a rural and international context, modeling and exhorting the next generation of medical professionals in a career of excellence, conscientiousness and compassion.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* TEXT-LEFT */}
                                <div className="ten columns">
                                    <a href="https://www.mpowerministries.org/health-center/#.YVcS1FrMLC8">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="six columns texts">
                                                        <div className="tag">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text">
                                                            <h1>M-Power Ministries</h1>
                                                            <p>The M-POWER Ministries Health Center provides FREE primary care services to adult patients without access to health insurance, helping to alleviate chronic illnesses. By receiving treatment to combat chronic diseases, people are better able to fight off illness and ensure their ability to be at work every day.</p>
                                                        </div>
                                                    </div>
                                                    <div className="four columns video">
                                                        <div className="partnerImg">
                                                            <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/mpower.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>


                                {/* TEXT-RIGHT */}
                                <div className="ten columns">
                                    <a href="https://www.feedingal.org/">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="four columns video">
                                                        <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/commfood.png")`, backgroundColor: '#ffffff' }}></div>
                                                    </div>
                                                    <div className="six columns texts">
                                                        <div className="tag right">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text right">
                                                            <h1>Community Food Bank of Central Alabama</h1>
                                                            <p>Our mission is to feed people in need today  and foster collaborative solutions to end hunger tomorrow.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* TEXT-LEFT */}
                                <div className="ten columns">
                                    <a href="https://www.birminghamal.gov/community-development/community-resource-services-division/">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="six columns texts">
                                                        <div className="tag">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text">
                                                            <h1>City of Birmingham Community Resources</h1>
                                                            <p>The City’s Community Resource Services Division, through the Mayor’s Office, provides staff to act as liaisons between the Neighborhood Associations and Residents, the Mayor’s office, Birmingham City Council, and  other  City Departments and Divisions.  Our team of Community Resource Representatives (CRRs) work with Neighborhood Associations to develop community ideas, and provide assistance with utilizing neighborhood funding to process projects for the benefit of the community.</p>
                                                        </div>
                                                    </div>
                                                    <div className="four columns video">
                                                        <div className="partnerImg">
                                                            <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/cofbham.png")`, backgroundColor: '#ffffff' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* TEXT-RIGHT */}
                                <div className="ten columns">
                                    <a href="https://railroadpark.org/">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="four columns video">
                                                        <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/rrpark.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                    </div>
                                                    <div className="six columns texts">
                                                        <div className="tag right">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text right">
                                                            <h1>Railroad Park</h1>
                                                            <p>Railroad Park is a 19 acre green space in downtown Birmingham that celebrates the industrial and artistic heritage of our great city. Situated along 1st Avenue South, between 14th and 18th Streets, the park is a joint effort between the City of Birmingham and the Railroad Park Foundation. Hailed as "Birmingham's Living Room," Railroad Park provides a historically rich venue for local recreation, family activities, concerts, and cultural events, while connecting Birmingham's downtown area with Southside and UAB's campus.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* TEXT-LEFT */}
                                <div className="ten columns">
                                    <a href="https://www.uwaaa.org/greatdiet/">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="six columns texts">
                                                        <div className="tag">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text">
                                                            <h1>United Way Area Agency on Aging Nutrition Counseling</h1>
                                                            <p>This program aims to help seniors set and achieve personal health and nutrition goals.</p>
                                                        </div>
                                                    </div>
                                                    <div className="four columns video">
                                                        <div className="partnerImg">
                                                            <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/uway.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* TEXT-RIGHT */}
                                <div className="ten columns">
                                    <a href="http://impactal.org/index.html">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="four columns video">
                                                        <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/impact.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                    </div>
                                                    <div className="six columns texts">
                                                        <div className="tag right">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text right">
                                                            <h1>Impact Family Counseling</h1>
                                                            <p>IMPACT Family Counseling is a 501 (c)(3) Christian-affiliated, United Way agency located in Birmingham, AL.  Founded in 1991, we continue to make an impact in the lives of others.  The agency provides outpatient counseling and a variety of other services such as mentoring, relationship education, family strengthening and anger management to all people, regardless of religion, sex, race, ethnicity, age, or disability.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* TEXT-LEFT */}
                                <div className="ten columns">
                                    <a href="https://www.crisiscenterbham.org/">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="six columns texts">
                                                        <div className="tag">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text">
                                                            <h1>Crisis Center</h1>
                                                            <p>Our mission is to serve the unmet needs of people experiencing personal crisis or mental health issues and respond with services that promote coping, emotional health and well-being.</p>
                                                        </div>
                                                    </div>
                                                    <div className="four columns video">
                                                        <div className="partnerImg">
                                                            <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/crisis.webp")`, backgroundColor: '#ffffff' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* TEXT-RIGHT */}
                                <div className="ten columns">
                                    <a href="https://gracekleincommunity.com/">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="four columns video">
                                                        <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/gklein.png")`, backgroundColor: '#ffffff' }}></div>
                                                    </div>
                                                    <div className="six columns texts">
                                                        <div className="tag right">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text right">
                                                            <h1>Grace Klein Community</h1>
                                                            <p>Grace Klein Community seeks to create authentic community (Koinonia) by uniting diverse individuals, businesses, ministries, and churches to work together by sharing what they have in order to meet physical and spiritual needs both locally and globally.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* TEXT-LEFT */}
                                <div className="ten columns">
                                    <a href="https://mowjeffco.org">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="six columns texts">
                                                        <div className="tag">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text">
                                                            <h1>Meals On Wheel For Seniors</h1>
                                                            <p>We’re dedicated to improving the lives of homebound seniors and disabled individuals throughout Jefferson County by delivering meals and hope to those who are unable to fulfill their own  nutritional needs. </p>
                                                        </div>
                                                    </div>
                                                    <div className="four columns video">
                                                        <div className="partnerImg">
                                                            <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/meals.svg")`, backgroundColor: '#ffffff' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* TEXT-RIGHT */}
                                <div className="ten columns">
                                    <a href="https://www.uwaaa.org/services/preventivehealth/">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="four columns video">
                                                        <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/uway.jpg")`, backgroundColor: '#ffffff' }}></div>
                                                    </div>
                                                    <div className="six columns texts">
                                                        <div className="tag right">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text right">
                                                            <h1>United Way Senior Citizen Preventive Health</h1>
                                                            <p>The Older Americans Act provides for programs that support healthy lifestyles, promote healthy behaviors and help keep people well through proactive, preventive measures.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* TEXT-LEFT */}
                                <div className="ten columns">
                                    <a href="https://m4a.org/">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="six columns texts">
                                                        <div className="tag">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text">
                                                            <h1>M4A Senior Citizen and Caregiver Support</h1>
                                                            <p>Help all individuals access information, assistance, and resources that will empower them to self-advocate, live independently, and enjoy the highest quality of life. M4A specializes in serving older adults and individuals with disabilities.</p>
                                                        </div>
                                                    </div>
                                                    <div className="four columns video">
                                                        <div className="partnerImg">
                                                            <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/m4a.png")`, backgroundColor: '#ffffff' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* TEXT-RIGHT */}
                                <div className="ten columns">
                                    <a href="https://www.medicaid.gov/">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="four columns video">
                                                        <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/medicaid.png")`, backgroundColor: '#ffffff' }}></div>
                                                    </div>
                                                    <div className="six columns texts">
                                                        <div className="tag right">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text right">
                                                            <h1>Medicaid</h1>
                                                            <p>Provides health coverage to low-income people and is one of the largest payers for health care in the United States.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* TEXT-LEFT */}
                                <div className="ten columns">
                                    <a href="https://www.medicare.gov/">
                                        <div className="panes">
                                            <div className="pane">
                                                <div className="container">
                                                    <div className="six columns texts">
                                                        <div className="tag">
                                                            <h6>Featured Partner</h6>
                                                        </div>
                                                        <div className="text">
                                                            <h1>Medicare</h1>
                                                            <p>Medicare is health insurance for people 65 or older. </p>
                                                        </div>
                                                    </div>
                                                    <div className="four columns video">
                                                        <div className="partnerImg">
                                                            <div className="partnerImg" style={{ backgroundImage: `url("/images/partners/medicare.svg")`, backgroundColor: '#ffffff' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                https://www.medicaid.gov/

                                {/* <div className="ten columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="container">
                                                <div className="six columns texts">
                                                    <div className="tag">
                                                        <h6>Featured Partner</h6>
                                                    </div>
                                                    <div className="text">
                                                        <h1>Alabama United</h1>
                                                        <p>Birmingham partners are working together to support underserved and vulnerable populations with COVID-19 tests. Led by Michael Mugavero, MD, UAB Professor of Medicine, Division of Infectious Diseases continue to position Birmingham as a leader in serving underserved populations. Community-engaged RADx-UP projects, like Alabama United, help the NIH understand and alleviate the barriers to COVID-19 testing across the nation.</p>
                                                    </div>
                                                </div>
                                                <div className="four columns video">
                                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yIxZsG8Cew4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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
                                        <a href="https://nowincluded.com/explore/">Partner With Us</a>
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


export default Partners;