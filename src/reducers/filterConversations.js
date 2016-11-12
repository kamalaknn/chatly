const filterConversations = (state = '', action) => {
  switch (action.type) {
    case 'FILTER_CONVERSATIONS':
      return action.filterBy;
    default:
      return state;
  }
}

export default filterConversations;
