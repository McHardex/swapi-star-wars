import { all } from 'redux-saga/effects';
import {
  watchFetchStarWarsCharacters,
  watchFetchMoreStarWarsCharacters
} from './peopleSaga';

export default function* rootSaga() {
  yield all([
    watchFetchStarWarsCharacters(),
    watchFetchMoreStarWarsCharacters()
  ]);
}
