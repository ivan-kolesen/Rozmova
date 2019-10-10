const initState = {
  id: null,
  name: null,
  isLoggedIn: false
};

const user = (state = initState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      console.log("user1")
      return {
        id: action.id,
        name: action.name,
        isLoggedIn: true
      };
    case 'LOG_OUT':
      console.log("user2")
      return initState;
    default:
      console.log("user3")
      return state
  }
};

export default user;