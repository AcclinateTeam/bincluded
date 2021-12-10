import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// COMPONENT IMPORTS
import SubHeader from '../components/SubHeader';

const NotFound = () =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <SubHeader />

            <div className="recHeader">
                <svg viewBox="0 0 1440 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M0 0H1440V249.018L0 470V0Z" fill="#287FDD" />
                </svg>
            </div>

            <section className="error">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h1>We're Sorry!</h1>
                            <h3>This page was not found!</h3>
                            <Link to="/">You can click here to Go back to the Home page!</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NotFound;