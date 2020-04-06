import { modelActionPrefix } from './modelActionPrefix'
import { ActionCreator } from 'redux';
import { IPlayer } from '../../domainTypes';
import { IAction } from '../../modules/utilTypes';

export const setStatisticsActionType = `${modelActionPrefix}setStatistics`;

export const setStatistics: ActionCreator<IAction<IPlayer>> =
(
  data: IPlayer,
) => ({
  type: setStatisticsActionType,
  payload: data,
});
