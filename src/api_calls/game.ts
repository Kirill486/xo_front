import { makeRequest } from '../modules/api_request';
import { IApiResponse, HTTPMethod } from '../modules/api_request/types';

export interface IGameResponseData {
  ai: string;
  player: string;
  board: any[][];
  nextMove: string;
  end: boolean;
  winner: string;
  team: string;
}

export const getGameRequest = () => makeRequest<IApiResponse<IGameResponseData>>('/api/game', HTTPMethod.GET, undefined);
export const makeAMove = (index: number) => makeRequest<IApiResponse<IGameResponseData>>('/api/game/move', HTTPMethod.POST, {index});

export const gameReset = () => makeRequest<IApiResponse<undefined>>('/api/game/reset', HTTPMethod.POST, undefined);
export const gameNew = () => makeRequest<IApiResponse<undefined>>('/api/game/next', HTTPMethod.GET, undefined);
