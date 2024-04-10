(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "lm_amcharts",
		visObjectType: symbolVis,
		//datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		//inject : ['$http']
		getDefaultConfig: function () {
			return {
				DataShape: 'TimeSeries',
				Height: 150,
				Width: 150
				
			}
		}
		
	}

	function getConfig(){
	return {
    "type": "serial",
    "theme": "none",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled":true,
    "dataDateFormat": "YYYY-MM-DD",
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "balloon":{
          "drop":true,
          "adjustBorderColor":false,
          "color":"#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis":false,
        "offset":30,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount":true,
        "color":"#AAAAAA"
    },
    "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2,
        "valueZoomable":true
    },
    "valueScrollbar":{
      "oppositeAxis":false,
      "offset":50,
      "scrollbarHeight":10
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true
    },
    "dataProvider": [{
        "date": "2012-07-27",
        "value": 13
    }, {
        "date": "2012-10-30",
        "value": 70
    }, {
        "date": "2012-10-31",
        "value": 72
    }, {
        "date": "2012-11-01",
        "value": 73
    }, {
        "date": "2012-11-02",
        "value": 67
    }, {
        "date": "2012-11-03",
        "value": 68
    }, {
        "date": "2012-11-04",
        "value": 65
    }, {
        "date": "2012-11-05",
        "value": 71
    }, {
        "date": "2013-01-29",
        "value": 84
    }, {
        "date": "2013-01-30",
        "value": 81
    }]
}
}

	symbolVis.prototype.init = function (scope, elem) {
		var symbolContainerDiv = elem.find("#container")[0];
		//symbolContainerDiv.id = "Serial_" + Math.random().toString(36).substring(2,16);
        symbolContainerDiv.id = "Serial_" + "asdda";

		var chartConfig = getConfig();
		var chart = AmCharts.makeChart(symbolContainerDiv.id, chartConfig);

		this.onDataUpdate = dataUpdate;
		function dataUpdate(data){
			console.log(data);
			if(data){
				var dataProvider = convertToChartDataFormat(data);
				chart.dataProvider = dataProvider;
				chart.validateData();
			}
		}

		function convertToChartDataFormat(data){
		    var series = [];
			data.Data[0].Values.forEach(function(item){
				var t = {};
				t.data = item.Time;
				t.value = item.Value;
				series.push(t);
			});
			console.log(series);
			return series;

			return data.Rows.map(function(item){
				return{
					value : item.Value,
					attribute : item.Label
				}
			}
            );
			
		}
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization); 






