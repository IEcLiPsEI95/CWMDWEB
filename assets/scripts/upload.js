'use strict';

angular.module('cwmdApp').controller('UploadCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.filesChanged = function(elm){
    $scope.files=elm.files;
    $scope.$apply();
  }
  $scope.upload = function(){
    var url = 'http://192.168.43.73:8080/docs/upload';
    var fd = new FormData()
    angular.forEach($scope.files, function(file){
      fd.append('file',file)
    })

    console.log(fd);
    $http.post(url,{fd:fd, type: '1'},{
      transformRequest:angular.identity,
      headers:{'Content-Type': 'multipart/form-data; boundry="---------------------------7da24f2e50046"'}
    })
    .success(function(d){
      console.log(d);
    })
    .error(function(err){
        console.log(err);

    });
  }
}]);
