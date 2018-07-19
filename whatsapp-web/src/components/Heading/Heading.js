import React, { Component } from 'react';
import './Heading.css';

class Heading extends Component {
  render() {
    return (
        <div className="row heading">
            <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                <div className="heading-avatar-icon">
                <img src="http://shurl.esy.es/y" alt="sdfsdf" />
                </div>
            </div>
            <div className="col-sm-8 col-xs-7 heading-name">
                <a className="heading-name-meta">Ankit Jain
                </a>
                <span className="heading-online">Online</span>
            </div>
            <div className="col-sm-1 col-xs-1 heading-dot pull-right">
                <i className="fa fa-ellipsis-v pull-right" aria-hidden="true"></i>
            </div>
        </div>
    );
  }
}

export default Heading;
