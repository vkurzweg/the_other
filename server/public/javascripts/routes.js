(function(){

  'use strict';

  angular.module('app')
    .config(Router)

  Router.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Router($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'javascripts/components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'javascripts/components/about/about.html'
      })
      .state('artists', {
        url: '/artists',
        templateUrl: 'javascripts/components/artists/artists.html',
        controller: 'ArtistsController',
        controllerAs: 'vm'
      })
       .state('artist-detail', {
        url: '/artists/:id',
        templateUrl: 'javascripts/components/artists/artist-detail.html',
        controller: 'ArtistsController',
        controllerAs: 'vm'
      })
      .state('products', {
        url: '/products',
        templateUrl: 'javascripts/components/products/products.html',
        controller: 'ProductsController',
        controllerAs: 'vm'
      })
       .state('product-detail', {
        url: '/products/:id',
        templateUrl: 'javascripts/components/products/product-detail.html',
        controller: 'ProductsController',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'javascripts/components/admin/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'javascripts/components/admin/dashboard.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
