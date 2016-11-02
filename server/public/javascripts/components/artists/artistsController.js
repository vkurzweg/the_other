(function(){
  'use strict';

  angular.module('app')
    .controller('ArtistsController', ArtistsController);

  ArtistsController.$inject = ['$state', '$log', '$http', '$stateParams', 'artists', 'ArtistsService'];

  function ArtistsController($state, $log, $http, $stateParams, artists, ArtistsService){
    var vm = this;
    vm.artists = artists;
    vm.create = createArtist;

    if ($stateParams.id) {
      vm.artist = artists.find(artist => artist._id === $stateParams.id);
    }

    function createArtist(){
      ArtistsService.create(vm.name, vm.bio, vm.image)
    }

    function updateArtist(id){

    }

    function deleteArtist(id){

    }

  }

})();
