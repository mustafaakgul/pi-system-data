var application = angular.module('app', []);
    application.controller('MainController', function ($scope, $http) {
    $scope.data = [];
    $http({url:"https://172.16.4.96/piwebapi",
           method:'GET',
           crossDomain: true,
           dataType: "json",
           data:{},
           headers: {"Authorization":"Basic S01UXFZpc2lvbkRVc2VyOlBhc3N3b3JkMQ==","Accept":"application/json"}
            }).then(function(res) {
        $scope.data = res.data; // genen verileri data değişkenine attık.
        console.log($scope.data)
        alert(res)
        $scope.message = "Hello..."
    });
});