import React, { Component } from 'react';
import './ConversationsArchiveItem.css';

class ConversationsArchiveItem extends Component {
  render() {
    return (
      <div className='ConversationsArchiveItem row'>
        <div className='ConversationsArchiveItem__avatar col-sm-3 col-xs-3'>
          <div className='ConversationsArchiveItem__avatar__icon'>
            <img src={this.props.avatar} alt='avatar' />
          </div>
        </div>
        <div className='ConversationsArchiveItem__info col-sm-9 col-xs-9'>
          <div className='row'>
            <div className='ConversationsArchiveItem__info__name col-sm-8 col-xs-8'>
              <span className='ConversationsArchiveItem__info__name__meta'>{this.props.name}</span>
            </div>
            <div className='ConversationsArchiveItem__info__time col-sm-4 col-xs-4 pull-right'>
              <span className='ConversationsArchiveItem__info__time__meta pull-right'>{`${this.props.lastMessage.text} | ${this.props.lastMessage.sentAt}`}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConversationsArchiveItem;
