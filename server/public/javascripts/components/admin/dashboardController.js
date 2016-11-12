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
    vm.deleteArtistModal = deleteArtistModal;
    vm.deleteProductModal = deleteProductModal;
    vm.currentDeletedId = null;



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
      window.location.reload(true);
    }

    function updateArtist(){
      ArtistsService.updateArtist();
    }

    function deleteArtist(){
      ArtistsService.deleteArtist(vm.currentDeletedId);
      vm.currentDeletedId = null;
      window.location.reload(true);
    }

    function deleteArtistModal(id){
      console.log('clicked')
      $('#delete-confirm-artist').modal();
      vm.currentDeletedId = id;
    }

    function deleteProductModal(id){
      console.log('clicked')
      $('#delete-confirm-product').modal();
      vm.currentDeletedId = id;
    }

    function createProduct(){
      ProductsService.createProduct(vm.name, vm.medium, vm.artist, vm.description, vm.price, vm.image).then(function(response){
        vm.products.push(response.data);
      })
      window.location.reload(true);
    }

    function updateProduct(){
      ProductsService.updateProduct();
    }

    function deleteProduct(){
      ProductsService.deleteProduct(vm.currentDeletedId).then(function(){
        vm.products = vm.products.filter(function(p){
          return p._id !== id;
        })
      });
      vm.currentDeletedId = null;
      window.location.reload(true);
    }

  }

})();
