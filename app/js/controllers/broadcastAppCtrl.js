app.controller('BroadcastAppController', ['$scope', function($scope) {

    $scope.hasStream = false;
    $scope.roomName = '';
    $scope.isBroadcasting = '';
    $scope.prepare = function prepare() {
      $scope.$broadcast('prepare');
    };
    $scope.start = function start() {
      $scope.$broadcast('start');
    };
}]);
/* EOF */
