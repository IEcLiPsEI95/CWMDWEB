'use strict';

angular.module('cwmdApp').controller('LoginCtrl', function ($scope, auth, $rootScope, authToken, $window) {
//    if(authToken.getToken()!=null && authToken.getToken().length != 0)
//    {
//        $window.location.href = "admin.html";
//    }
    $scope.submit = function(){
    auth.login($scope.email, $scope.password)
      .success(function(res){
        //authToken.setUserEmail(res.user.email);
          $window.location.href = 'admin.html';
      })
      .error(function(err){
        console.log(err);
      });
    };
});
