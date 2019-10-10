import { put, takeLatest, call } from 'redux-saga/effects';
import planet from '../../services/planetAPI';

import {
  getPlanetSuccess,
  paginatePlanetSuccess,
  searchPlanetSuccess
} from '../actionCreator/planet';

import {
  GET_PLANET,
  PAGINATE_PLANET,
  SEARCH_PLANET
} from '../constants/actionTypes';

export function* fetchPlanets() {
  try {
    const response = yield call(planet.getPlanets);
    const {
      data: { results, count }
    } = response;
    yield put(getPlanetSuccess(results, count));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchPlanets() {
  yield takeLatest(GET_PLANET, fetchPlanets);
}

export function* paginatePlanets(payload) {
  try {
    const response = yield call(planet.paginatePlanet, payload.pageNumber);
    const {
      data: { results }
    } = response;
    yield put(paginatePlanetSuccess(results));
  } catch (error) {
    console.log(error);
  }
}

export function* watchPaginatePlanets() {
  yield takeLatest(PAGINATE_PLANET, paginatePlanets);
}

export function* searchPlanet(payload) {
  try {
    const response = yield call(planet.searchPlanet, payload.value);
    const {
      data: { results }
    } = response;
    yield put(searchPlanetSuccess(results));
  } catch (error) {
    console.log(error);
  }
}

export function* watchSearchPlanet() {
  yield takeLatest(SEARCH_PLANET, searchPlanet);
}
