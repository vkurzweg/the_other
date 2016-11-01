(function(){

  'use strict';

  angular.module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$state', '$log', 'LoginService'];

  function HomeController($state, $log, LoginService){
    var vm = this;
    vm.state = $state;
    vm.showDash = showDash;
    vm.isLoggedIn = false;

    function showDash(){
      LoginService.isLoggedIn = true;
    }

  }



})();
