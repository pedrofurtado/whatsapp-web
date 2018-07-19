import React, { Component } from 'react';
import './SideBar.css';
import ConversationsArchive from '../ConversationsArchive/ConversationsArchive';
import UserBar from '../UserBar/UserBar';
import SearchBox from '../SearchBox/SearchBox';

class SideBar extends Component {
  render() {
    return (
        <div className="col-sm-4 side">
            <div className="side-one">
                <UserBar/>
                <SearchBox/>
                <ConversationsArchive/>
            </div>
            <div className="side-two">
                {/* Heading */}
                <div className="row newMessage-heading">
                    <div className="row newMessage-main">
                        <div className="col-sm-2 col-xs-2 newMessage-back">
                            <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        </div>
                        <div className="col-sm-10 col-xs-10 newMessage-title">
                            New Chat11
                        </div>
                    </div>
                </div>
                {/* Heading End */}
                <SearchBox/>
                <ConversationsArchive />
            </div>
        </div>
    );
  }
}

export default SideBar;
