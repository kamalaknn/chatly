import React, { Component } from 'react';
import moment from 'moment';

import './style.css';

moment.locale('en-IN', {
  calendar: {
    sameDay: 'LT'
  }
});

export default class extends Component {
  render() {
    let { message } = this.props;
    let classNames = 'message-wrapper';
    let sentClass = message.outgoing ? 'message-wrapper__sent' : 'message-wrapper__received';
    classNames = classNames + ' ' + sentClass;
    let timeString = message.isSending ? 'Sending...' : moment(message.time).calendar();
    return (
      <div className={classNames}>
        <span className='message'>
          <span>
            {message.contents}
          </span>
          <span className='message--timestamp'>
             {timeString}
          </span>
        </span>
      </div>
    );
  }
}
