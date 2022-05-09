import { RequestMethod } from 'core/api/types/enums/request-method';

export type ApiRequestParams = {
  url: string;
  method: RequestMethod;
  headers?: {[key: string]: string;};
  params?: {[key: string]: string;};
  body?: {} | null;
};