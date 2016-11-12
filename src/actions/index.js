export function viewConversation(conversationId) {
  return {
    type: 'VIEW_CONVERSATION',
    conversationId
  };
}

export function sendMessage(conversationId, message) {
  return {
    type: 'SEND_MESSAGE',
    conversationId,
    message
  }
}

export function addMessage(data) {
  return {
    type: 'ADD_MESSAGE',
    conversationId: data.conversationId,
    message: data.message
  }
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
