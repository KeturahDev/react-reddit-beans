export default (state = {}, action) => {
  const { title, author, content, timestamp, amountOfBeans,   id } = action;
  switch (action.type) {
    case 'ADD_BEAN_BOWL':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          author: author,
          content: content,
          timestamp: timestamp,
          amountOfBeans: amountOfBeans,
          id: id 
        }
      });
    case 'DELETE_BEAN_BOWL':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;    
  }
};