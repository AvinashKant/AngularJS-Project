app.controller("LoginShowController", function ($scope,$rootScope, $http,$location,$cookies) {

 if($cookies.get('userid')){
  $location.path('/dashboard');
}
$scope.loginWithData = function () {
           // use $.param jQuery function to serialize data from JSON          
           var data = $.param({
           	useremail: $scope.username,
           	userpassword: $scope.password
           });
           var config = {
           	headers : {
           		'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
           	}
           }
           $http.post('php/login.php', data, config)
           .then(
           	function(response){

              if(response['data']=='YES'){
                $rootScope.islogin = false;
                $cookies.put('userid', Math.floor(Math.random() * Math.floor(123654)));
                //$location.path('/dashboard');
                //window.location.reload(true);
                if($cookies.get('userid')){
                  $scope.islogin=$rootScope.islogin;
                  $location.path('/dashboard');
                }
              }else if(response['data']=='NO'){
                $scope.checked=true;
                $scope.PostDataResponse = 'Please Check your login credentials;';
               // $window.location.href = $location.protocol()+"/"+$location.host()+'/'+projectName+'/dashboard';
                //alert($location.absUrl()+" "+$location.protocol()+" "+$location.host()+" "+$location.port()+" "+$location.path()+" "+$location.search()+" "+$location.hash());
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