import {takeEvery, call} from 'redux-saga/effects'
import { gameActionTypes } from '../actions/playGame';
import { moveSaga, restartCurrentGameSaga, startNewGameSaga } from './playGameSagas';
import { statisticsActionTypes } from '../actions/statistics';
import { clearStatsSaga, introduceSaga } from './statisticSagas';

export function* rootSaga() {

  // Play game sagas
  // tslint:disable-next-line: no-console
  yield call(console.log, 'root saga');

  yield takeEvery(gameActionTypes.move, moveSaga);
  yield takeEvery(gameActionTypes.restartCurrent, restartCurrentGameSaga);
  yield takeEvery(gameActionTypes.startNew, startNewGameSaga);

  // Statistic sagas

  yield takeEvery(statisticsActionTypes.clearStatistics, clearStatsSaga);
  yield takeEvery(statisticsActionTypes.introduce, introduceSaga);

}
