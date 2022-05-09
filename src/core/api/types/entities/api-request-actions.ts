import { ApiResponseData } from 'core/api/types/entities/api-response-data';
import { ApiResponseError } from 'core/api/types/entities/api-response-error';
import { IRequestAction, ISuccessAction, IFailedAction } from 'core/redux/types/IAction';

export type ApiRequestActions = {
  REQUEST: () => IRequestAction;
  SUCCESS: (data?: ApiResponseData) => ISuccessAction;
  FAILED: (error?: ApiResponseError) => IFailedAction;
};