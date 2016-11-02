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
      $http.post('/api/artists', {
        name: name,
        bio: bio,
        image: image
      }).then(function(response){
        console.log(response)
      })
    }

    function updateArtist(id){
      $http.put('api/artists/' + id, {
        name: artist.name,
        bio: artist.bio,
        image: artist.image,
      }).then(function(response){
        console.log(response)
      })
    }

    function deleteArtist(id){
      $http.delete('/api/artists/' + id).then(function(response){
        console.log(response)
      }).then(getArtists)
    }

  }

})();
