import { Action } from 'redux';
import { IStatistics } from '../../domainTypes';
import { IAction } from '../../modules/utilTypes';
import { setStatisticsActionType } from '../actions/statistics';

export const nullStatistics: IStatistics = {
  gamesPlayed: 0,
  playerWon: 0,
  xWon: 0,
}

export const statisticsReducer =
(
  state: IStatistics = nullStatistics,
  action: Action,
) => {
  switch (action.type) {
    case setStatisticsActionType: {
      const {payload} = action as IAction<IStatistics>;
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
