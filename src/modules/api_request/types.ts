export interface IApiResponse<Data> {
  ok: boolean;
  result: Data;
}

export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
}