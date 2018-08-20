import React, { Component } from 'react'
import avatar from './avatar.png'
import './ConversationsArchive.css'
import ConversationsArchiveItem from './components/ConversationsArchiveItem/ConversationsArchiveItem'

class ConversationsArchive extends Component {
  state = {
    conversations: [
      {
        uuid: 'uuid1',
        name: 'Grupo 1',
        avatar: avatar,
        lastMessage: {
          text: 'Let"s play video game!',
          sentAt: '03/04/2018 09:32',
          origin: 'receiver'
        }
      },
      {
        uuid: 'uuid2',
        name: 'I really like Mario Bros',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01/01/1990 21:10',
          origin: 'receiver'
        }
      },
      {
        uuid: 'uuid3',
        name: 'I dont know exactly ...',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '15/10/2010 19:08',
          origin: 'receiver'
        }
      },
      {
        uuid: 'uuid4',
        name: 'I really like Mario Bros',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01/01/1990 21:10',
          origin: 'receiver'
        }
      },
      {
        uuid: 'uuid5',
        name: 'I dont know exactly ...',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '15/10/2010 19:08',
          origin: 'receiver'
        }
      },
      {
        uuid: 'uuid6',
        name: 'I really like Mario Bros',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01/01/1990 21:10',
          origin: 'receiver'
        }
      },
      {
        uuid: 'uuid7',
        name: 'I dont know exactly ...',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '15/10/2010 19:08',
          origin: 'receiver'
        }
      },
      {
        uuid: 'uuid8',
        name: 'I really like Mario Bros',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01/01/1990 21:10',
          origin: 'receiver'
        }
      },
      {
        uuid: 'uuid9',
        name: 'I dont know exactly ...',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '15/10/2010 19:08',
          origin: 'receiver'
        }
      },
      {
        uuid: 'uuid10',
        name: 'I really like Mario Bros',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01/01/1990 21:10',
          origin: 'receiver'
        }
      },
      {
        uuid: 'uuid11',
        name: 'I dont know exactly ...',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '15/10/2010 19:08',
          origin: 'receiver'
        }
      },
      {
        uuid: 'uuid12',
        name: 'I really like Mario Bros',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01/01/1990 21:10',
          origin: 'receiver'
        }
      },
      {
        uuid: 'uuid13',
        name: 'I dont know exactly ...',
        avatar: avatar,
        lastMessage: {
          text: 'nao sei man',
          sentAt: '15/10/2010 19:08',
          origin: 'receiver'
        }
      },
      {
        uuid: 'uuid14',
        name: 'I really like Mario Bros',
        avatar: avatar,
        lastMessage: {
          text: 'eu fui ontem',
          sentAt: '01/01/1990 21:10',
          origin: 'receiver'
        }
      },
      {
        uuid: 'uuid15',
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
    )
  }
}

export default ConversationsArchive
