'use strict';

angular.module('cwdmApp').controller('LoginCtrl', function ($scope, $window) {
  $scope.submit = function(){
    console.log($scope.email);
    $window.location.href = 'admin.html';
  };
  });
