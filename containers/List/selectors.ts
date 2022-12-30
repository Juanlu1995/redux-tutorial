import { createSelector } from 'reselect';
import { Item } from '../../types';
import { ListState } from '../List/types';
import { RootState } from '../rootReducer';

const makeSelectListState = (state: RootState) => state.list;

export const makeSelectList = createSelector(
  makeSelectListState,
  (listState: ListState): Item[] => listState.list
);
