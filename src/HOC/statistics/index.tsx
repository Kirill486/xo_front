import * as React from 'react';
import { AppContainer, ApplicationRowWide, ApplicationColumn } from '../../components/appContainer';
import {connect} from 'react-redux';
import AppStatistics from '../app-statistics';
import StatTitle from '../stat-title';
import PlayerNameInput from '../player-name-input';

const AppStatisticsScreen: React.FC<{}> = () => {
  return (
      <AppContainer>
        <StatTitle />
        <ApplicationRowWide>
          <ApplicationColumn>
            <PlayerNameInput />
          </ApplicationColumn>
          <ApplicationColumn>
            <AppStatistics />
          </ApplicationColumn>
        </ApplicationRowWide>  
      </AppContainer>
    );
}

export default connect(undefined, undefined)(AppStatisticsScreen);
