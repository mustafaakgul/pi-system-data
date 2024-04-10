

$http.get("url",

    {

        headers : 

        {

            'Authorization' : 'token-data',
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
            'Accept' : 'application/json',
            'Access-Control-Allow-Credentials' : 'true'

        }

    }
).success(function (response) {
    $scope.data = response.data;
    $scope.Temp = response.statusText;;
}).error(function (qwe) {
    var temp = qwe.statusText;
});