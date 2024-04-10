

(function (PV) {

 	function symbolVis() { }
 	PV.deriveVisualizationFromBase(symbolVis);

 	var baseUrl = PV.ClientSettings.PIWebAPIUrl;
 	//var baseUrl = "https://172.16.4.31/piwebapi";
 	symbolVis.prototype.init = function (scope, elem, $https) {
 		var path = scope.symbol.DataSources[0].slice(3);
 		$https.get(baseUrl + "/attributes?path=" + path).then(function (response) {
 			console.log(response.data.WebId);
 			scope.webId = response.data.WebId;
 			var webwebid = scope.webId.toString();
 		 });
 		$https.get(baseUrl + "/assetservers").then(function (response) { 
 			console.log(response); });
 		scope.sendValue = function () { 
 			//var data = JSON.stringify({ Timestamp: "*", Value: 3 }, alert("I am an alert box!"), alert(baseUrl), alert(webwebid));
 			var data = JSON.stringify({ Timestamp: "*", Value: 3 }); 
 			//$http.post(baseUrl + '/streams/' + scope.webId + '/value', data);
 			alert(baseUrl);
 			alert(path);
 			alert(scope.webId);
 			alert(webwebid);
 			//$http.post(baseUrl + "/streams/" + scope.webId + "/value", data);
 			$https.post(baseUrl + "/streams/" + "F1DPWH50K8QNs0mNNARckNKhJAWQAAAAREFUQV9BUkNISVZFXEVOVFJZREFUQQ" + "/value", data);

 		}
 	 };

 	var definition = {
 	typeName: "data-entry",
 	inject: ["$https"],
 	datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
 	visObjectType: symbolVis,
 	getDefaultConfig: function() {
 		return {
 			DataShape: "Value",
 			Height: 600,
 			Width: 600,
 		};
 	}
 };
 PV.symbolCatalog.register(definition);
})(window.PIVisualization);