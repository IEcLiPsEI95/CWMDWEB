'use strict';

angular.module('cwmdApp').controller('UserCtrl', function($scope, auth, $rootScope, $window, authToken, $http, API_URL) {
    if(authToken.getToken()==null || authToken.getToken().length == 0)
    {
        $window.location.href = "index.html";
    }
    $scope.userdetail = authToken.getUser();
    var url = API_URL + "auth/getallusers";
    $http.get(url)
    .success(function (response) {
        if(angular.equals(response.status,"200"))
            $scope.users = response.message;
        else
            $scope.users = [];
        });
    $scope.go = function(x){
        request = angular.element(document.querySelector('#request'))[0].value;
        if(!angular.equals(request,"add"))
        {
            $scope.email = x.username;
            $scope.first = x.firstName;
            $scope.last = x.lastName;
            if(x.permissions | 1)
            {
                $scope.permissions = "Admin";
            }
            else if(x.permissions | 6)
            {
                $scope.permissions = "Admin";
            }
            else if(x.permissions | 4)
            {
                $scope.permissions = "Basic User";
            }
            $scope.cnp = x.cnp;
            $scope.phone = x.phone;
            $scope.groupName = x.groupName;
        }
    }
    $scope.submit = function(){
        url = API_URL + "auth/";
        request = angular.element(document.querySelector('#request'))[0].value;
        var flags = 4;
        if(angular.equals(request,"add"))
        {
            url+= "adduser"
        }
        else if(angular.equals(request,"delete"))
        {
            url+= "deluser"
        }
        else if(angular.equals(request,"update"))
        {
            url+= "updateuser"
        }
        if(angular.equals($scope.permissions,"admin"))
        {
            flags = 1;
        }
        else if(angular.equals($scope.permissions,"manager"))
        {
            flags = 6;
        }
        console.log(url);
        $http.post(url, {username: $scope.email, password: $scope.password, permissions: flags, firstName: $scope.first, lastName: $scope.last, cnp: $scope.cnp, phone: $scope.phone, groupName: $scope.groupName})
          .success(function(res){
              if(angular.equals(res.status,"200"))
              {
                    $window.alert("The user has been "+request+"ed");
                    $window.location.reload(true);
              }
              else
              {
                  $window.alert("Error "+res.message);
              }
          })
          .error(function(err){
            $window.alert(err);
          });
    };
});
