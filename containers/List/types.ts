import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ListActions = ActionType<typeof actions>;

export interface ListState {
  list: Item[];
}

interface Item {
  readonly id: string;
  readonly name: string;
}
