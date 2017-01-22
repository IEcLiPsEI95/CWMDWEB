'use strict';

angular.module('cwmdApp').controller('SubmitDocCtrl', function($scope, auth, $rootScope, $window, authToken, $http, API_URL) {
  var url = API_URL + "docs/gettemplates";
  $scope.userdetail = authToken.getUser();
  // console.log(authToken.getUser());
  $scope.showButtons = false;
  $http.get(url)
  .success(function (response) {
      if(angular.equals(response.status,"200"))
          $scope.documents = response.message;
      else
          $scope.documents = [];
      });
  $scope.showbuttons = function(){
    $scope.showButtons = true;
  };

})
