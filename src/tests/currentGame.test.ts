import { deepEqual } from 'assert';
import { applicationModel } from '../models';
import { currentGameInitial } from '../models/reducers/currentGame';
import { ICurrentGame } from '../domainTypes';
import { setCurrentGame } from '../models/actions/currentGame';

describe('Model. Current game reducer tests', () => {
  
  const {currentGame: initialGame} = applicationModel.getState();

  it('Initial game state equals initial game state', () => {
    deepEqual(initialGame, currentGameInitial);
  });

  const anotherGame: ICurrentGame = {
    players: [{
      name: 'R2D2',
      symbolToPlay: false,
    }],
    nextMove: 'R2D2',
    board:  [[true]],
    winner: undefined,
  };

  applicationModel.dispatch(setCurrentGame(anotherGame));

  const {currentGame: gameSet} = applicationModel.getState();

  it('geme set', () => {
    deepEqual(gameSet, anotherGame);
  });
    
  const afterAwhile: ICurrentGame = {
    players: [{
      name: 'R2D2',
      symbolToPlay: true,
    },
    {
      name: 'C3PO',
      symbolToPlay: false,
    }],
    nextMove: 'C3PO',
    board: [[true, false, null],
            [true, true, true],
            [false, null, null],
          ],
    winner: 'R2D2',
  };

  applicationModel.dispatch(setCurrentGame(afterAwhile));

  const {currentGame: afterAwhileGameSet} = applicationModel.getState();

  it('geme changed', () => {
    deepEqual(afterAwhileGameSet, afterAwhile);
  });
});
