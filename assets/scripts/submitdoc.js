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
  
    $scope.change = function(doc)
    {
        download.indexdoc = doc;
    };
    $scope.download = function(){
        var url = API_URL + "docs/download/"+$scope.documents[download.indexdoc].path +"?type="+(download.indexdoc+1);
        $http({
            url:url,
            method:"GET",
            responseType: 'blob'
            }).success(function(response) {
                //$scope.$emit('downloaded', response.data);
                console.log("downloaded")
                var a = document.createElement("a"),
                    file = new Blob([response], {type: "text/txt"});
                if (window.navigator.msSaveOrOpenBlob) // IE10+
                    window.navigator.msSaveOrOpenBlob(file, $scope.documents[download.indexdoc].path);
                else { // Others
                    var url = URL.createObjectURL(file);
                    a.href = url;
                    a.download = $scope.documents[download.indexdoc].path;
                    document.body.appendChild(a);
                    a.click();
                    setTimeout(function() {
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(url);  
                    }, 0); 
                }
            });
    }; 
})
