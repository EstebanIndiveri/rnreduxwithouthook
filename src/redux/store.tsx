import { createStore } from "redux";
import {reducer} from './reducer/rootReducer';
export const store = createStore(reducer);
