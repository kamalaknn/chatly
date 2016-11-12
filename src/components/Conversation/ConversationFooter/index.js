import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sendMessage } from '../../../actions';
import socketManager from '../../../services/SocketManager';

import './style.css';

let style = {
  borderRadius: '5px',
  border: '1px solid #ededed',
  height: '35px',
  outline: 'none',
  fontSize: '15px',
  flexGrow: 1,
  margin: '0 10px'
};

 class ConversationFooter extends Component {
  constructor() {
    super(...arguments);
    this.state = { draftMessage: '' };
  }

  handleMessageChange = (e, value) => {
    this.setState({ draftMessage: e.target.value });
  }

  sendMessage = () => {
    let messageContents = this.state.draftMessage;
    let message = {
      //TODO: get from profile
      from: 'Kamalakannan',
      time: new Date().toISOString(),
      contents: messageContents,
      isSent: true,
      isSending: true
    };
    let conversationId = this.props.conversationId;
    this.props.dispatch(sendMessage(conversationId, message));
    socketManager.sendMessage(conversationId, message);
    this.setState({ draftMessage: '' });
  }

  render() {
    return (
      <div className="conversation-footer">
        <input style={style} value={this.state.draftMessage} onChange={this.handleMessageChange}/>
        <button onClick={this.sendMessage}>Send</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    conversationId: state.currentConversationId
  }
}

ConversationFooter = connect(mapStateToProps)(ConversationFooter);

export default ConversationFooter;
