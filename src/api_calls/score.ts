import { makeRequest } from '../modules/api_request';
import { IApiResponse, HTTPMethod } from '../modules/api_request/types';

export interface IOldTeamList {
    winner: string;
    team: string;
    ts: any;
}
export interface IScoreResponseData {
    ai: number;
    player: number;
    X: number;
    O: number;
    list: IOldTeamList[];
}

export const getScoreRequest = makeRequest<IApiResponse<IScoreResponseData>>('/api/score', HTTPMethod.GET, undefined);
export const resetScoreRequest = makeRequest<IApiResponse<IScoreResponseData>>('/api/score', HTTPMethod.POST, undefined);
