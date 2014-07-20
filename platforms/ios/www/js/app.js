// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('canIParkApp', ['ionic', 'google-maps'])

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/start')

    $stateProvider.state('start', {
        url: '/start',
        views: {
            start: {
                controller: 'StartCtrl',
                templateUrl: 'views/startpage.html'
            }
        }
    })

    $stateProvider.state('result', {
        url: '/result',
        views: {
            result: {
                controller: 'ResultCtrl',
                templateUrl: 'views/resultpage.html'
            }
        }
    })
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
