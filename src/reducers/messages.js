const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          ...action.message
        }
      ];
      break;
    case 'CLEAR_MESSAGES':
      return [];
      break;
    default:
      return state
  }
};

export default messages;