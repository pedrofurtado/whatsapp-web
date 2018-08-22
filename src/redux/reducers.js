import { combineReducers } from 'redux'

import messages from './ducks/message'
import conversations from './ducks/conversation'

export default combineReducers({
  messages,
  conversations
})
