import { deepEqual } from 'assert';
import { applicationModel } from '../models';
import { IStatistics } from '../domainTypes';
import { nullStatistics } from '../models/reducers/statistics';
import { setStatistics } from '../models/actions/statistics';

describe('Model. Statistic reducer tests', () => {
  
  const {statistics: initialStat} = applicationModel.getState();

  it('Initial statistics state equals initial state', () => {
    deepEqual(initialStat, nullStatistics);
  });

  const anotherStatistics: IStatistics = {
    gamesPlayed: 100,
    playerWon: 99,
    xWon: 50,
  };

  applicationModel.dispatch(setStatistics(anotherStatistics));

  const {statistics: anotherStatisticsSet} = applicationModel.getState();

  it('statistics set', () => {
    deepEqual(anotherStatisticsSet, anotherStatistics);
  });
});
