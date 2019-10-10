import {
  GET_PEOPLE,
  GET_PEOPLE_SUCCESS,
  PAGINATE,
  PAGINATE_SUCCESS,
  SEARCH,
  SEARCH_SUCCESS,
  FETCH_CHARACTER,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_PLANET,
  FETCH_CHARACTER_PLANET_SUCCESS
} from '../constants/actionTypes';

export const getPeople = () => ({
  type: GET_PEOPLE
});

export const getPeopleSuccess = (people, count) => ({
  type: GET_PEOPLE_SUCCESS,
  people,
  count
});

export const paginate = pageNumber => ({
  type: PAGINATE,
  pageNumber
});

export const paginateSuccess = people => ({
  type: PAGINATE_SUCCESS,
  people
});

export const searchByName = value => ({
  type: SEARCH,
  value
});

export const searchSuccess = result => ({
  type: SEARCH_SUCCESS,
  result
});

export const fetchCharacterById = id => ({
  type: FETCH_CHARACTER,
  id
});

export const fetchCharacterByIdSuccess = character => ({
  type: FETCH_CHARACTER_SUCCESS,
  character
});

export const fetchCharacterPlanet = url => ({
  type: FETCH_CHARACTER_PLANET,
  url
});

export const fetchCharacterPlanetSuccess = planet => ({
  type: FETCH_CHARACTER_PLANET_SUCCESS,
  planet
});
