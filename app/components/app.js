'use strict';

/**
 * @ngdoc overview
 * @name pactometroApp
 * @description
 * # pactometroApp
 *
 * Main module of the application.
 */
angular
  .module('pactometroApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngDraggable',
    'ui.bootstrap',
    'pactometro'

  ]).config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'components/pactometro/pactometro.html',
            controller: 'pactometroCtrl as pactometro'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});
