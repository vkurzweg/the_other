(function(){
  'use strict';

  angular.module('app')
    .controller('ArtistsController', ArtistsController);

  ArtistsController.$inject = ['$state', '$log', '$http', '$stateParams', 'artists', 'ArtistsService'];

  function ArtistsController($state, $log, $http, $stateParams, artists, ArtistsService){
    var vm = this;
    vm.artists = artists;
    vm.createA = createArtist;
    vm.updateA = updateArtist;
    vm.deleteA = deleteArtist;

    if ($stateParams.id) {
      vm.artist = artists.find(artist => artist._id === $stateParams.id);
    }

    function createArtist(){
      ArtistsService.createA(vm.name, vm.bio, vm.image)
    }

    function updateArtist(id){
      ArtistsService.updateA(vm.name, vm.bio, vm.image)
    }

    function deleteArtist(id){
      ArtistsService.deleteA(vm.name, vm.bio, vm.image)
    }

  }

})();
