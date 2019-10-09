import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
    </div>
  );
};

export default App;
