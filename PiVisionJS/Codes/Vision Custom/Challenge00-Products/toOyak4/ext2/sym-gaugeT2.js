(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "gaugeT2",
		iconUrl: 'Scripts\\app\\editor\\symbols\\ext\\icons\\6.png',
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

		am4core.useTheme(am4themes_animated);

		var chart = am4core.create("chartContainergauget2", am4charts.GaugeChart);
		
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
		    hand.showValue(40, 1000, am4core.ease.cubicOut);
		}, 2000);		
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization);