import React, { Component } from 'react';
import avatar from './avatar.png';
import './ConversationHeading.css';
import Heading from '../Heading/Heading';

class ConversationHeading extends Component {
  render() {
    return (
      <Heading>
        <div className='Heading__avatar col-sm-2 col-md-1 col-xs-3'>
          <div className='Heading__avatar-icon'>
            <img src={avatar} alt='avatar' />
          </div>
        </div>
        <div className='Heading__name col-sm-8 col-xs-7'>
          <a className='Heading__name-meta'>Pedro Furtado</a>
          <span className='Heading__online'>Online</span>
        </div>
        <div className='Heading__dot col-sm-1 col-xs-1 pull-right'>
          <i className='fa fa-ellipsis-v pull-right' aria-hidden='true'></i>
        </div>
      </Heading>
    );
  }
}

export default ConversationHeading;
