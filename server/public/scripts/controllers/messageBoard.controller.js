messageApp.controller('MessageController', ['MessageService', function(MessageService) {
    console.log('in MessageController');
    const self = this;

    self.newMessage = {};

    self.messages = MessageService.messages

    self.postMessage = function(messageObject) {
        MessageService.postMessage(messageObject);
    }

}])