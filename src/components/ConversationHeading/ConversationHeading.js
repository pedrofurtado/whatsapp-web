import React, { Component } from 'react';
import avatar from './avatar.png';
import './ConversationHeading.css';
import Heading from '../Heading/Heading';

class ConversationHeading extends Component {
  render() {
    return (
      <Heading>
        <div className='ConversationHeading__avatar col-sm-2 col-md-1 col-xs-3'>
          <div className='ConversationHeading__avatar__icon'>
            <img src={avatar} alt='avatar' />
          </div>
        </div>
        <div className='ConversationHeading__name col-sm-8 col-xs-7'>
          <a className='ConversationHeading__name__meta'>Pedro Furtado</a>
          <span className='ConversationHeading__online'>Online</span>
        </div>
        <div className='ConversationHeading__dot col-sm-1 col-xs-1 pull-right'>
          <i className='fa fa-ellipsis-v pull-right' aria-hidden='true'></i>
        </div>
      </Heading>
    );
  }
}

export default ConversationHeading;
