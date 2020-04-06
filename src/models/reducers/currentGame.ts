import { ICurrentGame } from "../../domainTypes";
import { Action } from 'redux';
import { setCurrentGameActionType } from '../actions/currentGame';
import { IAction } from '../../modules/utilTypes';

export const currentGameInitial: ICurrentGame = {
  players: [],
  board: [[]],
  nextMove: '',
}

export const currentGameReducer =
(
  state: ICurrentGame = currentGameInitial,
  action: Action,
) => {
  switch (action.type) {
    case setCurrentGameActionType: {
      const {payload} = action as IAction<ICurrentGame>;
      return {
        ...state,
        ...payload,
      }
    }
    default: {
      return state;
    }
  }
}
