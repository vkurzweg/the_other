(function() {
  'use strict';

  angular.module('app')
    .controller("LoginController", LoginController);

  LoginController.$inject = ["$state", "LoginService", "$log"];

  function LoginController($state, LoginService, $log) {
    var vm = this;

    vm.user   = LoginService;
    vm.logIn  = logIn;

    vm.userHold = {
      name: "",
      email: "",
      password: ""
    };

    function logIn(name) {
      $log.debug("Logging in:", vm.userHold.name);

      // Log in the user by updating the service's .name:
      vm.user.name        = vm.userHold.name;
      vm.user.email     = vm.userHold.email;
      vm.userHold.password    = vm.userHold.password;

      $state.go("dashboard");
    }
  }

})();
