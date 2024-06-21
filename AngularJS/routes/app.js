var spaApp = angular.module('spaApp', ['ngRoute']);

spaApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    .when('/second/:pizzaType', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    });
});

spaApp.service('pizzaService', function() {
    var self = this;
    
    self.pizzaFlavor = 'Meat Lovers'
    self.makePizza = function (flavor) {
        self.pizzaFlavor = flavor;
        alert('Your ' + self.pizzaFlavor + ' pizza is ready!');
    };
});

spaApp.controller('mainController', ['$scope', 'pizzaService', function($scope, pizzaService) {
    
    $scope.pizzaFlavor = pizzaService.pizzaFlavor;
    
    $scope.makeTheDangPizza = function() {
        pizzaService.makePizza($scope.pizzaFlavor);
    }
}]);

spaApp.controller('secondController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    
    $scope.pizzaType = $routeParams.pizzaType || '';
    
}]);