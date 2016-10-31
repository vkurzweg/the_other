(function() {
  "use strict";

  angular
    .module('app')
    .factory('LoginService', LoginService);

  LoginService.$inject = [];

  function LoginService() {
    var user = {
      name:        "",
      email:     "",
      isLoggedIn:  isLoggedIn
    };

    return user;

    function isLoggedIn() {
      return user.name.length !== 0;
    }
  }

})();
