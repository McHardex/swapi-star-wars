import { combineReducers } from 'redux';
import people from './people';
import planets from './planet';
import starship from './starship';

const rootReducer = combineReducers({
  people,
  planets,
  starship
});

export default rootReducer;
