import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0
    },
    totalPrice: 4
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
        default:
            return state;
    }
}

export default reducer;