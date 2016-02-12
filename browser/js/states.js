juke.config(function($stateProvider) {
	$stateProvider.state('albumList', {
		url: '/albums',
		templateUrl: './views/albums.html',
		resolve: {
			albums: function(AlbumsFactory) {
				return AlbumsFactory.fetchAll();
			}
		}, 
		controller: 'AlbumsCtrl'
            
	})
});

juke.config(function($stateProvider) {
	$stateProvider.state('artistsList', {
		url: '/artists',
		templateUrl: './views/artists.html',
		resolve: {
			artists: function(ArtistFactory) {
				return ArtistFactory.fetchAll();
			}
		}, 
		controller: 'ArtistsCtrl'       
	})
});


juke.config(function($stateProvider) {
	$stateProvider.state('album', {
		url: '/albums/:albumId',
		templateUrl: './views/album.html',
		controller: 'AlbumCtrl'
            
	})
});

juke.config(function($stateProvider) {
	$stateProvider.state('artist', {
		url: '/artists/:artistId',
		templateUrl: './views/artist.html',

		controller: 'ArtistCtrl'

	})
});


juke.config(function($stateProvider) {
	$stateProvider.state('artist.albums', {
		url: '/artists/:artistId/albums',
		templateUrl: './views/artist_albums.html',
		controller: 'ArtistCtrl'       
	})
});

juke.config(function($stateProvider) {
	$stateProvider.state('artist.songs', {
		url: '/artists/:artistId/songs',
		templateUrl: './views/artist_songs.html',
		controller: 'ArtistCtrl'       
	})
});










