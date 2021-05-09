import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {reducer} from './reducer/rootReducer';
import {encryptTransform} from 'redux-persist-transform-encrypt';
import logger from 'redux-logger';

const encryptor = encryptTransform({
  secretKey: 'myDatabaseKey',
  onError: function (error) {
    console.log(error);
  },
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const storeState = createStore(reducer);
export default () => {
  const middlewares = [logger];
  let store = createStore(persistedReducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);
  return {store, persistor};
};

export type RootState = ReturnType<typeof storeState.getState>;
export type AppDispatch = typeof storeState.dispatch;
