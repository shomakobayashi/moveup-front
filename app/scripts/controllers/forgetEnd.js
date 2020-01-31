'use strict';

/**
 * @ngdoc function
 * @name moveupApp.controller:ForgetEndCtrl
 * @description
 * # ForgetEndCtrl
 * Controller of the moveupApp
 */
 angular.module('moveupApp')
   .controller('ForgetEndCtrl', ['$scope', '$location', '$window', 'ApiService','$routeParams','$timeout',function ($scope, $location, $window, apiService,$routeParams,$timeout) {
     $scope.hideFooter = false;
     $scope.title = 'パスワードの再設定が完了致しました。';
     $scope.content = 'パスワードの再設定が完了致しました。<br>再度ログインしてください。';
     $scope.content2 = '<span>※YahooメールやHotmail等のウェブメールをお使いの場合には、JAPAN MOVE UP WESTからのメールが自動的に迷惑メールとして振り分けられてしまう場合があります。</span></br>'+
      '<span>時間が経ってもメールが受信されない場合には、迷惑メールフォルダ等をご確認ください</span></br>'+
      '<span></span></br>'+
      '<span>※携帯電話アドレスをご入力された場合は、JAPAN MOVE UP WESTからのメールを受信できるように</span></br>'+
      '<span>『japanmoveupwest.com』のドメイン受信設定をお願いいたします。</span></br>'
     $window.localStorage.removeItem('forgetMail');
     $timeout(function() {
       $location.path('/');
     }, 5000);
     $('html,body').animate({scrollTop:0}, 0);
  }]);
