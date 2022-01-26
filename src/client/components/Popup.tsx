import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Popup = () =>
{

    // PopUp Close function
    function closePopup ()
    {
        const popup = document.getElementById('popBack');
        popup.setAttribute('style', `display: none;`);
    }

    return (
        <>
            <div className="popBack" id="popBack">
                <div className="popContainer">
                    <div className="popClose" onClick={closePopup}>
                        <FontAwesomeIcon id="button-close" className="close" icon="times" />
                    </div>
                    <div className="popTopImage">
                        <img src="images/poptop.png" alt="" />
                        <svg viewBox="0 0 1083 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1083 0L0 168H1083V0Z" fill="#287FDD" />
                            <path d="M1083 52L0 168H1083V52Z" fill="#CA1D48" />
                        </svg>
                    </div>
                    <div className="popContent">
                        <h1>B-Included Is <span>Live!</span></h1>
                        <p>Join a community of people focused on improving health, overall wellness, and elevated financial practices.</p>
                        <a className="button" href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual">
                            Join The Community
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup;