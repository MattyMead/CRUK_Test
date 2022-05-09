import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import queryString from 'query-string';
import { IsNullOrUndefined } from 'core/utils/isNullOrUndefined';
import IApiRequest from 'core/api/types/entities/api-request';
import { ApiRequestParams } from 'core/api/types/entities/api-request-params';
import { ApiResponse } from 'core/api/types/entities/api-response';

const getDefaultHeaders: () => { [key: string]: string; } = () => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': '*/*'
  };
  return headers;
};

const makeRequest = async (params: AxiosRequestConfig): Promise<ApiResponse> => {

  if (IsNullOrUndefined(params.headers)) {
    params.headers = getDefaultHeaders();
  }

  try {
    const response: AxiosResponse = await axios(params);

    return {
      response: {
        ok: true
      },
      data: response.data
    } as ApiResponse;
  }
  catch (error: any) {
    return {
      response: {
        ok: false
      },
      error: {
        data: error.response?.data,
        message: (error.response?.data) ? error.response.data : error.message,
        status: error.status || error.response?.status,
        statusText: error.statusText || error.response?.statusText
      }
    } as ApiResponse;
  }
};

export const request: IApiRequest =
async (params: ApiRequestParams): Promise<ApiResponse> => {

  const { url, query } = queryString.parseUrl(params.url);
  const newQueryString = encodeURI(queryString.stringify({ ...query, ...params.params }));
  const newURL = newQueryString ? `${url}?${newQueryString}` : url;

  return makeRequest({
    url: decodeURI(newURL),
    method: params.method,
    headers: params.headers,
    data: params.body
      ? IsNullOrUndefined(params.headers)
        ? JSON.stringify(params.body)
        : params.body
      : null
  });
};