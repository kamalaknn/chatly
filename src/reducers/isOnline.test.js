import { createStore } from 'redux';

import reducers from './';
import { goOnline, goOffline } from '../actions';

it('isOnline reducer', () => {
  let store = createStore(reducers);

  store.dispatch(goOnline());
  expect(store.getState().isOnline).toEqual(true);
  store.dispatch(goOffline());
  expect(store.getState().isOnline).toEqual(false);
});
