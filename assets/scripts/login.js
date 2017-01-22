'use strict';

angular.module('cwmdApp').controller('LoginCtrl', function ($scope, auth, $rootScope, authToken, $window) {
    $scope.submit = function(){
    auth.login($scope.email, $scope.password)
      .success(function(res){
          console.log(res);
          $window.location.href = 'user.html';
      })
      .error(function(err){
        if(err == null){
          alert("Host unreachable.");
        }
        else{
          alert(err.message);
          console.log(err.message);
        }
      });
    };
});
