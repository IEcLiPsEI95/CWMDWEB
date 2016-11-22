'use strict';
angular.module('cwmdApp').factory('authToken', function ($window) {
    var storage = $window.localStorage;
    var cachedToken;
    var cachedEmail;
    var userEmail = 'userEmail';
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
    var setUserEmail = function(email){
      cachedEmail = email;
      storage.setItem(userEmail, email);
    };
    var getUserEmail = function(){
      if(!cachedEmail){
        cachedEmail = storage.getItem(userEmail);
      }
      return cachedEmail;
    };
    return{
      setToken: setToken,
      getToken: getToken,
      isAuthenticated: isAuthenticated,
      removeToken: removeToken,
      setUseremail: setUseremail,
      getUseremail: getUseremail
    };
  });
