import React, { Component } from 'react';
import './ConversationsArchive.css';
import ConversationsArchiveItem from './components/ConversationsArchiveItem/ConversationsArchiveItem';

class ConversationsArchive extends Component {
  state = {
    conversations: [
      {
        name: 'Grupo 1',
        avatar: 'avatar 1',
        lastMessage: {
          text: 'bora la?',
          sentAt: '01/0121',
          origin: 'receiver'
        }
      },
      {
        name: 'eita kkkk',
        avatar: 'asd',
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01-01-1990',
          origin: 'receiver'
        }
      },
      {
        name: 'churras',
        avatar: 'asd',
        lastMessage: {
          text: 'nao sei man',
          sentAt: '19:88',
          origin: 'receiver'
        }
      }
    ]
  }

  render() {
    return (
      <div className='ConversationsArchive row'>
        {this.state.conversations.map((conversation) => (
          <ConversationsArchiveItem {...conversation} key={conversation.name} />
        ))}
      </div>
    );
  }
}

export default ConversationsArchive;
