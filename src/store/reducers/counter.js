import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.INCREMENT:
            return updateObject(state, {counter: state.counter+1});
            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState;
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter-1});
            // return {
            //     ...state,
            //     counter: state.counter - 1
            // }
        case actionTypes.INCREMENT_BY_5:
            return updateObject(state, {counter: state.counter+action.val});
            // return {
            //     ...state,
            //     counter: state.counter + action.val
            // }
        case actionTypes.DECREMENT_BY_5:
            return updateObject(state, {counter: state.counter-action.val});
            // return {
            //     ...state,
            //     counter: state.counter - action.val
            // }
        default:
            return state;
    }
}

export default reducer;