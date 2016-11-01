(function(){
  'use strict';

  angular.module('app')
    .controller('ProductsController', ProductsController);

  ProductsController.$inject = ['$state', '$log', '$http', '$stateParams'];

  function ProductsController($state, $log, $http, $stateParams){
    var vm = this;

    function getProducts(){
      $http.get('http://localhost:3000/api/products').then(function(response){
        vm.products = response.data;
      }, function(err){
        console.error('Error getting products', err)
      })
    }

    getProducts();

    function getOneProduct(){
      var id = $stateParams.id;
      $http.get('http/localhost:3000/api/products/' + id).then(function(response){
        vm.product = response.data;
      }, function(err){
        console.error('Error retrieving product', err)
      })
    }



  }

})();
