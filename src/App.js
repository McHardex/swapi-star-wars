import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Characters from './components/Characters';
import Profile from './components/Profile';
import Planets from './components/Planets';
import StarShips from './components/StarShip';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/characters" component={Characters} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/planets" component={Planets} />
      <Route path="/starships" component={StarShips} />
    </div>
  );
};

export default App;
