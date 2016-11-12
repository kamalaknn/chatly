const isNotificationsEnabled = (state = false, action) => {
  switch (action.type) {
    case 'ENABLE_NOTIFICATIONS':
      return true;
    case 'DISABLE_NOTIFICATIONS':
      return false;
    default:
      return state;
  }
};

export default isNotificationsEnabled;
