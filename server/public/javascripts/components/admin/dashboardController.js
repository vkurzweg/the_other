(function() {
  "use strict";

  angular.module("app")
    .controller("DashboardController", DashboardController);

  DashboardController.$inject = ["$state", "LoginService", "$log", "ArtistsService", "artists", "products", "ProductsService"];

  function DashboardController($state, LoginService, $log, ArtistsService, artists, products, ProductsService) {
    var vm = this;

    vm.user = LoginService.user;
    vm.logout = logout;
    vm.showDash = showDash;
    vm.isLoggedIn = false;
    vm.artists = artists;
    vm.products = products;
    vm.createA = createArtist;
    vm.updateA = updateArtist;
    vm.deleteA = deleteArtist;
    vm.createP = createProduct;



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

    function createArtist(){
      ArtistsService.createArtist();
    }

    function updateArtist(){
      ArtistsService.updateArtist();
    }

    function deleteArtist(){
      ArtistsService.deleteArtist();
    }

    function createProduct(){
      ProductsService.createProduct();
    }


  }

})();
