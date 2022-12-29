import { createStore } from 'redux';
import { rootReducer } from './containers/rootReducer';

export default () => {
  const store = createStore(rootReducer);

  return store;
};
