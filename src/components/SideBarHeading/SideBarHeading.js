import React, { Component } from 'react';
import avatar from './avatar.png';
import './SideBarHeading.css';
import Heading from '../Heading/Heading';

class SideBarHeading extends Component {
  handleCompose(e) {
    if(this.props.hasOwnProperty('onComposeClick') && typeof(this.props.onComposeClick) === 'function') {
      this.props.onComposeClick();
    }
  }

  render() {
    return (
      <Heading>
        <div className='SideBarHeading__avatar col-sm-3 col-xs-3'>
          <div className='SideBarHeading__avatar__icon'>
            <img src={avatar} alt='avatar' />
          </div>
        </div>
        <div className='SideBarHeading__menu col-sm-1 col-xs-1 pull-right'>
          <i className='fa fa-ellipsis-v pull-right' aria-hidden='true'></i>
        </div>
        <div onClick={(e) => this.handleCompose(e)} className='SideBarHeading__conversations col-sm-2 col-xs-2 pull-right'>
          <i className='fa fa-comments pull-right' aria-hidden='true'></i>
        </div>
      </Heading>
    );
  }
}

export default SideBarHeading;
