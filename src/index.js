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
import { goOnline, goOffline } from './actions';
import friendsList from './constants/friendsList';
import messagingService from './services/MessagingService';
import App from './App';
import './index.css';

// load state from localStorage
let backupState = JSON.parse(localStorage.getItem('chatlyState'));

let initialState = Object.assign({ friendsList }, backupState, { currentConversationId: null });

let store = createStore(reducers, initialState);

notificationManager.setup({ isEnabled: initialState.isNotificationsEnabled, store });

socketManager.setup();

messagingService.setup({ socketManager, notificationManager, store });

/** Begin Offline handling */
if (navigator.onLine) {
  store.dispatch(goOnline());
} else {
  store.dispatch(goOffline());
}

window.addEventListener('online',  () => { store.dispatch(goOnline()); });
window.addEventListener('offline',  () => { store.dispatch(goOffline()); });

// Push new state to localStorage for preserving state
store.subscribe(() => {
  localStorage.setItem('chatlyState', JSON.stringify(store.getState()));
});
/** End Offline handling */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
