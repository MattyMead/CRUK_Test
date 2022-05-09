import { ApiRequestActions } from 'core/api/types/entities/api-request-actions';
import { IAsyncAction } from 'core/redux/types/IAction';

export interface IApiRequestActionsCreator {
  (asyncAction: IAsyncAction): ApiRequestActions;
}