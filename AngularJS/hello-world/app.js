var pizzaApp = angular.module('pizzaApp', ['ngMessages', 'ngResource']);

pizzaApp.controller('mainController', ['$scope', '$log', '$filter', '$resource', '$timeout', '$http', function ($scope, $log, $filter, $resource, $timeout, $http) {
    
    $scope.pizza = "Margarita";
    
    $scope.upperCasePizza = function () {
        return $filter('uppercase')($scope.pizza);
    };
    
    $scope.pizzaMin = 6;
    
    $timeout(function () {
        $scope.pizza = "Pepperoni";
    }, 3000);
    
    $scope.rules = [

        { rulename: "Must be 5 chars" },
        { rulename: "Must be unique" },
        { rulename: "Must be cool" }
        
    ];
    
    $scope.hitMe = function () {
        
        $scope.quote = '';
        $scope.character = '';
        $scope.imageUrl = 'https://www.jimphicdesigns.com/downloads/imgs-mockup/blue-hourglass.gif';
        
        $http.get("https://thesimpsonsquoteapi.glitch.me/quotes")
            .success(function (result) {
        
            var data = result[0];
            
            $scope.quote = data.quote;
            $scope.character = data.character;
            $scope.imageUrl = data.image;
            
        })
            .error(function (data, status) {
            console.error(data);
        });
        
    }
}]);


