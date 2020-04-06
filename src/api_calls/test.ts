import { makeRequest } from '../modules/api_request';
import { IApiResponse, HTTPMethod } from '../modules/api_request/types';

export const testRequest = makeRequest<IApiResponse<undefined>>('/api/', HTTPMethod.GET, undefined);