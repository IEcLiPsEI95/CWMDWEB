'use strict';

angular.module('cwmdApp').controller('LoginCtrl', function ($scope, alert, auth, $rootScope, authToken, $window) {
  $scope.submit = function(){
    auth.login($scope.email, $scope.password)
      .success(function(res){
        authToken.setUserEmail(res.user.email);
          $window.location.href('admin.html');
      })
      .error(function(err){
        console.log(err.message);
      });
  };
  });
