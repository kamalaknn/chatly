import React, { Component } from 'react';
import { connect } from 'react-redux';

import FriendListItem from './FriendListItem';
import './style.css';

class FriendsList extends Component {
  componentDidMount() {
    let { dispatch, conversationsById } = this.props;

    if (conversationsById) {
      return;
    }

    fetch('./conversations.json')
      .then( response => response.json())
      .then( json => {
        dispatch({ type: 'PUSH_MESSAGES', conversations: json.data })
      });
  }

  render() {
    return (
      <div className='friend-list'>
        {this.props.friends.map(friend => <FriendListItem friend={friend} key={friend.id}/>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    conversationsById: state.conversationsById
  };
}

FriendsList = connect(mapStateToProps)(FriendsList);

export default FriendsList;
