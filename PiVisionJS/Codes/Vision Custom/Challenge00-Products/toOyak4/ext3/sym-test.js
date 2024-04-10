(function (PV) {
	'use strict';

    function symbolVis() { };
    PV.deriveVisualizationFromBase(symbolVis);
	
	var definition = {
		typeName: 'test',
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function(){
			return {
				DataShape: "Timeseries",
				Height: 150,
				Width: 150,
				
			}		
		},
	}
	
	symbolVis.prototype.init = function(scope, elem) {
				
		this.onDataUpdate = dataUpdate;

		/*function convertToChart(data){
            return data.Rows.map(function(item){
                return{
                    value: item.Value,
                    attribute: item.Label
                }
            });
        }*/

		function dataUpdate(newdata){

			//var chartData = convertToChart(newData)
            //console.log(chartData);

			if(!newdata) return;
			var firstAttribute = newdata.Data[0];
			scope.Values = firstAttribute.Values;
			if(firstAttribute.Label){
				scope.Label = firstAttribute.Label;
				scope.UOM = firstAttribute.Units;
			}
			
		}		
	};
	
	
	PV.symbolCatalog.register(definition); 
	
})(window.PIVisualization);
