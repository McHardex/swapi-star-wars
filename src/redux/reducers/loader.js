import {
  LOADING_CONTENT,
  CONTENT_LOADED,
  SEARCH_RESULT_LOADING,
  SEARCH_RESULT_LOADED
} from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  searchResultLoading: false
};

const loader = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CONTENT:
      return { ...state, isLoading: action.isLoading };
    case CONTENT_LOADED:
      return { ...state, isLoading: action.isLoading };
    case SEARCH_RESULT_LOADING:
      return { ...state, searchResultLoading: action.searchResultLoading };
    case SEARCH_RESULT_LOADED:
      return { ...state, searchResultLoading: action.searchResultLoading };
    default:
      return state;
  }
};

export default loader;
