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

		var fabrika1Value;
		var fabrika2Value;
		var fabrika3Value;
		var fabrika4Value;
		var fabrika5Value;
		var fabrika6Value;
		var fabrika7Value;
		var fabrika8Value;
		var fabrika9Value;
		var fabrika10Value;

		var fabrika6Json;

		var stringlabel1;
		var stringlabel2;
		var stringlabel3;
		var stringlabel4;
		var stringlabel5;
		var stringlabel6;
		var stringlabel7;
		var stringlabel8;
		var stringlabel9;
		var stringlabel10;

		var seperator4String1;
		var seperator4String2;
		var seperator4String3;
		var seperator4String4;
		var seperator4String5;
		var seperator4String6;
		var seperator4String7;
		var seperator4String8;
		var seperator4String9;
		var seperator4String10;

		var labeltest = scope.symbol.DataSources;
		console.log(labeltest);

		am4core.useTheme(am4themes_animated);

		var chart = am4core.create("chartContainerpie", am4charts.PieChart3D);
		chart.hiddenState.properties.opacity = 0;

		var series = chart.series.push(new am4charts.PieSeries3D());
		series.dataFields.value = "litres";
		series.dataFields.category = "country";

		series.fill=am4core.color("#FFFFFF");
		series.stroke=am4core.color("#FFFFFF");

		function convertToChart(data){
            return data.Rows.map(function(item){
                return{
                    value: item.Value,
                    attribute: item.Label
                }
            });
        }

        var counter = 0;
        
        function dataUpdate(newData){

            if(newData){

            	counter++;

            	if(counter == 1){

            			 stringlabel1 = String(newData.Rows[0].Label);
            			 seperator4String1 = stringlabel1.split("|");
	                     stringlabel1 = "[font-size:11px]"+seperator4String1[1];

            			 stringlabel2 = String(newData.Rows[1].Label);
            			 seperator4String2 = stringlabel2.split("|");
	                     stringlabel2 = "[font-size:11px]"+seperator4String2[1];

	                     stringlabel3 = String(newData.Rows[2].Label);
	                     seperator4String3 = stringlabel3.split("|");
	                     stringlabel3 = "[font-size:11px]"+seperator4String3[1];

	                     stringlabel4 = String(newData.Rows[3].Label);
	                     seperator4String4 = stringlabel4.split("|");
	                     stringlabel4 = "[font-size:11px]"+seperator4String4[1];

	                     stringlabel5 = String(newData.Rows[4].Label);
	                     seperator4String5 = stringlabel5.split("|");
	                     stringlabel5 = "[font-size:11px]"+seperator4String5[1];

	                     stringlabel6 = String(newData.Rows[5].Label);
	                     seperator4String6 = stringlabel6.split("|");
	                     stringlabel6 = "[font-size:11px]"+seperator4String6[1];

	                     stringlabel7 = String(newData.Rows[6].Label);
	                     seperator4String7 = stringlabel7.split("|");
	                     stringlabel7 = "[font-size:11px]"+seperator4String7[1];

	                     stringlabel8 = String(newData.Rows[7].Label);
	                     seperator4String8 = stringlabel8.split("|");
	                     stringlabel8 = "[font-size:11px]"+seperator4String8[1];

	                     stringlabel9 = String(newData.Rows[8].Label);
	                     seperator4String9 = stringlabel9.split("|");
	                     stringlabel9 = "[font-size:11px]"+seperator4String9[1];

	                     stringlabel10 = String(newData.Rows[9].Label);
	                     seperator4String10 = stringlabel10.split("|");
	                     stringlabel10 = "[font-size:11px]"+seperator4String10[1];

                    if(typeof(chartData[9]) != "undefined"){
                    	 stringlabel2 = String(newData.Rows[1].Label);
	                     stringlabel3 = String(newData.Rows[2].Label);
	                     stringlabel4 = String(newData.Rows[3].Label);
	                     stringlabel5 = String(newData.Rows[4].Label);
	                     stringlabel6 = String(newData.Rows[5].Label);
	                     stringlabel7 = String(newData.Rows[6].Label);
	                     stringlabel8 = String(newData.Rows[7].Label);
	                     stringlabel9 = String(newData.Rows[8].Label);
	                     stringlabel10 = String(newData.Rows[9].Label);

                    }
                    else if(typeof(chartData[8]) != "undefined"){
                    	 stringlabel2 = String(newData.Rows[1].Label);
	                     stringlabel3 = String(newData.Rows[2].Label);
	                     stringlabel4 = String(newData.Rows[3].Label);
	                     stringlabel5 = String(newData.Rows[4].Label);
	                     stringlabel6 = String(newData.Rows[5].Label);
	                     stringlabel7 = String(newData.Rows[6].Label);
	                     stringlabel8 = String(newData.Rows[7].Label);
	                     stringlabel9 = String(newData.Rows[8].Label);
                    }
                    else if(typeof(chartData[7]) != "undefined"){
                    	 stringlabel2 = String(newData.Rows[1].Label);
	                     stringlabel3 = String(newData.Rows[2].Label);
	                     stringlabel4 = String(newData.Rows[3].Label);
	                     stringlabel5 = String(newData.Rows[4].Label);
	                     stringlabel6 = String(newData.Rows[5].Label);
	                     stringlabel7 = String(newData.Rows[6].Label);
	                     stringlabel8 = String(newData.Rows[7].Label);
                    }
                    else if(typeof(chartData[6]) != "undefined"){
                    	 stringlabel2 = String(newData.Rows[1].Label);
	                     stringlabel3 = String(newData.Rows[2].Label);
	                     stringlabel4 = String(newData.Rows[3].Label);
	                     stringlabel5 = String(newData.Rows[4].Label);
	                     stringlabel6 = String(newData.Rows[5].Label);
	                     stringlabel7 = String(newData.Rows[6].Label);
                    	
                    }
                    else if(typeof(chartData[5]) != "undefined"){
                    	 stringlabel2 = String(newData.Rows[1].Label);
	                     stringlabel3 = String(newData.Rows[2].Label);
	                     stringlabel4 = String(newData.Rows[3].Label);
	                     stringlabel5 = String(newData.Rows[4].Label);
	                     stringlabel6 = String(newData.Rows[5].Label);
                    }
                    else if(typeof(chartData[4]) != "undefined"){
						 stringlabel2 = String(newData.Rows[1].Label);
	                     stringlabel3 = String(newData.Rows[2].Label);
	                     stringlabel4 = String(newData.Rows[3].Label);
	                     stringlabel5 = String(newData.Rows[4].Label);
                    }
                    else if(typeof(chartData[3]) != "undefined"){
                    	 stringlabel2 = String(newData.Rows[1].Label);
                   		 stringlabel3 = String(newData.Rows[2].Label);
                   		 stringlabel4 = String(newData.Rows[3].Label);
                    }

                    else if(typeof(chartData[2]) != "undefined"){
                    	stringlabel2 = String(newData.Rows[1].Label);
                    	stringlabel3 = String(newData.Rows[2].Label);
                    }

                    else if(typeof(chartData[1]) != "undefined"){
 						stringlabel2 = String(newData.Rows[1].Label);
                    }
            	}

                    var chartData = convertToChart(newData);
                    //var chartData = newData.Rows;

					//console.log("asda12323");
                    //console.log(newData.Rows);

                    console.log(chartData);
                    //console.log(newData);

                    //var label1 = scope.runtimeData;
                    //console.log(label1);

                    
                    //stringlabel6 = String(newData.Rows[5].Label;

                    fabrika1Value = chartData[0].value;
                    if(typeof(chartData[9]) != "undefined"){
                    	fabrika2Value = chartData[1].value;
 						fabrika3Value = chartData[2].value;
 						fabrika4Value = chartData[3].value; 						
 						fabrika5Value = chartData[4].value;
 						fabrika6Value = chartData[5].value;
 						fabrika7Value = chartData[6].value;
 						fabrika8Value = chartData[7].value;
 						fabrika9Value = chartData[8].value;
 						fabrika10Value = chartData[9].value;

 						 chart.data = [
								  {
								    country: stringlabel1,
								    litres: fabrika1Value
								  },
								  {
								    country: stringlabel2,
								    litres: fabrika2Value
								  },
								  {
								    country: stringlabel3,
								    litres: fabrika3Value
								  },
								  {
								    country: stringlabel4,
								    litres: fabrika4Value
								  },
								  {
								    country: stringlabel5,
								    litres: fabrika5Value
								  },
								  {
								    country: stringlabel6,
								    litres: fabrika6Value
								  },
								  {
								    country: stringlabel7,
								    litres: fabrika7Value
								  },
								  {
								    country: stringlabel8,
								    litres: fabrika8Value
								  },
								  {
								    country: stringlabel9,
								    litres: fabrika9Value
								  },
								  {
								    country: stringlabel10,
								    litres: fabrika10Value
								  }
								]; 
                    }
                    else if(typeof(chartData[8]) != "undefined"){
                    	fabrika2Value = chartData[1].value;
 						fabrika3Value = chartData[2].value;
 						fabrika4Value = chartData[3].value; 						
 						fabrika5Value = chartData[4].value;
 						fabrika6Value = chartData[5].value;
 						fabrika7Value = chartData[6].value;
 						fabrika8Value = chartData[7].value;
 						fabrika9Value = chartData[8].value;

 						 chart.data = [
								  {
								    country: stringlabel1,
								    litres: fabrika1Value
								  },
								  {
								    country: stringlabel2,
								    litres: fabrika2Value
								  },
								  {
								    country: stringlabel3,
								    litres: fabrika3Value
								  },
								  {
								    country: stringlabel4,
								    litres: fabrika4Value
								  },
								  {
								    country: stringlabel5,
								    litres: fabrika5Value
								  },
								  {
								    country: stringlabel6,
								    litres: fabrika6Value
								  },
								  {
								    country: stringlabel7,
								    litres: fabrika7Value
								  },
								  {
								    country: stringlabel8,
								    litres: fabrika8Value
								  },
								  {
								    country: stringlabel9,
								    litres: fabrika9Value
								  }
								]; 
                    }
                    else if(typeof(chartData[7]) != "undefined"){
                    	fabrika2Value = chartData[1].value;
 						fabrika3Value = chartData[2].value;
 						fabrika4Value = chartData[3].value; 						
 						fabrika5Value = chartData[4].value;
 						fabrika6Value = chartData[5].value;
 						fabrika7Value = chartData[6].value;
 						fabrika8Value = chartData[7].value;

 						 chart.data = [
								  {
								    country: stringlabel1,
								    litres: fabrika1Value
								  },
								  {
								    country: stringlabel2,
								    litres: fabrika2Value
								  },
								  {
								    country: stringlabel3,
								    litres: fabrika3Value
								  },
								  {
								    country: stringlabel4,
								    litres: fabrika4Value
								  },
								  {
								    country: stringlabel5,
								    litres: fabrika5Value
								  },
								  {
								    country: stringlabel6,
								    litres: fabrika6Value
								  },
								  {
								    country: stringlabel7,
								    litres: fabrika7Value
								  },
								  {
								    country: stringlabel8,
								    litres: fabrika8Value
								  }
								]; 
                    }
                    else if(typeof(chartData[6]) != "undefined"){
                    	fabrika2Value = chartData[1].value;
 						fabrika3Value = chartData[2].value;
 						fabrika4Value = chartData[3].value; 						
 						fabrika5Value = chartData[4].value;
 						fabrika6Value = chartData[5].value;
 						fabrika7Value = chartData[6].value;

 						 chart.data = [
								  {
								    country: stringlabel1,
								    litres: fabrika1Value
								  },
								  {
								    country: stringlabel2,
								    litres: fabrika2Value
								  },
								  {
								    country: stringlabel3,
								    litres: fabrika3Value
								  },
								  {
								    country: stringlabel4,
								    litres: fabrika4Value
								  },
								  {
								    country: stringlabel5,
								    litres: fabrika5Value
								  },
								  {
								    country: stringlabel6,
								    litres: fabrika6Value
								  },
								  {
								    country: stringlabel7,
								    litres: fabrika7Value
								  }
								]; 
                    }
                    else if(typeof(chartData[5]) != "undefined"){
                    	fabrika2Value = chartData[1].value;
 						fabrika3Value = chartData[2].value;
 						fabrika4Value = chartData[3].value; 						
 						fabrika5Value = chartData[4].value;
 						fabrika6Value = chartData[5].value;

 						 chart.data = [
								  {
								    country: stringlabel1,
								    litres: fabrika1Value
								  },
								  {
								    country: stringlabel2,
								    litres: fabrika2Value
								  },
								  {
								    country: stringlabel3,
								    litres: fabrika3Value
								  },
								  {
								    country: stringlabel4,
								    litres: fabrika4Value
								  },
								  {
								    country: stringlabel5,
								    litres: fabrika5Value
								  },
								  {
								    country: stringlabel6,
								    litres: fabrika6Value
								  }
								]; 
                    }
                    else if(typeof(chartData[4]) != "undefined"){
						fabrika2Value = chartData[1].value;
 						fabrika3Value = chartData[2].value;
 						fabrika4Value = chartData[3].value; 						
 						fabrika5Value = chartData[4].value;

 						 chart.data = [
								  {
								    country: stringlabel1,
								    litres: fabrika1Value
								  },
								  {
								    country: stringlabel2,
								    litres: fabrika2Value
								  },
								  {
								    country: stringlabel3,
								    litres: fabrika3Value
								  },
								  {
								    country: stringlabel4,
								    litres: fabrika4Value
								  },
								  {
								    country: stringlabel5,
								    litres: fabrika5Value
								  }
								]; 
                    }
                    else if(typeof(chartData[3]) != "undefined"){
                    	fabrika2Value = chartData[1].value;
 						fabrika3Value = chartData[2].value;
 						fabrika4Value = chartData[3].value;

 						 chart.data = [
								  {
								    country: stringlabel1,
								    litres: fabrika1Value
								  },
								  {
								    country: stringlabel2,
								    litres: fabrika2Value
								  },
								  {
								    country: stringlabel3,
								    litres: fabrika3Value
								  },
								  {
								    country: stringlabel4,
								    litres: fabrika4Value
								  }
								]; 
                    }

                    else if(typeof(chartData[2]) != "undefined"){
                    	fabrika2Value = chartData[1].value;
 						fabrika3Value = chartData[2].value;

 						 chart.data = [
								  {
								    country: stringlabel1,
								    litres: fabrika1Value
								  },
								  {
								    country: stringlabel2,
								    litres: fabrika2Value
								  },
								  {
								    country: stringlabel3,
								    litres: fabrika3Value
								  }
								]; 
                    }

                    else if(typeof(chartData[1]) != "undefined"){
 						fabrika2Value = chartData[1].value;

 						 chart.data = [
								  {
								    country: stringlabel1,
								    litres: fabrika1Value
								  },
								  {
								    country: stringlabel2,
								    litres: fabrika2Value
								  }
								]; 
                    }

            }
        }
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization); 
