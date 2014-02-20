var mnlt, noticesCtrl, noticesFactory;

mnlt = angular.module("mnlt", []);

// config
mnlt.config(function($httpProvider) {
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
});


// noticesFactory
mnlt.factory("noticesFactory", function($http, $q) {
	return {
		// Get all notices
		getNotices: function() {
			return $http.jsonp("http://mvpf.phpnet.org/museevirtuelprotestant/api/get_posts/?post_type=notice&count=-1&callback=JSON_CALLBACK");
		},
		// Get all "Grandes Dates" notices
		getGrandesDates: function() {
			return $http.jsonp("http://mvpf.phpnet.org/museevirtuelprotestant/api/get_posts/?post_type=notice&rubriques=grandes-dates&count=-1&callback=JSON_CALLBACK");
		},
		// Get all "Histoire" notices
		getHistoire: function() {
			return $http.jsonp("http://mvpf.phpnet.org/museevirtuelprotestant/api/get_posts/?post_type=notice&rubriques=histoire&count=-1&callback=JSON_CALLBACK");
		},
		// Get all "Personnalités" notices
		getPersonnalites: function() {
			return $http.jsonp("http://mvpf.phpnet.org/museevirtuelprotestant/api/get_posts/?post_type=notice&rubriques=personnalites&count=-1&callback=JSON_CALLBACK");
		},
		// Get all "Thèmes" notices
		getThemes: function() {
			return $http.jsonp("http://mvpf.phpnet.org/museevirtuelprotestant/api/get_posts/?post_type=notice&rubriques=themes&count=-1&callback=JSON_CALLBACK");
		},
		// Get all "Art - Patrimoine" notices
		getArtPatrimoine: function() {
			return $http.jsonp("http://mvpf.phpnet.org/museevirtuelprotestant/api/get_posts/?post_type=notice&rubriques=art-patrimoine&count=-1&callback=JSON_CALLBACK");
		}
	};
});


// noticesCtrl
mnlt.controller("noticesCtrl", noticesCtrl = function($scope, $http) {

	$scope.catName = function(name) {
        return $http.jsonp("http://mvpf.phpnet.org/museevirtuelprotestant/api/get_posts/?post_type=notice&rubriques=" + name + "&count=-1&callback=JSON_CALLBACK").success(function(data) {
			return $scope.notices = data.posts;
		});
    };

});
