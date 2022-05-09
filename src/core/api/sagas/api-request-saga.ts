import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import * as Axios from 'core/axios';
import { ApiRequestActions } from 'core/api/types/entities/api-request-actions';
import { IAsyncAction, IFailedAction, IRequestAction } from 'core/redux/types/IAction';
import Api from 'core/api';
import { ApiResponse } from 'core/api/types/entities/api-response';

type SagaReturnType = Generator<CallEffect<ApiRequestActions> | PutEffect<IRequestAction> | CallEffect<ApiResponse>, void, any>;

const ApiRequestSaga = function* (action: IAsyncAction): SagaReturnType {

  const actions: ApiRequestActions = yield call(Api.Utils.CreateApiRequestActions, action);

  const { REQUEST, SUCCESS, FAILED } = actions;

  const requestAction = REQUEST();

  yield put(requestAction);

  const { requestParams } = requestAction;

  try {
    const result: any = yield call(Axios.request, requestParams);

    if (result.response.ok) {
      const { data } = result;
      if (requestAction.payload?.callbackFn) requestAction.payload?.callbackFn(data);
      if (requestAction.payload?.promise) {
        requestAction.payload?.promise.onResolve(data);
      }
      yield put(SUCCESS(data));
    }
    else {
      const { error } = result;

      if (requestAction.payload?.promise) {
        requestAction.payload?.promise.onReject(error);
      }
      yield put(FAILED(error));
    }
  }
  catch (error: any) {
    yield put(FAILED(error));
  }
};

export default ApiRequestSaga;