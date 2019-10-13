import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Characters from './components/Characters';
import Profile from './components/Profile';
import Planets from './components/Planets';
import StarShips from './components/StarShip';
import NavBar from './components/shared/NavBar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/characters" component={Characters} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/planets" component={Planets} />
      <Route path="/starships" component={StarShips} />
    </div>
  );
};

export default App;
