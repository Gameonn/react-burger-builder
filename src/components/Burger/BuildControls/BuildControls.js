import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className="BuildControls">
        <h4>Make a tasty burger by adding ingredients of your choice</h4>
        <h4 style={{boxShadow: '15px 10px 20px', padding: '5px', margin: '10px'}}> Price: ${props.price.toFixed(2)} </h4>
        {controls.map(ctrl => {
            return <BuildControl key={ctrl.label} label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)} disabled={props.disabled[ctrl.type]}/>
        })}

        <button className="OrderButton" disabled={!props.purchasable} onClick={props.ordered}>Order Now</button>
    </div>
);

export default buildControls;