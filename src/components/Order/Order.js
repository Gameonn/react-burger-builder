import React from 'react';
import './Order.css';

const order = (props) => {

    const ingredients = [];
    for(let ingredientName in props.ingredients) {
        ingredients.push({name: ingredientName, amount: props.ingredients[ingredientName]})
    }

    const ingredientOutput = ingredients.map(ig => {
        let ingredientSpan = null;
        if(ig.amount)
            ingredientSpan = <span key={ig.name}> {ig.name} ({ig.amount}) </span>;
        return ingredientSpan;
    })

    return (
        <div className="Order">
            <p>Ingredients: {ingredientOutput} </p>
            <p>Price: <strong>$ {props.price.toFixed(2)} </strong></p>
        </div>
    );
}

export default order;