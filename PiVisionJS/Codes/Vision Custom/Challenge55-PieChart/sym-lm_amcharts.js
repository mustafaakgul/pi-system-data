(function (PV) {
	"use strict";

	var currentValue;

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "lm_amcharts",
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

		this.onDataUpdate = dataUpdate;

		var maximumValue = Number(scope.runtimeData.data.Rows[0].Value);
        var minimumValue = Number(scope.runtimeData.data.Rows[1].Value);
        var takenvalue = Number(scope.runtimeData.data.Rows[2].Value);
		am4core.useTheme(am4themes_animated);



		var chart = am4core.create("chartContainer", am4charts.PieChart3D);
		chart.hiddenState.properties.opacity = 0;

		chart.legend = new am4charts.Legend();

		chart.data = [
		  {
		    country: "Lithuania",
		    litres: 501.9
		  },
		  {
		    country: "Czech Republic",
		    litres: 301.9
		  },
		  {
		    country: "Ireland",
		    litres: 201.1
		  },
		  {
		    country: "Germany",
		    litres: 165.8
		  },
		  {
		    country: "Australia",
		    litres: 139.9
		  },
		  {
		    country: "Austria",
		    litres: 128.3
		  },
		  {
		    country: "UK",
		    litres: 99
		  },
		  {
		    country: "Belgium",
		    litres: 60
		  },
		  {
		    country: "The Netherlands",
		    litres: 50
		  }
		];

		var series = chart.series.push(new am4charts.PieSeries3D());
		series.dataFields.value = "litres";
		series.dataFields.category = "country";


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
								    country: "fabrika1",
								    litres: maximumValue
								  },
								  {
								    country: "fabrika2",
								    litres: minimumValue
								  },
								  {
								    country: "fabrika3",
								    litres: takenvalue
								  }
								];

                    //axis.min = minimumValue;
                    //axis.max = maximumValue;
                    /*setInterval(function() {
                    hand.showValue(takenvalue, 1000, am4core.ease.cubicOut);
                    }, 2000); */                
            }
        }


	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization); 
