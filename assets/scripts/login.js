'use strict';

angular.module('cwmdApp').controller('LoginCtrl', function ($scope, auth, $rootScope, authToken, $window) {
    $scope.submit = function(){
    auth.login($scope.email, $scope.password)
      .success(function(res){
          $window.location.href = 'user.html';
      })
      .error(function(err){
        alert(err.message);
        console.log(err.message);
      });
    };
});
