(function (PV) {
	"use strict";

    var totalGlobalOld;
    var totalGlobalNew;

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
				 //BackgroundColor: 'orange'
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

        //console.log(scope);
        //console.log(scope.runtimeData.data.Rows[0].Value)
        var maximumValue = Number(scope.runtimeData.data.Rows[0].Value);
        var minimumValue = Number(scope.runtimeData.data.Rows[1].Value);
        var takenvalue = Number(scope.runtimeData.data.Rows[2].Value);
		am4core.useTheme(am4themes_animated);
		//Themes end
		

		var chart = am4core.create("chartContainer", am4charts.GaugeChart);
		chart.hiddenState.properties.opacity = 0;

		var axis = chart.xAxes.push(new am4charts.ValueAxis());

        axis.min = 0;
        axis.max = 160;
        axis.strictMinMax = true;
        //axis.renderer.inside = true;
        //axis.renderer.ticks.template.inside = true;
        //axis.stroke = chart.colors.getIndex(3);
        axis.renderer.radius = am4core.percent(95);
        //axis.renderer.radius = 80;
        axis.renderer.line.strokeOpacity = 1;
        axis.renderer.line.strokeWidth = 5;
        axis.renderer.line.stroke = chart.colors.getIndex(0);
        axis.renderer.ticks.template.disabled = false;
        axis.renderer.ticks.template.stroke = chart.colors.getIndex(0);
        axis.renderer.labels.template.radius = 35;
        axis.renderer.ticks.template.strokeOpacity = 1;
        axis.renderer.grid.template.disabled = true;
        axis.renderer.ticks.template.length = 10;
        axis.hiddenState.properties.opacity = 1;
        axis.hiddenState.properties.visible = true;
        axis.setStateOnChildren = true;
        axis.renderer.hiddenState.properties.endAngle = 180;

        var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
        axis2.min = 0;
        axis2.max = 240;
        axis2.strictMinMax = true;
        axis2.renderer.radius = am4core.percent(85);

        axis2.renderer.line.strokeOpacity = 1;
        axis2.renderer.line.strokeWidth = 5;
        axis2.renderer.line.stroke = chart.colors.getIndex(3);
        axis2.renderer.ticks.template.stroke = chart.colors.getIndex(3);

        axis2.renderer.ticks.template.disabled = false;
        axis2.renderer.ticks.template.strokeOpacity = 1;
        axis2.renderer.grid.template.disabled = true;
        axis2.renderer.ticks.template.length = 10;
        axis2.hiddenState.properties.opacity = 1;
        axis2.hiddenState.properties.visible = true;
        axis2.setStateOnChildren = true;
        axis2.renderer.hiddenState.properties.endAngle = 180;

        var axis3 = chart.xAxes.push(new am4charts.ValueAxis());
        axis3.min = 0;
        axis3.max = 300;
        axis3.strictMinMax = true;
        axis3.renderer.radius = am4core.percent(75);

        axis3.renderer.line.strokeOpacity = 1;
        axis3.renderer.line.strokeWidth = 5;
        axis3.renderer.line.stroke = chart.colors.getIndex(1);
        axis3.renderer.ticks.template.stroke = chart.colors.getIndex(1);

        axis3.renderer.ticks.template.disabled = false;
        axis3.renderer.ticks.template.strokeOpacity = 1;
        axis3.renderer.grid.template.disabled = true;
        axis3.renderer.ticks.template.length = 10;
        axis3.hiddenState.properties.opacity = 1;
        axis3.hiddenState.properties.visible = true;
        axis3.setStateOnChildren = true;
        axis3.renderer.hiddenState.properties.endAngle = 180;

        var hand = chart.hands.push(new am4charts.ClockHand());
        hand.fill = axis.renderer.line.stroke;
        hand.stroke = axis.renderer.line.stroke;
        hand.axis = axis;
        hand.pin.radius = 10;
        hand.startWidth = 10;

        var hand2 = chart.hands.push(new am4charts.ClockHand());
        hand2.fill = axis2.renderer.line.stroke;
        hand2.stroke = axis2.renderer.line.stroke;
        hand2.axis = axis2;
        hand2.pin.radius = 10;
        hand2.startWidth = 10;

        var hand3 = chart.hands.push(new am4charts.ClockHand());
        hand3.fill = axis3.renderer.line.stroke;
        hand3.stroke = axis3.renderer.line.stroke;
        hand3.axis = axis3;
        hand3.pin.radius = 10;
        hand3.startWidth = 10;

        /*setInterval(function() {
            hand.showValue(35, 1000, am4core.ease.cubicOut);
            label.text = Math.round(hand.value).toString();
            hand2.showValue(66, 1000, am4core.ease.cubicOut);
            label2.text = Math.round(hand2.value).toString();
            hand3.showValue(78, 1000, am4core.ease.cubicOut);
            label3.text = Math.round(hand3.value).toString();
        }, 2000);*/

        var legend = new am4charts.Legend();
        legend.isMeasured = false;
        legend.y = am4core.percent(100);
        legend.verticalCenter = "bottom";
        legend.parent = chart.chartContainer;
        legend.data = [{
            "name": "Measurement #1",
            "fill": chart.colors.getIndex(0)
        }, {
            "name": "Measurement #2",
            "fill": chart.colors.getIndex(3)
        }, {
            "name": "Measurement #3",
            "fill": chart.colors.getIndex(1)
        }
        ];

        legend.itemContainers.template.events.on("hit", function(ev) {
            var index = ev.target.dataItem.index;

            if (!ev.target.isActive) {
                chart.hands.getIndex(index).hide();
                chart.xAxes.getIndex(index).hide();
                labelList.getIndex(index).hide();
            }
            else {
                chart.hands.getIndex(index).show();
                chart.xAxes.getIndex(index).show();
                labelList.getIndex(index).show();
            }
        });

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
        label.background.stroke = chart.colors.getIndex(0);
        label.fill = chart.colors.getIndex(0);
        label.text = "0";

        var label2 = labelList.create();
        label2.parent = chart.chartContainer;
        label2.x = am4core.percent(50);
        label2.background.stroke = chart.colors.getIndex(3);
        label2.fill = chart.colors.getIndex(3);
        label2.text = "0";

        var label3 = labelList.create();
        label3.parent = chart.chartContainer;
        label3.x = am4core.percent(60);
        label3.background.stroke = chart.colors.getIndex(1);
        label3.fill = chart.colors.getIndex(1);
        label3.text = "0";


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

                totalGlobalOld = totalGlobalNew;

                var chartData = convertToChart(newData)
                console.log(chartData);
                maximumValue = Number(scope.runtimeData.data.Rows[0].Value);
                minimumValue = Number(scope.runtimeData.data.Rows[1].Value);
                takenvalue = Number(scope.runtimeData.data.Rows[2].Value);
                //createGauge(maximumValue, minimumValue, chartData[2].value)

                totalGlobalNew = maximumValue + minimumValue + takenvalue; 

                console.log(totalGlobalNew);
                console.log(totalGlobalOld);


                ////chart.data = chartData;
                ////chart.validateData();
                ////currentValue = chartData[2].value  
                if(totalGlobalNew != totalGlobalOld){
                setInterval(function() {
                hand.showValue(maximumValue, 1000, am4core.ease.cubicOut);
                label.text = Math.round(hand.value).toString();
                hand2.showValue(minimumValue, 1000, am4core.ease.cubicOut);
                label2.text = Math.round(hand2.value).toString();
                hand3.showValue(takenvalue, 1000, am4core.ease.cubicOut);
                label3.text = Math.round(hand3.value).toString();
                }, 2000); 
                console.log("asdsad"); 
                 
                }

                }
        }


        /*var delayInMilliseconds = 1000;
        setTimeout(function() {
            var chartData = convertToChart(newData);
            maximumValue = Number(scope.runtimeData.data.Rows[0].Value);
            minimumValue = Number(scope.runtimeData.data.Rows[1].Value);
            takenvalue = Number(scope.runtimeData.data.Rows[2].Value);

            setInterval(function() {
                hand.showValue(maximumValue, 1000, am4core.ease.cubicOut);
                label.text = Math.round(hand.value).toString();
                hand2.showValue(minimumValue, 1000, am4core.ease.cubicOut);
                label2.text = Math.round(hand2.value).toString();
                hand3.showValue(takenvalue, 1000, am4core.ease.cubicOut);
                label3.text = Math.round(hand3.value).toString();
            }, 2000);
        }, delayInMilliseconds);*/

		
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization); 
