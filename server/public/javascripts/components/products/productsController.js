(function(){
  'use strict';

  angular.module('app')
    .controller('ProductsController', ProductsController);

  ProductsController.$inject = ['$state', '$log', '$http', '$stateParams', 'products'];

  function ProductsController($state, $log, $http, $stateParams, products){
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
      ProductsService.updateProduct(vm.name, vm.medium, vm.description, vm.artist, vm.price, vm.image)
    }

    function deleteProduct(id){
      ProductsService.deleteProduct()
    }

    // function getProducts(){
    //   $http.get('http://localhost:3000/api/products').then(function(response){
    //     vm.products = response.data;
    //   }, function(err){
    //     console.error('Error getting products', err)
    //   })
    // }

    // getProducts();

    // function getOneProduct(){
    //   var id = $stateParams.id;
    //   $http.get('http/localhost:3000/api/products/' + id).then(function(response){
    //     vm.product = response.data;
    //   }, function(err){
    //     console.error('Error retrieving product', err)
    //   })
    // }



  }

})();
