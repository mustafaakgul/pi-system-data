(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "barchart",
		iconUrl: 'Scripts\\app\\editor\\symbols\\ext\\icons\\bar1.jpg',
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function () {
			return {
				DataShape: 'table',
				Height: 150,
				Width: 150,
			}
		},
	}

	symbolVis.prototype.init = function (scope, elem) {

		this.onDataUpdate = dataUpdate;

        //var maximumValue = Number(scope.runtimeData.data.Rows[0].Value);
        //var minimumValue = Number(scope.runtimeData.data.Rows[1].Value);
        //var takenvalue = Number(scope.runtimeData.data.Rows[2].Value);
		am4core.useTheme(am4themes_animated);

		var chart = am4core.create("chartContainerbarchart", am4charts.XYChart);

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

		var series = chart.series.push(new am4charts.ColumnSeries());
		series.dataFields.valueY = "visits";
		series.dataFields.categoryX = "country";
		series.name = "Visits";
		series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
		series.columns.template.fillOpacity = .8;

		var columnTemplate = series.columns.template;
		columnTemplate.strokeWidth = 2;
		columnTemplate.strokeOpacity = 1;

		/*function convertToChart(data){
            return data.Rows.map(function(item){
                return{
                    value: item.Value,
                    attribute: item.Label
                }
            });
        }*/
        
        /*function dataUpdate(newData){

            if(newData){

                    var chartData = convertToChart(newData)
                    console.log(chartData);
                    maximumValue = Number(scope.runtimeData.data.Rows[0].Value);
                    minimumValue = Number(scope.runtimeData.data.Rows[1].Value);
                    takenvalue = Number(scope.runtimeData.data.Rows[2].Value);
                    chart.data = [{
						"country": "USA",
						"visits": maximumValue
					},  {
						"country": "Canada",
						"visits": minimumValue
					}, {
						"country": "Brazil",
						"visits": takenvalue
					}];                 
            }
        }*/
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization); 