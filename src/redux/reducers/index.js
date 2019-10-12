import { combineReducers } from 'redux';
import loader from './loader';
import people from './people';
import planets from './planet';
import starship from './starship';

const rootReducer = combineReducers({
  loader,
  people,
  planets,
  starship
});

export default rootReducer;
