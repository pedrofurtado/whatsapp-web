import avatar from '../../components/ConversationsArchive/avatar.png'

export const Types = {
  LOAD: 'conversation/LOAD',
  CREATE: 'conversation/CREATE',
  REMOVE: 'conversation/REMOVE',
  REMOVE_ALL: 'conversation/REMOVE_ALL'
}

const INITIAL_STATE = [
  {
    uuid: 'uuid1',
    id: 'uuid1',
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
    id: 'uuid2',
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
    id: 'uuid3',
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
    id: 'uuid4',
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
    id: 'uuid5',
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
    id: 'uuid6',
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
    id: 'uuid7',
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
    id: 'uuid8',
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
    id: 'uuid9',
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
    id: 'uuid10',
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
    id: 'uuid11',
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
    id: 'uuid12',
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
    id: 'uuid13',
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
    id: 'uuid14',
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
    id: 'uuid15',
    name: 'I dont know exactly ...',
    avatar: avatar,
    lastMessage: {
      text: 'nao sei man',
      sentAt: '15/10/2010 19:08',
      origin: 'receiver'
    }
  }
]

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD:
      return [...action.conversations]
    case Types.CREATE:
      return [action.conversation, ...state]
    case Types.REMOVE:
      return state.filter(conversation => conversation.id !== action.id)
    case Types.REMOVE_ALL:
      return []
    default:
      return state
  }
}

export const load = conversations => ({ type: Types.LOAD, conversations })
export const create = conversation => ({ type: Types.CREATE, conversation })
export const remove = id => ({ type: Types.REMOVE, id })
export const removeAll = () => ({ type: Types.REMOVE_ALL })

export default reducer
