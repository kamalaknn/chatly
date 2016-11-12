const conversationsById = (state = null, action) => {
  switch (action.type) {
    case 'PUSH_MESSAGES':
      return Object.assign({}, state,  action.conversations);
    case 'SEND_MESSAGE':
      let originalConversation = state[action.conversationId];
      let newConversation = Object.assign({}, originalConversation, {
        messages: [...originalConversation.messages, action.message]
      });
      return Object.assign({}, state, {
        [action.conversationId]: newConversation
      });

    case 'ADD_MESSAGE':
      let conversation = state[action.conversationId];
      let message = action.message;
      message.isSending = false;

      let messages = conversation.messages.map( tmpMessage => {
        if (message.time === tmpMessage.time) {
          return Object.assign({}, tmpMessage, message);
        }
        return tmpMessage;
      });
      return Object.assign({}, state, {
        [action.conversationId]: Object.assign({}, conversation, {
          messages
        })
      });
    default:
      return state;
  }
}

export default conversationsById;
