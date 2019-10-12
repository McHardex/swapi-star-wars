import {
  GET_PLANET_SUCCESS,
  PAGINATE_PLANET_SUCCESS,
  SEARCH_PLANET_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  planets: [],
  count: 0
};

const planets = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANET_SUCCESS:
      return { ...state, planets: action.planet, count: action.count };
    case PAGINATE_PLANET_SUCCESS:
      return { ...state, planets: action.planet };
    case SEARCH_PLANET_SUCCESS:
      return { ...state, planets: action.result };
    default:
      return state;
  }
};

export default planets;
