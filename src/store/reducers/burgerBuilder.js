import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.2,
    cheese: 0.4,
    bacon: 0.6,
    meat: 0.3
}

const addIngredient = (state,action) => {
    let updatedPrice = state.totalPrice + INGREDIENT_PRICES[action.ingredientName];
    const updatedIngredient = {  [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: updatedPrice
    }
    return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {
    let newPrice = state.totalPrice - INGREDIENT_PRICES[action.ingredientName];
    const newIngredient = {  [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const newIngredients = updateObject(state.ingredients, newIngredient);
    const newState = {
        ingredients: newIngredients,
        totalPrice: newPrice
    }
    return updateObject(state, newState);
}

const setIngredients = (state, action) => {
    return updateObject(state, {
        error: false,
        totalPrice: 4,
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat,
        }
    });
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIANT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIANT: return removeIngredient(state, action);
        case actionTypes.RESET_CART: return initialState;
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return updateObject(state, {error: true});
        default: return state;
    }
}

export default reducer;