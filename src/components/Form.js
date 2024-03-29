import React from 'react';

const Form = props => (
    <form onSubmit={props.getRecipe} className="form">
        <input className="form_input" type="text" name="recipeName" />
        <button className="form_button">Search</button>
    </form>
);

export default Form;
