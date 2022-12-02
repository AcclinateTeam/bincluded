import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import General from './subComponents/Family/General';
import Youth from './subComponents/Family/Youth';
import Education from './subComponents/Family/Education';
import Transportation from './subComponents/Family/Transportation';
import Legal from './subComponents/Family/Legal';

const Terminal = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/api/resources/allres')
            .then(res => res.json())
            .then(cards => setCards(cards))
    }, []);

    const [mental, setMental] = useState(false);
    const [physical, setPhysical] = useState(false);
    const [tele, setTele] = useState(false);
    const [legal, setLegal] = useState(false);

    const mentalLoaded = () => {
        setMental(true);
        setPhysical(false);
        setTele(false);
        setLegal(false);
    }

    const physicalLoaded = () => {
        setMental(false);
        setPhysical(true);
        setTele(false);
        setLegal(false);
    }

    const teleLoaded = () => {
        setMental(false);
        setPhysical(false);
        setLegal(false);
        setTele(true);
    }


    const personalButton = () => {
        setMental(false);
        setPhysical(false);
        setTele(false);
        setLegal(false);
    }

    const legalLoaded = () => {
        setMental(false);
        setPhysical(false);
        setTele(false);
        setLegal(true);
    }

    if (mental && !physical && !tele && !legal) {
        return (
            <>
                <section className="addRes">
                    <div className="container">
                        <div className="seven columns offset-by-one-half addResWide">
                            <div className="header">
                                <h2>Family Resources</h2>
                                <p>Click the button below to select resources by category. Click the resource card to view more information.</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li>General</li></a>
                                    <a onClick={mentalLoaded}><li className="active">Youth</li></a>
                                    <a onClick={physicalLoaded}><li>Education</li></a>
                                    <a onClick={teleLoaded}><li>Transportation</li></a>
                                    <a onClick={legalLoaded}><li>Legal</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <Youth />
                                </div>
                            </div>
                            <div className="buttonwrap">
                                <Link className="button" to="/partners">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    } else if (!mental && !physical && !tele && legal) {
        return (
            <>
                <section className="addRes">
                    <div className="container">
                        <div className="seven columns offset-by-one-half addResWide">
                            <div className="header">
                                <h2>Family Resources</h2>
                                <p>Click the button below to select resources by category. Click the resource card to view more information.</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li>General</li></a>
                                    <a onClick={mentalLoaded}><li>Youth</li></a>
                                    <a onClick={physicalLoaded}><li>Education</li></a>
                                    <a onClick={teleLoaded}><li>Transportation</li></a>
                                    <a onClick={legalLoaded}><li className="active">Legal</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    {cards.map((post: any, index) => {
                                        if (post.f_general == 'true') {
                                            return (
                                                <div className="third columns" key={post.id}>
                                                    <div className="panes">
                                                        <a href={post.link} className={post.tags} target="_blank" rel="noopener noreferrer">
                                                            <div className="image" style={{ backgroundImage: `url("/images/partners/${post.image}")`, backgroundColor: '#ffffff' }}></div>
                                                        </a>
                                                        <a href={post.link} className={post.tags} target="_blank" rel="noopener noreferrer">
                                                            <div className="pane">
                                                                <h2>{post.title}</h2>
                                                                <p>{post.description}</p>
                                                                <h2>Who Will Benefit</h2>
                                                                <p>{post.benefit}</p>
                                                                <span>Read More</span> <FontAwesomeIcon className="readmo" icon="arrow-right" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    } else if (!mental && physical && !tele && !legal) {
        return (
            <>
                <section className="addRes">
                    <div className="container">
                        <div className="seven columns offset-by-one-half addResWide">
                            <div className="header">
                                <h2>Family Resources</h2>
                                <p>Click the button below to select resources by category. Click the resource card to view more information.</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li>General</li></a>
                                    <a onClick={mentalLoaded}><li>Youth</li></a>
                                    <a onClick={physicalLoaded}><li className="active">Education</li></a>
                                    <a onClick={teleLoaded}><li>Transportation</li></a>
                                    <a onClick={legalLoaded}><li>Legal</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    {cards.map((post: any, index) => {
                                        if (post.f_educ == 'true') {
                                            return (
                                                <div className="third columns" key={post.id}>
                                                    <div className="panes">
                                                        <a href={post.link} className={post.tags} target="_blank" rel="noopener noreferrer">
                                                            <div className="image" style={{ backgroundImage: `url("/images/partners/${post.image}")`, backgroundColor: '#ffffff' }}></div>
                                                        </a>
                                                        <a href={post.link} className={post.tags} target="_blank" rel="noopener noreferrer">
                                                            <div className="pane">
                                                                <h2>{post.title}</h2>
                                                                <p>{post.description}</p>
                                                                <h2>Who Will Benefit</h2>
                                                                <p>{post.benefit}</p>
                                                                <span>See Featured Partners</span> <FontAwesomeIcon className="readmo" icon="arrow-right" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            <div className="buttonwrap">
                                <Link className="button" to="/partners">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );

    } else if (!mental && !physical && !legal && tele) {
        return (
            <>
                <section className="addRes">
                    <div className="container">
                        <div className="seven columns offset-by-one-half addResWide">
                            <div className="header">
                                <h2>Family Resources</h2>
                                <p>Click the button below to select resources by category. Click the resource card to view more information.</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li>General</li></a>
                                    <a onClick={mentalLoaded}><li>Youth</li></a>
                                    <a onClick={physicalLoaded}><li>Education</li></a>
                                    <a onClick={teleLoaded}><li className="active">Transportation</li></a>
                                    <a onClick={legalLoaded}><li>Legal</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <Transportation />
                                </div>
                            </div>
                            <div className="buttonwrap">
                                <Link className="button" to="/partners">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );

    } else {
        return (
            <>
                <section className="addRes">
                    <div className="container">
                        <div className="seven columns offset-by-one-half addResWide">
                            <div className="header">
                                <h2>Family <span className="blue">Resources</span></h2>
                                <p>Click the button below to select resources by category. Click the resource card to view more information.</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li className="active">General</li></a>
                                    <a onClick={mentalLoaded}><li>Youth</li></a>
                                    <a onClick={physicalLoaded}><li>Education</li></a>
                                    <a onClick={teleLoaded}><li>Transportation</li></a>
                                    <a onClick={legalLoaded}><li>Legal</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    {cards.map((post: any, index) => {
                                        if (post.f_general == 'true') {
                                            return (
                                                <div className="third columns" key={post.id}>
                                                    <div className="panes">
                                                        <a href={post.link} className={post.tags} target="_blank" rel="noopener noreferrer">
                                                            <div className="image" style={{ backgroundImage: `url("/images/partners/${post.image}")`, backgroundColor: '#ffffff' }}></div>
                                                        </a>
                                                        <a href={post.link} className={post.tags} target="_blank" rel="noopener noreferrer">
                                                            <div className="pane">
                                                                <h2>{post.title}</h2>
                                                                <p>{post.description}</p>
                                                                <h2>Who Will Benefit</h2>
                                                                <p>{post.benefit}</p>
                                                                <span>Read More</span> <FontAwesomeIcon className="readmo" icon="arrow-right" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            <div className="buttonwrap">
                                <Link className="button" to="/partners">See Featured Partners <FontAwesomeIcon icon="arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Terminal;

