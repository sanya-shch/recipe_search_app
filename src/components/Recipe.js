import React from 'react';

import { Link } from "react-router-dom";

const API_KEY = "d7eb8810123caddfe58f84b474c20e9a";

class Recipe extends React.Component {

    state = {
        activeRecipe: []
    };

    componentDidMount = async () => {
        const id = this.props.location.state.recipe;
        const req = await fetch(`https://www.food2fork.com/api/get?key=${API_KEY}&rId=${id}`);
        const res = await req.json();
        this.setState({ activeRecipe: res.recipe });
    };

    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div className="container">
                { this.state.activeRecipe.length !== 0 &&
                <div className="active-recipe">
                    <img src={recipe.image_url} alt={recipe.title}/>
                    <h3 className="active-recipe_title">{ recipe.title }</h3>
                    <h4 className="active-recipe_publisher">
                        Publisher: <span>{ recipe.publisher }</span>
                    </h4>
                    <p className="active-recipe_website">Website:
                        <span><a href={recipe.source_url}>{recipe.source_url}</a></span>
                    </p>
                    <button>
                        <Link to="/">Go Home</Link>
                    </button>
                </div>
                }
            </div>
        );
    }

}

export default Recipe;
