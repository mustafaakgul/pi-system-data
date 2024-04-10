(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "gaugeT2",
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
		am4core.useTheme(am4themes_animated);
		//Themes end
		

		var chart = am4core.create("chartContainer", am4charts.GaugeChart);
		
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

		/*setInterval(function() {
		    hand.showValue(Math.random() * 100, 1000, am4core.ease.cubicOut);
		}, 2000);*/
		
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization); 
