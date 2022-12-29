import { ActionType } from 'typesafe-actions';
import { Item } from '../../types';
import * as actions from './actions';

export type ListActions = ActionType<typeof actions>;

export interface ListState {
  list: Item[];
}
