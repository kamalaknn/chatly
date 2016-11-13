import { createStore } from 'redux';

import reducers from './';
import { filterConversationsBy } from '../actions';

it('filterConversations reducer', () => {
  let store = createStore(reducers);

  store.dispatch(filterConversationsBy('foo'));
  expect(store.getState().filterConversations).toEqual('foo');
});
