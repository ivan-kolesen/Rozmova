const user = (state = "", action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        name: action.name,
        loggedIn: true
      };
    case 'LOG_OUT':
      return "";
    default:
      return state
  }
};

export default user;