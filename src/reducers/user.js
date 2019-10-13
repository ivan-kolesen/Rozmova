const initState = {
  id: null,
  name: null,
  isLoggedIn: false
};

const user = (state = initState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        id: action.id,
        name: action.name,
        isLoggedIn: true
      };
    case 'LOG_OUT':
      return initState;
    default:
      return state
  }
};

export default user;