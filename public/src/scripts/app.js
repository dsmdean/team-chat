(function() {
    'use strict';

    var app = angular.module('team-chat', ['ui.router']);

    app.config(['$logProvider', '$stateProvider', '$urlRouterProvider', function($logProvider, $stateProvider, $urlRouterProvider) {

        $logProvider.debugEnabled(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                url: '/',
                controller: 'DashboardController',
                templateUrl: 'templates/dashboard.html'
            });

    }]);

    app.run(['$rootScope', '$log', '$state', function($rootScope, $log, $state) {

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            // $log.debug('State changed - Auth: ' + authentication.isAuthenticated());
        });

        $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
            $log.error('The requested state was not found: ', unfoundState);
        });

        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            $log.error('An error occured while changing states: ', error);

            $log.debug('event', event);
            $log.debug('toState', toState);
            $log.debug('toParams', toParams);
            $log.debug('fromState', fromState);
            $log.debug('fromParams', fromParams);
        });
    }]);

}());