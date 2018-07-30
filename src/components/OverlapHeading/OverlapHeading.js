import React, { Component } from 'react';
import './OverlapHeading.css';

class OverlapHeading extends Component {
  handleBack(e) {
    if(this.props.hasOwnProperty('onBackClick') && typeof(this.props.onBackClick) === 'function') {
      this.props.onBackClick();
    }
  }

  render() {
    return (
      <div className='OverlapHeading row'>
        <div className='OverlapHeading__heading row'>
          <div onClick={(e) => this.handleBack(e)} className='OverlapHeading__heading__backButton col-sm-2 col-xs-2'>
            <i className='fa fa-arrow-left' aria-hidden='true'></i>
          </div>
          <div className='OverlapHeading__heading__title col-sm-10 col-xs-10'>
            New Chat11@...
          </div>
        </div>
      </div>
    );
  }
}

export default OverlapHeading;
