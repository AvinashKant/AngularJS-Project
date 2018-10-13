 var app = angular.module('FirstProjectApp',["ngRoute","ngCookies"]);

 app.value("projectName", 'angularjs1');

 app.config(function($routeProvider){
 	$routeProvider.
 	when("/Login",{
 		templateUrl : "view/login_event.html",
 		controller: "LoginShowController"
 	}).
 	when("/SignUp", {
 		templateUrl: "view/signup_event.html",
 		controller: "SignUpShowController"
 	}).
 	when("/home", {
 		templateUrl: "view/landing_event.html",
 		controller: "ShowLandingController"
 	}).
 	when("/dashboard", {
 		templateUrl: "view/user/dashboard_event.html",
 		controller: "dashboardController"
 	}).
 	when("/logout", {
 		templateUrl: "view/landing_event.html",
 		controller: "logoutController"
 	}).
 	when("/uppro", {
 		templateUrl: "view/user/update_profile_event.html",
 		controller: "updateProfileController"
 	}).
 	when("/friend", {
 		templateUrl: "view/user/friend_event.html",
 		controller: "friendController"
 	}).
 	otherwise ({
 		redirectTo: '/home'
 	});
 });
 

 app.controller("ShowLandingController",function($scope,$cookies){
 	$scope.islogin = $cookies.get('userid');
 });

 app.controller("homeController",function($scope,$cookies,$rootScope){
 	if($cookies.get('userid')){
 		$rootScope.islogin = false;
 	}else{
 		$rootScope.islogin = true;
 	} 	
 });

 app.controller("logoutController",function($scope,$cookies,$location,$rootScope){
 	$cookies.remove('userid');
 	$rootScope.islogin= true;
 	$scope.islogin=$rootScope.islogin;
 	$location.path('/dashboard');
 	$location.path('/home');
 	//window.location.reload(true);

 });


 app.controller("dashboardController",function($scope,$cookies,$location,$rootScope){
 	if(!$cookies.get('userid')){
 		$location.path('/home');
 	}

 });

 app.controller("friendController",function($scope,$cookies,$location,$rootScope){
 	if(!$cookies.get('userid')){
 		$location.path('/home');
 	}
 });