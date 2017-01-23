'use strict';

angular.module('cwmdApp').controller('SignDocsCtrl', function($scope, auth, $rootScope, $window, authToken, $http, API_URL) {
    var url = API_URL + "docs/getdocstosign";
    $http.get(url)
    .success(function (response) {
        if(angular.equals(response.status,"200"))
            $scope.docs = response.message;
        else
          $scope.docs = [];
        });
    $scope.go = function(index, x){
        if(doc.last != null)
        {
            doc.rows[doc.last].cells[3].childNodes[0].style.visibility="hidden";
            doc.rows[doc.last].cells[4].childNodes[0].style.visibility="hidden";
            doc.rows[doc.last].cells[5].childNodes[0].style.visibility="hidden";
        }
        doc.rows[index+1].cells[3].childNodes[0].style.visibility="visible";
        if(x.status!=4)
        {
            doc.rows[index+1].cells[4].childNodes[0].style.visibility="visible";
            doc.rows[index+1].cells[5].childNodes[0].style.visibility="visible";
        }
        doc.last =index+1;
//        request = angular.element(document.querySelector('#request'))[0].value;
    }
    $scope.download = function(x){
        var url = API_URL + "docs/download/"+x.baseName +"?type="+x.idDocumentType;
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
                    window.navigator.msSaveOrOpenBlob(file, x.baseName);
                else { // Others
                    var url = URL.createObjectURL(file);
                    a.href = url;
                    a.download = x.baseName;
                    document.body.appendChild(a);
                    a.click();
                    setTimeout(function() {
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(url);  
                    }, 0); 
                }
            });
    }
    $scope.sign = function(index, x){
        var url = API_URL + "docs/sign";
        $http.post(url,x.id).then(function(response) {
            $scope.docs.splice(index, 1);
            doc.last=null;
        });
        
    }
    $scope.reject = function(index, x){
        var url = API_URL + "docs/reject";
        $http.post(url,x.id).then(function(response) {
            $scope.docs.splice(index, 1);
            doc.last=null;
        });
        
    }
});