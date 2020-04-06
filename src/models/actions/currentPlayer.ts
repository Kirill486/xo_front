import { modelActionPrefix } from './modelActionPrefix'
import { ActionCreator } from 'redux';
import { IPlayer } from '../../domainTypes';
import { IAction } from '../../modules/utilTypes';

export const setCurrentPlayerActionType = `${modelActionPrefix}setCurrentPlayer`;

export const setCurrentPlayer: ActionCreator<IAction<IPlayer>> =
(
  data: IPlayer,
) => ({
  type: setCurrentPlayerActionType,
  payload: data,
});
