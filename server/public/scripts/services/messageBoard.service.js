messageApp.service('MessageService', ['$http', function($http) {
    const self = this;

    self.messages = {list: []}

    self.postMessage = function(messageObject) {
        console.log(messageObject);
        
        $http.post('/messageBoard', messageObject)
            .then(function (response) {
                console.log('Message post: ', response);
                getMessages();
                self.newMessage = {}
            })
            .catch(function (response) {
                console.log('Error with message post :', response);
            });
    };

    function getMessages() {
        $http.get('/messageBoard')
            .then(function (response) {
                console.log('Getting messages: ', response);
                self.messages.list = response.data
                
            })
            .catch(function (response) {
                console.log('Error getting messages: ', response);
            });
    };

    getMessages();
}])