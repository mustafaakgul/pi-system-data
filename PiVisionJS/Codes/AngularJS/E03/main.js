var application = angular.module('app', []);
    application.controller('MainController', function ($scope, $http) {
    $scope.data = [];
    $http.get("https://api.github.com/users").then(function(res) {
        $scope.data = res.data; // genen verileri data değişkenine attık.
        console.log($scope.data)
        alert(res)
        $scope.message = res.data;
    });
});