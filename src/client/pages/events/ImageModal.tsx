import React, { useState } from 'react';

const ImageModal = ({ imageUrl }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <img src={imageUrl} alt="Image" onClick={openModal} />

            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <img src={imageUrl} alt="Image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageModal;