type playerId = string;

// true - X
// false - 0
export type PlayerSymbol = boolean;

// null - free
export type BoardFieldSymbol = PlayerSymbol | null;

export interface ICurrentGame {
  players: IPlayer[];
  nextMove: playerId;
  winner?: playerId;
  board: BoardFieldSymbol[][];
}

export interface IPlayer {
  name: string;
  symbolToPlay: PlayerSymbol;
}

export interface IStatistics {
  gamesPlayed: number;
  playerWon: number;
  xWon: number;
}

export interface IOldGame {
  winner: playerId;
  team: PlayerSymbol;
}

export type IOldGames = IOldGame[];