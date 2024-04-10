(function (PV) { 

	function symbolVis() { 

	} 
	PV.deriveVisualizationFromBase(symbolVis);

	var baseUrl = "https://172.16.4.95/piwebapi";
	var values = []
	var timestamps = []
	symbolVis.prototype.init = function (scope, elem, $http) {

		$http({
			   url: "https://172.16.4.95/piwebapi/",
	           method : 'GET',
	           crossDomain : true,
	           dataType : "json",
	           data : {},
	           headers : {
	           			 "Authorization" : "Basic S01UXFBJNERldjpQYXNzd29yZDE=",
	           			 "Accept" : "application/json", 
	           			 "X-Requested-With" : "XMLHttpRequest",
	           			 "Content-Type" : "application/json"      
	           			 }
            }).then(function (response) {
				console.log(response.status);
				console.log(response.data.Items)
				scope.DataItems = response.data.Items;
		});		
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