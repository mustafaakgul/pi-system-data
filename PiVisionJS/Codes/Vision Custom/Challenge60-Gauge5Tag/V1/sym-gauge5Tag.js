(function (PV) {
	"use strict";
    
    var currentValue;

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "gauge5Tag",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function () {
			return {
				DataShape: 'table',
				Height: 500,
				Width: 500,
			}
		},
	
    }

	symbolVis.prototype.init = function (scope, elem){ 

        this.onDataUpdate = dataUpdate;

        var maximumValue = Number(scope.runtimeData.data.Rows[0].Value);
        var minimumValue = Number(scope.runtimeData.data.Rows[1].Value);
        var takenvalue   = Number(scope.runtimeData.data.Rows[2].Value);
        var border4Green = Number(scope.runtimeData.data.Rows[3].Value);
        var border4Red   = Number(scope.runtimeData.data.Rows[4].Value);
            
        am4core.useTheme(am4themes_animated);           

        var chart = am4core.create("chartdiv3", am4charts.GaugeChart);
        
        chart.hiddenState.properties.opacity = 0;

        chart.innerRadius = -25;

        var axis = chart.xAxes.push(new am4charts.ValueAxis());
        axis.min = 0;
        axis.max = 100;
        axis.strictMinMax = true;
        axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
        axis.renderer.grid.template.strokeOpacity = 0.3;

        var colorSet = new am4core.ColorSet();

        var range0 = axis.axisRanges.create();
        range0.value = 10;
        range0.endValue = 50;
        range0.axisFill.fillOpacity = 1;
        range0.axisFill.fill = am4core.color("#3AEA1A");
        range0.axisFill.zIndex = - 1;

        var range1 = axis.axisRanges.create();
        range1.value = 50;
        range1.endValue = 80;
        range1.axisFill.fillOpacity = 1;
        range1.axisFill.fill = am4core.color("#DDEA1A");
        range1.axisFill.zIndex = -1;

        var range2 = axis.axisRanges.create();
        range2.value = 80;
        range2.endValue = 120;
        range2.axisFill.fillOpacity = 1;
        range2.axisFill.fill = am4core.color("#F0260E");
        range2.axisFill.zIndex = -1;

        var hand = chart.hands.push(new am4charts.ClockHand());

        /*chart.setTimeout(randomValue, 2000);

        function randomValue() {
            hand.showValue(Math.random() * 100, 1000, am4core.ease.cubicOut);
            chart.setTimeout(randomValue, 2000);
        }*/

        ///////////////////////
        var labelList = new am4core.ListTemplate(new am4core.Label());
        labelList.template.isMeasured = false;
        labelList.template.background.strokeWidth = 2;
        labelList.template.fontSize = 25;
        labelList.template.padding(10, 20, 10, 20);
        labelList.template.y = am4core.percent(50);
        labelList.template.horizontalCenter = "middle";

        var label = labelList.create();
        label.parent = chart.chartContainer;
        label.x = am4core.percent(40);
        label.background.stroke = am4core.color("#3AEA1A");
        label.fill = am4core.color("#3AEA1A");
        label.text = "0";

        var label2 = labelList.create();
        label2.parent = chart.chartContainer;
        label2.x = am4core.percent(50);
        label2.background.stroke = am4core.color("#000000");
        label2.fill = am4core.color("#000000");
        label2.text = "0";

        var label3 = labelList.create();
        label3.parent = chart.chartContainer;
        label3.x = am4core.percent(60);
        label3.background.stroke = am4core.color("#F0260E");
        label3.fill = am4core.color("#F0260E");
        label3.text = "0";
        //////////////////////

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
                    axis.min = minimumValue;
                    axis.max = maximumValue;
                    range0.value = minimumValue;
                    range0.endValue = border4Green;
                    range1.value = border4Green;
                    range1.endValue = border4Red;
                    range2.value = border4Red;
                    range2.endValue = maximumValue;
                    hand.showValue(takenvalue, 1000, am4core.ease.cubicOut);
                    label.text = border4Green.toString();
                    label2.text = takenvalue.toString();
                    label3.text = border4Red.toString();


            }
        }    	
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization);






