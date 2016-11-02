(function(){
  'use strict';

  angular.module('app')
    .controller('ProductsController', ProductsController);

  ProductsController.$inject = ['$state', '$log', '$http', '$stateParams', 'products'];

  function ProductsController($state, $log, $http, $stateParams, products){
    var vm = this;

    vm.products = products;
    vm.createP = createProduct;

    if ($stateParams.id) {
      vm.product = products.find(product => product._id === $stateParams.id);
    }

    function createProduct(){
      ProductsService.createP(vm.name, vm.medium, vm.description, vm.artist, vm.price, vm.image);
    }

    function updateProduct(id){

    }

    function deleteProduct(id){

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
