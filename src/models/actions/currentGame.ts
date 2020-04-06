import { modelActionPrefix } from './modelActionPrefix'
import { ActionCreator } from 'redux';
import { ICurrentGame } from '../../domainTypes';
import { IAction } from '../../modules/utilTypes';

export const setCurrentGameActionType = `${modelActionPrefix}setCurrentGame`;

export const setCurrentGame: ActionCreator<IAction<ICurrentGame>> =
(
  data: ICurrentGame,
) => ({
  type: setCurrentGameActionType,
  payload: data,
});
