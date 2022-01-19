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
                    </div>
                    <div className="popContent">
                        <h1>B-Included Is <span>Live!</span></h1>
                        <p>Join a community of people focused on improving health, overall wellness, and elevated financial practices.</p>
                        <a className="button" href="https://nowincluded.mn.co/groups/6170862?utm_source=manual">
                            Join The Community
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup;