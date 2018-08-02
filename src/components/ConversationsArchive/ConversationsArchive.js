import React, { Component } from 'react';
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
          text: 'Let"s play video game!',
          sentAt: '03/04/2018 09:32',
          origin: 'receiver'
        }
      },
      {
        name: 'I really like Mario Bros',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01/01/1990 21:10',
          origin: 'receiver'
        }
      },
      {
        name: 'I dont know exactly ...',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '15/10/2010 19:08',
          origin: 'receiver'
        }
      },
      {
        name: 'I really like Mario Bros',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01/01/1990 21:10',
          origin: 'receiver'
        }
      },
      {
        name: 'I dont know exactly ...',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '15/10/2010 19:08',
          origin: 'receiver'
        }
      },
      {
        name: 'I really like Mario Bros',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01/01/1990 21:10',
          origin: 'receiver'
        }
      },
      {
        name: 'I dont know exactly ...',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '15/10/2010 19:08',
          origin: 'receiver'
        }
      },
      {
        name: 'I really like Mario Bros',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01/01/1990 21:10',
          origin: 'receiver'
        }
      },
      {
        name: 'I dont know exactly ...',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '15/10/2010 19:08',
          origin: 'receiver'
        }
      },
      {
        name: 'I really like Mario Bros',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01/01/1990 21:10',
          origin: 'receiver'
        }
      },
      {
        name: 'I dont know exactly ...',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '15/10/2010 19:08',
          origin: 'receiver'
        }
      },
      {
        name: 'I really like Mario Bros',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01/01/1990 21:10',
          origin: 'receiver'
        }
      },
      {
        name: 'I dont know exactly ...',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '15/10/2010 19:08',
          origin: 'receiver'
        }
      },
      {
        name: 'I really like Mario Bros',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01/01/1990 21:10',
          origin: 'receiver'
        }
      },
      {
        name: 'I dont know exactly ...',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '15/10/2010 19:08',
          origin: 'receiver'
        }
      }
    ]
  }

  render() {
    return (
      <div className='ConversationsArchive row'>
        {this.state.conversations.map((conversation) => (
          <ConversationsArchiveItem {...conversation} key={conversation.uuid} />
        ))}
      </div>
    );
  }
}

export default ConversationsArchive;
