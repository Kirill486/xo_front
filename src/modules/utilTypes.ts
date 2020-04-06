import { Action } from 'redux';

export interface IAction<P> extends Action {
  payload: P;
}
