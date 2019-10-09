import { all } from 'redux-saga/effects';
import { watchFetchStarWarsCharacters } from './peopleSaga';

export default function* rootSaga() {
  yield all([watchFetchStarWarsCharacters()]);
}
