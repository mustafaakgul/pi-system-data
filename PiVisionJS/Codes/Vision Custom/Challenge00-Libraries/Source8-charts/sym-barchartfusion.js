

(function (PV) {
	"use strict";



	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "barchartfusion",
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

        var maximumValue = Number(scope.runtimeData.data.Rows[0].Value);
        var minimumValue = Number(scope.runtimeData.data.Rows[1].Value);
        var takenvalue   = Number(scope.runtimeData.data.Rows[2].Value);
        var border4Green = Number(scope.runtimeData.data.Rows[3].Value);
        var border4Red   = Number(scope.runtimeData.data.Rows[4].Value); 



        var dataSource = {
  chart: {
    caption: "Walmart's Customer Satisfaction Score",
    subcaption: "2017",
    lowerlimit: "10",
    upperlimit: 180,
    showvalue: "1",
    numbersuffix: "",
    theme: "fusion"
  },
  colorrange: {
    color: [
      {
        minvalue: "10",
        maxvalue: "60",
        code: "#F2726F"
      },
      {
        minvalue: "60",
        maxvalue: "75",
        code: "#FFC533"
      },
      {
        minvalue: "75",
        maxvalue: 180,
        code: "#62B58F"
      }
    ]
  },
  dials: {
    dial: [
      {
        value: "90",
        tooltext: "<b>9%</b> lesser that target"
      }
    ]
  },
  trendpoints: {
    point: [
      {
        startvalue: "80",
        displayvalue: "Target",
        thickness: "2",
        color: "#E15A26",
        usemarker: "1",
        markerbordercolor: "#E15A26",
        markertooltext: "80"
      }
    ]
  }
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "angulargauge",
    renderAt: "chart-container",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  }).render();
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
                    border4Green = Number(scope.runtimeData.data.Rows[3].Value);
                    border4Red = Number(scope.runtimeData.data.Rows[4].Value);
/*
                    dataSource.chart.lowerlimit=minimumValue;
                    dataSource.colorrange.color[0].minvalue=minimumValue;
                    dataSource.colorrange.color[0].maxvalue=border4Green;
                    dataSource.colorrange.color[1].minvalue=border4Green;
                    dataSource.colorrange.color[1].maxvalue=border4Red;
                    dataSource.colorrange.color[2].minvalue=border4Red;
                    dataSource.colorrange.color[2].maxvalue=maximumValue;
                    dataSource.chart.upperlimit=maximumValue;
                    dataSource.dials.dial[0].value=takenvalue;
                    */

                    dataSource = {
                              chart: {
                                caption: "Walmart's Customer Satisfaction Score",
                                subcaption: "2017",
                                lowerlimit: minimumValue,
                                upperlimit: maximumValue,
                                showvalue: "1",
                                numbersuffix: "",
                                theme: "fusion"
                              },
                              colorrange: {
                                color: [
                                  {
                                    minvalue: minimumValue,
                                    maxvalue: border4Green,
                                    code: "#F2726F"
                                  },
                                  {
                                    minvalue: border4Green,
                                    maxvalue: border4Red,
                                    code: "#FFC533"
                                  },
                                  {
                                    minvalue: border4Red,
                                    maxvalue: maximumValue,
                                    code: "#62B58F"
                                  }
                                ]
                              },
                              dials: {
                                dial: [
                                  {
                                    value: takenvalue,
                                    tooltext: "<b>9%</b> lesser that target"
                                  }
                                ]
                              },
                              trendpoints: {
                                point: [
                                  {
                                    startvalue: "80",
                                    displayvalue: "Target",
                                    thickness: "2",
                                    color: "#E15A26",
                                    usemarker: "1",
                                    markerbordercolor: "#E15A26",
                                    markertooltext: "80"
                                  }
                                ]
                              }
                            };                  
            }
        }      
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization); 