(function(){
  'use strict';

  angular.module('app')
    .controller('ProductsController', ProductsController);

  ProductsController.$inject = ['$state', '$log', '$http', '$stateParams', 'products', 'ProductsService'];

  function ProductsController($state, $log, $http, $stateParams, products, ProductsService){
    var vm = this;

    vm.products = products;
    vm.createProduct = createProduct;
    vm.updateProduct = updateProduct;
    vm.deleteProduct = deleteProduct;

    if ($stateParams.id) {
      vm.product = products.find(product => product._id === $stateParams.id);
    }

    function createProduct(){
      ProductsService.createProduct(vm.name, vm.medium, vm.description, vm.artist, vm.price, vm.image);
    }

    function updateProduct(id){
      ProductsService.updateProduct(vm.name, vm.medium, vm.description, vm.price, vm.image);
    }

    function deleteProduct(id){
      ProductsService.deleteProduct()
    }



  }

})();
