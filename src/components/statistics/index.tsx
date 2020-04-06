import * as React from 'react';
import { IStatisticsProps } from './types';
import { Button } from '../button';
import './styles.css';
import toShare from '../../modules/toShare';

export const Statistics: React.FC<IStatisticsProps> = ({
  resetStatistics,
  statistic,
}) => {  
  const { gamesPlayed, playerWon, xWon } = statistic;
  return (
    <div className="statistics__container">
      <div className="statistics__table-container">
        <div className="statistics__single">
          {`Games played: ${gamesPlayed}`}          
        </div>
        <div className="statistics__single">
          {`Played won: ${playerWon} / ${toShare(playerWon, gamesPlayed)}%`}          
        </div>
        <div className="statistics__single">
          {`X won: ${xWon} / ${toShare(xWon, gamesPlayed)}%`}          
        </div>
      </div>
      <Button
        onClick={resetStatistics}
      >Reset statistics
      </Button>  
    </div>
  );
}

Statistics.displayName = 'Statistics';