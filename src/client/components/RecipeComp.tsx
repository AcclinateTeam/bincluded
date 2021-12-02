import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecipeComp = (props: any) =>
{

    const [recipes, setRecipes] = useState([]);

    useEffect(() =>
    {
        fetch('/api/recipes/random')
            .then(res => res.json())
            .then(recipes => setRecipes(recipes))
    }, []);

    console.log(recipes);

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
                                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                                    <p>A quick and easy Pepper Steak recipe! Made with tender slices of protein rich sirloin steak, fresh tender crisp bell pepper and onions, and everything is coat...</p>
                                                    <Link to="https://www.cookingclassy.com/pepper-steak/">View Recipe <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    {/* <div className="five columns">
                                        <div className="recwrap">
                                            <div className="recipe">
                                                <div className="image" style={{ backgroundImage: `url(/images/veganPasta.jpg)` }}></div>
                                                <div className="text">
                                                    <h2>Vegan Pasta</h2>
                                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p> */}
                                                    <p>This is a 30-minute meal that’s virtually fool-proof. While you get your sauce going by sauteeing garlic and shallot in a little olive oil, roast your grape...</p>
                                                    <Link to="https://minimalistbaker.com/creamy-vegan-garlic-pasta-with-roasted-tomatoes/">View Recipe <FontAwesomeIcon icon="arrow-right" /></Link>
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