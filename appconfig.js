'use strict';

angular.module('cwmdApp').config(function($urlRouterProvider, $stateProvider, $httpProvider){
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
.constant('API_URL', 'http://172.30.113.142:8080/');
