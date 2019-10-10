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
  GET_PEOPLE,
  PAGINATE,
  SEARCH,
  FETCH_CHARACTER,
  FETCH_CHARACTER_PLANET
} from '../constants/actionTypes';

export function* fetchStarWarsCharacters() {
  try {
    const response = yield call(characters.getPeople);
    const {
      data: { results, count }
    } = response;
    yield put(getPeopleSuccess(results, count));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchStarWarsCharacters() {
  yield takeLatest(GET_PEOPLE, fetchStarWarsCharacters);
}

export function* fetchMoreStarWarsCharacters(payload) {
  try {
    const response = yield call(characters.pagination, payload.pageNumber);
    const {
      data: { results }
    } = response;
    yield put(paginateSuccess(results));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchMoreStarWarsCharacters() {
  yield takeLatest(PAGINATE, fetchMoreStarWarsCharacters);
}

export function* searchItems(payload) {
  try {
    const response = yield call(characters.search, payload.value);
    const {
      data: { results }
    } = response;
    yield put(searchSuccess(results));
  } catch (error) {
    console.log(error);
  }
}

export function* watchSearchItems() {
  yield takeLatest(SEARCH, searchItems);
}

export function* fetchSingleCharacter(character) {
  try {
    const response = yield call(characters.getSingleCharacter, character.id);
    const { data } = response;
    yield put(fetchCharacterByIdSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchSingleCharacter() {
  yield takeLatest(FETCH_CHARACTER, fetchSingleCharacter);
}

export function* fetchSingleCharacterPlanet(character) {
  try {
    const response = yield call(characters.getPlanet, character.url);
    const { data } = response;
    yield put(fetchCharacterPlanetSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchSingleCharacterPlanet() {
  yield takeLatest(FETCH_CHARACTER_PLANET, fetchSingleCharacterPlanet);
}
