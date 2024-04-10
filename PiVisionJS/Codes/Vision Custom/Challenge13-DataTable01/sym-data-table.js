(function (PV) { 

	function symbolVis() { 

	} 
	PV.deriveVisualizationFromBase(symbolVis);

	//var baseUrlx = PV.ClientSettings.PIWebAPIUrl;
	var baseUrl = "https://172.16.4.95/piwebapi";
	//var baseUrl = "https://172.16.4.32/piwebapi";
	//var fullUrl = "https://172.16.4.32/piwebapi/assetservers";
	//var headersx = headers:{'Content-Type': 'application/json', 'Authorization': "Basic S01UXFBJVmlzaW9uOkttXzEyMzQ=" };
	var values = []
	var timestamps = []
	symbolVis.prototype.init = function (scope, elem, $http) {
		//var path = scope.symbol.DataSources[0].slice(3);

		//$http.get(baseUrl + '/assetservers').then(function (response) {
		//	console.log(response); 
		//});

		$http({url:"https://172.16.4.95/piwebapi/streams/F1DP9gA_4i5ui0aJABcUJd1W1gAQAAAAUEk0REVWUElcU0lOVVNPSUQ/interpolated?startTime=T-5&endTime=T&Interval=1",
           method:'GET',
           crossDomain: true,
           dataType: "json",
           data:{},
           headers: {"Authorization" : "Basic S01UXFBJNERldjpQYXNzd29yZDE=",
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
            //scope.webId = response.data.WebId;
            //console.log(baseUrl);
			console.log(response.status);
			//for (i = 0; i < response.data.Items.length; i++) {

				//console.log(response.data.Items[i].Value)
				console.log(response.data.Items)
				scope.DataItems = response.data.Items;

			//}
			//console.log(response.data.WebId);
			//console.log(baseUrlx);
		});


		//console.log(baseUrl);
		//alert(baseUrl);
		//alert("abc");
		//alert(response);


		
	};

	var definition = { 
		typeName: 'data-table', 
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