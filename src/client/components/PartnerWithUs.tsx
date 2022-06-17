import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PartnerWithUs = () =>
{
    return (
        <section className="partWithUs">
            <div className="container sharr">
                <div className="four columns image">
                    <img src="/images/partnerwithus.jpg" alt="" />
                </div>
                <div className="six columns words">
                    <div className="text">
                        <h2>Partner <span className="blue">With Us</span></h2>
                        <p>We want you to be a part of the health conversation. Click the link below to get started today.</p>
                        <a className="content button solid" href="https://jdsb9zx9r21.typeform.com/B-INCLUDED" target="_blank" rel="noopener noreferrer">Share Your Story</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnerWithUs;