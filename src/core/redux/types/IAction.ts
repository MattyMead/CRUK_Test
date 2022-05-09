import { Action } from 'redux';
import { ApiRequestParams } from 'types/common/api/models/entities/api-request-params';
import { ApiResponseData } from 'types/common/api/models/entities/api-response-data';
import { ApiResponseError } from 'types/common/api/models/entities/api-response-error';
import { EndpointRoute } from 'types/common/api/models/entities/endpoint-route';
import { IPayload } from 'types/redux/interfaces/IPayload';

export interface ISimpleAction extends Action<string> {
  id: string;
  payload: IPayload | null;
  timestamp: string;
}

export interface IAsyncAction<Async = boolean> extends ISimpleAction {
  async: Async;
  alertsEnabled: boolean;
  endpoint: EndpointRoute;
}

export interface IRequestAction extends IAsyncAction {
  requestParams: ApiRequestParams;
}

export interface ISuccessAction extends IRequestAction {
  data: ApiResponseData;
}

export interface IFailedAction extends IRequestAction {
  error: ApiResponseError;
}