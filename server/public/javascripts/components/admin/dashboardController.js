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
    vm.createArtist = createArtist;
    vm.updateArtist = updateArtist;
    vm.deleteArtist = deleteArtist;
    vm.createProduct = createProduct;
    vm.updateProduct = updateProduct;
    vm.deleteProduct = deleteProduct;



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
      ArtistsService.createArtist(vm.name, vm.bio, vm.image).then(function(response){
      vm.artists.push(response.data);
      })
    }

    function updateArtist(){
      ArtistsService.updateArtist();
    }

    function deleteArtist(id){
      ArtistsService.deleteArtist();
    }

    function createProduct(){
      ProductsService.createProduct(vm.name, vm.medium, vm.artist, vm.description, vm.image).then(function(response){
        vm.artist.products.push(response.data);
      })
    }

    function updateProduct(){
      ProductsService.updateProduct();
    }

    function deleteProduct(id){
      ProductsService.deleteProduct();
    }

  }

})();
