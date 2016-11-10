(function(){
	angular.module("app.component")
		.controller("searchBoxCtrlFn",function($scope){
			$scope.search = function(searchStr){
				$scope.$emit("search",{str:searchStr});
			}
		})
		.directive("sidSearchBox",function(){
			return{
				templateUrl : "app/component/search-form.html",
				controller : "searchBoxCtrlFn"

			}
		});


}());