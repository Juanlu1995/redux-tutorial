import { action } from 'typesafe-actions/dist/action';

export const addToList = (element: string) =>
  action(ActionTypes.ADD_TO_LIST, element);
export const removeFromList = (elementId: string) =>
  action(ActionTypes.REMOVE_FROM_LIST, elementId);
