import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConversationFooter from './ConversationFooter';
import ConversationBody from './ConversationBody';

import './conversation.css';

class Conversation extends Component {
  render() {
    let { conversation } = this.props;
    if (!conversation) {
      return (
        <div className='conversation'>
          <div style={{alignSelf:'center', marginBottom: 'auto'}}>
            Get started by selecting any conversation.
          </div>
        </div>
      );
    }
    return (
      <div className='conversation'>
        <ConversationBody messages={conversation.messages}  />
        <ConversationFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (!state.currentConversationId) {
    return {};
  }
  if (state.isFetchingConversations) {
    return {};
  }
  return {
    conversation: state.conversationsById[state.currentConversationId]
  };
}

Conversation = connect(mapStateToProps)(Conversation);

export default Conversation;
