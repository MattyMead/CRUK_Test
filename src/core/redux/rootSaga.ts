import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

import { Saga as mediaSaga } from 'modules/media';

export type RootSagaReturnType = Generator<ForkEffect<never> | AllEffect<any>, void, any>;

export default function* (): Generator<AllEffect<RootSagaReturnType>, void, unknown> {
  yield all([
    mediaSaga()
  ]);
}