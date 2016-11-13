export function viewConversation(conversationId) {
  return {
    type: 'VIEW_CONVERSATION',
    conversationId
  };
}

export function addMessage(message) {
  return {
    type: 'ADD_MESSAGE',
    message
  };
}

export function disableNotifications() {
  return {
    type: 'DISABLE_NOTIFICATIONS'
  };
}

export function enableNotifications() {
  return {
    type: 'ENABLE_NOTIFICATIONS'
  };
}

export function pushChatMessages(conversations) {
  return {
    type: 'PUSH_MESSAGES',
    conversations
  };
}

export function filterConversationsBy(filterBy) {
  return {
    type: 'FILTER_CONVERSATIONS',
    filterBy
  };
}

export function goOffline() {
  return { type: 'GO_OFFLINE' };
}

export function goOnline() {
  return { type: 'GO_ONLINE' };
}
