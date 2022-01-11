import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SubHeader from '../../components/SubHeader';

const SingleRecipe: React.FC<RecipeProps> = (props) =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);
    
    const { id } = useParams();

    const [recipe, setRecipe] = useState<any>([{}]);
    const [ingredients, setIngredients] = useState<any>([]);

    useEffect(() =>
    {
        fetch(`/api/recipes/${id}`)
            .then(res => res.json())
            .then(rec =>
            {
                setRecipe(rec.recipe);
                setIngredients(rec.ingredients);
            });
    }, []);

    console.log(recipe);

    return (
        <>
            <SubHeader />

            <div className="recHeader">
                <svg viewBox="0 0 1440 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M0 0H1440V249.018L0 470V0Z" fill="#287FDD" />
                </svg>
            </div>

            <section className="recipe">
                <div className="container recMarg">
                    <div className="eight columns offset-by-one">
                        <div className="container single">
                            <div className="twothird columns">
                                <div className="header">
                                    {recipe.map((t: { title: string; meals: string; username: string; _created: string; }, index: number) =>
                                    {
                                        const day = new Date(`${t._created}`);
                                        const date = day.toDateString();

                                        return (
                                            <div key={index}>
                                                <h1>{t.title}</h1>
                                                <h3>{date} | {t.meals} | {t.username}</h3>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="third columns">
                                <div className="image">
                                    {recipe.map((img: { imagelink: string; }, index: any) => (
                                        <>
                                            <img src={img.imagelink} alt={img.imagelink} />
                                        </>
                                    ))}
                                </div>
                            </div>
                            <div className="ten columns">
                                <div className="content">
                                    {recipe.map((r: { title: string; description: string; cooktime: string; servings: number; directions: string; imagelink: string; }, index: number) => (
                                        <>
                                            <h3>
                                                <FontAwesomeIcon icon="pencil-alt" /> Description:
                                            </h3>
                                            <p>
                                                {r.description}
                                            </p>
                                            <h3>
                                                <FontAwesomeIcon icon="stopwatch" />CookTime:</h3>
                                            <p>
                                                {r.cooktime}
                                            </p>
                                            <h3>
                                                <FontAwesomeIcon icon="utensils" /> Servings:
                                            </h3>
                                            <p>
                                                {r.servings}
                                            </p>
                                            <h3>
                                                <FontAwesomeIcon icon="clipboard-list" /> Directions:
                                            </h3>
                                            <p>
                                                {r.directions}
                                            </p>
                                        </>
                                    ))}
                                    <h3><FontAwesomeIcon icon="balance-scale" /> Ingredients:</h3>
                                    <ul>
                                        {ingredients.map((r: { amount: number; name: string }, index: number) =>
                                        {
                                            return (
                                                <>
                                                    <li key={index}><FontAwesomeIcon icon="check-circle" /> {r.amount} {r.name}</li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

interface RecipeProps { }

export default SingleRecipe;