'use strict';

/**
 * @ngdoc overview
 * @name collectorApp
 * @description
 * # collectorApp
 *
 * Main module of the application.
 */
angular
  .module('collectorApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/worksheets', {
        templateUrl: 'views/worksheets/index.html',
        controller: 'WorksheetCtrl',
        controllerAs: 'worksheet_controller'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
