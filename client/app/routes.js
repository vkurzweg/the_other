(function(){

  'use strict';

  angular.module('app')
    .config(Router)

  Router.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Router($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/components/home.html',
        controller: ''
      })
      .state('about', {
        url: '/about',
        templateUrl: ''
      })
      .state('artists', {
        url: '/artists',
        templateUrl: '',
        controller: ''
      })
      .state('products', {
        url: '/products',
        templateUrl: '/components/products.html',
        controller: 'ProductsController'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: '',
        controller: 'AdminController'
      });

    $urlRouterProvider.otherwise('/');
  }

})
