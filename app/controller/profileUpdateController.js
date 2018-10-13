app.controller("updateProfileController",function($scope,$cookies,$location,$rootScope,$http){
  if(!$cookies.get('userid')){
    $location.path('/home');
  }

  $http.get("php/getuserprofiledata.php")
  .then(function(response) {    
    $scope.username = response.data.username;
    $scope.userage = parseInt(response.data.age);
    $scope.userabloutme = response.data.abutme;
  });

  $scope.updateUserProfile = function () {
           // use $.param jQuery function to serialize data from JSON 
           $scope.returndata = 'skl';
           var data = $.param({
            username: $scope.username,
            userage: $scope.userage,
            userabloutme: $scope.userabloutme,
            usergendar:$scope.usergendar
          });

           var config = {
            headers : {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
          }
          $http.post('php/updateprofile.php', data, config)
          .then(
            function(response){
              if(response['data']==1){
                $scope.checked=true;
                $scope.returnResponse='Details saved';
              }else{
                $scope.checked=true;
                $scope.returnResponse='try after sometime';
              }              
            }, 
            function(response){
             $scope.ResponseDetails = "Data: " + data +
             "<hr />status: " + status +
             "<hr />headers: " + header +
             "<hr />config: " + config;
           }
           );
        };

      });