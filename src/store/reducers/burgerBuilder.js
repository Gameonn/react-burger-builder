import * as actionTypes from '../actions/actionTypes';

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

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIANT:
            let updatedPrice = state.totalPrice + INGREDIENT_PRICES[action.ingredientName];
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: updatedPrice
            }
        case actionTypes.REMOVE_INGREDIANT:
            updatedPrice = state.totalPrice - INGREDIENT_PRICES[action.ingredientName];
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: updatedPrice
            }
        case actionTypes.RESET_CART:
            return initialState;
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                error: false,
                totalPrice: 4,
                // ingredients: action.ingredients,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                }
            }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}

export default reducer;