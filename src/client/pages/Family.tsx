import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import SubHeader from '../components/SubHeader';

const Family = () =>
{

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <SubHeader />
            {/* CALL CONTENT SECTION */}
            <section className="call">
                <div className="callbg" style={{ backgroundImage: `url("/images/healthbg.png")` }}></div>
                {/* CALLOUT CONTENT START */}
                <div className="container">
                    <div className="ten columns">
                        <div className="callContent">
                            <div className="five columns offset-by-one">
                                <div className="text">
                                    <h1>Family Resources</h1>
                                    <p>#B-Included provides easy access to resources that are beneficial in reaching one’s goals in maintaining a healthy lifestyle.</p>
                                </div>
                                <div className="callbutton">
                                    <Link className="button signup" to="/">Join The Community</Link>
                                    <Link className="button learnmore" to="/">View Resources</Link>
                                </div>
                            </div>
                            <div className="four columns">
                                <div className="image">
                                    <img className="card-img" src="/images/healthcall.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT HEADER SECTION */}
            <section className="health content">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="header">
                            <h2>Helping Jefferson County's Community and More</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featStory">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="container story">
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

            <section className="addRes">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="header">
                            <h1>Additional<br /> Family Resources</h1>
                        </div>
                        <ul className="terminal">
                            <a href="#"><li className="active">Personal</li></a>
                            <a href="#"><li>Mental</li></a>
                            <a href="#"><li>Physical</li></a>
                            <a href="#"><li>TeleHealth</li></a>
                        </ul>
                        <div className="panel">
                            <div className="container">
                                <div className="third columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="image">
                                                <img src="/images/christhealth.png" alt="" />
                                            </div>
                                            <h2>Christ Health</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="image">
                                                <img src="/images/cahaba.png" alt="" />
                                            </div>
                                            <h2>Cahaba Medical Care</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="panes">
                                        <div className="pane">
                                            <div className="image">
                                                <img src="/images/mpower.png" alt="" />
                                            </div>
                                            <h2>M-POWER Ministries</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                            {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttonwrap">
                            <Link className="button" to="/">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimony">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="header">
                            <h1>Reviews By Our<br /> Community Members</h1>
                        </div>
                        <div className="slider">
                            <div className="slides">
                                <div className="slide">
                                    <div className="image">
                                        <img src="/images/torry.png" alt="" />
                                    </div>
                                    <h2>Torry Butler</h2>
                                    <h4>Birmingham, Alabama</h4>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut lacus vitae massa placerat convallis. Nunc posuere, turpis ut ultrices dignissim, mi mauris bibendum nisi, rutrum ullamcorper magna sapien nec libero.”</p>
                                    <div className="rating">
                                        <FontAwesomeIcon icon={['fas', 'star']} />
                                        <FontAwesomeIcon icon={['fas', 'star']} />
                                        <FontAwesomeIcon icon={['fas', 'star']} />
                                        <FontAwesomeIcon icon={['fas', 'star']} />
                                        <FontAwesomeIcon icon={['far', 'star']} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="related">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h1>Related Articles</h1>
                        </div>
                        <div className="panel">
                            <div className="container">
                                <div className="third columns">
                                    <div className="articles">
                                        <div className="article">
                                            <div className="image" style={{ backgroundImage: `url(/images/healthy.jpg)` }}></div>
                                            <div className="text">
                                                <h2>Eating Healthy in 2021</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                                <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="articles">
                                        <div className="article">
                                            <div className="image" style={{ backgroundImage: `url(/images/yoga.jpg)` }}></div>
                                            <div className="text">
                                                <h2>3 Yoga Tips For You</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                                <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="third columns">
                                    <div className="articles">
                                        <div className="article">
                                            <div className="image" style={{ backgroundImage: `url(/images/yellow.jpg)` }}></div>
                                            <div className="text">
                                                <h2>Staying Fit on a Budget</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                                <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttonwrap">
                                    <Link className="content button" to="/recipes">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
    // return (
    //     <>
    //         {/* SUB-HEADER COMPONENT IMPORT */}
    //         <SubHeader />
    //         {/* CALL CONTENT SECTION */}
    //         <section className="call">
    //             <div className="callbg" style={{ backgroundImage: `url("/images/health.jpg")` }}></div>
    //             {/* CALLOUT CONTENT START */}
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="eight columns offset-by-one">
    //                         <div className="text">
    //                             <h1>Family</h1>
    //                             <p>B-Included provides easy access to resources that are helpful in building and maintaining strong family units in Birmingham.</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>

    //         {/* MAIN CONTENT SECTION */}
    //         <section className="health content">
    //             <div className="container">
    //                 <div className="row">
    //                     {/* CONTENT START */}
    //                     <div className="eight columns offset-by-one">
    //                         <h1>Family Resources</h1>

    //                         <div className="cardpanel">
    //                             <div className="third columns">
    //                                 <div className="cardwrap">
    //                                     <div className="card">
    //                                         <img src="/images/bhampromise.png" alt="" />
    //                                         <h2>Birmingham Promise</h2>
    //                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                         <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="third columns">
    //                                 <div className="cardwrap">
    //                                     <div className="card">
    //                                         <img src="/images/bhampromise.png" alt="" />
    //                                         <h2>Birmingham Promise</h2>
    //                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                         <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="third columns">
    //                                 <div className="cardwrap">
    //                                     <div className="card">
    //                                         <img src="/images/bhampromise.png" alt="" />
    //                                         <h2>Birmingham Promise</h2>
    //                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                         <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                     </div>
    //                                 </div>
    //                             </div>

    //                             <div className="third columns">
    //                                 <div className="cardwrap">
    //                                     <div className="card">
    //                                         <img src="/images/bhampromise.png" alt="" />
    //                                         <h2>Birmingham Promise</h2>
    //                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                         <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="third columns">
    //                                 <div className="cardwrap">
    //                                     <div className="card">
    //                                         <img src="/images/bhampromise.png" alt="" />
    //                                         <h2>Birmingham Promise</h2>
    //                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                         <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="third columns">
    //                                 <div className="cardwrap">
    //                                     <div className="card">
    //                                         <img src="/images/bhampromise.png" alt="" />
    //                                         <h2>Birmingham Promise</h2>
    //                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                         <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                     </div>
    //                                 </div>
    //                             </div>

    //                             <div className="third columns">
    //                                 <div className="cardwrap">
    //                                     <div className="card">
    //                                         <img src="/images/bhampromise.png" alt="" />
    //                                         <h2>Birmingham Promise</h2>
    //                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                         <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="third columns">
    //                                 <div className="cardwrap">
    //                                     <div className="card">
    //                                         <img src="/images/bhampromise.png" alt="" />
    //                                         <h2>Birmingham Promise</h2>
    //                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                         <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="third columns">
    //                                 <div className="cardwrap">
    //                                     <div className="card">
    //                                         <img src="/images/bhampromise.png" alt="" />
    //                                         <h2>Birmingham Promise</h2>
    //                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                         <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>

    //         <section className="related">
    //             <div className="container">
    //                 <div className="eight columns offset-by-one">
    //                     <h1>Related Articles</h1>
    //                     <div className="panel">
    //                         <div className="container">
    //                             <div className="third columns">
    //                                 <div className="relwrap">
    //                                     <div className="article">
    //                                         <div className="image" style={{ backgroundImage: `url(/images/article1.jpg)` }}></div>
    //                                         <div className="text">
    //                                             <h2>Article #1</h2>
    //                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                             <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="third columns">
    //                                 <div className="relwrap">
    //                                     <div className="article">
    //                                         <div className="image" style={{ backgroundImage: `url(/images/article2.jpg)` }}></div>
    //                                         <div className="text">
    //                                             <h2>Article #2</h2>
    //                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                             <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="third columns">
    //                                 <div className="relwrap">
    //                                     <div className="article">
    //                                         <div className="image" style={{ backgroundImage: `url(/images/article3.jpg)` }}></div>
    //                                         <div className="text">
    //                                             <h2>Article #3</h2>
    //                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                             <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="buttonwrap">
    //                                 <Link className="content button" to="/recipes">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>

    //         {/* <section className="recipes">
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="eight columns offset-by-one">
    //                         <h1>Recipes</h1>
    //                         <div className="recpanel">

    //                             <div className="third columns">
    //                                 <div className="recipe">
    //                                     <div className="image">
    //                                         <img src="/images/food2.jpg" alt="" />
    //                                     </div>
    //                                     <h2>Birmingham Promise</h2>
    //                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                     <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                 </div>
    //                             </div>
    //                             <div className="third columns">
    //                                 <div className="recipe">
    //                                     <div className="image">
    //                                         <img src="/images/food1.jpg" alt="" />
    //                                     </div>
    //                                     <h2>Birmingham Promise</h2>
    //                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                     <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                 </div>
    //                             </div>
    //                             <div className="third columns">
    //                                 <div className="recipe">
    //                                     <div className="image">
    //                                         <img src="/images/food3.jpg" alt="" />
    //                                     </div>
    //                                     <h2>Birmingham Promise</h2>
    //                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
    //                                     <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section> */}


    //     </>
    // );
}

export default Family;