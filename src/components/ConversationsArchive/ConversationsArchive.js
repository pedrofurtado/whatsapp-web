import React, { Component } from 'react'
import './ConversationsArchive.css'
import ConversationsArchiveItem from './components/ConversationsArchiveItem/ConversationsArchiveItem'

class ConversationsArchive extends Component {
  handleClickItem (conversation) {
    if (this.props.hasOwnProperty('onClickItem') && typeof (this.props.onClickItem) === 'function') {
      this.props.onClickItem(conversation)
    }
  }

  render () {
    return (
      <div className='ConversationsArchive row'>
        {this.props.conversations.map((conversation) => (
          <ConversationsArchiveItem {...conversation} key={conversation.uuid} onClick={(conversation) => this.handleClickItem(conversation)} />
        ))}
      </div>
    )
  }
}

export default ConversationsArchive
