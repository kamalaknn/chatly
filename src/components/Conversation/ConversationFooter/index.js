import React, { Component } from 'react';
import { connect } from 'react-redux';

import messagingService from '../../../services/MessagingService';

import './style.css';
import sendImg from './send.svg';

let style = {
  borderRadius: '5px',
  border: '1px solid #ededed',
  height: '35px',
  outline: 'none',
  fontSize: '15px',
  flexGrow: 1,
  margin: '0 10px'
};

const RETURN_KEY = 13;

class ConversationFooter extends Component {
  constructor() {
    super(...arguments);
    this.state = { draftMessage: '' };
  }

  handleMessageChange = (e) => {
    this.setState({ draftMessage: e.target.value });
  }

  /**
    Send messages on return key
  */
  handleKeyPress = (e) => {
    let keyPressed = e.charCode;

    if (keyPressed === RETURN_KEY) {
      this.sendMessage();
    }
  }

  sendMessage = () => {
    let messageContents = this.state.draftMessage;
    let conversationId = this.props.conversationId;
    messagingService.sendMessageTo(conversationId, messageContents);
    this.setState({ draftMessage: '' });
  }

  render() {
    let { isOnline } = this.props;
    return (
      <div>
        {!isOnline &&
          <div className='offline-banner'>You are offline. But you can still keep sending messages.</div>
        }
        <div className="conversation-footer">
          <input style={style} value={this.state.draftMessage} onChange={this.handleMessageChange} onKeyPress={this.handleKeyPress}/>
          <div className='send-action' onClick={this.sendMessage}>
            <img src={sendImg} alt='send message' />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    conversationId: state.currentConversationId,
    isOnline: state.isOnline
  };
};

ConversationFooter = connect(mapStateToProps)(ConversationFooter);

export default ConversationFooter;
