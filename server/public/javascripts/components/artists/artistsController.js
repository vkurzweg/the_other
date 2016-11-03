(function(){
  'use strict';

  angular.module('app')
    .controller('ArtistsController', ArtistsController);

  ArtistsController.$inject = ['$state', '$log', '$http', '$stateParams', 'artists', 'ArtistsService'];

  function ArtistsController($state, $log, $http, $stateParams, artists, ArtistsService){
    var vm = this;
    vm.artists = artists;
    vm.createArtist = createArtist;
    vm.updateArtist = updateArtist;
    vm.deleteArtist = deleteArtist;

    if ($stateParams.id) {
      vm.artist = artists.find(artist => artist._id === $stateParams.id);
    }

    function createArtist(){
      ArtistsService.createArtist(vm.name, vm.bio, vm.image)
    }

    function updateArtist(id){
      ArtistsService.updateArtist(vm.artist)
        .then(function() {
          $state.go('dashboard');
        });
    }

    function deleteArtist(id){
      ArtistsService.deleteArtist(vm.name, vm.bio, vm.image)
    }

  }

})();
