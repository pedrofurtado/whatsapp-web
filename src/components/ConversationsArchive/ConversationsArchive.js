import React, { Component } from 'react';
import uuid from 'uuid/v1';
import avatar from './avatar.png';
import './ConversationsArchive.css';
import ConversationsArchiveItem from './components/ConversationsArchiveItem/ConversationsArchiveItem';

class ConversationsArchive extends Component {
  state = {
    conversations: [
      {
        name: 'Grupo 1',
        avatar: avatar,
        lastMessage: {
          text: 'bora la?',
          sentAt: '01/0121',
          origin: 'receiver'
        }
      },
      {
        name: 'eita kkkk',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01-01-1990',
          origin: 'receiver'
        }
      },
      {
        name: 'churras',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '19:88',
          origin: 'receiver'
        }
      },
      {
        name: 'eita kkkk',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01-01-1990',
          origin: 'receiver'
        }
      },
      {
        name: 'churras',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '19:88',
          origin: 'receiver'
        }
      },
      {
        name: 'eita kkkk',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01-01-1990',
          origin: 'receiver'
        }
      },
      {
        name: 'churras',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '19:88',
          origin: 'receiver'
        }
      },
      {
        name: 'eita kkkk',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01-01-1990',
          origin: 'receiver'
        }
      },
      {
        name: 'churras',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '19:88',
          origin: 'receiver'
        }
      },
      {
        name: 'eita kkkk',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01-01-1990',
          origin: 'receiver'
        }
      },
      {
        name: 'churras',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '19:88',
          origin: 'receiver'
        }
      },
      {
        name: 'eita kkkk',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01-01-1990',
          origin: 'receiver'
        }
      },
      {
        name: 'churras',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '19:88',
          origin: 'receiver'
        }
      },
      {
        name: 'eita kkkk',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01-01-1990',
          origin: 'receiver'
        }
      },
      {
        name: 'churras',
        avatar: avatar,
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
          <ConversationsArchiveItem {...conversation} key={uuid()} />
        ))}
      </div>
    );
  }
}

export default ConversationsArchive;
