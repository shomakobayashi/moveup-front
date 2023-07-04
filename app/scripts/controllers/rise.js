'use strict';

/**
 * @ngdoc function
 * @name moveupApp.controller:RiseCtrl
 * @description
 * # rise
 * Controller of the rise
 */
angular.module('moveupApp')
  .controller('RiseCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.hideFooter = false;

    var $uri = 'http://54.65.145.86/api/rise/list/12/0/'; //http://localhost:8081/api/rise/list/12/0/

      $http({
        method : 'GET',
        url : $uri
      }).then(function onSuccess(response) {
        $scope.results = response.data.resultList;
      }, function onError(response) {
        //通信に失敗
        console.log(response);
      });
  }]);
