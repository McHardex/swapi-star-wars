import { GET_PEOPLE_SUCCESS } from '../constants/actionTypes';

const initialState = {
  characters: [],
  count: 0
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_SUCCESS:
      return { ...state, characters: action.people, count: action.count };
    default:
      return state;
  }
};

export default people;
