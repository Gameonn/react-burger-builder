import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Burger Builder</h1>
        <Layout></Layout>
        <BurgerBuilder />
      </div>
    );
  }
}


export default App;
