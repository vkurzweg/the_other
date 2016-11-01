(function(){
  'use strict';

  angular.module('app')
    .controller('ArtistsController', ArtistsController);

  ArtistsController.$inject = ['$state', '$log', '$http', '$stateParams', 'artists'];

  function ArtistsController($state, $log, $http, $stateParams, artists){
    var vm = this;
    vm.artists = artists;

    if ($stateParams.id) {
      vm.artist = artists.find(artist => artist._id === $stateParams.id);
    }

    function createArtist(){

    }

    function updateArtist(id){

    }

    function deleteArtist(id){

    }

  }

})();
