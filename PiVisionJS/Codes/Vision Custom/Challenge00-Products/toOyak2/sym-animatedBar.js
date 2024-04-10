(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "animatedBar",
		//iconUrl: 'Scripts\\app\\editor\\symbols\\ext\\images\\ts.png',
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function () {
			return {
				DataShape: 'table',
				Height: 150,
				Width: 150,
				// DecimalPlaces: 1,
				// BackgroundColor: 'orange',
				// BorderRadius: 7,
				// FontColor: 'green'
			}
		},
		// configOptions: function () {
		// 	return [{
		// 		title: 'Format Symbol',
		// 		mode: 'format'
		// 	}];
		// }
	}

	symbolVis.prototype.init = function (scope, elem) {

		//var container = elem.find('#chart-container')[0];

		//container.id = "barChart_" + scope.symbol.Name;

		//Themes begin
		this.onDataUpdate = dataUpdate;

        var maximumValue = Number(scope.runtimeData.data.Rows[0].Value);
        var minimumValue = Number(scope.runtimeData.data.Rows[1].Value);
        var takenvalue = Number(scope.runtimeData.data.Rows[2].Value);
		am4core.useTheme(am4themes_animated);
		//Themes end

		// Create chart instance
		var chart = am4core.create("chartContainer", am4charts.XYChart);
		chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

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
		// axis break
		var axisBreak = valueAxis.axisBreaks.create();
		axisBreak.startValue = 2100;
		axisBreak.endValue = 22900;
		axisBreak.breakSize = 0.005;

		// make break expand on hover
		var hoverState = axisBreak.states.create("hover");
		hoverState.properties.breakSize = 1;
		hoverState.properties.opacity = 0.1;
		hoverState.transitionDuration = 1500;

		axisBreak.defaultState.transitionDuration = 1000;
		/*
		// this is exactly the same, but with events
		axisBreak.events.on("over", function() {
		  axisBreak.animate(
		    [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
		    1500,
		    am4core.ease.sinOut
		  );
		});
		axisBreak.events.on("out", function() {
		  axisBreak.animate(
		    [{ property: "breakSize", to: 0.005 }, { property: "opacity", to: 1 }],
		    1000,
		    am4core.ease.quadOut
		  );
		});*/

		var series = chart.series.push(new am4charts.ColumnSeries());
		series.dataFields.categoryX = "country";
		series.dataFields.valueY = "visits";
		series.columns.template.tooltipText = "{valueY.value}";
		series.columns.template.tooltipY = 0;
		series.columns.template.strokeOpacity = 0;

		// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
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
                    //createGauge(maximumValue, minimumValue, chartData[2].value)
                        
                         
   
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
