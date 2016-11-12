import { combineReducers } from 'redux';

import currentConversationId from './currentConversationId';
import filterConversations from './filterConversations';
import conversationsById from './conversationsById';
import isNotificationsEnabled from './isNotificationsEnabled';

export default combineReducers({
  isNotificationsEnabled,
  currentConversationId,
  filterConversations,
  conversationsById,

  isFetchingConversations: (state = false, action) => {
    switch (action.type) {
      case 'PUSH_MESSAGES':
        return false;
      default:
        return state;
    }
  },

  friendsList: (state = []) => {
    return state;
  }
});
