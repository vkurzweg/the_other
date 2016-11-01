(function() {
  "use strict";

  angular.module('app')
    .factory('ProductsService', ProductsService);

  ProductsService.$inject = ['$http', '$q'];

  function ProductsService($http, $q) {
    var _products = null;

    var service = {
      products: getProducts,
      getAllProducts: getAllProducts,
      getOneProduct: getOneProduct,
      createProduct: createProduct,
      updateProduct: updateProduct,
      deleteProduct: deleteProduct
    }

    return service;

    function getProducts(){
      var deferred = $q.defer();
      $http.get('/api/products').then(function(response){
        _products = response.data;
        deferred.resolve(_products);
      }, function(err){
        deferred.reject('Error getting products');
      });
      return deferred.promise;
    }

    function getAllProducts(){
      return _products;
    }

    function getOneProduct(productId){
      $http.get('/api/products/' + id).then(function(response){
        console.log(_product);
        _product = response.data;
      }, function(err){
        console.error('Error retrieving product', err)
      })
    }


    function createProduct(){

    }

    function updateProduct(id){

    }

    function deleteProduct(id){

    }

  }

})();
