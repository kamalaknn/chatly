class SocketManager {
  setup() {
    let websocket = new WebSocket('ws://echo.websocket.org/');

    this.websocket = websocket;

    websocket.onopen = function(evt) {
      console.log('open');
    };
    websocket.onclose = function(evt) {
      console.log('close');
    };
    websocket.onmessage = (evt) => {
      if (this.onMessage) {
        this.onMessage(JSON.parse(evt.data));
      }
    };
    websocket.onerror = function(evt) {
      console.log('error', evt);
    };
  }

  sendMessage(conversationId, message) {
    this.websocket.send(JSON.stringify({conversationId, message}));
  }
}

export default new SocketManager();
