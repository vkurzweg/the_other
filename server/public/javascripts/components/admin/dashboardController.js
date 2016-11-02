(function() {
  "use strict";

  angular.module("app")
    .controller("DashboardController", DashboardController);

  DashboardController.$inject = ["$state", "LoginService", "$log", "ArtistsService", "artists", "products"];

  function DashboardController($state, LoginService, $log, ArtistsService, artists, products) {
    var vm = this;

    vm.user = LoginService.user;
    vm.logout = logout;
    vm.showDash = showDash;
    vm.isLoggedIn = false;
    vm.artists = artists;
    vm.products = products;


    function logout() {
      LoginService.logout();
      $state.go('home');
    }

    function showDash(){
      vm.isLoggedIn = true;
    }


    function getAllArtists(){
      console.log(vm.artists)
      return vm.artists;
    }

    function getAllProducts(){
      return vm.products;
    }

    function newArtistForm(){
      console.log('clicked')
      $state.go('artist-new');
    }


  }

})();
