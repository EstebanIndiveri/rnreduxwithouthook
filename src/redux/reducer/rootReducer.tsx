import {combineReducers} from 'redux';
import {backgroundColorReducer} from './backgroundColorReducer';
import {fontSizeReducer} from './fontSizeReducer';

export const reducer = combineReducers({
  backgroundColorKey: backgroundColorReducer,
  fontSizeKey: fontSizeReducer,
});
