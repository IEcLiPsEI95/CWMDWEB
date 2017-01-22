'use strict';

angular.module('cwmdApp').service('auth', function ($http, authToken, API_URL) {
  var url = API_URL + 'auth/login';
  this.login = function (email, password) {
    return $http.post(url, {username: email, password: password}).success(function(res){
        authToken.setToken(res.token);
        authToken.setUser(res.message);
      });
    };
});
