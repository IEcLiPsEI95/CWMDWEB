'use strict';

angular.module('cwmdApp')
  .controller('LogoutCtrl', function (API_URL, $http, authToken, $state, $scope, $rootScope, $window) {
    var url = API_URL + "auth/logout";
      $scope.LogoutFunction = function(){
        $http.post(url, {token: authToken.getToken()})
          .success(function(res){
            authToken.removeToken();
            console.log("Success");
            $window.location.href = "index.html";
        });
  }
  });
