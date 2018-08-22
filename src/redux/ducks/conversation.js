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
    id: 1,
    name: 'Conversa 1',
    avatar: avatar,
    lastMessage: {
      text: 'Let"s play video game!',
      sentAt: '03/04/2018 09:32',
      origin: 'receiver'
    }
  },
  {
    uuid: 'uuid2',
    id: 2,
    name: 'Conversa 2',
    avatar: avatar,
    lastMessage: {
      text: 'eu fui ontem',
      sentAt: '01/01/1990 21:10',
      origin: 'receiver'
    }
  },
  {
    uuid: 'uuid3',
    id: 3,
    name: 'Conversa 3',
    avatar: avatar,
    lastMessage: {
      text: 'nao sei man',
      sentAt: '15/10/2010 19:08',
      origin: 'sender'
    }
  },
  {
    uuid: 'uuid4',
    id: 4,
    name: 'Conversa 4',
    avatar: avatar,
    lastMessage: {
      text: 'eu fui ontem',
      sentAt: '01/01/1990 21:10',
      origin: 'receiver'
    }
  },
  {
    uuid: 'uuid5',
    id: 5,
    name: 'Conversa 5',
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
