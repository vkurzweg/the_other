(function(){
  'use strict';

  angular.module('app')
    .controller('ArtistsController', ArtistsController);

  ArtistsController.$inject = ['$state', '$log', '$http', '$stateParams'];

  function ArtistsController($state, $log, $http, $stateParams){
    var vm = this;

    function getArtists(){
      $http.get('http://localhost:3000/api/artists').then(function(response){
        vm.artists = response.data;
      }, function(err){
        console.error('Error getting artists', err)
      })
    }

    getArtists();

    function getOneArtist(){
      var id = $stateParams.id;
      $http.get('http/localhost:3000/api/artists/' + id).then(function(response){
        vm.artist = response.data;
      }, function(err){
        console.error('Error retrieving artist', err)
      })
    }

    getOneArtist();

    // function getOneArtist(){
    //   var id = $stateParams.id;
    //   $state.go('artist-detail');
    // }

    function createArtist(){

    }

    function updateArtist(id){

    }

    function deleteArtist(id){

    }

  }

})();
