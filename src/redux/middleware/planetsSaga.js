import { put, takeLatest, call } from 'redux-saga/effects';
import planet from '../../services/planetAPI';

import {
  getPlanetSuccess,
  paginatePlanetSuccess,
  searchPlanetSuccess
} from '../actionCreator/planet';

import {
  loadingContent,
  contentLoaded,
  searchResultLoading,
  searchResultLoaded
} from '../actionCreator/loader';

import {
  GET_PLANET,
  PAGINATE_PLANET,
  SEARCH_PLANET
} from '../constants/actionTypes';

export function* fetchPlanets() {
  yield put(loadingContent());
  try {
    const response = yield call(planet.getPlanets);
    const {
      data: { results, count }
    } = response;
    yield put(getPlanetSuccess(results, count));
    yield put(contentLoaded());
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchPlanets() {
  yield takeLatest(GET_PLANET, fetchPlanets);
}

export function* paginatePlanets(payload) {
  yield put(loadingContent());
  try {
    const response = yield call(planet.paginatePlanet, payload.pageNumber);
    const {
      data: { results }
    } = response;
    yield put(paginatePlanetSuccess(results));
    yield put(contentLoaded());
  } catch (error) {
    console.log(error);
  }
}

export function* watchPaginatePlanets() {
  yield takeLatest(PAGINATE_PLANET, paginatePlanets);
}

export function* searchPlanet(payload) {
  yield put(searchResultLoading());
  try {
    const response = yield call(planet.searchPlanet, payload.value);
    const {
      data: { results }
    } = response;
    yield put(searchPlanetSuccess(results));
    yield put(searchResultLoaded());
  } catch (error) {
    console.log(error);
  }
}

export function* watchSearchPlanet() {
  yield takeLatest(SEARCH_PLANET, searchPlanet);
}
