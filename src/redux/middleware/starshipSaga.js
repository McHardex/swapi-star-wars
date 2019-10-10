import { put, takeLatest, call } from 'redux-saga/effects';
import starShips from '../../services/starShipAPI';

import {
  getStarshipSuccess,
  paginateStarshipSuccess,
  searchStarshipSuccess
} from '../actionCreator/starship';

import {
  GET_STARSHIPS,
  PAGINATE_STARSHIPS,
  SEARCH_STARSHIPS
} from '../constants/actionTypes';

export function* fetchStarShips() {
  try {
    const response = yield call(starShips.getStarShips);
    const {
      data: { results, count }
    } = response;
    yield put(getStarshipSuccess(results, count));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchStarShips() {
  yield takeLatest(GET_STARSHIPS, fetchStarShips);
}

export function* paginateStarShips(payload) {
  try {
    const response = yield call(
      starShips.paginateStarShips,
      payload.pageNumber
    );
    const {
      data: { results }
    } = response;
    yield put(paginateStarshipSuccess(results));
  } catch (error) {
    console.log(error);
  }
}

export function* watchPaginateStarShips() {
  yield takeLatest(PAGINATE_STARSHIPS, paginateStarShips);
}

export function* searchStarShips(payload) {
  try {
    const response = yield call(starShips.searchStarShips, payload.value);
    const {
      data: { results }
    } = response;
    yield put(searchStarshipSuccess(results));
  } catch (error) {
    console.log(error);
  }
}

export function* watchSearchStarShips() {
  yield takeLatest(SEARCH_STARSHIPS, searchStarShips);
}
