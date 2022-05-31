import './App.css';
import React from 'react';
import HomePage from './HomePage';
import Admin from './Admin';
import Register from './Register';
import Nav from './Nav';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/Admin">
          <Admin />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
