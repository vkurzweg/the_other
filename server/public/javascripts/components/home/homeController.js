(function(){

  'use strict';

  angular.module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$state', '$log'];

  function HomeController($state, $log){
    var vm = this;
    vm.state = $state;

  }



})();
