(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "yny_amchart2",
		//iconUrl: 'Scripts\\app\\editor\\symbols\\ext\\images\\ts.png',
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function () {
			return {
				DataShape: 'Table',
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

	symbolVis.prototype.init = function (scope, elem){ 

        function convertToChart(data){
            return data.Rows.map(function(item){
                return{
                    value: item.Value,
                    attribute: item.Label
                }
            });
        }

        this.onDataUpdate = dataUpdate;

        function dataUpdate(newData){
            if(!newData){
                return;
            }

            if(newData.Label){
                
                am4core.ready(function() {

                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end
                    
                    // create chart
                    var chart = am4core.create("chartdiv2", am4charts.GaugeChart);
                    chart.innerRadius = am4core.percent(82);
                    
                    /**
                     * Normal axis
                     */

                    var axis = chart.xAxes.push(new am4charts.ValueAxis());
                    axis.min = 0;
                    axis.max = 200;
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
                    
                    /**
                     * Axis for ranges
                     */
                    
                    var colorSet = new am4core.ColorSet();
                    
                    var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
                    axis2.min = 0;
                    axis2.max = 200;
                    axis2.renderer.innerRadius = 10
                    axis2.strictMinMax = true;
                    axis2.renderer.labels.template.disabled = true;
                    axis2.renderer.ticks.template.disabled = true;
                    axis2.renderer.grid.template.disabled = true;
                    
                    var range0 = axis2.axisRanges.create();
                    range0.value = 0;
                    range0.endValue = 50;
                    range0.axisFill.fillOpacity = 1;
                    range0.axisFill.fill = colorSet.getIndex(0);
                    
                    var range1 = axis2.axisRanges.create();
                    range1.value = 50;
                    range1.endValue = 200;
                    range1.axisFill.fillOpacity = 1;
                    range1.axisFill.fill = colorSet.getIndex(2);
                    
                    /**
                     * Label
                     */
                    
                    var label = chart.radarContainer.createChild(am4core.Label);
                    label.isMeasured = false;
                    label.fontSize = 45;
                    label.x = am4core.percent(50);
                    label.y = am4core.percent(200);
                    label.horizontalCenter = "middle";
                    label.verticalCenter = "bottom";
                    label.text = "50%";
                    
                    
                    /**
                     * Hand
                     */
                    
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

                    var chartData = convertToChart(newData)
                    chart.data = chartData;

			        chart.validateData();

                    console.log(chartData)
                    
                    setInterval(function() {
                      var value = Math.round(Math.random() * 100);
                      label.text = value;
                      var animation = new am4core.Animation(hand, {
                        property: "value",
                        to: value
                      }, 1000, am4core.ease.cubicOut).start();
                    }, 2000);
                    
                    }); // end am4core.ready()
            }
        }
        	
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization);






