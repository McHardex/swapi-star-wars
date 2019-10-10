import { put, takeLatest, call } from 'redux-saga/effects';
import characters from '../../services/characterAPI';

import {
  getPeopleSuccess,
  paginateSuccess,
  searchSuccess,
  fetchCharacterByIdSuccess,
  fetchCharacterPlanetSuccess
} from '../actionCreator/people';

import {
  loadingContent,
  contentLoaded,
  searchResultLoading,
  searchResultLoaded
} from '../actionCreator/loader';

import {
  GET_PEOPLE,
  PAGINATE,
  SEARCH,
  FETCH_CHARACTER,
  FETCH_CHARACTER_PLANET
} from '../constants/actionTypes';

export function* fetchStarWarsCharacters() {
  yield put(loadingContent());
  try {
    const response = yield call(characters.getPeople);
    const {
      data: { results, count }
    } = response;
    yield put(getPeopleSuccess(results, count));
    yield put(contentLoaded());
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchStarWarsCharacters() {
  yield takeLatest(GET_PEOPLE, fetchStarWarsCharacters);
}

export function* fetchMoreStarWarsCharacters(payload) {
  yield put(loadingContent());
  try {
    const response = yield call(characters.pagination, payload.pageNumber);
    const {
      data: { results }
    } = response;
    yield put(paginateSuccess(results));
    yield put(contentLoaded());
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchMoreStarWarsCharacters() {
  yield takeLatest(PAGINATE, fetchMoreStarWarsCharacters);
}

export function* searchItems(payload) {
  yield put(searchResultLoading());
  try {
    const response = yield call(characters.search, payload.value);
    const {
      data: { results }
    } = response;
    yield put(searchSuccess(results));
    yield put(searchResultLoaded());
  } catch (error) {
    console.log(error);
  }
}

export function* watchSearchItems() {
  yield takeLatest(SEARCH, searchItems);
}

export function* fetchSingleCharacter(character) {
  yield put(loadingContent());
  try {
    const response = yield call(characters.getSingleCharacter, character.id);
    const { data } = response;
    yield put(fetchCharacterByIdSuccess(data));
    yield put(contentLoaded());
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchSingleCharacter() {
  yield takeLatest(FETCH_CHARACTER, fetchSingleCharacter);
}

export function* fetchSingleCharacterPlanet(character) {
  yield put(loadingContent());
  try {
    const response = yield call(characters.getPlanet, character.url);
    const { data } = response;
    yield put(fetchCharacterPlanetSuccess(data));
    yield put(contentLoaded());
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchSingleCharacterPlanet() {
  yield takeLatest(FETCH_CHARACTER_PLANET, fetchSingleCharacterPlanet);
}
