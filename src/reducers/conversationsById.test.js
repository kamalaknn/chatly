import { createStore } from 'redux';

import reducers from './';
import { pushChatMessages, addMessage } from '../actions';

it('conversationsById pushChatMessages', () => {
  let store = createStore(reducers);

  let sampleMessages = {
    1: {
      messages: ['hi', 'hello']
    },
    2: {
      messages: ['hi there']
    }
  };

  store.dispatch(pushChatMessages(sampleMessages));
  expect(JSON.stringify(store.getState().conversationsById)).toEqual(JSON.stringify(sampleMessages));
});

it('conversationsById addMessage', () => {
  let store = createStore(reducers);

  let sampleMessages = {
    1: {
      messages: [{
        id: 1,
        outgoing: true,
        receiver: {
          id: 1
        }
      }]
    }
  };

  store.dispatch(pushChatMessages(sampleMessages));

  let message = {
    id: 2,
    outgoing: true,
    isSending: true,
    receiver: {
      id: 1
    }
  };

  let expectedResult = {
    1: {
      messages: [{
        id: 1,
        outgoing: true,
        receiver: {
          id: 1
        }
      }, message]
    }
  };

  // Testing push of new messages
  store.dispatch(addMessage(message));
  expect(JSON.stringify(store.getState().conversationsById)).toEqual(JSON.stringify(expectedResult));

  let messageWithChanges = {
    id: 2,
    outgoing: true,
    isSending: false,
    receiver: {
      id: 1
    }
  };

  // Testing modifying existing message
  store.dispatch(addMessage(messageWithChanges));
  expect(store.getState().conversationsById['1'].messages[1].isSending).toEqual(false);
});
