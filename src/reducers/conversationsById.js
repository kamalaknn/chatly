const conversationsById = (state = null, action) => {
  switch (action.type) {
    case 'PUSH_MESSAGES':
      return Object.assign({}, state,  action.conversations);

    case 'ADD_MESSAGE':
      let message = action.message;
      let conversationId = message.outgoing ? message.receiver.id : message.sender.id;
      let conversation = state[conversationId];

      let messagesInConversation = conversation.messages;

      let newMessagesInConversation = messagesInConversation.filter(tmpMessage => tmpMessage.id !== message.id);
      newMessagesInConversation = newMessagesInConversation.concat([message]);

      return Object.assign({}, state, {
        [conversationId]: Object.assign({}, conversation, {
          messages: newMessagesInConversation
        })
      });
    default:
      return state;
  }
}

export default conversationsById;
