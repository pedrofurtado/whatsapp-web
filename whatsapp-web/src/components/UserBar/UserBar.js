import React, { Component } from 'react';
import './UserBar.css';
// Usar composicao para o Heading, SideBarHeading (UserBar) and ConversationHeading (Heading)

class UserBar extends Component {
  render() {
    return (
        <div className="Heading row">
            <div className="Heading__avatar col-sm-3 col-xs-3">
                <div className="Heading__avatar-icon">
                    <img src="http://shurl.esy.es/y" alt="qwe" />
                </div>
            </div>
            <div className="Heading__dot col-sm-1 col-xs-1 pull-right">
                <i className="fa fa-ellipsis-v pull-right" aria-hidden="true"></i>
            </div>
            <div className="Heading__compose col-sm-2 col-xs-2 pull-right">
                <i className="fa fa-comments pull-right" aria-hidden="true"></i>
            </div>
        </div>
    );
  }
}

export default UserBar;
