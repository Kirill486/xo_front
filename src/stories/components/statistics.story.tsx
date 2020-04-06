import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Statistics } from '../../components/statistics';
import { nullStatistics } from '../../models/reducers/statistics';
import { IStatistics } from '../../domainTypes';

const resetStatistics = () => {
  // tslint:disable-next-line: no-console
  console.log('resetStatistics');
}

storiesOf("Statistics", module)
	.add("Show initial statistics", () => {
    return (
      <Statistics
        statistic={nullStatistics}
        resetStatistics={resetStatistics}
      />
    );
  })
	.add("Show custom statistics", () => {
    const customStatistics: IStatistics = {
      gamesPlayed: 99,
      playerWon: 47,
      xWon: 22,
    }
    return (
      <Statistics
        statistic={customStatistics}
        resetStatistics={resetStatistics}
      />
    );
  })