(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "timeBar",
		iconUrl: 'Scripts\\app\\editor\\symbols\\ext\\icons\\bar2.png',
		inject: ['$http'],
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function () {
			return {
				DataShape: 'Timeseries',
				Height: 150,
				Width: 150,
			}
		},
	}

	var chartData = [];

	symbolVis.prototype.init = function (scope, elem, $http) {

		this.onDataUpdate = dataUpdate;

        var maximumValue;
        var minimumValue;
        var takenvalue;


        var dateStringFromAPI;
		var dateFromAPI;
		var oldTimeapi;
		var newResponse;

		am4core.useTheme(am4themes_animated);

		// Create chart
		var chart = am4core.create("chartContainertimebar", am4charts.XYChart);
		chart.paddingRight = 20;

		chart.data = generateChartData();

		var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
		dateAxis.baseInterval = {
		  "timeUnit": "minute",
		  "count": 1
		};
		dateAxis.tooltipDateFormat = "HH:mm, d MMMM";

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.tooltip.disabled = true;
		valueAxis.title.text = "Unique visitors";

		var series = chart.series.push(new am4charts.LineSeries());
		series.dataFields.dateX = "date";
		series.dataFields.valueY = "visits";
		series.tooltipText = "Visits: [bold]{valueY}[/]";
		series.fillOpacity = 0.3;


		chart.cursor = new am4charts.XYCursor();
		chart.cursor.lineY.opacity = 0;
		chart.scrollbarX = new am4charts.XYChartScrollbar();
		chart.scrollbarX.series.push(series);


		dateAxis.start = 0.8;
		dateAxis.keepSelection = true;

		//var chartData = [];
		var visits;
		var firstDate = new Date();
		var counter =0;

		function generateChartData() {
		    chartData = [];
		    // current date
		    var firstDate = new Date();
		    // now set 500 minutes back
		    firstDate.setMinutes(firstDate.getDate() - 500);
		    firstDate.setDate(firstDate.getDate()-1);

		    // and generate 500 data items
		    var visits = 500;
		    for (var i = 0; i < 500; i++) {
		        var newDate = new Date(firstDate);
		        // each time we add one minute
		        newDate.setMinutes(newDate.getMinutes() + i);
		        // some random number
		        visits = 500;
		        // add data item to the array
		        chartData.push({
		            date: newDate,
		            visits: visits
		        });
		    }
		    return chartData;
		}

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
            	counter++;

                    //var chartData = convertToChart(newData)
                    //console.log(newDate);


                    /*var newDate = new Date();
			        // each time we add one minute
			        //newDate.setMinutes(newDate.getMinutes() + i);
			        // some random number
			        visits = 400;
			        // add data item to the array
			        chartData.push({
			            date: newDate,
			            visits: chartData[0].value;
			        });*/

                    //////////////

                    //console.log("adsad");


					$http({url:"https://172.16.4.31/piwebapi/streams/F1DPWH50K8QNs0mNNARckNKhJAAQAAAAREFUQV9BUkNISVZFXFNJTlVTT0lE/recorded?startTime=*-2d&endTime=*+5d",
			           method:'GET',
			           crossDomain: true,
			           dataType: "json",
			           data:{},
			           headers: {
			           			"Authorization" : "Basic S01UXERBVEE6S21fMTIzNA==",
			           			"Accept" : "application/json", 
			           			"X-Requested-With" : "XMLHttpRequest",
			           			"Content-Type" : "application/json",
			           		}
			            }).then(function (response) {

			            //console.log(response);
			
						var d = new Date();	

						//SMT
						if(d.getHours() == "08" && d.getMinutes() == "10" && && d.getSeconds() == "10"){
						for (var i = 0; i < response.data.Items.length; i++) {

							oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
							dateStringFromAPI = String(oldTimeapi);
							dateFromAPI = new Date(dateStringFromAPI);
							dateFromAPI.setHours(dateFromAPI.getHours()+2);
							dateFromAPI = dateFromAPI.toISOString();
							newResponse = String(dateFromAPI);		

							if((newResponse.slice(0,4) == (d.getFullYear()).toString()) && (newResponse.slice(5,7) == (d.getMonth() + 1).toString()) && (newResponse.slice(8,10) == (d.getDate() - 1).toString())){

									//console.log(newResponse);
									//chart.data = generateChartData();

									console.log(chartData);

									//var newdatahere = new Date(newResponse);
									var newdatahere = new Date(newResponse);
									var valuehere = response.data.Items[i].Value;

									//var newdatahere = new Date();
									//var valuehere = 600;

									chartData.push({
							            date: newdatahere,
							            visits: valuehere
							        });

							        console.log(chartData);

									console.log(counter);
							        if(counter%20 == 0){
							        chart.data=chartData;
									}
				                    


							}
						}
						}
					});	
						
        
                    
            }
        }
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization);