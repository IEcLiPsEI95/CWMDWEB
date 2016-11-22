'use strict';

angular.module('cwdmApp').config(function($urlRouterProvider, $stateProvider, $httpProvider){
    $urlRouterProvider.otherwise('/');
    // $stateProvider
    // .state('main', {
    //   url:'/',
    //   templateUrl:'/views/main.html',
    //   controller: 'LoginCtrl',
    //   onEnter: function($state, authToken){
    //     if(authToken.isAuthenticated()){
    //       $state.go('mypage');
    //     }
    //   }
    // }) ------------------------ asta e pentru cand facem cu state-uri si views...un fel de SPA

    $httpProvider.interceptors.push('authInterceptor');
  })
.constant('API_URL', 'http://localhost/');
