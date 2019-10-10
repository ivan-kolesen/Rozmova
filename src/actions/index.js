export const login = (id, name) => ({
  type: 'LOG_IN',
  id,
  name
});

export const logout = () => ({
  type: 'LOG_OUT',
});

export const addMessage = message => ({
  type: 'ADD_MESSAGE',
  message
});

export const clearMessages = () => ({
  type: 'CLEAR_MESSAGES'
});

export const connectWS = socket => ({
  type: 'CONNECT_SOCKET',
  socket
});

export const disconnectWS = () => ({
  type: 'DISCONNECT_SOCKET'
});