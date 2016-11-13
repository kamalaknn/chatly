const currentConversationId = (state = null, action) => {
  switch (action.type) {
    case 'VIEW_CONVERSATION':
      return action.conversationId;
    default:
      return state;
  }
};

export default currentConversationId;
