import { all } from 'redux-saga/effects';
import {
  watchFetchStarWarsCharacters,
  watchFetchMoreStarWarsCharacters,
  watchSearchItems,
  watchFetchSingleCharacter,
  watchFetchSingleCharacterPlanet
} from './peopleSaga';

import {
  watchFetchPlanets,
  watchPaginatePlanets,
  watchSearchPlanet
} from './planetsSaga';

export default function* rootSaga() {
  yield all([
    watchFetchStarWarsCharacters(),
    watchFetchMoreStarWarsCharacters(),
    watchSearchItems(),
    watchFetchSingleCharacter(),
    watchFetchSingleCharacterPlanet(),
    watchFetchPlanets(),
    watchPaginatePlanets(),
    watchSearchPlanet()
  ]);
}
