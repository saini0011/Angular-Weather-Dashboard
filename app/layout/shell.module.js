(function(){
	var name = "app.shell",
		requires = ["ngRoute"];

	angular.module(name, requires)
		.config(function($routeProvider){
			$routeProvider
				.when("/search",{
					templateUrl: "app/search/search.html",
					controller: "Search"
				})
				.when("/weather/:id",{
					templateUrl: "app/weather/weather.html",
					controller: "Weather"
				})
				.when("forcast/:id",{
					templateUrl: "app/forcast/forcast.html",
					controller: "Forcast"
				})
				.otherwise({
					redirectTo: "/search"
				})
		})

})();