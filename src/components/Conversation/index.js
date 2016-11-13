import React, { Component } from 'react';
import { connect } from 'react-redux';

import IntroComponent from './Intro';
import ConversationFooter from './ConversationFooter';
import ConversationBody from './ConversationBody';

import './conversation.css';

class Conversation extends Component {
  render() {
    let { conversation } = this.props;
    if (!conversation) {
      return (
        <IntroComponent/>
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
