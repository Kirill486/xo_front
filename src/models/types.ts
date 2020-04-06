import { ICurrentGame, IPlayer, IStatistics, IOldGame } from '../domainTypes';

export interface IApplicationModel {
  currentGame: ICurrentGame;
  currentPlayer: IPlayer;
  statistics: IStatistics;
  oldGames: IOldGame[];
}
