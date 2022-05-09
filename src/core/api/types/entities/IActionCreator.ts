import { ApiRequestParams } from 'core/api/types/entities/api-request-params';
import { ApiResponseData } from 'core/api/types/entities/api-response-data';
import { ApiResponseError } from 'core/api/types/entities/api-response-error';
import { EndpointRoute } from 'core/api/types/entities/endpoint-route';
import { ISimpleAction, IAsyncAction, IRequestAction, ISuccessAction, IFailedAction } from 'core/redux/types/IAction';
import { IPayload } from 'core/redux/types/IPayload';

export interface ISimpleActionCreator {
  (
    type: string,
    payload?: IPayload | null
  ): ISimpleAction;
}

export interface IAsyncActionCreator {
  (
    type: string,
    endpoint: EndpointRoute,
    payload: IPayload | null,
    alertsEnabled?: boolean
  ): IAsyncAction;
}

export interface IRequestActionCreator {
  (
    asyncAction: IAsyncAction,
    requestParams: ApiRequestParams
  ): IRequestAction;
}

export interface ISuccessActionCreator {
  (
    requestAction: IRequestAction,
    data: ApiResponseData
  ): ISuccessAction;
}

export interface IFailedActionCreator {
  (
    requestAction: IRequestAction,
    error: ApiResponseError
  ): IFailedAction;
}