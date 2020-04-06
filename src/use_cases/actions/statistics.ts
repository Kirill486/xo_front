import { ActionCreator, Action } from 'redux';
import { IAction } from '../../modules/utilTypes';
import { useCaseActionPrefix } from './useCaseActionPrefix';

const statisticsPrefix = 'statistics/';
export const statisticsActionTypes = Object.freeze({
  introduce: `${useCaseActionPrefix}${statisticsPrefix}Introduce`,
  clearStatistics: `${useCaseActionPrefix}${statisticsPrefix}ClearStatistics`,
});

export const introduceSelf: ActionCreator<IAction<string>> =
(name: string) => ({
  type: statisticsActionTypes.introduce,
  payload: name,
});

export const clearGamesStatistics: ActionCreator<Action> =
() => ({
  type: statisticsActionTypes.clearStatistics,
});
