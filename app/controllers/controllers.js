var mnlt, noticesCtrl, noticesFactory;

mnlt = angular.module("mnlt", []);

// config
mnlt.config(function($httpProvider) {
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
});


// noticesFactory
mnlt.factory("noticesFactory", function($http, $q) {
	return {
		getNotices: function() {
			return $http.jsonp("http://mvpf.phpnet.org/museevirtuelprotestant/api/get_posts/?post_type=notice&count=-1&callback=JSON_CALLBACK");
		}
	};
});


// fnhPlacesCtrl
mnlt.controller("noticesCtrl", noticesCtrl = function($scope, noticesFactory) {
	return noticesFactory.getNotices().success(function(data) {
		return $scope.notices = data.posts;
	});
});
