export const Types = {
  LOAD: 'message/LOAD',
  CREATE: 'message/CREATE',
  REMOVE: 'message/REMOVE',
  REMOVE_ALL: 'message/REMOVE_ALL'
}

const INITIAL_STATE = [
  {
    text: 'e ai',
    uuid: `uuid-${(new Date()).toISOString()}`,
    sentAt: '07/12/2011 15:55',
    origin: 'receiver'
  }
]

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD:
      return [...action.messages]
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

export const load = messages => ({ type: Types.LOAD, messages })
export const create = message => ({ type: Types.CREATE, message })
export const remove = id => ({ type: Types.REMOVE, id })
export const removeAll = () => ({ type: Types.REMOVE_ALL })

export default reducer
