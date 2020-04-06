import * as React from 'react';
import { AppContainer, ApplicationRow } from '../../components/appContainer';
import {connect} from 'react-redux';
import GameTitle from '../game-title';
import GameBoard from '../game-board';
import RestartThisButton from '../restart-this-button';
import StartNewButton from '../start-new-button';

const Game: React.FC<{}> = () => {
  return (
      <AppContainer>
        <GameTitle />
        <GameBoard />
         <ApplicationRow>
           <RestartThisButton />
           <StartNewButton />           
         </ApplicationRow>
      </AppContainer>
    );
}

export default connect(undefined, undefined)(Game);
