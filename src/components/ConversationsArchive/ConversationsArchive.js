import React, { Component } from 'react'
import './ConversationsArchive.css'
import ConversationsArchiveItem from './components/ConversationsArchiveItem/ConversationsArchiveItem'

class ConversationsArchive extends Component {
  render () {
    return (
      <div className='ConversationsArchive row'>
        {this.props.conversations.map((conversation) => (
          <ConversationsArchiveItem {...conversation} key={conversation.uuid} />
        ))}
      </div>
    )
  }
}

export default ConversationsArchive
