import React, { useEffect, useState } from 'react';
import Header from '../theme/Header';
import Logo from '../theme/Logo';

/* COMPONENT IMPORTS */

const Test = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    function methodDoesNotExist(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero blog">
                <div className="container">
                    <div className="columns eight offset-by-one callout">
                        <div className="image blog">
                            <img src="images/theme/blog.png" alt="" />
                        </div>
                        <div className="text">
                            <div className="calltext">
                                <h1>This Is <br /> A Test</h1>
                                <p>THIS IS TESTING TEXT <Logo color="#287fdd" /> community.</p>
                            </div>
                            <div className="callbutton">
                                <a className="button signup" href="#" target="_blank" rel="noopener noreferrer">Share Your Story</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} Testing
                    </div>
                </div>
            </section>

            <button onClick={() => methodDoesNotExist()}>Break the world</button>
        </>
    );
}

export default Test;