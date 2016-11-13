import React from 'react';
import { connect } from 'react-redux';

import notificationManager from '../../services/NotificationManager';
import { enableNotifications, disableNotifications } from '../../actions';

import './MyProfile.css';

let style = {
  borderRadius: '50%',
  height: '55px'
};

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

  let notificationToggleText = isNotificationsEnabled ? 'Mute Notification' : 'Enable Notification';
  return (
    <div className='my-profile'>
      <img src={profile.avatar} style={style} alt={profile.name}/>
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
