import { Action } from 'redux';
import { IPlayer } from '../../domainTypes';
import { IAction } from '../../modules/utilTypes';
import { setCurrentPlayerActionType } from '../actions/currentPlayer';

export const emptyPlayer: IPlayer = {
  name: 'John Dow',
  symbolToPlay: true,
}

export const currentPlayerReducer =
(
  state: IPlayer = emptyPlayer,
  action: Action,
) => {
  switch (action.type) {
    case setCurrentPlayerActionType: {
      const {payload} = action as IAction<IPlayer>;
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
