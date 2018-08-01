import React, { Component } from 'react';
import './ConversationsArchiveItem.css';

class ConversationsArchiveItem extends Component {
  render() {
    return (
      <div className='ConversationsArchiveItem col-md-12 col-sm-12 col-xs-12'>
        <div className='row'>
          <div className='ConversationsArchiveItem__avatar col-md-3 col-sm-3 col-xs-3'>
            <div className='ConversationsArchiveItem__avatar__icon'>
              <img src={this.props.avatar} alt='avatar' />
            </div>
          </div>
          <div className='ConversationsArchiveItem__info col-md-9 col-sm-9 col-xs-9'>
            <span className='ConversationsArchiveItem__info__name'><strong>{this.props.name}</strong></span>
            <br />
            <span className='ConversationsArchiveItem__info__time'>{`${this.props.lastMessage.text.length > 12 ? this.props.lastMessage.text.substring(0, 12) + '...' : this.props.lastMessage.text} | ${this.props.lastMessage.sentAt}`}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ConversationsArchiveItem;
