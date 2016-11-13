import React from 'react';
import { connect } from 'react-redux';
import { viewConversation } from '../../../actions';

import './style.css';

let style = {
  borderRadius: '50%',
  height: '55px'
};

let FriendListItem = ({ friend, dispatch }) => {
  return (
    <div className='friend-list-item' onClick={ e => {
      dispatch(viewConversation(friend.id));
    }}>
      <img src={friend.avatar} style={style} alt={friend.name}/>
      {friend.name}
    </div>
  );
}

FriendListItem = connect()(FriendListItem);

export default FriendListItem;
