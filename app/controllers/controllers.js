var mnlt, noticesCtrl, noticesFactory;

mnlt = angular.module("mnlt", []);

// config
mnlt.config(function($httpProvider) {
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
});


// noticesCtrl
mnlt.controller("noticesCtrl", noticesCtrl = function($scope, $http) {

	$scope.catName = function(name, lang) {

        // Get the wordpress json
        $http.jsonp("http://mvpf.phpnet.org/museevirtuelprotestant" + lang + "/api/get_posts/?post_type=&rubriques=" + name + "&count=-1&callback=JSON_CALLBACK").success(function(data, status) {
			
			if ( data.count != 0 ) {
				$scope.notices = data.posts;				
			} else {
				console.log("Pas de notice dans : " + name);
				$scope.notices = "";				
			}

			$scope.currentCat = name;
			$scope.currentLang = lang;

		});
    };

});
