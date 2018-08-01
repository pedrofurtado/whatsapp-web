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
        <div className='SideBarHeading__avatar col-md-2 col-xs-2'>
          <div className='SideBarHeading__avatar__icon'>
            <img src={avatar} alt='avatar' />
          </div>
        </div>
        <div onClick={(e) => this.handleCompose(e)} className='SideBarHeading__conversations col-md-2 col-md-offset-7 col-sm-2 col-sm-offset-7 col-xs-1 col-xs-offset-8'>
          <i className='SideBarHeading__conversations__icon fa fa-comments'></i>
        </div>
        <div className='SideBarHeading__menu col-md-1 col-xs-1'>
          <i className='SideBarHeading__menu__icon fa fa-ellipsis-v'></i>
        </div>
      </Heading>
    );
  }
}

export default SideBarHeading;
