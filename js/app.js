var myApp = angular.module('myApp',['ui.router']);

myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

    $stateProvider
        .state('login',{
            url:'/login',
            templateUrl:'login.html',
            controller:'loginController'
        })
        .state('landing',{
            url:'',
            templateUrl:'landing.html',
            controller:'landingController'
        })
        .state('comment',{
            url:'/comment',
            templateUrl:'comment.html',
            controller:'commentController'
        })
        .state('notfound',{
            url:'/notfound',
            templateUrl:'404.html'
        });

    $urlRouterProvider.otherwise('/notfound');

}]);