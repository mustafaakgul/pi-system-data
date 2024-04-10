(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var baseUrl = "https://10.13.63.231/piwebapi";

	var timeStringArray = [
	"00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00",
	"14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"];

	var timeStringArrayValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

	var timeStringArrayMonth = [
	"00","01","02","03","04","05","06","07","08","09","10","11"];

	var timeStringArrayValuesMonth = [0,0,0,0,0,0,0,0,0,0,0,0];

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

	symbolVis.prototype.init = function (scope, elem, $http) {

		yekdem();

        var maximumValue;
        var minimumValue;
        var takenvalue;


        var dateStringFromAPI;
		var dateFromAPI;
		var oldTimeapi;
		var newResponse;

		am4core.useTheme(am4themes_animated);

		var chart = am4core.create("chartContainertimebar", am4charts.XYChart);
		chart.scrollbarX = new am4core.Scrollbar();
		
		var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = "country";
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.renderer.minGridDistance = 30;
		categoryAxis.renderer.labels.template.horizontalCenter = "right";
		categoryAxis.renderer.labels.template.verticalCenter = "middle";
		categoryAxis.renderer.labels.template.location = 0.05;
		categoryAxis.renderer.labels.template.rotation = 270;
		categoryAxis.tooltip.disabled = true;
		categoryAxis.renderer.minHeight = 110;
		categoryAxis.fill = am4core.color("#FFFFFF");
		categoryAxis.stroke = am4core.color("#FFFFFF");

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.minWidth = 50;
		valueAxis.fill = am4core.color("#FFFFFF");
		valueAxis.stroke = am4core.color("#FFFFFF");

		var series = chart.series.push(new am4charts.ColumnSeries());
		series.sequencedInterpolation = true;
		series.dataFields.valueY = "visits";
		series.dataFields.categoryX = "country";
		series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
		series.columns.template.strokeWidth = 0;

		series.tooltip.pointerOrientation = "vertical";

		series.columns.template.column.cornerRadiusTopLeft = 10;
		series.columns.template.column.cornerRadiusTopRight = 10;
		series.columns.template.column.fillOpacity = 0.8;

		var hoverState = series.columns.template.column.states.create("hover");
		hoverState.properties.cornerRadiusTopLeft = 0;
		hoverState.properties.cornerRadiusTopRight = 0;
		hoverState.properties.fillOpacity = 1;

		series.columns.template.adapter.add("fill", function(fill, target) {
		  return chart.colors.getIndex(target.dataItem.index);
		});

		chart.cursor = new am4charts.XYCursor();

		scope.abc = function () {

            var sTable = document.getElementById('tab').innerHTML;
            console.log(sTable)

            var style = "<style>";
            var titlerapor = "Rapor";
            style = style + "table {width: 100%;font: 17px Calibri;}";
            style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
            style = style + "padding: 2px 3px;text-align: center;}";
            style = style + "</style>";

            // CREATE A WINDOW OBJECT.
            var win = window.open('', '', 'height=700,width=700');

            win.document.write('<html><head>');
            win.document.write('<title>');   // <title> FOR PDF HEADER.

            win.document.write('</title>');   // <title> FOR PDF HEADER.
            win.document.write("<center><h1>Rapor</h1></center>");
            win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
            win.document.write('</head>');
            win.document.write('<body><table>');
            win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
            win.document.write('</table></body></html>');

            win.document.close();   // CLOSE THE CURRENT WINDOW.

            win.print();    // PRINT THE CONTENTS.
        }

		scope.yekdem = function () {
			$http({url:baseUrl + '/streams/' + 'F1DPQR5IsPYQeE6cAqXLv9u12Q5iYAAAU1JWRE5aUElEQVRBXDExREMwMV9FTkVSR1lfRVBJQVNfWUVLREVN' + '/recorded?startTime=*-7200d&maxCount=150000',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic T1lBS0NJTUVOVE9cZGNwaWRhdGE6UGFzc3dvcmQxMjMq",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",
	           			"Content-Type" : "application/json",
	           		}
	            }).then(function (response) {
				    					      				      
				      	timeStringArrayValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				     						      	
						var date4today = new Date();						

						for (var i = 0; i < response.data.Items.length; i++) {

							oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
							dateStringFromAPI = String(oldTimeapi);
							dateFromAPI = new Date(dateStringFromAPI);
							dateFromAPI.setHours(dateFromAPI.getHours() + 3);
							dateFromAPI = dateFromAPI.toISOString();
							newResponse = String(dateFromAPI);

							if((newResponse.slice(0,4) == date4today.getFullYear().toString())){								
								for (var y = 0; y < 12; y++) {
									
									if(newResponse.slice(5,7) == timeStringArrayMonth[y].slice(0,2)){
										timeStringArrayValuesMonth[y] = response.data.Items[i].Value;
									}										
								}
							}
						}

						for (var z = 0; z < 24; z++) {
							if(typeof(timeStringArrayValuesMonth[z]) != "number"){
								timeStringArrayValuesMonth[z] = 0;
							}
						}						

						chart.data = [{
							  "country": "Ocak",
							  "visits": timeStringArrayValuesMonth[0]
							},{
							  "country": "Şubata",
							  "visits": timeStringArrayValuesMonth[1]
							},{
							  "country": "Mart",
							  "visits": timeStringArrayValuesMonth[2]
							}, {
							  "country": "Nisan",
							  "visits": timeStringArrayValuesMonth[3]
							}, {
							  "country": "Mayıs",
							  "visits": timeStringArrayValuesMonth[4]
							}, {
							  "country": "Haziran",
							  "visits": timeStringArrayValuesMonth[5]
							}, {
							  "country": "Temmuz",
							  "visits": timeStringArrayValuesMonth[6]
							}, {
							  "country": "Ağustos",
							  "visits": timeStringArrayValuesMonth[7]
							}, {
							  "country": "Eylül",
							  "visits": timeStringArrayValuesMonth[8]
							}, {
							  "country": "Ekim",
							  "visits": timeStringArrayValuesMonth[9]
							}, {
							  "country": "Kasım",
							  "visits": timeStringArrayValuesMonth[10]
							}, {
							  "country": "Aralık",
							  "visits": timeStringArrayValuesMonth[11]
							}];
			});
		}

		function yekdem() {
			$http({url:baseUrl + '/streams/' + 'F1DPQR5IsPYQeE6cAqXLv9u12Q5iYAAAU1JWRE5aUElEQVRBXDExREMwMV9FTkVSR1lfRVBJQVNfWUVLREVN' + '/recorded?startTime=*-7200d&maxCount=150000',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic T1lBS0NJTUVOVE9cZGNwaWRhdGE6UGFzc3dvcmQxMjMq",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",
	           			"Content-Type" : "application/json",
	           		}
	            }).then(function (response) {
				    					      				      
				      	timeStringArrayValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				     						      	
						var date4today = new Date();						

						for (var i = 0; i < response.data.Items.length; i++) {

							oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
							dateStringFromAPI = String(oldTimeapi);
							dateFromAPI = new Date(dateStringFromAPI);
							dateFromAPI.setHours(dateFromAPI.getHours() + 3);
							dateFromAPI = dateFromAPI.toISOString();
							newResponse = String(dateFromAPI);

							if((newResponse.slice(0,4) == date4today.getFullYear().toString())){								
								for (var y = 0; y < 12; y++) {
									
									if(newResponse.slice(5,7) == timeStringArrayMonth[y].slice(0,2)){
										timeStringArrayValuesMonth[y] = response.data.Items[i].Value;
									}										
								}
							}
						}

						for (var z = 0; z < 24; z++) {
							if(typeof(timeStringArrayValuesMonth[z]) != "number"){
								timeStringArrayValuesMonth[z] = 0;
							}
						}						

						chart.data = [{
							  "country": "Ocak",
							  "visits": timeStringArrayValuesMonth[0]
							},{
							  "country": "Şubata",
							  "visits": timeStringArrayValuesMonth[1]
							},{
							  "country": "Mart",
							  "visits": timeStringArrayValuesMonth[2]
							}, {
							  "country": "Nisan",
							  "visits": timeStringArrayValuesMonth[3]
							}, {
							  "country": "Mayıs",
							  "visits": timeStringArrayValuesMonth[4]
							}, {
							  "country": "Haziran",
							  "visits": timeStringArrayValuesMonth[5]
							}, {
							  "country": "Temmuz",
							  "visits": timeStringArrayValuesMonth[6]
							}, {
							  "country": "Ağustos",
							  "visits": timeStringArrayValuesMonth[7]
							}, {
							  "country": "Eylül",
							  "visits": timeStringArrayValuesMonth[8]
							}, {
							  "country": "Ekim",
							  "visits": timeStringArrayValuesMonth[9]
							}, {
							  "country": "Kasım",
							  "visits": timeStringArrayValuesMonth[10]
							}, {
							  "country": "Aralık",
							  "visits": timeStringArrayValuesMonth[11]
							}];				  
			});
		}

		scope.ptf = function () {
			$http({url:baseUrl + '/streams/' + 'F1DPQR5IsPYQeE6cAqXLv9u12Q5SYAAAU1JWRE5aUElEQVRBXDExREMwMV9FTkVSR1lfRVBJQVNfR09QX1BURg' + '/recorded?startTime=*-7200d&maxCount=150000',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic T1lBS0NJTUVOVE9cZGNwaWRhdGE6UGFzc3dvcmQxMjMq",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",
	           			"Content-Type" : "application/json",
	           		}
	            }).then(function (response) {

				(async () => {

				    const { value: formValues } = await Swal.fire({
				      title: 'Seçimleriniz',
				      html:
				          '<input id="swal-input1" class="swal2-input" type="date">',
				      focusConfirm: false,
				      preConfirm: () => {
				        return [
				          document.getElementById('swal-input1').value
				        ]
				      }
				    })

				    if (formValues) {
				    	formValues;					      
				      Swal.fire({
							        title: 'Veriler Alındı.',
							        html:
							            'SEÇİMLERİNİZ: <pre><code>' +
							            JSON.stringify(formValues) +
							            '</code></pre>',
							            confirmButtonText: 'Kapat'
				     			})
				      	timeStringArrayValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

				      	var date1Year = formValues[0].slice(0,4);
						var date1Month = formValues[0].slice(5,7);
						var date1Day = formValues[0].slice(8,10);

						var date4today = new Date();

						for (var i = 0; i < response.data.Items.length; i++) {

							oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
							dateStringFromAPI = String(oldTimeapi);
							dateFromAPI = new Date(dateStringFromAPI);
							dateFromAPI.setHours(dateFromAPI.getHours() +3);
							dateFromAPI = dateFromAPI.toISOString();
							newResponse = String(dateFromAPI);

							if((newResponse.slice(0,4) == date1Year) && (newResponse.slice(5,7) == date1Month) && (newResponse.slice(8,10) == date1Day)){								
								for (var y = 0; y < 24; y++) {
									
									if(newResponse.slice(11,13) == timeStringArray[y].slice(0,2)){
										timeStringArrayValues[y] = response.data.Items[i].Value;
									}
								}
							}
						}

						for (var z = 0; z < 24; z++) {
							if(typeof(timeStringArrayValues[z]) != "number"){
								timeStringArrayValues[z] = 0;
							}
						}

						chart.data = [{
							  "country": "00:00",
							  "visits": timeStringArrayValues[0]
							},{
							  "country": "01:00",
							  "visits": timeStringArrayValues[1]
							},{
							  "country": "02:00",
							  "visits": timeStringArrayValues[2]
							}, {
							  "country": "03:00",
							  "visits": timeStringArrayValues[3]
							}, {
							  "country": "04:00",
							  "visits": timeStringArrayValues[4]
							}, {
							  "country": "05:00",
							  "visits": timeStringArrayValues[5]
							}, {
							  "country": "06:00",
							  "visits": timeStringArrayValues[6]
							}, {
							  "country": "07:00",
							  "visits": timeStringArrayValues[7]
							}, {
							  "country": "08:00",
							  "visits": timeStringArrayValues[8]
							}, {
							  "country": "09:00",
							  "visits": timeStringArrayValues[9]
							}, {
							  "country": "10:00",
							  "visits": timeStringArrayValues[10]
							}, {
							  "country": "11:00",
							  "visits": timeStringArrayValues[11]
							}, {
							  "country": "12:00",
							  "visits": timeStringArrayValues[12]
							}, {
							  "country": "13:00",
							  "visits": timeStringArrayValues[13]
							}, {
							  "country": "14:00",
							  "visits": timeStringArrayValues[14]
							}, {
							  "country": "15:00",
							  "visits": timeStringArrayValues[15]
							}, {
							  "country": "16:00",
							  "visits": timeStringArrayValues[16]
							}, {
							  "country": "17:00",
							  "visits": timeStringArrayValues[17]
							}, {
							  "country": "18:00",
							  "visits": timeStringArrayValues[18]
							}, {
							  "country": "19:00",
							  "visits": timeStringArrayValues[19]
							}, {
							  "country": "20:00",
							  "visits": timeStringArrayValues[20]
							}, {
							  "country": "21:00",
							  "visits": timeStringArrayValues[21]
							}, {
							  "country": "22:00",
							  "visits": timeStringArrayValues[22]
							}, {
							  "country": "23:00",
							  "visits": timeStringArrayValues[23]
							}];
				  		}
				  })()
			});
		}

		scope.smf = function () {
			$http({url:baseUrl + '/streams/' + 'F1DPQR5IsPYQeE6cAqXLv9u12Q5CYAAAU1JWRE5aUElEQVRBXDExREMwMV9FTkVSR1lfRVBJQVNfREdQX1NNRg' + '/recorded?startTime=*-7200d&maxCount=150000',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic T1lBS0NJTUVOVE9cZGNwaWRhdGE6UGFzc3dvcmQxMjMq",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",
	           			"Content-Type" : "application/json",
	           		}
	            }).then(function (response) {

				(async () => {

				    const { value: formValues } = await Swal.fire({
				      title: 'Seçimleriniz',
				      html:
				          '<input id="swal-input1" class="swal2-input" type="date">',
				      focusConfirm: false,
				      preConfirm: () => {
				        return [
				          document.getElementById('swal-input1').value
				        ]
				      }
				    })

				    if (formValues) {
				    	formValues;					      
				      Swal.fire({
							        title: 'Veriler Alındı.',
							        html:
							            'SEÇİMLERİNİZ: <pre><code>' +
							            JSON.stringify(formValues) +
							            '</code></pre>',
							            confirmButtonText: 'Kapat'
				     			})
				      	timeStringArrayValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

				      	var date1Year = formValues[0].slice(0,4);
						var date1Month = formValues[0].slice(5,7);
						var date1Day = formValues[0].slice(8,10);

						var date4today = new Date();
						
						for (var i = 0; i < response.data.Items.length; i++) {

							oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
							dateStringFromAPI = String(oldTimeapi);
							dateFromAPI = new Date(dateStringFromAPI);
							dateFromAPI.setHours(dateFromAPI.getHours() +3);
							dateFromAPI = dateFromAPI.toISOString();
							newResponse = String(dateFromAPI);

							if((newResponse.slice(0,4) == date1Year) && (newResponse.slice(5,7) == date1Month) && (newResponse.slice(8,10) == date1Day)){								
								for (var y = 0; y < 24; y++) {
									if(newResponse.slice(11,13) == timeStringArray[y].slice(0,2)){
										timeStringArrayValues[y] = response.data.Items[i].Value;
									}
								}
							}
						}

						for (var z = 0; z < 24; z++) {
							if(typeof(timeStringArrayValues[z]) != "number"){
								timeStringArrayValues[z] = 0;
							}
						}

						chart.data = [{
							  "country": "00:00",
							  "visits": timeStringArrayValues[0]
							},{
							  "country": "01:00",
							  "visits": timeStringArrayValues[1]
							},{
							  "country": "02:00",
							  "visits": timeStringArrayValues[2]
							}, {
							  "country": "03:00",
							  "visits": timeStringArrayValues[3]
							}, {
							  "country": "04:00",
							  "visits": timeStringArrayValues[4]
							}, {
							  "country": "05:00",
							  "visits": timeStringArrayValues[5]
							}, {
							  "country": "06:00",
							  "visits": timeStringArrayValues[6]
							}, {
							  "country": "07:00",
							  "visits": timeStringArrayValues[7]
							}, {
							  "country": "08:00",
							  "visits": timeStringArrayValues[8]
							}, {
							  "country": "09:00",
							  "visits": timeStringArrayValues[9]
							}, {
							  "country": "10:00",
							  "visits": timeStringArrayValues[10]
							}, {
							  "country": "11:00",
							  "visits": timeStringArrayValues[11]
							}, {
							  "country": "12:00",
							  "visits": timeStringArrayValues[12]
							}, {
							  "country": "13:00",
							  "visits": timeStringArrayValues[13]
							}, {
							  "country": "14:00",
							  "visits": timeStringArrayValues[14]
							}, {
							  "country": "15:00",
							  "visits": timeStringArrayValues[15]
							}, {
							  "country": "16:00",
							  "visits": timeStringArrayValues[16]
							}, {
							  "country": "17:00",
							  "visits": timeStringArrayValues[17]
							}, {
							  "country": "18:00",
							  "visits": timeStringArrayValues[18]
							}, {
							  "country": "19:00",
							  "visits": timeStringArrayValues[19]
							}, {
							  "country": "20:00",
							  "visits": timeStringArrayValues[20]
							}, {
							  "country": "21:00",
							  "visits": timeStringArrayValues[21]
							}, {
							  "country": "22:00",
							  "visits": timeStringArrayValues[22]
							}, {
							  "country": "23:00",
							  "visits": timeStringArrayValues[23]
							}];
				  		}
				  })()
			});
		}

		function convertToChart(data){
            return data.Rows.map(function(item){
                return{
                    value: item.Value,
                    attribute: item.Label
                }
            });
        }
        
        function dataUpdate(newData){if(newData){}}
	};

	PV.symbolCatalog.register(definition);

})(window.PIVisualization);