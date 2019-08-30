import React from 'react';

import './App.css';
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "d7eb8810123caddfe58f84b474c20e9a";

export default class App extends React.Component {

    state = {
        recipes: [],
        error: 0
    };

    getRecipe = async e => {
        e.preventDefault();
        this.setState({error:0});
        const name = e.target.elements.recipeName.value;
        await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${name}`)
            .then(res => res.json())
            .then(res => {
                if(res.recipes.length === 0)throw new Error();
                else this.setState({recipes: res.recipes});
                return res;
            })
            .then(res => localStorage.setItem("recipes", JSON.stringify(res.recipes)))
            .catch(error => this.setState({error:1}));
    };

    componentDidMount = () => {
        const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        this.setState({ recipes });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Recipe Search</h1>
                </header>
                <Form getRecipe={this.getRecipe}/>
                {
                    this.state.error === 0 ? <Recipes recipes={this.state.recipes}/> : <h2>Sorry, but your search did not return any results</h2>
                }

            </div>
        );
    }

}
