(function (PV) { 

	function symbolVis() { 

	} 
	PV.deriveVisualizationFromBase(symbolVis);

	//var baseUrlx = PV.ClientSettings.PIWebAPIUrl;
	var baseUrl = "https://172.16.4.95/piwebapi";
	//var baseUrl = "https://172.16.4.32/piwebapi";
	//var fullUrl = "https://172.16.4.32/piwebapi/assetservers";
	//var headersx = headers:{'Content-Type': 'application/json', 'Authorization': "Basic S01UXFBJVmlzaW9uOkttXzEyMzQ=" };
	symbolVis.prototype.init = function (scope, elem, $http) {
		var path = scope.symbol.DataSources[0].slice(3);

		//$http.get(baseUrl + '/assetservers').then(function (response) {
		//	console.log(response); 
		//});

		$http({url:"https://172.16.4.95/piwebapi/attributes?path=" + path,
           method:'GET',
           crossDomain: true,
           dataType: "json",
           data:{},
           headers: {"Authorization" : "Basic S01UXFZpc2lvbkRVc2VyOlBhc3N3b3JkMQ==",
           			"Accept" : "application/json", 
           			"X-Requested-With" : "XMLHttpRequest",
           			//"X-Requested-With" : "Origin",
           			"Content-Type" : "application/json",
           			//"Access-Control-Allow-Origin" : ""
           			//'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization',
           			//"Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
           			//'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'


           		}
            }).then(function (response) {
            scope.webId = response.data.WebId;
            //console.log(baseUrl);
			console.log(response);
			console.log(response.data.WebId);
			//console.log(baseUrlx);
		});


		//console.log(baseUrl);
		//alert(baseUrl);
		//alert("abc");
		//alert(response);


		scope.sendValue = function () {
			var data1 = JSON.stringify({ Timestamp: '*', Value: 987 }); 
			//$http.post(baseUrl + '/streams/' + scope.webId + '/value', data1);
			$http({url:baseUrl + '/streams/' + scope.webId + '/value',
           method:'POST',
           crossDomain: true,
           dataType: "json",
           data:data1,
           headers: {"Authorization" : "Basic S01UXFBJNERldjpQYXNzd29yZDE=",
           			"Accept" : "application/json", 
           			"X-Requested-With" : "XMLHttpRequest",
           			//"X-Requested-With" : "Origin",
           			"Content-Type" : "application/json",
           			"Access-Control-Allow-Origin" : ""
           			//'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization',
           			//"Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
           			//'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'


           		}
            }).then(function (response) {
            scope.webId = response.data.WebId;
            //console.log(baseUrl);
			console.log(response);
			console.log(response.data.WebId);
			//console.log(baseUrlx);
		});

		 }
	};

	var definition = { 
		typeName: 'data-entry', 
		inject: ['$http'],
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single, 
		visObjectType: symbolVis, 
		getDefaultConfig: function() { 
			return { 
				DataShape: 'Value', 
				Height: 150, 
				Width: 150 
			}; 
		} 
	}; 
	PV.symbolCatalog.register(definition);

})(window.PIVisualization);