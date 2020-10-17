import React, {Component, Suspense} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import './App.css';
// import Checkout from './containers/Checkout/Checkout';
// import Orders from './containers/Orders/Orders';
// import Auth from './containers/Auth/Auth';
// import Logout from './containers/Auth/Logout';
import * as actions from './store/actions/index';

const Logout = React.lazy(() => import('./containers/Auth/Logout'));
const Auth = React.lazy(() => import('./containers/Auth/Auth'));
const Orders = React.lazy(() => import('./containers/Orders/Orders'));
const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'));

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {

    let routes = (
          <Switch>
            {/* <Route path="/auth" component={Auth} /> */}
            <Route path="/auth" render={() => (
                <Suspense fallback={<div>Loading...</div>}><Auth /></Suspense>
            )} />
            <Route path="/" exact component={BurgerBuilder} />
            <Redirect to="/" />
          </Switch>
        );

    if(this.props.isAuthenticated) {
      routes = (
          <Switch>
            {/* <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/logout" component={Logout} />
            <Route path="/auth" component={Auth} /> */}
            <Route path="/checkout" render={() => (
                <Suspense fallback={<div>Loading...</div>}><Checkout { ...this.props} /></Suspense>
            )} />
            <Route path="/orders" render={() => (
                <Suspense fallback={<div>Loading...</div>}><Orders /></Suspense>
            )} />
            <Route path="/logout" render={() => (
                <Suspense fallback={<div>Loading...</div>}><Logout /></Suspense>
            )} />
            <Route path="/auth" render={() => (
                <Suspense fallback={<div>Loading...</div>}><Auth /></Suspense>
            )} />
            <Route path="/" exact component={BurgerBuilder} />
            <Redirect to="/" />
          </Switch>
      );
    }

    return (
      <div className="App">
        <h1>Burger Builder</h1>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
