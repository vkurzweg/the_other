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
      return $http.get('/api/products/' + id).then(function(response){
        console.log(_product);
        _product = response.data;
      }, function(err){
        console.error('Error retrieving product', err)
      })
    }


    function createProduct(name, medium, artist, description, price, image){
      return $http.post('/api/artists/' + artist._id + '/products', {
        name: name,
        medium: medium,
        description: description,
        price: price,
        image: image
      }).then(function(response){
        console.log(response)
        return response;
      })
    }

    function updateProduct(id, name, medium, artist, description, price, image){
      return $http.put('/api/products/' + id, {
        name: name,
        medium: medium,
        artist: artist,
        description: description,
        image: image,
      }).then(function(response){
        console.log(response)
      })
    }

    function deleteProduct(id){
      return $http.delete('/api/products/' + id).then(function(response) {
        console.log(response);
      }, function(err) {
        console.error('Error deleting product', err);
      }).then(getProducts);
    }

  }

})();
