import { viewConversation, enableNotifications, disableNotifications } from '../actions';

class NotificationManager {
  constructor() {
    this.isEnabled = false;
    this.hasNotificationSupport = 'Notification' in window;
    if (this.hasNotificationSupport) {
      this.isNotificationPermissionGranted = Notification.permission === 'granted';
    }
  }

  setup({ isEnabled, store }) {
    this.isEnabled = isEnabled;
    this.store = store;
  }

  enableNotifications() {
    if (!this.hasNotificationSupport) {
      return;
    }

    if (this.isNotificationPermissionGranted) {
      this.isEnabled = true;
      this.store.dispatch(enableNotifications());
    } else {
      Notification.requestPermission().then(() => {
        this.isNotificationPermissionGranted = Notification.permission === 'granted';
        if (this.isNotificationPermissionGranted) {
          this.isEnabled = true;
          this.store.dispatch(enableNotifications());
        }
      }).catch(err => console.error(err));
    }
  }

  disableNotifications() {
    if (this.hasNotificationSupport) {
      this.isEnabled = false;
    }

    this.store.dispatch(disableNotifications());
  }

  canSendNotification() {
    return this.hasNotificationSupport && this.isEnabled && this.isNotificationPermissionGranted;
  }

  sendNotification(message) {
    if (this.canSendNotification()) {
      let notification = new Notification(message.sender.name, {
        body: message.contents,
        tag: message.sender.id,
        icon: message.sender.avatar
      });
      notification.onclick = () => {
        this.store.dispatch(viewConversation(message.sender.id));
      };
    }
  }
}

export default new NotificationManager();
