import { createStore } from 'redux';

import reducers from './';
import { enableNotifications, disableNotifications } from '../actions';

it('isNotificationsEnabled reducer', () => {
  let store = createStore(reducers);
  store.dispatch(enableNotifications());
  expect(store.getState().isNotificationsEnabled).toEqual(true);
  store.dispatch(disableNotifications());
  expect(store.getState().isNotificationsEnabled).toEqual(false);
});
