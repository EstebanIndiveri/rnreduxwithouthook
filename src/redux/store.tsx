import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {reducer} from './reducer/rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const storeState = createStore(reducer);
export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};

export type RootState = ReturnType<typeof storeState.getState>;
export type AppDispatch = typeof storeState.dispatch;
