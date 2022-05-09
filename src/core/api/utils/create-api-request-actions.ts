import { createRequestAction, createSuccessAction, createFailedAction } from 'core/redux/utils';
import { BuildRequestParams } from 'core/api/utils/build-request-params';
import { ApiRequestActions } from 'core/api/types/entities/api-request-actions';
import { ApiResponseData } from 'core/api/types/entities/api-response-data';
import { ApiResponseError } from 'core/api/types/entities/api-response-error';
import { IApiRequestActionsCreator } from 'core/api/types/entities/IApiRequestActionsCreator';
import { IAsyncAction, IRequestAction, ISuccessAction, IFailedAction } from 'core/redux/types/IAction';

export const CreateApiRequestActions: IApiRequestActionsCreator =
  (asyncAction: IAsyncAction) => {
    const { type, payload, endpoint } = asyncAction;

    const requestParams = BuildRequestParams(endpoint, payload!);

    const requestActionCreator = (): IRequestAction =>
      createRequestAction(asyncAction, requestParams);

    const successActionCreator = (data: ApiResponseData): ISuccessAction =>
      createSuccessAction(requestActionCreator(), data);

    const failedActionCreator = (error: ApiResponseError): IFailedAction =>
      createFailedAction(requestActionCreator(), error);

    return {
      REQUEST: requestActionCreator,
      SUCCESS: successActionCreator,
      FAILED: failedActionCreator
    } as ApiRequestActions;
  };