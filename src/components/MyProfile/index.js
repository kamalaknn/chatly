import React from 'react';
import { connect } from 'react-redux';
import notificationManager from '../../services/NotificationManager';
import './MyProfile.css';

let MyProfile = ({profile, isNotificationsEnabled, dispatch}) => {

  function toggleNotification() {
    if (isNotificationsEnabled) {
      dispatch({
        type: 'DISABLE_NOTIFICATIONS'
      });
      notificationManager.disableNotifications();
    } else {
      dispatch({
        type: 'ENABLE_NOTIFICATIONS'
      });
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
