var application = angular.module('app', []);
    application.controller('MainController', function ($scope, $http) {
    $scope.data = [];
    $http({url:"https://172.16.4.95/piwebapi/streams/F1DP9gA_4i5ui0aJABcUJd1W1gAQAAAAUEk0REVWUElcU0lOVVNPSUQ/interpolated",
           method:'GET',
           crossDomain: true,
           dataType: "json",
           data:{},
           headers: {"Authorization":"Basic S01UXFZpc2lvbkRVc2VyOlBhc3N3b3JkMQ==","Accept":"application/json"}
            }).then(function(res) {
        $scope.items = res.data.Items;
        console.log($scope.data)
        $scope.message = "Hello..."
    });
});