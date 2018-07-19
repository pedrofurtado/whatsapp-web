import React, { Component } from 'react';
import './OverlapHeading.css';

class OverlapHeading extends Component {
  render() {
    return (
        <div className="row newMessage-heading">
            <div className="row newMessage-main">
                <div className="col-sm-2 col-xs-2 newMessage-back">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </div>
                <div className="col-sm-10 col-xs-10 newMessage-title">
                    New Chat11@...
                </div>
            </div>
        </div>
    );
  }
}

export default OverlapHeading;
