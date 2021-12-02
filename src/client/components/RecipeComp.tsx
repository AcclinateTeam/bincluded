import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const RecipeComp = (props: any) =>
{
    return (
        <>
            <section className="recComp">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="panel">
                            <div className="four columns">
                                <div className="heading">
                                    <h1>Try Our<br /> Healthy Recipes</h1>
                                    <p>B-Included provides easy access to resources that are beneficial in reaching one’s goals in maintaining a healthy lifestyle.</p>
                                </div>
                            </div>
                            <div className="six columns">
                                <div className="container">
                                    <div className="five columns">
                                        <div className="recwrap">
                                            <div className="recipe">
                                                <div className="image" style={{ backgroundImage: `url(/images/pepperSteak.jpg)` }}></div>
                                                <div className="text">
                                                    <h2>Pepper Steak</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                                    <Link to="">View Recipe <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="five columns">
                                        <div className="recwrap">
                                            <div className="recipe">
                                                <div className="image" style={{ backgroundImage: `url(/images/veganPasta.jpg)` }}></div>
                                                <div className="text">
                                                    <h2>Vegan Pasta</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                                    <Link to="">View Recipe <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RecipeComp;