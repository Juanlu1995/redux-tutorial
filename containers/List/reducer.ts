import { ListActions, ListState } from '../List/types';
import { v4 as uuidv4 } from 'uuid';
import { ActionTypes } from '../List/constants';

const INITIAL_STATE: ListState = {
  list: [],
};

export const reducer = (
  state: ListState = INITIAL_STATE,
  action: ListActions
): ListState => {
  switch (action.type) {
    case ActionTypes.ADD_TO_LIST: {
      return {
        ...state,
        list: [...state.list, { name: action.payload, id: uuidv4() }],
      };
    }
    case ActionTypes.REMOVE_FROM_LIST: {
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};
