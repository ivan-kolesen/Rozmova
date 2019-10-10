const websocket = (state = null, action) => {
  switch (action.type) {
    case 'CONNECT_SOCKET':
      return action.socket;
    case 'DISCONNECT_SOCKET':
      return null;
    default:
      return state;
  }
};

export default websocket;