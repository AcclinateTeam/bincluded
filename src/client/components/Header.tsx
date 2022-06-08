import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

const Header = () =>
{
    // GOOGLE ANALYTICS
    const eventTrack = (category: string, action: string, label: string, value: number) =>
    {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    }

    // MOBILE NAV MENU TOGGLE CONTROLLER
    function toggleNav ()
    {
        // VARIABLE SETTINGS
        const header = document.querySelector('header');
        const headerWrapper = document.getElementById('header-wrapper');
        const headWrapHeight = headerWrapper.offsetHeight;
        const navBg = document.getElementById('navButtonBg');
        const openButton = document.getElementById('button-open');
        const closeButton = document.getElementById('button-close');
        // MENU TOGGLE
        if (headWrapHeight <= 61)
        {
            header.style.position = 'fixed';
            headerWrapper.setAttribute('style', `height: 100vh; background-color: #04278E;`);
            navBg.setAttribute('style', `background-color: #fff;`);
            openButton.setAttribute('style', `opacity: 0;`);
            closeButton.setAttribute('style', `opacity: 1;`);
        } else
        {
            header.style.position = 'fixed';
            headerWrapper.setAttribute('style', `height: 60px; background-color: #050236;`);
            navBg.setAttribute('style', `background-color: #CA1D48;`);
            openButton.setAttribute('style', `opacity: 1;`);
            closeButton.setAttribute('style', `opacity: 0;`);
        }
    }

    // MOBILE NAV SCROLL ANIMATION
    window.addEventListener('scroll', function (e)
    {
        // VARIABLE SETTINGS
        var header = document.querySelector('header');
        var windowWidth = window.innerWidth;
        var windowPosition = window.scrollY;
        var headWrapHeight = document.getElementById('header-wrapper').offsetHeight;

        // MOBILE NAV SCROLL ANIMATION
        if (windowWidth <= 1115 && windowPosition >= 900 && headWrapHeight <= 61)
        {
            header.setAttribute('style', `position: fixed; background-color: #050236;`);
        } else if (windowWidth <= 1115 && headWrapHeight >= 61)
        {
            header.setAttribute('style', `position: fixed;`);
        } else
        {
            header.setAttribute('style', `position: absolute; background-color: rgb(0,0,0,0);`);
        }
    });

    return (
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="nine columns offset-by-half">
                        <div id="header-wrapper" className="header wrapper">
                            <div className="logo">
                                <Link to="/">
                                    <svg viewBox="0 0 278 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32 0.775452H41.0636V31.2321H32V0.775452Z" fill="#ffffff" />
                                        <path d="M44.5596 0.775452H55.5477L69.0192 20.6408H69.0532V0.775452H77.6649V31.2321H66.7157L53.2053 11.1127H53.1713V31.2321H44.5596V0.775452Z" fill="#ffffff" />
                                        <path d="M80.5726 15.9903C80.5726 6.20829 87.2549 0 97.7862 0C105.8 0 111.962 4.20581 113.639 10.8867L105.348 13.0132C104.507 9.82338 101.635 7.82681 98.034 7.82681C92.9603 7.82681 89.7042 11.0166 89.7042 15.9903C89.7042 20.964 93.3443 24.1597 99.0837 24.1597C103.599 24.1597 106.859 21.7969 107.622 18.1169L116.02 19.948C114.689 27.3023 108.04 31.9866 98.8359 31.9866C87.6728 31.9866 80.5726 26.0736 80.5726 15.9903Z" fill="#ffffff" />
                                        <path d="M118.328 0.775452H127.465V23.1099H142.686V31.2321H118.328V0.775452Z" fill="#ffffff" />
                                        <path d="M143.835 17.197V0.775452H152.967V16.6004C152.967 21.5327 155.664 23.9605 159.97 23.9605C164.276 23.9605 166.929 21.5327 166.929 16.6004V0.775452H176.031V17.197C176.031 26.725 170.083 32 159.931 32C149.779 32 143.835 26.7309 143.835 17.197Z" fill="#ffffff" />
                                        <path d="M179.186 0.775452H196.998C206.717 0.775452 212.151 6.22173 212.151 16.0038C212.151 25.7858 206.727 31.2321 196.998 31.2321H179.186V0.775452ZM195.739 23.7006C200.57 23.7006 203.296 20.9361 203.296 16.0215C203.296 11.1068 200.57 8.28327 195.739 8.28327H188.07V23.7183L195.739 23.7006Z" fill="#ffffff" />
                                        <path d="M215.048 0.775452H241.471V7.66896H223.898V12.7726H240.067V18.6796H223.898V24.3681H241.816V31.2616H215.048V0.775452Z" fill="#ffffff" />
                                        <path d="M244.264 0.775452H262.075C271.795 0.775452 277.228 6.22173 277.228 16.0038C277.228 25.7858 271.804 31.2321 262.075 31.2321H244.264V0.775452ZM260.831 23.7006C265.662 23.7006 268.388 20.9361 268.388 16.0215C268.388 11.1068 265.662 8.28327 260.831 8.28327H253.152V23.7183L260.831 23.7006Z" fill="#ffffff" />
                                        <path d="M26.1049 15.7736C27.3152 14.6698 28.2092 13.1312 28.6601 11.3757C29.1111 9.62015 29.0963 7.73666 28.6177 5.99195C28.1392 4.24724 27.2211 2.72973 25.9937 1.65434C24.7662 0.578955 23.2915 0.000185246 21.7785 0L0 0.137762V31.6823H20.9437C21.3992 31.6823 21.3796 31.5445 21.7785 31.5445C23.2916 31.5453 24.7667 30.9671 25.9944 29.8921C27.2222 28.817 28.1405 27.2996 28.6192 25.5548C29.0978 23.81 29.1126 21.9263 28.6613 20.1708C28.2101 18.4152 27.3157 16.8768 26.1049 15.7736Z" fill="white" />
                                    </svg>
                                </Link>
                            </div>

                            <nav>
                                <ul className="nav">
                                    <li><Link to='/blog'>Stories</Link></li>
                                    <li>
                                        <Link to='/'>Resources</Link>
                                        <ul className="subnav">
                                            <li><Link to='/health'>Health</Link></li>
                                            <li><Link to='/family'>Family</Link></li>
                                            <li><Link to='/careers'>Careers</Link></li>
                                        </ul>
                                    </li>
                                    {/* <li><Link to='/health'>Health</Link></li> */}
                                    {/* <li><Link to='/family'>Family</Link></li> */}
                                    {/* <li><Link to='/careers'>Careers</Link></li> */}
                                    <li><Link to='/trials'>Clinical Research</Link></li>
                                    <li><Link to='/covid'>COVID-19</Link></li>
                                </ul>
                            </nav>

                            <div className="login">
                                <ul className="log">
                                    <li className="logins"><a href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual" onClick={eventTrack.bind(this, "Header", "Sign Up Button", "Button")}>Join the Community</a></li>
                                </ul>
                            </div>

                            <div id="navButtonBg" className="navButton" onClick={toggleNav}>
                                <FontAwesomeIcon id="button-open" className="open" icon="bars" />
                                <FontAwesomeIcon id="button-close" className="close" icon="times" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;