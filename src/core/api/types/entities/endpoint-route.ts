import { RequestMethod } from 'core/api/types/enums/request-method';

export type EndpointRoute = {
  method: RequestMethod;
  host?: string;
  path: string[];
  filters?: { [key: string]: string; };
};