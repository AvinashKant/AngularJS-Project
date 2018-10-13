app.controller("SignUpShowController", function ($scope,$rootScope, $http,$location,$cookies) {

 if($cookies.get('userid')){
  $location.path('/dashboard');
}

$scope.submitUserData = function () {
           // use $.param jQuery function to serialize data from JSON 
           var data = $.param({
           	useremail: $scope.username,
           	userpassword: $scope.password,
            usercpassword: $scope.cpassword
          });

           var config = {
           	headers : {
           		'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
           	}
           }
           $http.post('php/signup.php', data, config)
           .then(
           	function(response){

              if(response['data']=='1'){
                $rootScope.islogin = false;
                $cookies.put('userid', Math.floor(Math.random() * Math.floor(123654)));
                if($cookies.get('userid')){
                  $scope.islogin=$rootScope.islogin;
                  $location.path('/dashboard');
                }
              }else if(response['data']=='0'){
                $scope.checked=true;
                $scope.PostDataResponse = 'Please Check your signup credentials;';
              }else if(response['data']=='2'){
                $scope.checked=true;
                $scope.password = null;
                $scope.cpassword = null;
                $scope.PostDataResponse = 'Email already exist';
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