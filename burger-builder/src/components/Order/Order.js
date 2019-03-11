import React from 'react';
import classes from './Order.css';

const order = props => (
    <div className={classes.Order}>
        <h1>Ingredients:</h1>
        <p>Salad ({props.ingredients.salad})</p>
        <p>Bacon ({props.ingredients.bacon})</p>
        <p>Cheese ({props.ingredients.cheese})</p>
        <p>Meat ({props.ingredients.meat})</p>
        <p>Price: <strong>{props.price}</strong></p>
    </div>
);

export default order;