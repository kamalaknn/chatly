import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';
import FriendsList from '../FriendsList';
import MyProfile from '../MyProfile';
import SearchConversation from '../SearchConversation';

let myProfile = {
  name: 'Kamalakannan'
};

class SideBar extends Component {
  render() {
    return (
      <div className='side-bar'>
        <MyProfile profile={myProfile}/>
        <SearchConversation />
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let friends = state.friendsList;

  if (state.filterConversations) {
    friends = friends.filter(friend => friend.name.indexOf(state.filterConversations) !== -1);
  }

  return {
    friends
  };
}

SideBar = connect(mapStateToProps)(SideBar);

export default SideBar;
