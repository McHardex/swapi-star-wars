import { put, takeLatest, call } from 'redux-saga/effects';
import starWars from '../../services/index';

import { getPeopleSuccess } from '../actionCreator/index';
import { GET_PEOPLE } from '../constants/actionTypes';

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
