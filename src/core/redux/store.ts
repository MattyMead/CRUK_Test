// Lib
import {
  createStore,
  applyMiddleware,
  Store as ReduxStore,
  compose,
  Middleware
} from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import rootReducer from 'core/redux/rootReducer';
import rootSaga from 'core/redux/rootSaga';
import IStore from 'core/redux/types/IStore';
import { ENV } from 'core/environment';

const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

const middleware: Middleware[] = [
  sagaMiddleware
];

const devToolsEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewareEnhancer = (ENV.TARGET_ENV !== 'production')
  ? devToolsEnhancer(applyMiddleware(...middleware))
  : compose(applyMiddleware(...middleware));

const store: ReduxStore<IStore> = createStore(rootReducer, middlewareEnhancer);

sagaMiddleware.run(rootSaga);

export default store;