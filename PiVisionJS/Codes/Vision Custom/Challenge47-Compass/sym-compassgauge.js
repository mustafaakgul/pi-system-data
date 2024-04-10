(function (CS) {
    function symbolVis() { }
    CS.deriveVisualizationFromBase(symbolVis);
	symbolVis.prototype.init = function (scope) {
        
        scope.gaugeNumb = document.gauges.length - 1;
        this.onDataUpdate = dataUpdate;
        this.onResize = resize;
        
        function dataUpdate(data) {
            if(data) {
                scope.value = data.Value;
                scope.time = data.Time;

                if(data.Label) {
                    scope.label = data.Label;
                }
            }
        }
        function resize(width, height) {
            scope.width = width;
            scope.height = height;
            document.gauges[scope.gaugeNumb].update({ width: scope.width, height: scope.height });
        }
    }
    var definition = {
        typeName: 'compassgauge',
        iconUrl: '/Scripts/app/editor/symbols/ext/Icons/compass.svg',
        datasourceBehavior: CS.Extensibility.Enums.DatasourceBehaviors.Single,
        visObjectType: symbolVis,
        getDefaultConfig: function() {
    	    return {
    	        DataShape: 'Value',
    	        Height: 300,
                Width: 200,
                TextColor: 'rgb(255,255,255)',
                ShowLabel: true,
                ShowTime : false,
                ShowValue : false
            };
        },
        configTitle: 'Format Symbol'
    };
    CS.symbolCatalog.register(definition);
})(window.PIVisualization);