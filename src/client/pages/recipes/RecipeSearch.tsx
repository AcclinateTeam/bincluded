import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

/* COMPONENT IMPORTS */
import SubHeader from '../../components/SubHeader';

const RecipeSearch: React.FC<SearchProps> = (props) =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    
    // document.documentElement.style.setProperty("--main-color", "#ffffff");
    // document.documentElement.style.setProperty("--second-color", "#ffffff");
    // document.documentElement.style.setProperty("--navtext-color", "#ffffff");
    // document.documentElement.style.setProperty("--navtextsec-color", "#31cc7f");

    const [recipes, setRecipes] = useState([]);

    useEffect(() =>
    {
        fetch('/api/recipes')
            .then(res => res.json())
            .then(recipes => setRecipes(recipes))
    }, []);

    return (
        <>
            <SubHeader />

            <div className="recHeader">
                <svg viewBox="0 0 1440 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M0 0H1440V249.018L0 470V0Z" fill="#287FDD" />
                </svg>
            </div>

            <section className="recipe">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="heading">
                            <h1>Recipes</h1>
                            <h3>The best recipes for you, submitted by people just like you!</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="recipe">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="container" style={{ marginBottom: '100px' }}>
                            <div className="deck">
                                {/* component start */}
                                {recipes.map(recipe => (
                                    <>
                                        <div className="third columns">
                                            <div className="cards">
                                                <div className="card">
                                                    <div className="image">
                                                        <img src={recipe.imagelink} className="recipeCardImg" alt={recipe.imagelink} />
                                                    </div>
                                                    <div className="content">
                                                        <h1>{recipe.title}</h1>
                                                        <FontAwesomeIcon icon="utensils" />
                                                        <p className="servingSize">
                                                            Serving Size:  {recipe.servings}
                                                        </p>
                                                        <FontAwesomeIcon icon="stopwatch" />
                                                        <p className="servingSize">
                                                            Cook Time:  {recipe.servings}
                                                        </p>
                                                        <FontAwesomeIcon icon="drumstick-bite" />
                                                        <p>
                                                            Meal Type: {recipe.meals}
                                                        </p>
                                                        <p className="directions" style={{ marginBottom: '30px' }}>{recipe.description}</p>
                                                        <Link to={`/recipes/${recipe.id}`} className='button'>Full Recipe</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

interface SearchProps { }

export default RecipeSearch