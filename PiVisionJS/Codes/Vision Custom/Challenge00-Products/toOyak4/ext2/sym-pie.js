(function (PV) {
	"use strict";

	var currentValue;

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "pie",
		iconUrl: 'Scripts\\app\\editor\\symbols\\ext\\icons\\pie.png',
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

		var maximumValue;
		var minimumValue;
		var takenvalue;

		am4core.useTheme(am4themes_animated);

		var chart = am4core.create("chartContainerpie", am4charts.PieChart3D);
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

                    maximumValue = Number(chartData[0].value);
                    minimumValue = Number(chartData[1].value);
                    takenvalue = Number(chartData[2].value);

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
            }
        }
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization); 
