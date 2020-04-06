import { ActionCreator, Action } from 'redux';
import { IAction } from '../../modules/utilTypes';
import { useCaseActionPrefix } from './useCaseActionPrefix';

const gamePrefix = 'game/';
export const gameActionTypes = Object.freeze({
  move: `${useCaseActionPrefix}${gamePrefix}Move`,
  restartCurrent: `${useCaseActionPrefix}${gamePrefix}Restart`,
  startNew: `${useCaseActionPrefix}${gamePrefix}Start`,
});

export const makeMove: ActionCreator<IAction<number>> =
(fieldIndex: number) => ({
  type: gameActionTypes.move,
  payload: fieldIndex,
});

export const restartCurrentGame: ActionCreator<Action> =
() => ({
  type: gameActionTypes.restartCurrent,
});

export const startNewGame: ActionCreator<Action> =
() => ({
  type: gameActionTypes.startNew,
});
