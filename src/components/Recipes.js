import React from 'react';

import { Link } from "react-router-dom";

const Recipes = props => (
    <div className="container">
        <div className="row">
            { props.recipes.map((recipe) => {
                return (
                    <div key={recipe.recipe_id} className="col-md-4" style={{ marginBottom:"2rem" }}>
                        <div className="recipes_box">
                            <img
                                src={recipe.image_url}
                                alt={recipe.title}/>
                            <div className="recipe_text">
                                <h5 className="recipes_title">
                                    { recipe.title.length < 28 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                                </h5>
                                <p className="recipes_publisher">Publisher: <span>{ recipe.publisher }</span></p>
                            </div>
                            <button className="recipe_buttons">
                                <Link to={{
                                    pathname: `/recipe/${recipe.recipe_id}`,
                                    state: { recipe: recipe.recipe_id }
                                }}>View More</Link>
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Recipes;
