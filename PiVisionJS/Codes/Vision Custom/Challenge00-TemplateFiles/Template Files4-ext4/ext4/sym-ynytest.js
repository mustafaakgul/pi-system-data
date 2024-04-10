(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var dataItem = {
		Value: 777,
		Timestamp: "06-Feb-2019 11:09:00"
	};

	var definition = {
		typeName: "ynytest",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		getDefaultConfig: function(){ 
			return { 
				Height: 150,
				Width: 150 
			}
		}
	}

	symbolVis.prototype.init = function(scope, elem) {

		this.onDataUpdate = dataUpdate;

		function dataUpdate(newData)
		{
			if(!newData)
			{
				return;
			}

			// 1st update is sporadic and has Label and Units
			if(newData.Label)
			{
				scope.Label = newData.Label;
                scope.Units = newData.Units;
                
                am4core.useTheme(am4themes_animated);
                var chart = am4core.create("chartContainer", am4charts.XYChart);
                chart.data = [{
                    "country": "USA",
                    "visits": 2025
                }, {
                    "country": "China",
                    "visits": 1882
                }, {
                    "country": "Japan",
                    "visits": 1809
                }, {
                    "country": "Germany",
                    "visits": 1322
                }, {
                    "country": "UK",
                    "visits": 1122
                }, {
                    "country": "France",
                    "visits": 1114
                }, {
                    "country": "India",
                    "visits": 984
                }, {
                    "country": "Spain",
                    "visits": 711
                }, {
                    "country": "Netherlands",
                    "visits": 665
                }, {
                    "country": "Russia",
                    "visits": 580
                }, {
                    "country": "South Korea",
                    "visits": 443
                }, {
                    "country": "Canada",
                    "visits": 441
                }, {
                    "country": "Brazil",
                    "visits": 395
                }];

                var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		        categoryAxis.dataFields.category = "country";
		        categoryAxis.renderer.grid.template.location = 0;
                categoryAxis.renderer.minGridDistance = 30;
                
                categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
                    if (target.dataItem && target.dataItem.index & 2 == 2) {
                        return dy + 25;
                    }
                    return dy;
                });

                var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

                // Create series
                var series = chart.series.push(new am4charts.ColumnSeries());
                series.dataFields.valueY = "visits";
                series.dataFields.categoryX = "country";
                series.name = "Visits";
                series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
                series.columns.template.fillOpacity = .8;

                var columnTemplate = series.columns.template;
                columnTemplate.strokeWidth = 2;
                columnTemplate.strokeOpacity = 1;
			}

			scope.Time = newData.Time;
			scope.Value = newData.Value;

			// Extra Credit (source is from Tag or Attribute)
			//scope.Source = newData.Path.substring(0,2).toUpperCase();
		}
	 };

	PV.symbolCatalog.register(definition);

})(window.PIVisualization);