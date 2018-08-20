import React, { Component } from 'react'
import avatar from './avatar.png'
import './ConversationHeading.css'
import Heading from '../Heading/Heading'

class ConversationHeading extends Component {
  render() {
    return (
      <Heading>
        <div className='ConversationHeading__avatar col-md-1 col-sm-1 col-xs-2'>
          <div className='ConversationHeading__avatar__icon'>
            <img src={avatar} alt='avatar' />
          </div>
        </div>
        <div className='ConversationHeading__name col-md-10 col-sm-10 col-xs-9'>
          <strong className='ConversationHeading__name__meta'>{this.props.name.length > 15 ? this.props.name.substring(0, 15).concat('...') : this.props.name}</strong>
          <div className='ConversationHeading__online'>Online</div>
        </div>
        <div className='ConversationHeading__dot col-md-1 col-sm-1 col-xs-1'>
          <i className='ConversationHeading__dot__icon fa fa-ellipsis-v' aria-hidden='true'></i>
        </div>
      </Heading>
    )
  }
}

export default ConversationHeading
