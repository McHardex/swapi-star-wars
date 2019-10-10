import {
  GET_STARSHIPS_SUCCESS,
  PAGINATE_STARSHIPS_SUCCESS,
  SEARCH_STARSHIPS_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  starships: [],
  count: 0
};

const starship = (state = initialState, action) => {
  switch (action.type) {
    case GET_STARSHIPS_SUCCESS:
      return { ...state, starships: action.starships, count: action.count };
    case PAGINATE_STARSHIPS_SUCCESS:
      return { ...state, starships: action.starships };
    case SEARCH_STARSHIPS_SUCCESS:
      return { ...state, starships: action.result };
    default:
      return state;
  }
};

export default starship;
