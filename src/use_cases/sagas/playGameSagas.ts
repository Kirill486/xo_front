import { IAction } from '../../modules/utilTypes';
import { Action } from 'redux';
import { call } from 'redux-saga/effects';

export function* moveSaga(action: IAction<number>) {
  // tslint:disable-next-line: no-console
  yield call(console.log, action.type);
}

export function* restartCurrentGameSaga(action: Action) {
  // tslint:disable-next-line: no-console
  yield call(console.log, action.type);
}

export function* startNewGameSaga(action: Action) {
  // tslint:disable-next-line: no-console
  yield call(console.log, action.type);
}