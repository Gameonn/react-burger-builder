import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Burger Builder</h1>
        <Layout><p>Test</p></Layout>
        <BurgerBuilder />
      </div>
    );
  }
}


export default App;
