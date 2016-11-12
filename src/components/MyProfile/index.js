import React from 'react';
import { connect } from 'react-redux';

import notificationManager from '../../services/NotificationManager';
import { enableNotifications, disableNotifications } from '../../actions';

import './MyProfile.css';

let MyProfile = ({profile, isNotificationsEnabled, dispatch}) => {

  function toggleNotification() {
    if (isNotificationsEnabled) {
      dispatch(disableNotifications());
      notificationManager.disableNotifications();
    } else {
      dispatch(enableNotifications());
      notificationManager.enableNotifications();
    }
  }

  let notificationToggleText = isNotificationsEnabled ? 'Disable Notification' : 'Enable Notification';
  return (
    <div className='my-profile'>
      <span>{profile.name}</span>
      <button onClick={toggleNotification}>
        {notificationToggleText}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isNotificationsEnabled: state.isNotificationsEnabled
  };
}

MyProfile = connect(mapStateToProps)(MyProfile);

export default MyProfile;
