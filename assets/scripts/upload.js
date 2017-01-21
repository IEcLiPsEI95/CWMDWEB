
'use strict';

angular.module('cwmdApp').controller('UploadCtrl', ['$scope', '$http', function($scope, $http, API_URL) {
  var url = API_URL + 'docs/upload';
  $scope.filesChanged = function(elm){
    $scope.files=elm.files;
    $scope.$apply();
  }
  $scope.upload = function(){
    var fd = new FormData()
    angular.forEach($scope.files, function(file){
      fd.append('file',file)
    })
    $http.post(url, fd,{
      transformRequest:angular.identity,
      headers:{'Content-Type':undefined}
    })
    .success(function(d){
      console.log(d);
    })
  }
}]);
