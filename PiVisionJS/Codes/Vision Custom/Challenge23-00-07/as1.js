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

		$http.get(fullUrl, 

				{

					headers: 

					{
	   				'Content-Type': 'application/json',
	   				'Authorization': "Basic S01UXFBJNERldjpQYXNzd29yZDE=11",
	   				'rejectUnauthorized': 'false'
				 	}


			}).then(function (response) {
						//alert("asd")
						console.log(baseUrl);
					});


					//console.log(baseUrl);
					alert(baseUrl);
					//alert("abc");
					//alert(response);


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