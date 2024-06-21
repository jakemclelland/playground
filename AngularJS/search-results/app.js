var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.people = [
        {
        name: 'Doe, John',
        address: '555 Main St, New York, NY 110111',
        daysAgo: '3',
        car: 'Lamborgini'
        },
        {
        name: 'Hardin, Salvor',
        address: '123 Main St, Terminus, NY 110111',
        daysAgo: '56',
        car: 'Beggar'
        },
        {
        name: 'Dornic, Ga\'al',
        address: '245 Prime Radiant, Terminus, NY 110111',
        daysAgo: '3',
        car: 'Rache\'s Ship'
        },
    ]
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive('searchResult', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            personObject: "="
        }
    };
});
