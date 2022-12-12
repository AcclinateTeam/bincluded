import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Terminal = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/api/resources/allres')
            .then(res => res.json())
            .then(cards => setCards(cards))
    }, []);

    return (
        <>
            <section className="addRes health">
                <div className="container">
                    <div className="seven columns offset-by-one-half addResWide">
                        <div className="header">
                            <h2>Health <span className="blue">Resources</span></h2>
                            <p>Scroll down to view all health related resources. Click the resource card to view more information.</p>
                        </div>
                        <div className="panel">
                            <div className="container">
                                {cards.map((post: any, index) => {
                                    if (post.health == 'true') {
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
                                    } if (post.career = null) {
                                        return (
                                            <>
                                                hahahhahahaha
                                            </>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Terminal;

