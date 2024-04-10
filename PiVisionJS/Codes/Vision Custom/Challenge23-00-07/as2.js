(function (PV) { 

	function symbolVis() { 

	} 
	PV.deriveVisualizationFromBase(symbolVis);

	//var baseUrl = PV.ClientSettings.PIWebAPIUrl;
	var baseUrl = "https://172.16.4.96/piwebapi";
	//var fullUrl = "https://172.16.4.96/piwebapi/assetservers";
	var fullUrl = "https://172.16.4.95/piwebapi";
	//var headersx = headers:{'Content-Type': 'application/json', 'Authorization': "Basic S01UXFBJVmlzaW9uOkttXzEyMzQ=" };
	symbolVis.prototype.init = function (scope, elem, $http) {
		//$http.get(baseUrl + '/assetservers').then(function (response) {
		//	console.log(response); 
		//});


		$http.get('https://community-open-weather-map.p.rapidapi.com/weather')



		.then(function (response) {
						console.log(response); 
						//alert(response);
						alert("asd");
						//console.log(response.data);
						//alert(response.data);
					});


				


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