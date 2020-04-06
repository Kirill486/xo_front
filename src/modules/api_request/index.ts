import { IApiResponse } from './types';

export const makeRequest = async <T>(
  url: string,
  method: string = "GET",
  data: any,  
): Promise<T | undefined> => {

  try {
    const body = {
      method, // *GET, POST, PUT, DELETE, etc.
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, body);
    if (response.ok) {
      const responseData = await response.json() as IApiResponse<T>;
      return responseData.result;
    } 
  } catch(e) {
    // tslint:disable-next-line: no-console
    console.error(JSON.stringify(e, undefined, 2));
  }
  return undefined;
}