(function (PV) { 

	function symbolVis() { 

	} 
	PV.deriveVisualizationFromBase(symbolVis);

	var baseUrl = "https://172.16.4.95/piwebapi";
	var webIdGlobal;

	symbolVis.prototype.init = function (scope, elem, $http) {
		var path = scope.symbol.DataSources[0].slice(3);

		$http({
				   url:"https://172.16.4.95/piwebapi/attributes?path=" + path,
		           method:'GET',
		           crossDomain: true,
		           dataType: "json",
		           data:{},
		           headers: {
		           			"Authorization" : "Basic S01UXFZpc2lvbkRVc2VyOlBhc3N3b3JkMQ==",
		           			"Accept" : "application/json", 
		           			"X-Requested-With" : "XMLHttpRequest",          		
		           			"Content-Type" : "application/json"
		           			}
            }).then(function (response) {
            scope.webId = response.data.WebId;
            webIdGlobal = scope.webId;
			console.log(response);
			console.log(response.data.WebId);
			});

		scope.sendValue = function () {
			var data1 = JSON.stringify({ 
										Timestamp: scope.runtimeData.inputTime, 
										Value: scope.runtimeData.inputValue 
									  }); 
			$http({
					   url:baseUrl + '/streams/' + webIdGlobal + '/value',
			           method:'POST',
			           crossDomain: true,
			           dataType: "json",
			           data:data1,
			           headers: {
			           			"Authorization" : "Basic S01UXFBJNERldjpQYXNzd29yZDE=",
			           			"Accept" : "application/json", 
			           			"X-Requested-With" : "XMLHttpRequest",         		
			           			"Content-Type" : "application/json",
			           			"Access-Control-Allow-Origin" : ""
			           			}
			            }).then(function (response) {
			            scope.webId = response.data.WebId;
						console.log(response);
						console.log(response.data.WebId);
				   });

		}
	};

	var definition = { 
		typeName: 'data-entry2', 
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