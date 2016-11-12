import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterConversationsBy } from '../../actions';

class SearchConversation extends Component {

  handleSearch = (e) => {
    this.props.dispatch(filterConversationsBy(e.target.value));
  }

  render() {
    return (
      <input style={{width:'100%'}} onChange={this.handleSearch} placeholder='Search conversations'/>
    );
  }
}

SearchConversation = connect()(SearchConversation);

export default SearchConversation;
