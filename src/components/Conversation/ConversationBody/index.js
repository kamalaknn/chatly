import React, { Component } from 'react';
import Message from '../../Message';
import './style.css';

export default class extends Component {
  render() {
    let { messages } = this.props;
    return (
      <div className='message-list'>
      {messages.map( message => <Message message={message} key={message.id} /> )}
      </div>
    );
  }
}
