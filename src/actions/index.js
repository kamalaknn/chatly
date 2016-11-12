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
