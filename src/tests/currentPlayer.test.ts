import { deepEqual } from 'assert';
import { applicationModel } from '../models';
import { IPlayer } from '../domainTypes';
import { emptyPlayer } from '../models/reducers/currentPlayer';
import { setCurrentPlayer } from '../models/actions/currentPlayer';

describe('Model. Current game reducer tests', () => {
  
  const {currentPlayer: initialPlayer} = applicationModel.getState();

  it('Initial player state equals epmty player', () => {
    deepEqual(initialPlayer, emptyPlayer);
  });

  const anotherPlayer: IPlayer = {
    name: 'Spiro',
    symbolToPlay: true,
  };

  applicationModel.dispatch(setCurrentPlayer(anotherPlayer));

  const {currentPlayer: anotherPlayerSet} = applicationModel.getState();

  it('player set', () => {
    deepEqual(anotherPlayerSet, anotherPlayer);
  });
});
