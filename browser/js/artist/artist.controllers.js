'use strict';
/* ARTIST (SINGULAR) CONTROLLER */

juke.controller('ArtistCtrl', function ($scope, PlayerFactory, artist) {
  $scope.artist = artist;

  //var artistId = $stateParams.artistId;

  //   ArtistFactory.fetchById(artistId)
  //   .then(artist => {
  //     $scope.artist = artist;
  //   })
  //   .catch($log.error);

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.artist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.viewOneAlbum = function (album) {
    $rootScope.$broadcast('viewSwap', { name: 'oneAlbum', id: album._id });
  };

});


/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('ArtistsCtrl', function ($scope, artists) {

   $scope.artists = artists;

  // ArtistFactory.fetchAll()
  // .then(artists => {
  //   $scope.artists = artists;
  // })
  // .catch($log.error);

});
