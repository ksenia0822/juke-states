juke.config(function($stateProvider) {
	$stateProvider.state('albumList', {
		url: '/albums',
		templateUrl: './views/albums.html',
		controller: 'AlbumsCtrl'
            
	})
});

juke.config(function($stateProvider) {
	$stateProvider.state('albumList', {
		url: '/albums',
		templateUrl: './views/albums.html',
		controller: 'AlbumsCtrl'       
	})
});