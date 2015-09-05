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
    'ngTouch',
    'checklist-model',
    'ngFileUpload'
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
        controller: 'WorksheetIndexCtrl',
        controllerAs: 'worksheet_controller'
      })
      .when('/worksheets/new', {
        templateUrl: 'views/worksheets/new.html',
        controller: 'WorksheetCreateCtrl',
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
