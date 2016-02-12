juke.config(function($stateProvider) {
	$stateProvider.state('albumList', {
		url: '/albums',
		templateUrl: './views/albums.html',
		resolve: {
			albums: function(AlbumFactory) {
				return AlbumFactory.fetchAll()
				.catch(function(err) {
					console.log(err);
				})
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
		controller: 'AlbumCtrl',
		resolve: {
			theAlbum: function(AlbumFactory, $stateParams) {
				return AlbumFactory.fetchById($stateParams.albumId)
			}
		}        
	})
});

juke.config(function($stateProvider) {
	$stateProvider.state('artist', {
		url: '/artists/:artistId',
		templateUrl: './views/artist.html',
		resolve: {
			artist: function(ArtistFactory, $stateParams) {
				return ArstistFactory.fetchById($stateParams.artistId)
			}
		}, 
		controller: 'ArtistCtrl'

	})
});


juke.config(function($stateProvider) {
	$stateProvider.state('artist.albums', {
		url: '/albums',
		templateUrl: './views/artist_albums.html'     
	})
});

juke.config(function($stateProvider) {
	$stateProvider.state('artist.songs', {
		url: '/songs',
		templateUrl: './views/artist_songs.html'      
	})
});










