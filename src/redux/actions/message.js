import { messageActionTypes } from '../reducers/message';

export const load = () => {
  return (dispatch) => {
    dispatch({ type: messageActionTypes.LOAD, messages: [{
      text: 'Hey! Whats up EITA LASQUERA?',
      sentAt: '10/10/1990 13:33',
      origin: 'receiver'
    }] });
  }
}

export const create = (message) => {
  return (dispatch) => {
    dispatch({ type: messageActionTypes.CREATE, message: message });
  }
}

export const destroy = (id) => {
  return (dispatch) => {
    dispatch({ type: messageActionTypes.DESTROY, id: id });
  }
}

export const destroyAll = () => {
  return (dispatch) => {
    dispatch({ type: messageActionTypes.DESTROY_ALL });
  }
}
