import React, { Component } from 'react';
import './ConversationsArchiveItem.css';

class ConversationsArchiveItem extends Component {
  render() {
    return (
      <div className='ConversationsArchiveItem col-md-12'>
        <div className='row'>
          <div className='ConversationsArchiveItem__avatar col-md-3'>
            <div className='ConversationsArchiveItem__avatar__icon'>
              <img src={this.props.avatar} alt='avatar' />
            </div>
          </div>
          <div className='ConversationsArchiveItem__info col-md-9'>
            <span className='ConversationsArchiveItem__info__name'>{this.props.name}</span>
            <br />
            <span className='ConversationsArchiveItem__info__time'>{`${this.props.lastMessage.text} | ${this.props.lastMessage.sentAt}`}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ConversationsArchiveItem;
