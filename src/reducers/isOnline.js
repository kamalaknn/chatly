const isOnline = (state = true, action) => {
  switch (action.type) {
    case 'GO_ONLINE':
      return true;
    case 'GO_OFFLINE':
      return false;
    default:
      return state;
  }

};

export default isOnline;
