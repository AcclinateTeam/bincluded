import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import SubHeader from '../../components/SubHeader';
import Terminal from '../../components/Terminal';

const Blog = () =>
{

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <SubHeader />

            <div className="blogHeader">
                <svg viewBox="0 0 1430 672" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_275_879" maskUnits="userSpaceOnUse" x="-10" y="-1" width="1440" height="3300">
                        <rect x="-10" y="-1" width="1440" height="3300" fill="white" />
                    </mask>
                    <g mask="url(#mask0_275_879)">
                        <rect y="-152" width="1440" height="3407" fill="white" />
                        <path d="M309.901 -1652.36L1511.57 -45.3275L382.535 549.563L-1028 -651.932L309.901 -1652.36Z" fill="#287FDD" />
                        <path d="M309.901 -1652.36L1404.41 -190.423L382.535 549.562L-756.293 -855.103L309.901 -1652.36Z" fill="#CA1D48" />
                        <path d="M309.901 -1652.36L1333.47 -283.501L382.535 549.562L-877.529 -764.448L309.901 -1652.36Z" fill="#050236" />
                        <path d="M1072.66 614.584L1222.3 573.912L1217.87 618.718L1068.98 657.474L1072.66 614.584Z" fill="#EEC31A" />
                        <path d="M1225.98 531.022L1375.62 490.35L1371.19 535.156L1222.3 573.912L1225.98 531.022Z" fill="#287FDD" />
                        <path d="M1217.87 618.717L1368.02 578.11L1363.59 622.917L1214.7 661.672L1217.87 618.717Z" fill="#ECECEC" />
                    </g>
                </svg>
            </div>

            <section className="blogContent">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h1>News You Can Use</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featStory" style={{ marginTop: '50px', marginBottom: '100px' }}>
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="container story" style={{ backgroundColor: "white" }}>
                            <div className="four columns bg2">
                                <div className="image" style={{ backgroundImage: `url("/images/featstory.jpg")` }}></div>
                            </div>
                            <div className="six columns">
                                <div className="text">
                                    <h5>October 6, 2021 | St. Louis, Missouri</h5>
                                    <ul className="featTags">
                                        <li>Chronic Illness</li>
                                        <li>Mental Health</li>
                                    </ul>
                                    <h1>Be the Advocate for Your Health</h1>
                                    <p>Before Donna got her diagnosis, she thought of herself as a musician, a busy professional, a volunteer, a mother, a grandmother. After Donna got her diagnosis – Parkinson’s disease, she thought of herself as a patient. </p>
                                    <Link to="/">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blogContent">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="container panel">
                            <div className="third columns">
                                <div className="panes">
                                    <div className="pane">
                                        <div className="image" style={{ backgroundImage: `url(/images/angry.jpg)` }}></div>
                                        <div className="text">
                                            <h2>Feeling COVID rage?...</h2>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                            <p> When COVID-19 vaccines rolled out to the general United States population in spring 2021, cases hit an all-time low in June, and a collective sigh of relief was breathed.</p>

                                            <Link to="/blog/single">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="third columns">
                                <div className="panes">
                                    <div className="pane">
                                        <div className="image" style={{ backgroundImage: `url(/images/blog4.jpg)` }}></div>
                                        <div className="text">
                                            <h2>Three tips for maintaining skin health</h2>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                            <p>Skin health is important because it performs many essential tasks for overall health. As the largest organ of the body, skin is a protectant from viruses... </p>

                                            <Link to="https://www.gohealthuc.com/library/tips-eating-healthier-2022">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                            <div className="third columns">
                                <div className="panes">
                                    <div className="pane">
                                        <div className="image" style={{ backgroundImage: `url(/images/blog5.jpg)` }}></div>
                                        <div className="text">
                                            <h2>Holiday Soul with Eric Essix</h2>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                            <p>Eric Essix and Atlanta super group Five Men will return to the Alys Stephens Performing Arts Center stage by popular demand for an encore Holiday Soul...</p>

                                            <Link to="https://www.gohealthuc.com/library/tips-eating-healthier-2022">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="third columns">
                                <div className="panes">
                                    <div className="pane">
                                        <div className="image" style={{ backgroundImage: `url(/images/healthy.jpg)` }}></div>
                                        <div className="text">
                                            <h2>Eating Healthy in 2022</h2>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                            <p>With more time spent at home in 2020 and 2021, there’s been a rise in baking, cooking (and eating) across the country. As a new year begins, it’s time to...</p>

                                            <Link to="https://www.gohealthuc.com/library/tips-eating-healthier-2022">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="third columns">
                                <div className="panes">
                                    <div className="pane">
                                        <div className="image" style={{ backgroundImage: `url(/images/yellow.jpg)` }}></div>
                                        <div className="text">
                                            <h2>Staying Fit on a Budget</h2>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                            <p>Want to get in shape? Don't worry—it doesn't have to cost you half your paycheck. Whether you’re trying to get bigger biceps or you just want to be able to...</p>
                                            <Link to="https://www.discover.com/online-banking/banking-topics/tips-for-getting-fit-on-a-budget/">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="third columns">
                                <div className="panes">
                                    <div className="pane">
                                        <div className="image" style={{ backgroundImage: `url(/images/yoga.jpg)` }}></div>
                                        <div className="text">
                                            <h2>3 Yoga Tips For You</h2>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                            <p>Yoga is a practice that can include everyone, with modifications available for most poses. It also can help you to notice what your mind and body are telling...</p>


                                            <Link to="https://health.clevelandclinic.org/considering-yoga-3-tips-for-finding-the-right-class-for-you/">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;