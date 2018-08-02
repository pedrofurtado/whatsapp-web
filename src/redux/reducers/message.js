export const messageActionTypes = {
  LOAD: 'MESSAGE_LOAD',
  DESTROY: 'MESSAGE_DESTROY',
  DESTROY_ALL: 'MESSAGE_DESTROY_ALL',
  CREATE: 'MESSAGE_CREATE'
};

export default (state = [], action) => {
  switch(action.type) {
    case messageActionTypes.LOAD:
      return [...action.messages];
    case messageActionTypes.DESTROY:
      return state.filter((message) => message.id !== action.id);
    case messageActionTypes.DESTROY_ALL:
      return [];
    case messageActionTypes.CREATE:
      return [action.message, ...state];
    default:
      return state;
  }
};
