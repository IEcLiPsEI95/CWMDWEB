'use strict';

angular.module('cwmdApp').controller('UploadCtrl', ['$scope', '$http', "$window", function($scope, $http, $window) {
    $scope.filesChanged = function(elm){
        $scope.files=elm.files;
        $scope.$apply();
    }
    $scope.add = function(){
      var f = document.getElementById('file').files[0],
          r = new FileReader();
      r.onloadend = function(e){
        var data = e.target.result;
        //send your binary data via $http or $resource or do anything else with it
      }
      r.readAsBinaryString(f);
        var url = 'http://localhost:8080/docs/upload?type=1';
      $http.post(url,r.result,{
      headers:{'Content-Type': 'text/plain'}
    })
    .success(function(d){
      $window.alert("Fisier uploadat");
    })
    .error(function(err){
        console.log(err);

    });
    }
}]);
