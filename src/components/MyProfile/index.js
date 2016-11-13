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

  let notificationToggleText = isNotificationsEnabled ? 'Mute Notifications' : 'Enable Notifications';
  return (
    <div className='my-profile'>
      <img src={profile.avatar} className='my-profile--avatar' alt={profile.name}/>
      <div className='my-profile--info'>
        <div>{profile.name}</div>
        <div className='my-profile--actions'>
          <button className='my-profile--action-button' onClick={toggleNotification}>
            {notificationToggleText}
          </button>
        </div>
      </div>
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
