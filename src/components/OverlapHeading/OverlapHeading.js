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
        <div className='OverlapHeading__heading'>
          <div onClick={(e) => this.handleBack(e)} className='OverlapHeading__heading__backButton col-md-2'>
            <i className='fa fa-arrow-left' aria-hidden='true'></i>
          </div>
          <div className='OverlapHeading__heading__title col-md-10'>
            <strong>Start a new chat</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default OverlapHeading;
