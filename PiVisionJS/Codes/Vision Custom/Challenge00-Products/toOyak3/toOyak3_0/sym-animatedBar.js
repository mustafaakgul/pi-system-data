(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "animatedBar",
		iconUrl: 'Scripts\\app\\editor\\symbols\\ext\\images\\bar2.png',
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

        var maximumValue = Number(scope.runtimeData.data.Rows[0].Value);
        var minimumValue = Number(scope.runtimeData.data.Rows[1].Value);
        var takenvalue = Number(scope.runtimeData.data.Rows[2].Value);
		am4core.useTheme(am4themes_animated);

		var chart = am4core.create("chartContaineranimatedbar", am4charts.XYChart);
		chart.hiddenState.properties.opacity = 0;

		chart.data = [
		  {
		    country: "USA",
		    visits: 23725
		  },
		  {
		    country: "China",
		    visits: 1882
		  },
		  {
		    country: "Japan",
		    visits: 1809
		  },
		  {
		    country: "Germany",
		    visits: 1322
		  },
		  {
		    country: "UK",
		    visits: 1122
		  },
		  {
		    country: "France",
		    visits: 1114
		  },
		  {
		    country: "India",
		    visits: 984
		  },
		  {
		    country: "Spain",
		    visits: 711
		  },
		  {
		    country: "Netherlands",
		    visits: 665
		  },
		  {
		    country: "Russia",
		    visits: 580
		  },
		  {
		    country: "South Korea",
		    visits: 443
		  },
		  {
		    country: "Canada",
		    visits: 441
		  }
		];

		var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.dataFields.category = "country";
		categoryAxis.renderer.minGridDistance = 40;
		categoryAxis.fontSize = 11;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.min = 0;
		valueAxis.max = 24000;
		valueAxis.strictMinMax = true;
		valueAxis.renderer.minGridDistance = 30;

		var axisBreak = valueAxis.axisBreaks.create();
		axisBreak.startValue = 2100;
		axisBreak.endValue = 22900;
		axisBreak.breakSize = 0.005;

		var hoverState = axisBreak.states.create("hover");
		hoverState.properties.breakSize = 1;
		hoverState.properties.opacity = 0.1;
		hoverState.transitionDuration = 1500;

		axisBreak.defaultState.transitionDuration = 1000;

		var series = chart.series.push(new am4charts.ColumnSeries());
		series.dataFields.categoryX = "country";
		series.dataFields.valueY = "visits";
		series.columns.template.tooltipText = "{valueY.value}";
		series.columns.template.tooltipY = 0;
		series.columns.template.strokeOpacity = 0;

		series.columns.template.adapter.add("fill", function(fill, target) {
		  return chart.colors.getIndex(target.dataItem.index);
		});

		function convertToChart(data){
            return data.Rows.map(function(item){
                return{
                    value: item.Value,
                    attribute: item.Label
                }
            });
        }
        
        function dataUpdate(newData){

            if(newData){

                    var chartData = convertToChart(newData)
                    console.log(chartData);
                    maximumValue = Number(scope.runtimeData.data.Rows[0].Value);
                    minimumValue = Number(scope.runtimeData.data.Rows[1].Value);
                    takenvalue = Number(scope.runtimeData.data.Rows[2].Value);
                          
                        chart.data = [
									  {
									    country: "USA",
									    visits: maximumValue
									  },
									  {
									    country: "China",
									    visits: minimumValue
									  },
									  {
									    country: "Canada",
									    visits: takenvalue
									  }
									];                       
            }
        }
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization);