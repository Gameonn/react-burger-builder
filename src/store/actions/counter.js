import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const incrementBy5 = (value) => {
    return {
        type: actionTypes.INCREMENT_BY_5,
        val: value
    }
}

export const decrementBy5 = (value) => {
    return {
        type: actionTypes.DECREMENT_BY_5,
        val: value
    }
}