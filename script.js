var app = angular.module('computer',['ngRoute']);
    app.config( function($routeProvider){
        $routeProvider.
        when('/',{
            templateUrl:'main.html',
            controller:'MainCtrl'
        })
        .when('/about',{
            templateUrl:'about.html',
        })
        .when('/services',{
            templateUrl:'services.html',
        })
        .when('/contact',{
            templateUrl:'contact.html',
        })
    });

    app.controller('MainCtrl',function(){
        console.log('This is the MainCtrl');
    });
