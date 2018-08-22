export const Types = {
  LOAD: 'message/LOAD',
  CREATE: 'message/CREATE',
  REMOVE: 'message/REMOVE',
  REMOVE_ALL: 'message/REMOVE_ALL'
}

const INITIAL_STATE = [
  {
    text: 'e ai cid 1',
    uuid: `uuid-1${(new Date()).toISOString()}`,
    sentAt: '07/12/2011 15:55',
    conversationId: 1,
    origin: 'receiver'
  },
  {
    text: 'e ai cid 2',
    uuid: `uuid-2${(new Date()).toISOString()}`,
    sentAt: '07/12/2011 15:55',
    conversationId: 2,
    origin: 'receiver'
  },
  {
    text: 'e ai cid 3',
    uuid: `uuid-3${(new Date()).toISOString()}`,
    sentAt: '07/12/2011 15:55',
    conversationId: 3,
    origin: 'sender'
  }
]

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD:
      return INITIAL_STATE.filter(message => message.conversationId === action.conversationId)
    case Types.CREATE:
      return [...state, action.message]
    case Types.REMOVE:
      return state.filter(message => message.id !== action.id)
    case Types.REMOVE_ALL:
      return []
    default:
      return state
  }
}

export const load = conversation => ({ type: Types.LOAD, conversationId: conversation.id })
export const create = message => ({ type: Types.CREATE, message })
export const remove = id => ({ type: Types.REMOVE, id })
export const removeAll = () => ({ type: Types.REMOVE_ALL })

export default reducer
