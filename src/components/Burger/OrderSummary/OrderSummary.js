import React from 'react';
// import Aux from '../../../hoc/Auxiliary';
import './OrderSummary.css';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    console.log('[OrderSummary.js]');
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}:</span>
                        <span className="Quantity">{props.ingredients[igKey]}</span></li>
    });
    return (
        <div className="OrderSummary">
            <h3>Your Order</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <strong>Total Price: ${props.price.toFixed(2)}</strong>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.modalClosed}>Cancel</Button>
            <Button btnType="Success" clicked={props.continue}>Continue</Button>
        </div>
    );
}

export default orderSummary;