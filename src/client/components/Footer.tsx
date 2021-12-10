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
                                    <Link className="content button partner" to="/partners">View Partners</Link>
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
                                    <svg width="180" viewBox="0 0 81 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 95.3431H2.99376V105.403H0V95.3431Z" fill="#CA1D48" />
                                        <path d="M4.1485 95.3431H7.77792L12.2276 101.905H12.2389V95.3431H15.0833V105.403H11.4667L7.0042 98.7575H6.99296V105.403H4.1485V95.3431Z" fill="#CA1D48" />
                                        <path d="M16.0437 100.369C16.0437 97.1376 18.2509 95.087 21.7295 95.087C24.3765 95.087 26.4119 96.4762 26.9657 98.6829L24.2272 99.3853C23.9495 98.3317 23.0008 97.6722 21.8113 97.6722C20.1355 97.6722 19.06 98.7258 19.06 100.369C19.06 102.011 20.2623 103.067 22.1581 103.067C23.6493 103.067 24.7264 102.287 24.9784 101.071L27.7523 101.676C27.3124 104.105 25.1165 105.652 22.0762 105.652C18.389 105.652 16.0437 103.699 16.0437 100.369Z" fill="#CA1D48" />
                                        <path d="M28.5146 95.3431H31.5324V102.72H36.56V105.403H28.5146V95.3431Z" fill="#CA1D48" />
                                        <path d="M36.9396 100.767V95.3431H39.9559V100.57C39.9559 102.199 40.8468 103.001 42.269 103.001C43.6912 103.001 44.5677 102.199 44.5677 100.57V95.3431H47.5743V100.767C47.5743 103.914 45.6095 105.657 42.2562 105.657C38.9028 105.657 36.9396 103.916 36.9396 100.767Z" fill="#CA1D48" />
                                        <path d="M48.6164 95.3431H54.4995C57.71 95.3431 59.5047 97.142 59.5047 100.373C59.5047 103.604 57.7132 105.403 54.4995 105.403H48.6164V95.3431ZM54.0838 102.915C55.6794 102.915 56.5799 102.002 56.5799 100.379C56.5799 98.7556 55.6794 97.8229 54.0838 97.8229H51.5507V102.921L54.0838 102.915Z" fill="#CA1D48" />
                                        <path d="M60.4617 95.3431H69.1893V97.62H63.3848V99.3058H68.7254V101.257H63.3848V103.136H69.3033V105.413H60.4617V95.3431Z" fill="#CA1D48" />
                                        <path d="M70.1117 95.3431H75.9949C79.2053 95.3431 81 97.142 81 100.373C81 103.604 79.2085 105.403 75.9949 105.403H70.1117V95.3431ZM75.5839 102.915C77.1795 102.915 78.0801 102.002 78.0801 100.379C78.0801 98.7556 77.1795 97.8229 75.5839 97.8229H73.0477V102.921L75.5839 102.915Z" fill="#CA1D48" />
                                        <path d="M72.9408 44.8081C76.3225 41.6726 78.8202 37.3019 80.0803 32.315C81.3404 27.328 81.2989 21.9776 79.9618 17.0214C78.6247 12.0651 76.0596 7.75437 72.6299 4.6995C69.2002 1.64464 65.0798 0.000526228 60.852 0L0 0.39134V90H58.5195C59.7923 90 59.7375 89.6087 60.852 89.6087C65.08 89.6108 69.2014 87.9685 72.632 84.9146C76.0626 81.8607 78.6284 77.5501 79.9659 72.5936C81.3033 67.6372 81.3445 62.2863 80.0836 57.2993C78.8227 52.3123 76.3237 47.9421 72.9408 44.8081Z" fill="white" />
                                    </svg>
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
                                    <a href="/blog/">Blog</a>
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
                                </li>
                                <li>
                                    <Link to="/Family">Family</Link>
                                </li>
                                <li>
                                    <Link to="/Careers">Careers</Link>
                                </li>
                                <li>
                                    <Link to="/Covid">Covid</Link>
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
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/Trials">Clinical Trials</Link>
                                    {/* <a href="/Trials">Clinical Trials</a> */}
                                </li>
                            </ul>
                        </div>
                        <div className="two columns connect">
                            <h1>Give Us Your Feedback!</h1>
                            <p>Click the button below to give us any feedback you may have about this website. We'd love to hear from you! </p>
                            <a className="button" href="https://jdsb9zx9r21.typeform.com/to/CNJivpjr">
                                Give Feedback
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="seven columns offset-by-one-half">
                    <div className="footend">
                        <ul>
                            <li>
                                <Link className="iconFace" to={{ pathname: "https://facebook.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'facebook-f']} /> FaceBook
                                </Link>
                            </li>
                            <li>
                                <Link className="iconTwit" to={{ pathname: "https://twitter.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} /> Twitter
                                </Link>
                            </li>
                            <li>
                                <Link className="iconTube" to={{ pathname: "https://instgram.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'instagram']} /> Instagram
                                </Link>
                            </li>
                            <li>
                                <Link className="iconLink" to={{ pathname: "https://linkedin.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn
                                </Link>
                            </li>
                        </ul>
                        <p>© 2021 #BINCLUDED | <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms &#38; Conditions</Link> | Data Breach Response Policy</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;