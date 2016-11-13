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
    <div className='friend-list-item' onClick={ e => { dispatch(viewConversation(friend.id)); }}>
      <div>
        <img className='friend-list-item--profile-avatar' src={friend.avatar} style={style} alt={friend.name}/>
      </div>
      <div className='friend-list-item--profile-info'>
        {friend.name}
      </div>
    </div>
  );
}

FriendListItem = connect()(FriendListItem);

export default FriendListItem;
