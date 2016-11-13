import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterConversationsBy } from '../../actions';
import './style.css';

class SearchConversation extends Component {

  handleSearch = (e) => {
    this.props.dispatch(filterConversationsBy(e.target.value));
  }

  render() {
    return (
      <div className='search-conversation'>
        <input className='search-conversation--input' onChange={this.handleSearch} placeholder='Search Conversations'/>
      </div>
    );
  }
}

SearchConversation = connect()(SearchConversation);

export default SearchConversation;
