(function(){
  'use strict';

  angular.module('app')
    .controller('ProductsController', ProductsController);

  ProductsController.$inject = ['$state', '$log', '$http', '$stateParams', 'products', 'ProductsService', 'ArtistsService'];

  function ProductsController($state, $log, $http, $stateParams, products, ProductsService, ArtistsService){
    var vm = this;

    vm.products = products;
    vm.artists = [];
    vm.createProduct = createProduct;
    vm.updateProduct = updateProduct;
    vm.deleteProduct = deleteProduct;
    vm.getCurrentProduct = getCurrentProduct;
    vm.currentArtist = null;

    if ($stateParams.id) {
      vm.product = products.find(product => product._id === $stateParams.id);
    }

    function getCurrentProduct(product){
      vm.currentArtist = ArtistsService.getCurrentArtist(product);
      console.log(vm.currentArtist);
    }

    function createProduct(){
      ProductsService.createProduct(vm.name, vm.medium, vm.description, vm.artist, vm.price, vm.image);
    }

    function updateProduct(id){
      ProductsService.updateProduct(vm.product)
      .then(function() {
          $state.go('dashboard');
        });
    }

    function deleteProduct(id){
      ProductsService.deleteProduct()
    }

    function getArtist(){
      vm.artists = ArtistsService.getAllArtists;
    }


  }

})();
