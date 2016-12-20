'use strict';
  
angular.module('cwmdApp').controller('UserCtrl', function($scope, auth, $rootScope, $window, authToken, $http, API_URL) {
    if(authToken.getToken()==null || authToken.getToken().length == 0)
    {
        $window.location.href = "index.html";
    }
    $scope.LogoutFunction = function(){
        authToken.removeToken();
        $window.location.href = "index.html";
    }
    var url = API_URL + "auth/getallusers";
    $http.get(url)
    .success(function (response) {
        if(angular.equals(response.status,"200"))
            $scope.users = response.message;
        else
            $scope.users = [];
        });
    $scope.go = function(x){
        $scope.email = x.username;
        $scope.first = x.firstname;
        $scope.last = x.lastname;
        $scope.permision = x.permision;
        $scope.cnp = x.cnp;
        $scope.phone = x.phone;
    }
    /*$scope.submit = function(){
        url = API_URL + "auth/" + $scope.type;
        $http.get(url, {username: $scope.email, password: $scope.password, permision: $scope.permision, firstname: $scope.first, lastname: $scope.last, cnp: $scope.cnp, phone: $scope.phone})
            .success(function(res){
                $scope.showAlert = function(ev){
                    // Appending dialog to document.body to cover sidenav in docs app
                    // Modal dialogs should fully cover application
                    // to prevent interaction outside of dialog
                    $mdDialog.show(
                      $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('This is an alert title')
                        .textContent('You can specify some description text in here.')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Got it!')
                        .targetEvent(ev)
                    );
                  };
          })
          .error(function(err){
            console.log(err);
          });
    };*/
});        
           
           