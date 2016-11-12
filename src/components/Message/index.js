import React, { Component } from 'react';
import './style.css';

export default class extends Component {
  render() {
    let { message }= this.props;
    let classNames = 'message-wrapper';
    let sentClass = message.isSent ? 'message-wrapper__sent' : 'message-wrapper__received';
    classNames = classNames + ' ' + sentClass;
    return (
      <div className={classNames}>
        <span className='message'>
          {message.contents} {message.isSending && 'Sending...'}
        </span>
      </div>
    );
  }
}
