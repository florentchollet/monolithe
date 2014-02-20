var mnlt, noticesCtrl, noticesFactory;

mnlt = angular.module("mnlt", []);

// config
mnlt.config(function($httpProvider) {
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
});


// noticesCtrl
mnlt.controller("noticesCtrl", noticesCtrl = function($scope, $http) {

	$scope.catName = function(name) {
        return $http.jsonp("http://mvpf.phpnet.org/museevirtuelprotestant/api/get_posts/?post_type=&rubriques=" + name + "&count=-1&callback=JSON_CALLBACK").success(function(data) {
			return $scope.notices = data.posts;
		});
    };

});
