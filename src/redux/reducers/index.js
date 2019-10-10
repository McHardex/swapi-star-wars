import { combineReducers } from 'redux';
import people from './people';
import planets from './planet';

const rootReducer = combineReducers({
  people,
  planets
});

export default rootReducer;
