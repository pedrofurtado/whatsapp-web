import React, { Component } from 'react';
import './App.css';
import Conversation from './components/Conversation/Conversation';
import SideBar from './components/SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <div className='App container'>
        <div className='App__row row'>
          <SideBar/>
          <Conversation/>
        </div>
      </div>
    );
  }
}

export default App;
