(function(){
	var name = "app",
		requires = ["app.shell",
					"app.search",
					"app.weather",
					"app.forcast",
					"app.component",
					"app.data"];

	angular.module(name, requires)
		.run(['$route', function($route){
			$route.reload();
		}]);	

})();