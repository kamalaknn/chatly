import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Conversation from './components/Conversation';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-container">
          <SideBar />
          <Conversation />
        </div>
      </div>
    );
  }
}

export default App;
