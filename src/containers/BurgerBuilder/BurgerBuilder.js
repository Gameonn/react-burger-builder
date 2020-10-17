import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import axios from '../../axios-orders';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        loading: false
    }

    componentDidMount() {
        console.log(this.props);
        this.props.onInitIngredients();
    }

    updatePurchaseState = (ingredients) => {
        const ingredientsQty = Object.values(ingredients).reduce((t, n) => t + n);
        return ingredientsQty > 0;
    }

    // addIngredientHandler = (type) => {
    //     const newCount = this.state.ingredients[type] + 1;
    //     const updatedIngredients = { ...this.state.ingredients };
    //     updatedIngredients[type] = newCount;
    //     let updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    //     this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
    //     this.updatePurchaseState(updatedIngredients);
    // }

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if(oldCount > 0) {
    //         const newCount = oldCount - 1;
    //         const updatedIngredients = {...this.state.ingredients};
    //         updatedIngredients[type] = newCount;
    //         let updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    //         this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
    //         this.updatePurchaseState(updatedIngredients);
    //     }
    // }

    purchaseHandler = () => {
        if(this.props.isAuthenticated)
            this.setState({purchasing: true});
        else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }
    purchaseContinueHandler = () => {
        // const queryParams = [];
        // for (let i in this.state.ingredients) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        // }
        // queryParams.push('price='+this.state.totalPrice);
        // const queryString = queryParams.join('&');
        // this.props.history.push({pathname: '/checkout', search: '?' + queryString});
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = { ...this.props.ings };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let burger = this.props.error ? <h3>Ingredients can't be loaded</h3> : <Spinner />;
        if(this.props.ings) {
            orderSummary = <OrderSummary ingredients={this.props.ings} price={this.props.price}
                modalClosed={this.purchaseCancelHandler} continue={this.purchaseContinueHandler}/>;

            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls price={this.props.price}
                            ingredientAdded={this.props.onIngredientAdded}
                            ingredientRemoved={this.props.onIngredientRemoved}
                            disabled={disabledInfo} isAuth={this.props.isAuthenticated}
                            purchasable={this.updatePurchaseState(this.props.ings)} ordered={this.purchaseHandler}/>
                </Aux>
            );
        }
        if(this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIANT, ingredientName: ingName}),
        // onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIANT, ingredientName: ingName})
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(BurgerBuilder, axios));