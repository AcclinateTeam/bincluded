import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ResPartner from '../ResPartner';

const AllAdult = () =>
{
    return (
        <>
            <ResPartner title="Cooper Green Mercy Hospital" image="cooper.png" description="Full-service ambulatory care facility that includes both primary and specialty care, urgent care, physical, occupational, and speech therapy, laboratory services, radiology and a pharmacy, regardless of ability to pay." benefit="Individuals with or without health care seeking any type of medical care including a primary physician, specialist, or pharmacy." url="https://coopergreen.org/"/>

            <ResPartner title="Live Health Smart Alabama" image="uablive.png" description="Live HealthSmart Alabama (LHSA) is a transformational movement to make good health simple for all Alabamians. Fueled by a network of more than 100 trusted community relationships and partners LHSA strives to decrease the incidence of chronic disease and provide greater health equity across the state." benefit="Residents of the Bush Hills, East Lake, Kingston, or Titusville communities. Anyone interested in learning how to lead a healthy lifestyle, seeking access to healthy food options, or access to health screenings." url="https://www.uab.edu/livehealthsmartal/"/>

            <ResPartner title="Viva Health" image="viva.png" description="Viva Health, Inc. is a health maintenance organization providing quality, accessible health care. With backing from the UAB Health System, a world leader in quaternary and tertiary health care services Viva Health simplifies and improves health care through a network that includes many of the most respected physicians and hospital providers in the market." benefit="Viva Health offers a continuum of care that covers everything from routine office visits, emergencies, and major and minor care to adult, obstetrical, and pediatric care." url="https://www.vivahealth.com"/>

            <ResPartner title="The United Way" image="uway.jpg" description="United Way of Central Alabama builds a great community and advances the common good by bringing people together to help others. By pooling our resources and working together, we pave the way for real, tangible change in health, education and financial stability." benefit="Individuals looking for hunger assistance, financial and housing education, health care or information, Veteran services, and/or senior & disability care." url="https://www.uwca.org/"/>
            
            <ResPartner title="Impact Family Counseling" image="impact.jpg" description="The agency provides outpatient counseling and a variety of other services such as mentoring, relationship education, family strengthening and anger management to all people, regardless of religion, sex, race, ethnicity, age, or disability." benefit="Anyone seeking mentorship, relationship education, family strengthening and/or anger management." url="http://impactal.org/index.html"/>

            {/* NEW ROW */}
            <div className="third columns">
                <a href="http://joinoben.com">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/obenhealth.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Oben Health</h2>
                            <p>Oben (formerly Lapis) is a culturally competent digital health treatment that safely and sustainably reverses heart disease without medication or surgery. Starting off with hypertension, the treatment is based on the clinical work of Lapis's Chief Medical Officer (Michelle Routhenstien)  -  where she's been able to help 90% of her patients lower/normalize their blood pressure and 70% achieve medication reductions in 3 months.</p>
                            <a href="http://joinoben.com">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></a>
                        </div>
                    </div>
                </a>
            </div>

            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://healthopx.com">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/healthopx.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>HealthOpx</h2>
                            <p>HealthOpX is a software platform that partners community-based organizations and home care
                                agencies with health insurers, providers, and government to engage and improve the health of
                                at-risk patients.</p>
                            <a href="https://healthopx.com">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></a>
                        </div>
                    </div>
                </a>
            </div>
            
            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://christhealthcenter.org/new-patients/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/christ-health.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Christ Health Center</h2>
                            <p>Providing affordable, compassionate care to improve the physical, mental and spiritual wellbeing of children, women and families.</p>
                            <h2>Who Will Benefit</h2>
                            <p>Individuals with or without insurance seeking primary care, dental services, and professional counseling, as well as medication therapy</p>
                            <a href="https://christhealthcenter.org/new-patients/">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></a>
                        </div>
                    </div>
                </a>
            </div>

            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://www.cahabamedicalcare.com/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/cahaba.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Cahaba Medical Care</h2>
                            <p>A local community-based health organization that aims to be an incarnation of love, peace and justice by guiding our patients through their journey toward physical, mental and social well-being, and to be a center for transformational medical education and primary care training in a rural and international context.</p>
                            <h2>Who Will Benefit</h2>
                            <p>Anyone seeking medical education and primary care training. Individuals who need a more hands and personalized care experience. </p>
                            <a href="https://www.cahabamedicalcare.com/">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></a>
                        </div>
                    </div>
                </a>
            </div>

            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://www.mpowerministries.org/health-center/#.YVcS1FrMLC8">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/mpower.jpg")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>M-Power Ministries</h2>
                            <p>The M-POWER Ministries Health Center provides FREE primary care services to adult patients without access to health insurance, helping to alleviate chronic illnesses. By receiving treatment to combat chronic diseases, people are better able to fight off illness and ensure their ability to be at work every day.</p>
                            <h2>Who Will Benefit</h2>
                            <p>Uninsured or underinsured individuals with chromic illness</p>
                            <a href="https://www.mpowerministries.org/health-center/#.YVcS1FrMLC8">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></a>
                        </div>
                    </div>
                </a>
            </div>

            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://www.feedingal.org/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/commfood.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Community Food Bank of Central Alabama</h2>
                            <p>Our mission is to feed people in need today and foster collaborative solutions to end hunger tomorrow.</p>
                            <h2>Who Will Benefit</h2>
                            <p>Anyone seeking food assistance or that wants to take part in ensuring no one goes hungry.</p>
                            <a href="https://www.feedingal.org/">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></a>
                        </div>
                    </div>
                </a>
            </div>

            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://www.birminghamal.gov/community-development/community-resource-services-division/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/cofbham.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>City of Birmingham Community Resources</h2>
                            <p>Our team of Community Resource Representatives (CRRs) work with Neighborhood Associations to develop community ideas, and provide assistance with utilizing neighborhood funding to process projects for the benefit of the community.</p>
                            <h2>Who Will Benefit</h2>
                            <p>Jefferson County neighborhood residents that want to get more involved in there communities or have ideas for projects to benifit the neighborhood.</p>
                            <a href="https://www.birminghamal.gov/community-development/community-resource-services-division/">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></a>
                        </div>
                    </div>
                </a>
            </div>

            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://www.uwaaa.org/greatdiet/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/uwaaa.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>United Way Area Agency on Aging</h2>
                            <p>The program aims to help seniors set and achieve personal health and nutrition goals.</p>
                            <h2>Who Will Benefit</h2>
                            <p>Senior citizens looking for help setting personal health or nutrition goals and accomplishing them.</p>
                            <a href="https://www.uwaaa.org/greatdiet/">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></a>
                        </div>
                    </div>
                </a>
            </div>

            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://www.crisiscenterbham.org/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/crisis.webp")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Crisis Center</h2>
                            <p>Our mission is to serve the unmet needs of people experiencing personal crisis or mental health issues and respond with services that promote coping, emotional health and well-being.</p>
                            <h2>Who Will Benefit</h2>
                            <p>Anyone needeing help coping with personal crisis or are in need of mental health services</p>
                            <a href="https://www.crisiscenterbham.org/">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></a>
                        </div>
                    </div>
                </a>
            </div>

            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://gracekleincommunity.com/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/gklein.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Grace Klein Community</h2>
                            <p>Grace Klein Community seeks to create authentic community (Koinonia) by uniting diverse individuals, businesses, ministries, and churches to work together by sharing what they have in order to meet physical and spiritual needs both locally and globally.</p>
                            <h2>Who Will Benefit</h2>
                            <p>Anyone needing food assistance or that wants to help ensure no one goes hungry.</p>
                            <a href="https://gracekleincommunity.com/">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></a>
                        </div>
                    </div>
                </a>
            </div>

            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://mowjeffco.org/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/meals.svg")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>Meals on Wheels</h2>
                            <p>We’re dedicated to improving the lives of homebound seniors and disabled individuals throughout Jefferson County by delivering meals and hope to those who are unable to fulfill their own nutritional needs.</p>
                            <h2>Who Will Benefit</h2>
                            <p>Homebound senior citizens and disabled individuals in need of food assistance.</p>
                            <a href="https://mowjeffco.org/">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></a>
                        </div>
                    </div>
                </a>
            </div>

            {/* NEW ROW */}
            <div className="third columns">
                <a href="https://m4a.org/">
                    <div className="panes">
                        <div className="image" style={{ backgroundImage: `url("/images/partners/m4a.png")`, backgroundColor: '#ffffff' }}></div>
                        <div className="pane">
                            <h2>M4A</h2>
                            <p>Help all individuals access information, assistance, and resources that will empower them to self-advocate, live independently, and enjoy the highest quality of life. M4A specializes in serving older adults and individuals with disabilities.</p>
                            <h2>Who Will Benefit</h2>
                            <p>Individuals looking to become an advocate of their health and wellbeing or working to build the highest quality of life possible.</p>
                            <a href="https://mowjeffco.org/">Read More <FontAwesomeIcon className="readmo" icon="arrow-right" /></a>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );


}

export default AllAdult;