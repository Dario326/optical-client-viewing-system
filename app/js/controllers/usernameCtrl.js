app.controller("userNameCtrl", function($scope, $sce, opticalSrv){
    $scope.getUsers = () => {
        opticalSrv.getUsers().then( ( users ) => {
           $scope.users = users.data
//           console.log(users)
        });
    }
    $scope.getUsers();
    
    
    $scope.date = new Date();
    
    $scope.saveClient = function(name, company, email, phone, address){
        $scope.saveClient = opticalSrv.postUsers({name: name, company: company, email: email, phone: phone, address: address})
        $scope.name = "";
        $scope.company = "";
        $scope.email = "";
        $scope.phone = "";
        $scope.address = "";
    }
    
    $scope.website = "";
    
    $scope.onSuccess = function(data){
       $scope.onSuccess = opticalSrv.postPictures({url: data.url});
        console.log(data.url);
    }
    
     $scope.getPictures = () => {
        opticalSrv.getPictures().then( ( pictures ) => {
           $scope.pictures = pictures.data;
           console.log(pictures);
            $scope.pictures = $sce.trustAsResourceUrl($scope.pictures[2].url);
        });
    }
     $scope.getPictures();

    
})