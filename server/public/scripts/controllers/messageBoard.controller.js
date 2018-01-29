messageApp.controller('MessageController', ['$http', function($http) {
    console.log('in MessageController');
    const self = this;

    self.newMessage = {};


    self.postMessage = function(messageObject) {
        console.log(messageObject);
        
        $http.post('/messageBoard', messageObject)
        .then(function (response) {
            console.log('Message post: ', response);
        })
        .catch(function (response) {
            console.log('Error with message post :', response);
        })
    }
}])