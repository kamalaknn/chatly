class SocketManager {
  setup() {
    let websocket = new WebSocket('wss://echo.websocket.org/');

    this.websocket = websocket;

    websocket.onopen = function(evt) {
      console.log('open');
    };
    websocket.onclose = function(evt) {
      console.log('close');
    };
    websocket.onmessage = (evt) => {
      let message = JSON.parse(evt.data);
      message.isSending = false;
      if (this.onMessage) {
        this.onMessage(message);
      }
    };
    websocket.onerror = function(evt) {
      console.log('error', evt);
    };
  }

  sendMessage(message) {
    this.websocket.send(JSON.stringify(message));
    if (message.outgoing) {
      message.isSending = true;
    }
    return message;
  }
}

export default new SocketManager();
