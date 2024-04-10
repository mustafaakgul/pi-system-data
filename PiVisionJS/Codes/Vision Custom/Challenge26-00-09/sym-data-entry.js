(function (PV) { 

	function symbolVis() { 

	} 
	PV.deriveVisualizationFromBase(symbolVis);

	//var baseUrl = PV.ClientSettings.PIWebAPIUrl;
	var baseUrl = "https://172.16.4.32/piwebapi";
	var fullUrl = "https://172.16.4.32/piwebapi/assetservers";
	//var headersx = headers:{'Content-Type': 'application/json', 'Authorization': "Basic S01UXFBJVmlzaW9uOkttXzEyMzQ=" };
	symbolVis.prototype.init = function (scope, elem, $http) {
		//$http.get(baseUrl + '/assetservers').then(function (response) {
		//	console.log(response); 
		//});

		$http.get(fullUrl, {
       headers: {
           withCredentials: true, 
            headers:{ 'Authorization':  'Basic ' + btoa("KMT\\PIVision" + ":" + "Km_1234")}

       }
   }).then(function (response) {
			console.log(response); 
		});


		console.log(baseUrl);
		alert(baseUrl);
		alert("abc");
		alert(response);


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