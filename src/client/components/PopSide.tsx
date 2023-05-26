import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const PopSide: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

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
        <div className="popup2">
            <h2>Have a medical question? <span>Ask a doctor online for free!</span></h2>
        </div>
    );
}

export default PopSide;