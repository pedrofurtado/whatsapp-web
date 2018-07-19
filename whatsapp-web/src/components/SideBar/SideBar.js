import React, { Component } from 'react';
import './SideBar.css';
import ConversationsArchive from '../ConversationsArchive/ConversationsArchive';
import SideBarHeading from '../SideBarHeading/SideBarHeading';
import SearchBox from '../SearchBox/SearchBox';
import OverlapHeading from '../OverlapHeading/OverlapHeading';

class SideBar extends Component {
  render() {
    return (
        <div className="SideBar col-sm-4">
            <div className="SideBar__first">
                <SideBarHeading/>
                <SearchBox/>
                <ConversationsArchive/>
            </div>
            <div className="SideBar__second">
                <OverlapHeading/>
                <SearchBox/>
                <ConversationsArchive />
            </div>
        </div>
    );
  }
}

export default SideBar;
