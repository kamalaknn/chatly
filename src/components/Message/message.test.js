import React from 'react';
import ReactDOM from 'react-dom';

import Message from './';

it('message renders without crashing', () => {
  const div = document.createElement('div');
  let message = {
    contents: 'Hello',
    isSending: true
  };

  ReactDOM.render(<Message message={message}/>, div);
});
