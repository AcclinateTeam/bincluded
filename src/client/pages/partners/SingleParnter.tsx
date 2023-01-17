import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../theme/Header';
import PartnerWithUs from './components/PartnerWithUs';


const SinglePartner = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const { slug } = useParams();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`/api/resources/partners/${slug}`)
            .then(res => res.json())
            .then(cards => setCards(cards))
    }, []);

    console.log(cards);


    return (
        <>

            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero">
                <div className="blogcall">
                    {cards.map((partner: any, index) => {
                        return (
                            <>
                                <img src={partner.imglink} alt="" />
                            </>
                        )
                    })}
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        {cards.map((partner: any, index) => {
                            return (
                                <>
                                    <a href="/">Home</a> {'>'} <a href="/partners">Featured Partners</a> {'>'} {partner.title}
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
                        
            {/* INTRO SECTION */}
            <section className="homies">
                <div className="container">
                    <div className="ten columns">
                        <div className="heading">
                            {cards.map((partner: any, index) => {
                                return (
                                    <>
                                        <h2>{partner.title}</h2>
                                    </>
                                )
                            })}
                            <p>Featured Partner</p>
                        </div>
                    </div>
                    <div className="six columns">
                        <div className="content">
                            {cards.map((partner: any, index) => {
                                return (
                                    <>
                                        <h3>Description</h3>
                                        <p>{partner.description}</p>
                                        <h3>Who Will Benefit</h3>
                                        <p>{partner.benefit}</p>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className="four columns">
                        <div className="contact">
                            {cards.map((partner: any, index) => {
                                var contact = partner.contact;
                                var address = partner.address;

                                return (
                                    <>
                                        <h4>Contact Information</h4>
                                        <p dangerouslySetInnerHTML={{ __html: contact }}></p>
                                        <h4>Address</h4>
                                        <p dangerouslySetInnerHTML={{ __html: address }}></p>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className="ten columns">
                        <div className="image">
                            {cards.map((partner: any, index) => {
                                return (
                                    <>
                                        <iframe width="100%" height="100%" src={`${partner.vidlink}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <PartnerWithUs />
        </>
    )
}


export default SinglePartner;