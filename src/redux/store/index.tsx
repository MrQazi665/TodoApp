import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {persistReducer, persistStore} from 'redux-persist';
import {persistConfig} from '../persist';
import rootReducer from '../reducers';
import {rootSaga} from '../sagas';
import {IInitialState} from './initialState/types';

export default function configureStore(initialState: IInitialState | any) {
  const middlewares = [];
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );

  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return {store, persistor};
}
