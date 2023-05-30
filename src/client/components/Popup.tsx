import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PopupComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        // Check if 'popupShown' is in local storage
        const popupShown = localStorage.getItem('popupShown');

        // If it isn't, then this is the user's first visit, so show the popup
        if (!popupShown) {
            setIsOpen(true);
            localStorage.setItem('popupShown', 'true');
        }
    }, []);

    // Don't render the popup if it isn't open
    if (!isOpen) return null;

    return (
        // This makes sure something is updated.
        <div className="popBack">
            <div className="popup">
                <img src="/images/partners/amymd.png" alt="" />
                <h2>Have a medical question?</h2>
                <h3>Ask a doctor online for free!</h3>
                <p>Acclinate and Ask Me Your MD are providing the B-INCLUDED community with free 24/7 chat services with licensed doctors until May 31st.</p>
                <a href="https://get.nowincluded.com/amymd-b-included">
                    <button className="popButLeft">Join B-INCLUDED</button>
                </a>
                {/* <button className="popButRight" >Close</button> */}
                <div className="close" onClick={() => setIsOpen(false)}>
                    <img src="/images/close.png" alt="" />
                </div>

            </div>
        </div>
    );
}

export default PopupComponent;