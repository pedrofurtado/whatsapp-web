import React, { Component } from 'react'
import './OverlapHeading.css'

class OverlapHeading extends Component {
  handleBack (e) {
    if (this.props.hasOwnProperty('onBackClick') && typeof (this.props.onBackClick) === 'function') {
      this.props.onBackClick()
    }
  }

  render () {
    return (
      <div className='OverlapHeading row'>
        <div className='OverlapHeading__heading'>
          <div onClick={(e) => this.handleBack(e)} className='OverlapHeading__heading__backButton col-md-1 col-sm-1 col-xs-1'>
            <i className='fa fa-arrow-left' aria-hidden='true' />
          </div>
          <div className='OverlapHeading__heading__title col-md-11 col-sm-11 col-xs-11'>
            <strong>Start a new chat</strong>
          </div>
        </div>
      </div>
    )
  }
}

export default OverlapHeading
