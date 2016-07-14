app.controller('FileUploadCtrl', ['$scope',  function($scope) {
     $scope.onSuccess = function(data){
         $scope.onSuccess = $scope.onSuccess.data
         console.log(data);
     }
//     $scope.getUsers = () => {
//        opticalSrv.getUsers().then( ( users ) => {
//           $scope.users = users.data
//           console.log(users)
//        });
//    }
//    $scope.getUsers();
}]);