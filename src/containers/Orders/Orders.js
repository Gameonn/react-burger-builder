import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    componentDidMount() {
        // axios.get('/orders.json')
        //         .then(response => {
        //             const fetchedOrders = [];
        //             for(let key in response.data) {
        //                 fetchedOrders.push({ ...response.data[key], id: key});
        //             }
        //             this.setState({loading: false, orders: fetchedOrders});
        //         })
        //         .catch(error => {
        //             this.setState({loading: false});
        //         });

        this.props.onFetchOrders();
    }

    render() {
        let orders = <Spinner />;
        if(!this.props.loading) {
            orders = this.props.orders.map((order) => {
                    return <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
                })
        }
        return (
            <div>
                {orders}
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(Orders, axios));