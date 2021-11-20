import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>
{
    return (
        <footer>
            {/* <PreFooter /> */}

            <div className="container footer">
                <div className="seven columns offset-by-one-half">
                    <div className="container">
                        <div className="fourth columns">
                            <div className="footLogo">
                                <Link to="/">
                                    <img src="/images/footerlogo.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="fourth columns social">
                            <h1>Quick Links</h1>
                            <ul>
                                <li>
                                    <a href="https://b-included.com/join-us/">About</a>
                                </li>
                                <li>
                                    <a href="https://b-included.com/resources/">Resources</a>
                                </li>
                                <li>
                                    <a href="https://b-included.com/154-2/">Blog</a>
                                </li>
                                <li>
                                    <a href="https://b-included.com/join-us/">Join Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="third columns connect">
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
                    <p>© 2021 #BINCLUDED | Privacy Policy | Data Breach Response Policy</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer;