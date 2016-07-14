app.controller('ChatCtrl', ['$scope', '$http','chatSocket',
  function ($scope, $http, chatSocket) {
    $http.get('data/chat-users.json').success(function(data) {
      $scope.users = data;
    });
      
     $scope.messages = [];
      

      $scope.sendMessage = function(){
          chatSocket.emit('send message', $scope.messages.text);
          $scope.messages.text = "";
      }
      chatSocket.on('get message', function(data){
          $scope.messages.push(data);
          $scope.$digest();
      })
  }]);
