export const login = name => ({
  type: 'LOG_IN',
  name
});

export const logout = () => ({
  type: 'LOG_OUT',
});

export const addMessage = message => ({
  type: 'ADD_MESSAGE',
  message
});