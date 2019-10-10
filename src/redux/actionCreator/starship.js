import {
  GET_STARSHIPS,
  GET_STARSHIPS_SUCCESS,
  PAGINATE_STARSHIPS,
  PAGINATE_STARSHIPS_SUCCESS,
  SEARCH_STARSHIPS,
  SEARCH_STARSHIPS_SUCCESS
} from '../constants/actionTypes';

export const getStarship = () => ({
  type: GET_STARSHIPS
});

export const getStarshipSuccess = (starships, count) => ({
  type: GET_STARSHIPS_SUCCESS,
  starships,
  count
});

export const paginateStarship = pageNumber => ({
  type: PAGINATE_STARSHIPS,
  pageNumber
});

export const paginateStarshipSuccess = starships => ({
  type: PAGINATE_STARSHIPS_SUCCESS,
  starships
});

export const searchStarshipByName = value => ({
  type: SEARCH_STARSHIPS,
  value
});

export const searchStarshipSuccess = result => ({
  type: SEARCH_STARSHIPS_SUCCESS,
  result
});
