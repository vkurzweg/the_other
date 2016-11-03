(function(){
  'use strict';

  angular.module('app').controller('LoginController', LoginController);

  LoginController.$inject = ['LoginService', '$state', '$log'];

  function LoginController(LoginService, $state, $log) {
    var vm = this;

    vm.login = login;
    vm.errors = null;
    vm.getUser = LoginService.getUser;
    vm.logout = LoginService.logout;

    function login() {
      LoginService.login(vm.email, vm.password)
        .then((user) => {
          $state.go('dashboard')
        })
        .catch((response) => {
          vm.password = '';
          vm.email = '';
          vm.errors = response.data;
        });
    }



  }

})();
