import { createStore } from 'redux';

import reducers from './';
import { viewConversation } from '../actions';

it('currentConversationId reducer', () => {
  let store = createStore(reducers);

  store.dispatch(viewConversation(1));
  expect(store.getState().currentConversationId).toEqual(1);
});
