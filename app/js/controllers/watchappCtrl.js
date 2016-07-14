app.controller('WatchAppController', ['$scope', function($scope) {

     $scope.roomName = '';
    $scope.joinedRoom = false;
    $scope.videoList = []; // initialize videoList variable to hold all videos coming to watch-room directive
    $scope.joinRoom = function () {
      $scope.$broadcast('joinRoom');
    };
    $scope.leaveRoom = function () {
      $scope.$broadcast('leaveRoom');
}]);