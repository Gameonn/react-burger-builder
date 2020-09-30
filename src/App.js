import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './containers/Home/Home';

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my-app">
      <BrowserRouter>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
