import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/v4-shims.min.css';
import './App.css';
import Conversation from '../components/Conversation/Conversation';
import SideBar from '../components/SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <div className='App container'>
        <div className='App__row row'>
          <div className='hidden-sm hidden-xs col-md-4 col-xs-12 no-padding'>
            <SideBar />
          </div>
          <div className='col-md-8 col-xs-12 no-padding'>
            <Conversation />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
