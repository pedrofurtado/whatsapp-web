import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/v4-shims.min.css';
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
