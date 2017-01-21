'use strict';
angular.module('cwmdApp').factory('authToken', function ($window) {
    var storage = $window.localStorage;
    var cachedToken;
    var cachedUser;
    var userDetail = 'userDetail';
    var userToken = 'userToken';
    var setToken = function(token){
        cachedToken = token;
        storage.setItem(userToken, token);
      };
    var getToken = function(){
        if(!cachedToken){
          cachedToken = storage.getItem(userToken);
        }
        return cachedToken;
      };
    var isAuthenticated = function(){
        return !!getToken();
      };
    var removeToken = function(){
        cachedToken = null;
        storage.removeItem(userToken);
      };
    var setUser = function(user){
      cachedUser = user;
      storage.setItem(userDetail, user);
    };
    var getUser = function(){
      if(!cachedUser){
        cachedUser = storage.getItem(userDetail);
      }
      return cachedUser;
    };
    return{
      setToken: setToken,
      getToken: getToken,
      isAuthenticated: isAuthenticated,
      removeToken: removeToken,
      setUser: setUser,
      getUser: getUser
    };
  });
