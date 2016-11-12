import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider
} from 'react-redux';
import {
  createStore
} from 'redux';

import socketManager from './services/SocketManager';
import notificationManager from './services/NotificationManager';
import reducers from './reducers';
import App from './App';
import './index.css';

let backupState = JSON.parse(localStorage.getItem('chatlyState'));

let initialState = Object.assign({}, {
  friendsList: [{
    id: 1,
    name: 'Kamal',
    avatar: 'https://www.gravatar.com/avatar/a8bf42363b96ff4ec3d26971599c2431'
  }, {
    id: 2,
    name: 'Kamal2',
    avatar: 'https://www.gravatar.com/avatar/a8bf42363b96ff4ec3d26971599c2431'
  }]
}, backupState, { currentConversationId: null });

let store = createStore(reducers, initialState);

socketManager.setup();

socketManager.onMessage = function(data) {
  store.dispatch({
    type: 'ADD_MESSAGE',
    conversationId: data.conversationId,
    message: data.message
  });
  if (!data.message.isSent) {
    notificationManager.sendNotification(data.message);
  }
};

/** Begin Offline handling */
if (navigator.onLine) {
  store.dispatch({ type: 'GO_ONLINE' });
} else {
  store.dispatch({ type: 'GO_OFFLINE' });
}

window.addEventListener('online',  () => { store.dispatch({ type: 'GO_ONLINE' }); });
window.addEventListener('offline',  () => { store.dispatch({ type: 'GO_OFFLINE' }); });
/** End Offline handling */

store.subscribe(() => {
  localStorage.setItem('chatlyState', JSON.stringify(store.getState()));
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
