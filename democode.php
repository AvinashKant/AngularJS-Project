<div class="col-md-4">	
	<img src="assest/images/c.jpg">	
</div>
<div class="col-md-8 loginbox">		

	{{ PostDataResponse }}
	
	<div class="form-group">
		<label for="email">Email address:</label>
		<input type="email" class="form-control" ng-model="loginemail" required >
	</div>
	<div class="form-group">
		<label for="pwd">Password:</label>
		<input type="password" class="form-control" ng-model="upassword" required>
	</div>
	<div class="text-center">
		<button ng-click="loginWithData()" class="btn btn-primary">Login</button>
	</div>
	
</div>

<div class="clearfix"></div>
<hr>

