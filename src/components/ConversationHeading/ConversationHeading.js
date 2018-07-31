import React, { Component } from 'react';
import avatar from './avatar.png';
import './ConversationHeading.css';
import Heading from '../Heading/Heading';

class ConversationHeading extends Component {
  render() {
    return (
      <Heading>
        <div className='ConversationHeading__avatar col-md-1'>
          <div className='ConversationHeading__avatar__icon'>
            <img src={avatar} alt='avatar' />
          </div>
        </div>
        <div className='ConversationHeading__name col-md-10'>
          <strong className='ConversationHeading__name__meta'>Pedro Furtado</strong>
          <div className='ConversationHeading__online'>Online</div>
        </div>
        <div className='ConversationHeading__dot col-md-1'>
          <i className='ConversationHeading__dot__icon fa fa-ellipsis-v' aria-hidden='true'></i>
        </div>
      </Heading>
    );
  }
}

export default ConversationHeading;
