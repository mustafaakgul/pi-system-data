(function (PV) {
	"use strict";
    
    var currentValue;

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "gaugejs",
        iconUrl: 'Scripts\\app\\editor\\symbols\\ext\\icons\\5.jpg',
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

	symbolVis.prototype.init = function (scope, elem){ 
var chart = JSC.chart('chartDiv123',{
    debug: true,
    type: 'gauge',
    animation_duration: 1000,
    legend_visible: false,
    xAxis: { spacingPercentage: 0.20  },
    yAxis: {
        defaultTick: {padding: -5,label_style_fontSize: '14px' },
        line: {
            width: 9,
            color: 'smartPalette',
            breaks_gap: 0.06
        },
        scale_range: [0,200 ]
    },
    palette: {
        pointValue: '{%value/200}',
        colors: ['green','yellow','red' ]
    },
    defaultAnnotation: { position: 'inside bottom'  },
    annotations: [
        {
            id: 'anVal',
            label: {  text: '0',  style: { fontSize: 46  }}
        },
        {
            label: {
                text: 'kW',
                style: { fontSize: 25, color: '#696969'  }
            }
        }
    ],
    defaultTooltip_enabled: false,
    defaultSeries: {
        angle: {sweep: 180 },
        shape: {innerSize: '70%' }
    },
    series: [
        {
            type: 'column roundcaps',
            points: [  { id: '1', x: 'speed', y: 0  }]
        }
    ],
    toolbar_items: {
        Stop: {
            type: 'option',
            icon_name: 'system/default/pause',
            margin: 10,
            boxVisible: true,
            label_text: 'Pause',
            events: {  change: playPause},
            states_select_icon_name: 'system/default/play',
            states_select_label_text: 'Play'
        }
    }
});
var INTERVAL_ID;

playPause();

function setGauge(max,y){
    chart.series(0).options({points:[{id:'1',x:'speed',y:y}]});
    chart.annotations('anVal').options({label_text:JSC.formatNumber(y,'n1')}, {animation:false});
}
function playPause(val){
    if(val){    clearInterval(INTERVAL_ID); } else {    update(); }
}
function update(){
    INTERVAL_ID = setInterval(function () {   setGauge(100,Math.random()*100);  }, 1000);
}
      
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization);