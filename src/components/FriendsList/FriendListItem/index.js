import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewConversation } from '../../../actions';

import './style.css';

let style = {
  borderRadius: '50%',
  height: '55px'
}

class FriendListItem extends Component {
  render() {
    return (
      <div className='friend-list-item' onClick={ e => {
        this.props.dispatch(viewConversation(this.props.friend.id));
      }}>
        <img src={this.props.friend.avatar} style={style} alt={this.props.friend.name}/>
        {this.props.friend.name}
      </div>
    );
  }
}

FriendListItem = connect()(FriendListItem);

export default FriendListItem;
