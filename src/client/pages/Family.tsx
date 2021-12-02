import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../components/Header';
import Terminal from '../components/Terminal';

const Family = () =>
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
                                    <Link to="/Health">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Terminal />

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
                                    <p>"The health of a community is defined by the physical and mental health, education, employment, and finances of its members. "Where You Work, Live and Play Determines Your Health".</p>
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
                                                <h2>Eating Healthy in 2022</h2>
                                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                                <p>With more time spent at home in 2020 and 2021, there’s been a rise in baking, cooking (and eating) across the country. As a new year begins, it’s time to...</p>
                                                <a href="https://www.gohealthuc.com/library/tips-eating-healthier-2022" target="_blank">More Details <FontAwesomeIcon icon="arrow-right" /></a>

                                                {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
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
                                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                                <p>Yoga is a practice that can include everyone, with modifications available for most poses. It also can help you to notice what your mind and body are telling...</p>
                                                <a href="https://health.clevelandclinic.org/considering-yoga-3-tips-for-finding-the-right-class-for-you/" target="_blank">More Details <FontAwesomeIcon icon="arrow-right" /></a>

                                                {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
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
                                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                                <p>Want to get in shape? Don't worry—it doesn't have to cost you half your paycheck. Whether you’re trying to get bigger biceps or you just want to be able to...</p>
                                                <a href="https://www.discover.com/online-banking/banking-topics/tips-for-getting-fit-on-a-budget/" target="_blank">More Details <FontAwesomeIcon icon="arrow-right" /></a>

                                                {/* <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link> */}
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