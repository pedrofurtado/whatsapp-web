import React, { Component } from 'react';
import './SideBar.css';
import ConversationsArchive from '../ConversationsArchive/ConversationsArchive';
import SideBarHeading from '../SideBarHeading/SideBarHeading';
import SearchBox from '../SearchBox/SearchBox';
import OverlapHeading from '../OverlapHeading/OverlapHeading';

class SideBar extends Component {
  state = {
    activeSideBar: 'first' // Possible values: 'first' or 'second'.
  }

  handleBackClick = () => {
    this.setState({ activeSideBar: 'first' });
  }

  handleComposeClick = () => {
    this.setState({ activeSideBar: 'second' });
  }

  render() {
    return (
      <div className={`SideBar col-md-4 SideBar--${this.state.activeSideBar}-active`}>
        <div className='SideBar__first'>
          <SideBarHeading onComposeClick={this.handleComposeClick} />
          <SearchBox />
          <ConversationsArchive />
        </div>
        <div className='SideBar__second'>
          <OverlapHeading onBackClick={this.handleBackClick} />
          <SearchBox />
          <ConversationsArchive />
        </div>
      </div>
    );
  }
}

export default SideBar;
