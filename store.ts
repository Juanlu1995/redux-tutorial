import { combineReducers, createStore } from 'redux';
import { reducer as listReducer } from './containers/List/reducer';

export const rootReducer = combineReducers({ list: listReducer });

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;

export default store;
