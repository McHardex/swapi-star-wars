import { put, takeLatest, call } from 'redux-saga/effects';
import starWars from '../../services/index';

import {
  getPeopleSuccess,
  paginateSuccess,
  searchSuccess
} from '../actionCreator/index';
import { GET_PEOPLE, PAGINATE, SEARCH } from '../constants/actionTypes';

export function* fetchStarWarsCharacters() {
  try {
    const response = yield call(starWars.getPeople);
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
    const response = yield call(starWars.pagination, payload.pageNumber);
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
    const response = yield call(starWars.search, payload.value);
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
