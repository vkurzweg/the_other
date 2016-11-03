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
        controllerAs: 'vm',
        resolve: {
          ArtistsService: 'ArtistsService',
          artists: function(ArtistsService){
            return ArtistsService.artists();
          }
        }
      })
       .state('artist-detail', {
        url: '/artists/:id',
        templateUrl: 'javascripts/components/artists/artist-detail.html',
        controller: 'ArtistsController',
        controllerAs: 'vm',
        resolve: {
          ArtistsService: 'ArtistsService',
          artists: function(ArtistsService){
            return ArtistsService.artists();
          }
        }
      })
      .state('artist-new', {
        url: 'api/artists/new',
        templateUrl: 'javascripts/components/artists/artist-new.html',
        controller: 'ArtistsController',
        controllerAs: 'vm'
      })
      .state('artist-edit', {
        url: '/artists/:id',
        templateUrl: 'javascripts/components/artists/artist-edit.html',
        controller: 'ArtistsController',
        controllerAs: 'vm',
        resolve: {
          ArtistsService: 'ArtistsService',
          artists: function(ArtistsService){
            return ArtistsService.artists();
          }
        }
      })
      .state('products', {
        url: '/products',
        templateUrl: 'javascripts/components/products/products.html',
        controller: 'ProductsController',
        controllerAs: 'vm',
        resolve: {
          ProductsService: 'ProductsService',
          products: function(ProductsService){
            return ProductsService.products();
          }
        }
      })
       .state('product-detail', {
        url: '/products/:id',
        templateUrl: 'javascripts/components/products/product-detail.html',
        controller: 'ProductsController',
        controllerAs: 'vm',
        resolve: {
          ProductsService: 'ProductsService',
          products: function(ProductsService){
            return ProductsService.products();
          }
        }
      })
       .state('product-edit', {
        url: '/artists/:id/products',
        templateUrl: 'javascripts/components/products/product-edit.html',
        controller: 'ProductsController',
        controllerAs: 'vm',
        resolve: {
          ProductsService: 'ProductsService',
          products: function(ProductsService){
            return ProductsService.products();
          }
        }
      })
      .state('product-new', {
        url: 'api/products/new',
        templateUrl: 'javascripts/components/artists/product-new.html',
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
        controller: 'DashboardController',
        controllerAs: 'vm',
        resolve: {
          ArtistsService: 'ArtistsService',
          artists: function(ArtistsService){
            return ArtistsService.artists();
          },
          ProductsService: 'ProductsService',
          products: function(ProductsService){
            return ProductsService.products();
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
