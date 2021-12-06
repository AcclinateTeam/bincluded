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
                                    {recipes.map((r: any, index: number) => (
                                        <div key={r.id}>
                                            <div className="five columns">
                                                <div className="recwrap">
                                                    <div className="recipe">
                                                        <div className="image" style={{ backgroundImage: `url(${r.imagelink})` }}></div>
                                                        <div className="text">
                                                            <h2>{r.title}</h2>
                                                            <p>{r.description}</p>
                                                            <Link to={`/recipes/${r.id}`}>View Recipe <FontAwesomeIcon icon="arrow-right" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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