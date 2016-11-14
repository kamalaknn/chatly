import me from '../constants/me';
import friendsList from '../constants/friendsList';
import { addMessage } from '../actions';

function generateMessageId() {
  return Math.floor(Math.random() * new Date());
}

class MessagingService {
  setup = ({ socketManager, notificationManager, store }) => {
    this.socketManager = socketManager;
    this.socketManager.onMessage = this.captureIncomingMessage;
    this.notificationManager = notificationManager;
    this.store = store;
    this.scheduleRandomIncomingMessages();
  }

  sendMessageTo = (friendId, messageContents) => {
    let friend = friendsList.find(friend => friend.id === friendId);
    let payload = {
      id: generateMessageId(),
      time: new Date(),
      receiver: friend,
      sender: me,
      outgoing: true,
      contents: messageContents
    };

    // copy the outgoing message to simulate an incoming message
    let simulatedReplyTime = new Date();
    simulatedReplyTime.setSeconds(simulatedReplyTime.getSeconds() + 1);

    let payloadForReply = {
      id: generateMessageId(),
      time: simulatedReplyTime,
      sender: friend,
      receiver: me,
      outgoing: false,
      contents: messageContents
    };
    this.store.dispatch(addMessage(this.socketManager.sendMessage(payload)));
    this.socketManager.sendMessage(payloadForReply);
  }

  captureIncomingMessage = (message) => {
    this.store.dispatch(addMessage(message));
    if (!message.outgoing) {
      this.notificationManager.sendNotification(message);
    }
  }

  scheduleRandomIncomingMessages = () => {
    const interval = 1000 * 60 * 5;
    const messageContentsCollection = ['Hello :)', 'Howdy!', 'Hi there', 'O\' hoy', 'Hey buddy', 'Good to see you'];

    setInterval(() => {
      let randomSeed = Math.floor(Math.random() * 13);
      let friend = friendsList[randomSeed % friendsList.length];
      let messageContents = messageContentsCollection[randomSeed % messageContentsCollection.length];
      let payload = {
        id: generateMessageId(),
        time: new Date(),
        receiver: me,
        sender: friend,
        outgoing: false,
        contents: messageContents
      };
      this.socketManager.sendMessage(payload);
    }, interval);
  }
}

export default new MessagingService();
