import React, { Component } from 'react';
import './ConversationsArchiveItem.css';

class ConversationsArchiveItem extends Component {
  render() {
    return (
      <div className='row ConversationsArchiveItem'>
        <div className='col-sm-3 col-xs-3 ConversationsArchiveItem__avatar'>
          <div className='ConversationsArchiveItem__avatar-icon'>
            <img src={this.props.avatar} alt='avatar' />
          </div>
        </div>
        <div className='col-sm-9 col-xs-9 ConversationsArchiveItem__main'>
          <div className='row'>
            <div className='col-sm-8 col-xs-8 ConversationsArchiveItem__name'>
              <span className='ConversationsArchiveItem__name-meta'>{this.props.name}</span>
            </div>
            <div className='col-sm-4 col-xs-4 pull-right ConversationsArchiveItem__time'>
              <span className='ConversationsArchiveItem__time-meta pull-right'>{`${this.props.lastMessage.text} | ${this.props.lastMessage.sentAt}`}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConversationsArchiveItem;
