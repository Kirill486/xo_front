import { Action } from 'redux';
import { IAction } from '../../modules/utilTypes';
import { call } from 'redux-saga/effects';

export function* introduceSaga(action: IAction<string>) {
  // tslint:disable-next-line: no-console
  yield call(console.log, action.type);
}

export function* clearStatsSaga(action: Action<number>) {
  // tslint:disable-next-line: no-console
  yield call(console.log, action.type);
}