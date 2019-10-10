import {
  GET_PEOPLE_SUCCESS,
  PAGINATE_SUCCESS,
  SEARCH_SUCCESS,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_PLANET_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  characters: [],
  character: [],
  planet: [],
  count: 0
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_SUCCESS:
      return { ...state, characters: action.people, count: action.count };
    case PAGINATE_SUCCESS:
      return { ...state, characters: action.people };
    case SEARCH_SUCCESS:
      return { ...state, characters: action.result };
    case FETCH_CHARACTER_SUCCESS:
      return { ...state, character: action.character };
    case FETCH_CHARACTER_PLANET_SUCCESS:
      return { ...state, planet: action.planet };
    default:
      return state;
  }
};

export default people;
