/* Lib */
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import * as uuid from 'uuid';

/* Core */
import { ActionTypeSuffix } from 'core/redux/constants';
import _ from 'core/utils/deepdash';

/* Types */
import moment from 'moment-timezone';
import { AppState } from 'core/redux/types/app-state';
import { ISimpleActionCreator, IAsyncActionCreator, IRequestActionCreator, ISuccessActionCreator, IFailedActionCreator } from 'core/api/types/entities/IActionCreator';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export const actionTypeRequest: (actionType: string) => string = (actionType) =>
  `${actionType}${ActionTypeSuffix.REQUEST}`;

export const actionTypeSuccess: (actionType: string) => string = (actionType) =>
  `${actionType.replace(ActionTypeSuffix.REQUEST, '')}${ActionTypeSuffix.SUCCESS}`;

export const withoutSuffix: (actionType: string) => string = (actionType) => {
  Object.values(ActionTypeSuffix).forEach(suffix => {
    actionType = actionType.replace(suffix, '');
  });

  return actionType;
};

export const actionTypeFailed: (actionType: string) => string = (actionType) =>
  `${actionType.replace(ActionTypeSuffix.REQUEST, '')}${ActionTypeSuffix.FAILED}`;

export const createAction: ISimpleActionCreator =
  (type, payload = null) => ({
    id: uuid.v4(),
    type,
    payload,
    timestamp: moment().toISOString()
  });

export const createAsyncAction: IAsyncActionCreator =
  (type, endpoint, payload = null, alertsEnabled = false) => ({
    id: uuid.v4(),
    type,
    endpoint,
    payload,
    async: true,
    alertsEnabled,
    timestamp: moment().toISOString()
  });

export const createRequestAction: IRequestActionCreator =
  (asyncAction, requestParams) => ({
    ...asyncAction,
    requestParams,
    type: actionTypeRequest(asyncAction.type),
    timestamp: moment().toISOString()
  });

export const createSuccessAction: ISuccessActionCreator =
  (requestAction, data) => ({
    ...requestAction,
    data,
    type: actionTypeSuccess(requestAction.type),
    timestamp: moment().toISOString()
  });

export const createFailedAction: IFailedActionCreator =
  (requestAction, error) => ({
    ...requestAction,
    error,
    type: actionTypeFailed(requestAction.type),
    timestamp: moment().toISOString()
  });

export const cacheItem = <TType>(
  cache: { [key: string]: TType },
  item: TType,
  cacheKey?: string
): { [key: string]: TType } => {
  const newCache = _.cloneDeep(cache);

  newCache[(item as any)[cacheKey ?? 'id']] = item;

  return newCache;
};

export const cacheItems = <TType>(
  cache: { [key: string]: TType },
  items: TType[],
  cacheKey?: string
): { [key: string]: TType } => {

  let newCache = _.cloneDeep(cache);

  items.forEach(item => {
    newCache = cacheItem(newCache, item, cacheKey);
  });

  return newCache;
};