class NotificationManager {
  constructor() {
    this.isEnabled = false;
    this.hasNotificationSupport = 'Notification' in window;
    if (this.hasNotificationSupport) {
      this.isNotificationPermissionGranted = Notification.permission === 'granted';
    }
  }

  enableNotifications() {
    if (!this.hasNotificationSupport) {
      return;
    }

    if (this.isNotificationPermissionGranted) {
      this.isEnabled = true;
    } else {
      Notification.requestPermission().then(() => {
        this.isNotificationPermissionGranted = Notification.permission === 'granted';
        this.isEnabled = true;
      }).catch(err => console.error(err));
    }
  }

  disableNotifications() {
    if (this.hasNotificationSupport) {
      this.isEnabled = false;
    }
  }

  canSendNotification() {
    return this.hasNotificationSupport && this.isEnabled && this.isNotificationPermissionGranted;
  }

  sendNotification(message) {
    if (this.canSendNotification()) {
      new Notification(message.from, {
        body: message.contents
      });
    }
  }
}

export default new NotificationManager();
