(function() {
  "use strict";

  angular.module('app')
    .factory('ArtistsService', ArtistsService);

  ArtistsService.$inject = ['$http', '$q'];

  function ArtistsService($http, $q) {
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


    function createArtist(){

    }

    function updateArtist(id){

    }

    function deleteArtist(id){

    }

  }

})();
