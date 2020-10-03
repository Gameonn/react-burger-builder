import React from 'react';
import { withRouter } from 'react-router-dom';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let tranformedIngredients = Object.keys(props.ingredients)
                                        .map(igKey => {
                                            return [...Array(props.ingredients[igKey])].map((_,i) =>{
                                               return <BurgerIngredient key={igKey + i} type={igKey} />
                                            });
                                        }).reduce((arr, el) => {
                                            return arr.concat(el);
                                        }, []);

    if(tranformedIngredients.length === 0) {
        tranformedIngredients = <h3>Please fill your burger with ingredients!!</h3>;
    }
    // const ingredientsQty = Object.values(props.ingredients).reduce((t, n) => t + n);
    // const tranformedIngredients = Object.entries(props.ingredients).map((Key, i) => {
    //     return [...Array(Key[1])].map((_, i ) => {
    //         return <BurgerIngredient key={Key[0] + i} type={Key[0]} />
    //     });
    // });
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default withRouter(burger);