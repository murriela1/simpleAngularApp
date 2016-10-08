
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.products = ["Scarface", "Casino", "Goodfellas", "The Departed"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "This movie is already here!";
        }
    }
    $scope.removeItem = function(remove) {
        $scope.errortext = "";
        $scope.products.splice(remove, 1);
    }
});
