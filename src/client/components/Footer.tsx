import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () =>
{
    return (
        <footer>
            {/* PRE-FOOTER (PARTNERS) HORIZONTAL DIVIDER */}
            <svg viewBox="0 0 1440 84" fill="none" style={{ zIndex: 99 }} xmlns="http://www.w3.org/2000/svg">
                <rect y="-386" width="1442" height="464" fill="white" />
                <g clipPath="url(#clip0_179_768)">
                    <rect width="1440" height="966" fill="white" />
                    <path d="M0 34L1440 74L1442 591L0 564V34Z" fill="#EEC31A" />
                    <path d="M278 24L293 62L-1.66103e-06 62L0 24L278 24Z" fill="#EEC31A" />
                    <path d="M250.962 -3.51333e-07L259 32L102 32L90 -6.8627e-06L250.962 -3.51333e-07Z" fill="#04278E" />
                </g>
                <defs>
                    <clipPath id="clip0_179_768">
                        <rect width="1440" height="966" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            {/* PRE-FOOTER (PARTNERS) COMPONENT */}
            <section>
                <div className="container">
                    <div className="row foot">
                        <div className="ten columns">
                            <div className="sponsors">
                                <h1>Brought to you by</h1>
                                <div className="images">
                                    <img className="prosper" src="/images/prosper2.png" alt="" />
                                    <img className="uab" src="/images/uab2.png" alt="" />
                                </div>
                                <div className="buttonwrap">
                                    <Link className="content button solid" to="/recipes">View Partners</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER HORIZONTAL DIVIDER */}
            <svg viewBox="0 0 1440 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_179_768)">
                    <rect width="1440" height="966" transform="translate(0 -538)" fill="white" />
                    <rect y="17.7087" width="1440" height="410.291" fill="#050236" />

                    <g mask="url(#mask0_179_768)">
                        <g filter="url(#filter0_f_179_768)">
                            <path d="M-128.926 367.554L102.148 318.673L172.068 429.958L-44.6838 501.631L-128.926 367.554Z" fill="#6AE0FD" fillOpacity="0.24" />
                        </g>
                        <g filter="url(#filter1_f_179_768)">
                            <path d="M1273.39 140.247L1504.46 91.3661L1574.38 202.651L1357.63 274.324L1273.39 140.247Z" fill="url(#paint0_linear_179_768)" fillOpacity="0.1" />
                        </g>
                    </g>
                    <path d="M0 -504L1440 -464L1442 53L0 26V-504Z" fill="#EEC31A" />
                    <path d="M1478 28L1493 66L1200 66L1223.5 28L1478 28Z" fill="black" />
                    <path d="M1395.5 10L1406 42L1298.24 42L1290 10L1395.5 10Z" fill="#287FDD" />
                </g>
                <defs>
                    <filter id="filter0_f_179_768" x="-408.926" y="38.6733" width="860.994" height="742.958" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="140" result="effect1_foregroundBlur_179_768" />
                    </filter>
                    <filter id="filter1_f_179_768" x="993.388" y="-188.634" width="860.994" height="742.958" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="140" result="effect1_foregroundBlur_179_768" />
                    </filter>
                    <linearGradient id="paint0_linear_179_768" x1="1388.92" y1="115.806" x2="1419.68" y2="261.198" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D52A56" />
                        <stop offset="0.0001" stopColor="#D52A56" />
                        <stop offset="1" stopColor="#F98B27" />
                    </linearGradient>
                    <clipPath id="clip0_179_768">
                        <rect width="1440" height="966" fill="white" transform="translate(0 -538)" />
                    </clipPath>
                </defs>
            </svg>

            {/* FOOTER COMPONENT */}
            <div className="container footer">
                <div className="seven columns offset-by-one-half">
                    <div className="container">
                        <div className="two columns">
                            <div className="footLogo">
                                <Link to="/">
                                    <img src="/images/footerlogo.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="two columns social">
                            <h1>Main</h1>
                            <ul>
                                <li>
                                    <Link to="/whynow">Why Now?</Link>
                                </li>
                                <li>
                                    <a href="https://b-included.com/resources/">Blog</a>
                                </li>
                                <li>
                                    <a href="https://prosperbham.com/">Prosper</a>
                                </li>
                            </ul>
                        </div>
                        <div className="two columns social">
                            <h1>Resources</h1>
                            <ul>
                                <li>
                                <Link to="/Health">Health</Link>
                                    {/* <a href="/Health">Health</a> */}
                                </li>
                                <li>
                                <Link to="/Family">Family</Link>
                                    {/* <a href="/Family">Family</a> */}
                                </li>
                                <li>
                                <Link to="/Careers">Careers</Link>
                                    {/* <a href="/Careers">Careers</a> */}
                                </li>
                                <li>
                                <Link to="/Covid">Covid</Link>
                                    {/* <a href="/Covid">COVID-19</a> */}
                                </li>
                            </ul>
                        </div>
                        <div className="two columns social">
                            <h1>Additional Links</h1>
                            <ul>
                                <li>
                                <Link to="/Partners">Partners</Link>
                                    {/* <a href="/Partners">Partners</a> */}
                                </li>
                                <li>
                                    <a href="https://nowincluded.mn.co/groups/6170862?utm_source=manual">Join the Community</a>
                                </li>
                                <li>
                                    <a href="https://nowincluded.mn.co/groups/6170862?utm_source=manual">Events</a>
                                </li>
                                <li>
                                <Link to="/Trials">Clinical Trials</Link>
                                    {/* <a href="/Trials">Clinical Trials</a> */}
                                </li>
                            </ul>
                        </div>
                        <div className="two columns connect">
                            <h1>Stay Connected</h1>
                            <p>Get news, resources and updates delivered to your inbox.</p>
                            {/* <a href="">Sign Up</a> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container footEnd">
                <div className="seven columns offset-by-one-half">
                    <ul>
                        <li>
                            <Link className="iconFace" to={{ pathname: "https://facebook.com" }} target="_blank">
                                {/* <FontAwesomeIcon icon={['fab', 'facebook-f']} /> */}
                            </Link>
                        </li>
                        <li>
                            <Link className="iconTwit" to={{ pathname: "https://twitter.com" }} target="_blank">
                                {/* <FontAwesomeIcon icon={['fab', 'twitter']} /> */}
                            </Link>
                        </li>
                        <li>
                            <Link className="iconTube" to={{ pathname: "https://instgram.com" }} target="_blank">
                                {/* <FontAwesomeIcon icon={['fab', 'instagram']} /> */}
                            </Link>
                        </li>
                        <li>
                            <Link className="iconLink" to={{ pathname: "https://linkedin.com" }} target="_blank">
                                {/* <FontAwesomeIcon icon={['fas', 'rss']} /> */}
                            </Link>
                        </li>
                    </ul>
                    <p>© 2021 #BINCLUDED | <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms &#38; Conditions</Link> | Data Breach Response Policy</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer;