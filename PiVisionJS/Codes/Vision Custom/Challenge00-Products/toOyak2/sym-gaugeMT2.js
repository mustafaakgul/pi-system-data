(function (PV) {

    var label;
    var hand;
    var chart;
    var currentValue;
    var maximumValueYny;
    var minimumValueYny;
    var divedValue;
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "gaugeMT2",
		iconUrl: 'Scripts\\app\\editor\\symbols\\ext\\icons\\gaugeicon.png',
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
    
    var lastValue = 40;
    function createChart(maxValue, minValue, divValue){
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        //console.log("Max, Min: " + maxValue, minValue)
        //console.log("Max, Min: " + max2Value, min2Value)
        // create chart
        console.log(divValue)
        var chart = am4core.create("chartdiv3", am4charts.GaugeChart);
        chart.innerRadius = am4core.percent(82);
        var axis = chart.xAxes.push(new am4charts.ValueAxis());
        axis.min = minValue;
        axis.max = maxValue;
        axis.strictMinMax = true;
        axis.renderer.radius = am4core.percent(80);
        axis.renderer.inside = true;
        axis.renderer.line.strokeOpacity = 1;
        axis.renderer.ticks.template.disabled = false
        axis.renderer.ticks.template.strokeOpacity = 1;
        axis.renderer.ticks.template.length = 10;
        axis.renderer.grid.template.disabled = true;
        axis.renderer.labels.template.radius = 40;
        axis.renderer.labels.template.adapter.add("text", function(text) {
          return text;
        })
        
        var colorSet = new am4core.ColorSet();
        
        var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
        axis2.min = minValue;
        axis2.max = maxValue;
        axis2.renderer.innerRadius = 10
        axis2.strictMinMax = true;
        axis2.renderer.labels.template.disabled = true;
        axis2.renderer.ticks.template.disabled = true;
        axis2.renderer.grid.template.disabled = true;
        
        var range0 = axis2.axisRanges.create();
        range0.value = minValue;
        range0.endValue = divValue;
        range0.axisFill.fillOpacity = 1;
        //range0.axisFill.fill = colorSet.getIndex(0);
        range0.axisFill.fill = am4core.color("green");
        
        var range1 = axis2.axisRanges.create();
        range1.value = divValue;
        range1.endValue = maxValue;
        range1.axisFill.fillOpacity = 1;
        //range1.axisFill.fill = colorSet.getIndex(2);
        range1.axisFill.fill = am4core.color("red");
        
        /**
         * Label
         */
        
        label = chart.radarContainer.createChild(am4core.Label);
        label.isMeasured = false;
        label.fontSize = 30;
        label.x = am4core.percent(0);
        label.y = am4core.percent(100);
        label.horizontalCenter = "middle";
        label.verticalCenter = "bottom";
        label.text = "*";

        hand = chart.hands.push(new am4charts.ClockHand());
        hand.axis = axis2;
        hand.innerRadius = am4core.percent(20);
        hand.startWidth = 10;
        hand.pin.disabled = true;
        hand.value = range1.value; //Değiştirdim...
        
        hand.events.on("propertychanged", function(ev) {
        range0.endValue = ev.target.value;
        range1.value = ev.target.value;
        axis2.invalidate();
   });
   return chart;
}

	symbolVis.prototype.init = function (scope, elem){ 

        this.onDataUpdate = dataUpdate;
        console.log(scope.runtimeData.data.Rows[0].Value)
        maximumValueYny = Number(scope.runtimeData.data.Rows[0].Value);
        minimumValueYny = Number(scope.runtimeData.data.Rows[1].Value);
        divedValue = Number((maximumValueYny + minimumValueYny) / 2);
        //console.log(maximumValue, minimumValue)
        
        chart = createChart(maximumValueYny, minimumValueYny, divedValue);

        function convertToChart(data){
            return data.Rows.map(function(item){
                return{
                    value: item.Value,
                    attribute: item.Label
                }
            });
        }
        
        function dataUpdate(newData){
            if(!newData){
                return;
            }

            if(newData.Rows[0].Value){

                    var chartData = convertToChart(newData)
                    chart.data = chartData;

			        chart.validateData();
                    console.log(chartData)
                    currentValue = chartData[2].value
                    
                    setInterval(function() {
                        label.text = currentValue;
                        var animation = new am4core.Animation(hand, {
                          property: "value",
                          to: Number(currentValue)
                        }, 1000, am4core.ease.cubicOut).start();
                      }, 2000);

                    //lastValue = currentValue;
                    
            }
        }
        //createChart();
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization);






