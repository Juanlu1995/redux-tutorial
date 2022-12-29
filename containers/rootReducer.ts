import { combineReducers } from 'redux';
import { reducer as listReducer } from './List/reducer';

export const rootReducer = combineReducers({ list: listReducer });

export type RootState = ReturnType<typeof rootReducer>;
