(function (PV) {
	"use strict";

    //var label;
    
    var currentValue;

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "gaugeMT1",
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
    
    function createChart(){
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        //console.log("Max, Min: " + maxValue, minValue)
        //console.log("Max, Min: " + max2Value, min2Value)
        // create chart
        var chart = am4core.create("chartdiv3", am4charts.GaugeChart);
        chart.innerRadius = am4core.percent(82);
        var axis = chart.xAxes.push(new am4charts.ValueAxis());
        axis.min = 25;
        axis.max = 70;
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
        axis2.min = 25;
        axis2.max = 75;
        axis2.renderer.innerRadius = 10
        axis2.strictMinMax = true;
        axis2.renderer.labels.template.disabled = true;
        axis2.renderer.ticks.template.disabled = true;
        axis2.renderer.grid.template.disabled = true;
        
        var range0 = axis2.axisRanges.create();
        range0.value = 20;
        range0.endValue = 50;
        range0.axisFill.fillOpacity = 1;
        range0.axisFill.fill = colorSet.getIndex(0);
        
        var range1 = axis2.axisRanges.create();
        range1.value = 50;
        range1.endValue = 75;
        range1.axisFill.fillOpacity = 1;
        range1.axisFill.fill = colorSet.getIndex(2);
        
        /**
         * Label
         */
        
        label = chart.radarContainer.createChild(am4core.Label);
        label.isMeasured = false;
        label.fontSize = 45;
        label.x = am4core.percent(0);
        label.y = am4core.percent(100);
        label.horizontalCenter = "middle";
        label.verticalCenter = "bottom";
        label.text = "50%";

        setInterval(function() {
            var value = Math.round(Math.random() * 100);
            label.text = currentValue;
            var animation = new am4core.Animation(hand, {
              property: "value",
              to: currentValue
            }, 1000, am4core.ease.cubicOut).start();
          }, 2000);

        var hand = chart.hands.push(new am4charts.ClockHand());
        hand.axis = axis2;
        hand.innerRadius = am4core.percent(20);
        hand.startWidth = 10;
        hand.pin.disabled = true;
        hand.value = 50;
        
        hand.events.on("propertychanged", function(ev) {
        range0.endValue = ev.target.value;
        range1.value = ev.target.value;
        axis2.invalidate();
        });

        return chart;
    }

    

	symbolVis.prototype.init = function (scope, elem){ 

        this.onDataUpdate = dataUpdate;

        //console.log(scope);
        //console.log(scope.runtimeData.data.Rows[0].Value)
        var maximumValue = Number(scope.runtimeData.data.Rows[0].Value);
        var minimumValue = Number(scope.runtimeData.data.Rows[1].Value);
        var takenvalue = Number(scope.runtimeData.data.Rows[2].Value);
        console.log(takenvalue);
        //console.log(maximumValue, minimumValue)
        //var chart = createChart();
        //createGauge();

        console.log(takenvalue);
            
            am4core.useTheme(am4themes_animated);
            //Themes end
            

            var chart = am4core.create("chartdiv3", am4charts.GaugeChart);
            
            chart.innerRadius = -15;
            var axis = chart.xAxes.push(new am4charts.ValueAxis());
            axis.min = 0;
            axis.max = 100;
            axis.strictMinMax = true;

            var colorSet = new am4core.ColorSet();

            var gradient = new am4core.LinearGradient();
            gradient.stops.push({color:am4core.color("red")})
            gradient.stops.push({color:am4core.color("yellow")})
            gradient.stops.push({color:am4core.color("green")})

            axis.renderer.line.stroke = gradient;
            axis.renderer.line.strokeWidth = 15;
            axis.renderer.line.strokeOpacity = 1;

            axis.renderer.grid.template.disabled = true;

            var hand = chart.hands.push(new am4charts.ClockHand());
            hand.radius = am4core.percent(97);

            

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
                    axis.min = minimumValue;
                    axis.max = maximumValue;
                    setInterval(function() {
                    hand.showValue(takenvalue, 1000, am4core.ease.cubicOut);
                    }, 2000);

                    ////chart.data = chartData;
			        ////chart.validateData();
                    ////currentValue = chartData[2].value                   
            }
        }

        function createGauge(){
            console.log(takenvalue);
            
            am4core.useTheme(am4themes_animated);
            //Themes end
            

            var chart = am4core.create("chartdiv3", am4charts.GaugeChart);
            
            chart.innerRadius = -15;
            var axis = chart.xAxes.push(new am4charts.ValueAxis());
            axis.min = 0;
            axis.max = 100;
            axis.strictMinMax = true;

            var colorSet = new am4core.ColorSet();

            var gradient = new am4core.LinearGradient();
            gradient.stops.push({color:am4core.color("red")})
            gradient.stops.push({color:am4core.color("yellow")})
            gradient.stops.push({color:am4core.color("green")})

            axis.renderer.line.stroke = gradient;
            axis.renderer.line.strokeWidth = 15;
            axis.renderer.line.strokeOpacity = 1;

            axis.renderer.grid.template.disabled = true;

            var hand = chart.hands.push(new am4charts.ClockHand());
            hand.radius = am4core.percent(97);

            setInterval(function() {
                hand.showValue(takenvalue, 1000, am4core.ease.cubicOut);
            }, 5000);
        
        }
        	
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization);






