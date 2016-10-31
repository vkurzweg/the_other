(function(){
  'use strict';

  angular.module('app')
    .controller('ArtistsController', ArtistsController);

  ArtistsController.$inject = ['$state', '$log'];

  function ArtistsController($state, $log){
    var vm = this;

    function getArtists(){
      $http.get('http://localhost:3000/api/artists').then(function(response){
        vm.artists = response.data;
      }, function(err){
        console.error('Error getting artists', err)
      })
    }

    function getOneArtist(){
      $http.get('http/localhost:3000/api/artists/' + id).then(function(response){
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
