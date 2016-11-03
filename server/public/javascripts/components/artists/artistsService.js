(function() {
  "use strict";

  angular.module('app')
    .factory('ArtistsService', ArtistsService);

  ArtistsService.$inject = ['$http', '$q', '$state'];

  function ArtistsService($http, $q, $state) {
    var _artists = null;

    var service = {
      artists: getArtists,
      getAllArtists: getAllArtists,
      getOneArtist: getOneArtist,
      createArtist: createArtist,
      updateArtist: updateArtist,
      deleteArtist: deleteArtist
    }

    return service;

    function getArtists(){
      var deferred = $q.defer();
      $http.get('/api/artists').then(function(response){
        _artists = response.data;
        deferred.resolve(_artists);
      }, function(err){
        deferred.reject('Error getting artists');
      });
      return deferred.promise;
    }

    function getAllArtists(){
      return _artists;
    }

    function getOneArtist(artistId){
      $http.get('/api/artists/' + id).then(function(response){
        vm.artist = response.data;
      }, function(err){
        console.error('Error retrieving artist', err)
      })
    }

    function createArtist(name, bio, image){
      return $http.post('/api/artists', {
        name: name,
        bio: bio,
        image: image
      }).then(function(response){
        console.log(response)
        return response;
      })
    }

    function updateArtist(artist){
      return $http.put('api/artists/' + artist._id, artist)
        .then(function(response){
          var updatedArtist = response.data;
          var idx = _artists.findIndex(artist => artist._id === updatedArtist._id);
          _artists[idx] = updatedArtist;
        });
    }

    function deleteArtist(id){
      $http.delete('/api/artists/' + id).then(function(response){
        console.log(response)
      }).then(getArtists)
    }

  }

})();
