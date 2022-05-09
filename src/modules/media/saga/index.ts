import ApiRequestSaga from 'core/api/sagas/api-request-saga';
import { RootSagaReturnType } from 'core/redux/rootSaga';
import ActionTypes from 'modules/media/action-types';
import { all, takeEvery, takeLatest } from 'redux-saga/effects';

const enabledAsyncActions = [
  ActionTypes.GET_MEDIA
];

export const RootSaga = function* (): RootSagaReturnType {
  yield all([
    yield takeEvery(enabledAsyncActions, ApiRequestSaga)
  ]);
};