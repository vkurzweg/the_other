(function(){
  'use strict';

  angular.module('app')
    .factory('LoginService', LoginService);

  LoginService.$inject = ['$http', 'AuthTokenService', '$window', '$log'];

  function LoginService($http, AuthTokenService, $window, $log) {

    var user = null;
    var users = null;

    var service = {
      login: login,
      logout: logout,
      getUser: getUser,
    }

    return service;

    function login(email, password) {
      return $http.post('/login', {email, password})
                  .then((response) => {
                    var token = response.data.token;
                    AuthTokenService.setToken(token);
                    user = decode(token);
                    return user;
                  });
    }

    function logout() {
      user = null;
      AuthTokenService.removeToken();
    }

    function getUser() {
      if (user) return user;
      var token = AuthTokenService.getToken();
      if ( token ) {
        user = decode(token);
        return user;
      }
    }

    function decode(token) {
      return JSON.parse($window.atob(token.split('.')[1])).user;
    }


  }


})();
