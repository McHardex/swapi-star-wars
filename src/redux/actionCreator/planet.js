import {
  GET_PLANET,
  GET_PLANET_SUCCESS,
  PAGINATE_PLANET,
  PAGINATE_PLANET_SUCCESS,
  SEARCH_PLANET,
  SEARCH_PLANET_SUCCESS
} from '../constants/actionTypes';

export const getPlanets = () => ({
  type: GET_PLANET
});

export const getPlanetSuccess = (planet, count) => ({
  type: GET_PLANET_SUCCESS,
  planet,
  count
});

export const paginatePlanet = pageNumber => ({
  type: PAGINATE_PLANET,
  pageNumber
});

export const paginatePlanetSuccess = planet => ({
  type: PAGINATE_PLANET_SUCCESS,
  planet
});

export const searchPlanetByName = value => ({
  type: SEARCH_PLANET,
  value
});

export const searchPlanetSuccess = result => ({
  type: SEARCH_PLANET_SUCCESS,
  result
});
