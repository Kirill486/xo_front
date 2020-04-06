import { IApplicationModel } from "./types";
import { currentGameInitial } from './reducers/currentGame';
import { emptyPlayer } from './reducers/currentPlayer';
import { oldGamesInitial } from './reducers/oldGames';
import { nullStatistics } from './reducers/statistics';

export const emptyModel: IApplicationModel = {
  currentGame: currentGameInitial,
  currentPlayer: emptyPlayer,
  oldGames: oldGamesInitial,
  statistics: nullStatistics,
}