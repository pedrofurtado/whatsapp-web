import React, { Component } from 'react';
import './App.css';
import Conversation from './components/Conversation/Conversation';
import SideBar from './components/SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <div className="row app-one">
        <SideBar/>
        <Conversation />
      </div>
    );
  }
}

export default App;
