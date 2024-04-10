(function (PV) { 

	function symbolVis() { 

	} 

	PV.deriveVisualizationFromBase(symbolVis);

	var baseUrl = "https://10.13.63.231/piwebapi";

	var formvalues4form = [];

	var total = 0;
	var send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var send2FrontDailyTimestamp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
	var send2FrontDailyValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dictMontly4DArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var send2FrontDailyCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dict4Weekly = [0,0,0,0,0,0,0];
	var dictDaily = {
		"00" : 0,
		"01" : 0,
		"02" : 0,
		"03" : 0,
		"04" : 0,
		"05" : 0,
		"06" : 0,
		"07" : 0,
		"08" : 0,
		"09" : 0,
		"10" : 0,
		"11" : 0,
		"12" : 0,
		"13" : 0,
		"14" : 0,
		"15" : 0,
		"16" : 0,
		"17" : 0,
		"18" : 0,
		"19" : 0,
		"20" : 0,
		"21" : 0,
		"22" : 0,
		"23" : 0
	};
	var dictWeekly = {
		"01D" : 0,
		"02D" : 0,
		"03D" : 0,
		"04D" : 0,
		"05D" : 0,
		"06D" : 0,
		"07D" : 0
	};
	var dictWeekly2Front = [
		{Timestamp : "Pazartesi", Value : 0},
		{Timestamp : "Salı", Value : 0},
		{Timestamp : "Çarşamba", Value : 0},
		{Timestamp : "Perşembe", Value : 0},
		{Timestamp : "Cuma", Value : 0},
		{Timestamp : "Cumartesi", Value : 0},
		{Timestamp : "Pazar", Value : 0}
	];
	var send2FrontDailyValues2Front = [
		{Timestamp : "00 - 01", Value : 0},
		{Timestamp : "01 - 02", Value : 0},
		{Timestamp : "02 - 03", Value : 0},
		{Timestamp : "03 - 04", Value : 0},
		{Timestamp : "04 - 05", Value : 0},
		{Timestamp : "05 - 06", Value : 0},
		{Timestamp : "06 - 07", Value : 0},
		{Timestamp : "07 - 08", Value : 0},
		{Timestamp : "08 - 09", Value : 0},
		{Timestamp : "09 - 10", Value : 0},
		{Timestamp : "10 - 11", Value : 0},
		{Timestamp : "11 - 12", Value : 0},
		{Timestamp : "12 - 13", Value : 0},
		{Timestamp : "13 - 14", Value : 0},
		{Timestamp : "14 - 15", Value : 0},
		{Timestamp : "15 - 16", Value : 0},
		{Timestamp : "16 - 17", Value : 0},
		{Timestamp : "17 - 18", Value : 0},
		{Timestamp : "18 - 19", Value : 0},
		{Timestamp : "19 - 20", Value : 0},
		{Timestamp : "20 - 21", Value : 0},
		{Timestamp : "21 - 22", Value : 0},
		{Timestamp : "22 - 23", Value : 0},
		{Timestamp : "23 - 24", Value : 0}
	];

	var dictMontly4W = {
		"01W" : 0,
		"02W" : 0,
		"03W" : 0,
		"04W" : 0
	};
	var dictMontly4D = {
		"01D" : 0,
		"02D" : 0,
		"03D" : 0,
		"04D" : 0,
		"05D" : 0,
		"06D" : 0,
		"07D" : 0,
		"08D" : 0,
		"09D" : 0,
		"10D" : 0,
		"11D" : 0,
		"12D" : 0,
		"13D" : 0,
		"14D" : 0,
		"15D" : 0,
		"16D" : 0,
		"17D" : 0,
		"18D" : 0,
		"19D" : 0,
		"20D" : 0,
		"21D" : 0,
		"22D" : 0,
		"23D" : 0,
		"24D" : 0,
		"25D" : 0,
		"26D" : 0,
		"27D" : 0,
		"28D" : 0,
		"29D" : 0,
		"30D" : 0,
		"31D" : 0
	};

	var dictMontly4D2Front = [
			{Timestamp : "01D", Value : 0},
			{Timestamp : "02D", Value : 0},
			{Timestamp : "03D", Value : 0},
			{Timestamp : "04D", Value : 0},
			{Timestamp : "05D", Value : 0},
			{Timestamp : "06D", Value : 0},
			{Timestamp : "07D", Value : 0},
			{Timestamp : "08D", Value : 0},
			{Timestamp : "09D", Value : 0},
			{Timestamp : "10D", Value : 0},
			{Timestamp : "11D", Value : 0},
			{Timestamp : "12D", Value : 0},
			{Timestamp : "13D", Value : 0},
			{Timestamp : "14D", Value : 0},
			{Timestamp : "15D", Value : 0},
			{Timestamp : "16D", Value : 0},
			{Timestamp : "17D", Value : 0},
			{Timestamp : "18D", Value : 0},
			{Timestamp : "19D", Value : 0},
			{Timestamp : "20D", Value : 0},
			{Timestamp : "21D", Value : 0},
			{Timestamp : "22D", Value : 0},
			{Timestamp : "23D", Value : 0},
			{Timestamp : "24D", Value : 0},
			{Timestamp : "25D", Value : 0},
			{Timestamp : "26D", Value : 0},
			{Timestamp : "27D", Value : 0},
			{Timestamp : "28D", Value : 0},
			{Timestamp : "29D", Value : 0},
			{Timestamp : "30D", Value : 0},
			{Timestamp : "31D", Value : 0}	
		];

	var dictYearly4D2Front = [
			{Timestamp : "01M", Value : 0},
			{Timestamp : "02M", Value : 0},
			{Timestamp : "03M", Value : 0},
			{Timestamp : "04M", Value : 0},
			{Timestamp : "05M", Value : 0},
			{Timestamp : "06M", Value : 0},
			{Timestamp : "07M", Value : 0},
			{Timestamp : "08M", Value : 0},
			{Timestamp : "09M", Value : 0},
			{Timestamp : "10M", Value : 0},
			{Timestamp : "11M", Value : 0},
			{Timestamp : "12M", Value : 0}	
		];

	var dateStringFromAPI;
	var dateFromAPI;
	var returningTime;
	var oldTimeapi;
	var changingDateFormat;

	var newResponse;
	var sending2FrontDate;

	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour :"numeric", minute: "numeric", second:"numeric" };

	var dictMontly4D2FrontJson = [];

	var bettweenFuncExchangeValues = [0, 0, 0, 0, 0, 0, 0];

	symbolVis.prototype.init = function (scope, elem, $http) {

		yekdem();

        timestampFilter = function(oldTime){

        	dateStringFromAPI = String(oldTime);
			dateFromAPI = new Date(dateStringFromAPI);

			dateFromAPI.setHours(dateFromAPI.getHours() + 3);
			return dateFromAPI;
        }

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

				for (var i = 0; i < response.data.Items.length; i++) {

					options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour :"numeric", minute: "numeric", second:"numeric" };

					oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
					dateStringFromAPI = String(oldTimeapi);
					dateFromAPI = new Date(dateStringFromAPI);
					dateFromAPI.setHours(dateFromAPI.getHours());
					dateFromAPI = dateFromAPI.toISOString();
					changingDateFormat = new Date(dateFromAPI);
				
					newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
					response.data.Items[i].Timestamp = newResponse;
				}		
				scope.DataItems = response.data.Items;
				scope.sending2FrontDateinFront ="Yekdem Bütün Veri";
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

				for (var i = 0; i < response.data.Items.length; i++) {

					options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour :"numeric", minute: "numeric", second:"numeric" };

					oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
					dateStringFromAPI = String(oldTimeapi);
					dateFromAPI = new Date(dateStringFromAPI);
					dateFromAPI.setHours(dateFromAPI.getHours());
					dateFromAPI = dateFromAPI.toISOString();
					changingDateFormat = new Date(dateFromAPI);
				
					newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
					response.data.Items[i].Timestamp = newResponse;
				}		
				scope.DataItems = response.data.Items;
				scope.sending2FrontDateinFront ="Yekdem Bütün Veri";
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

				     	send2FrontDailyValues2Front = [
														{Timestamp : "00 - 01", Value : 0},
														{Timestamp : "01 - 02", Value : 0},
														{Timestamp : "02 - 03", Value : 0},
														{Timestamp : "03 - 04", Value : 0},
														{Timestamp : "04 - 05", Value : 0},
														{Timestamp : "05 - 06", Value : 0},
														{Timestamp : "06 - 07", Value : 0},
														{Timestamp : "07 - 08", Value : 0},
														{Timestamp : "08 - 09", Value : 0},
														{Timestamp : "09 - 10", Value : 0},
														{Timestamp : "10 - 11", Value : 0},
														{Timestamp : "11 - 12", Value : 0},
														{Timestamp : "12 - 13", Value : 0},
														{Timestamp : "13 - 14", Value : 0},
														{Timestamp : "14 - 15", Value : 0},
														{Timestamp : "15 - 16", Value : 0},
														{Timestamp : "16 - 17", Value : 0},
														{Timestamp : "17 - 18", Value : 0},
														{Timestamp : "18 - 19", Value : 0},
														{Timestamp : "19 - 20", Value : 0},
														{Timestamp : "20 - 21", Value : 0},
														{Timestamp : "21 - 22", Value : 0},
														{Timestamp : "22 - 23", Value : 0},
														{Timestamp : "23 - 24", Value : 0}
													 ];	  
						send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  
						send2FrontDailyTimestamp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				     	
				      	var date1Year = formValues[0].slice(0,4);
						var date1Month = formValues[0].slice(5,7);
						var date1Day = formValues[0].slice(8,10);
						var counter4smt=0;

						for (var i = 0; i < response.data.Items.length; i++) {

							oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
							dateStringFromAPI = String(oldTimeapi);
							dateFromAPI = new Date(dateStringFromAPI);
							dateFromAPI.setHours(dateFromAPI.getHours() + 3);
							dateFromAPI = dateFromAPI.toISOString();
							newResponse = String(dateFromAPI);

							if((newResponse.slice(0,4) == date1Year) && (newResponse.slice(5,7) == date1Month) && (newResponse.slice(8,10) == date1Day)){								
									send2FrontDailyValues[counter4smt] = response.data.Items[i].Value;
									send2FrontDailyTimestamp[counter4smt] = newResponse;					
									counter4smt++;																
							}
						}

						for (var i = 0; i <= 23; i++) {
							send2FrontDailyValues2Front[i].Value = send2FrontDailyValues[i];
							send2FrontDailyTimestamp[i] = String(send2FrontDailyTimestamp[i]);
							oldTimeapi = send2FrontDailyTimestamp[i].slice(0,50);
							dateStringFromAPI = String(oldTimeapi);
							dateFromAPI = new Date(dateStringFromAPI);
							dateFromAPI.setHours(dateFromAPI.getHours() - 3);
							dateFromAPI = dateFromAPI.toISOString();
							changingDateFormat = new Date(dateFromAPI);						
							newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
							send2FrontDailyValues2Front[i].Timestamp = newResponse;
						}
						scope.DataItems = send2FrontDailyValues2Front;
						scope.sending2FrontDateinFront ="SMF Veri";
				  }
				   
				  })()
			});
		}

		scope.ptf = function () {
			$http({url:baseUrl + '/streams/' + 'F1DPQR5IsPYQeE6cAqXLv9u12Q5SYAAAU1JWRE5aUElEQVRBXDExREMwMV9FTkVSR1lfRVBJQVNfR09QX1BURg' + '/recorded?startTime=*-7200d&endTime=*+5d&maxCount=150000',
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

				     	send2FrontDailyValues2Front = [
														{Timestamp : "00 - 01", Value : 0},
														{Timestamp : "01 - 02", Value : 0},
														{Timestamp : "02 - 03", Value : 0},
														{Timestamp : "03 - 04", Value : 0},
														{Timestamp : "04 - 05", Value : 0},
														{Timestamp : "05 - 06", Value : 0},
														{Timestamp : "06 - 07", Value : 0},
														{Timestamp : "07 - 08", Value : 0},
														{Timestamp : "08 - 09", Value : 0},
														{Timestamp : "09 - 10", Value : 0},
														{Timestamp : "10 - 11", Value : 0},
														{Timestamp : "11 - 12", Value : 0},
														{Timestamp : "12 - 13", Value : 0},
														{Timestamp : "13 - 14", Value : 0},
														{Timestamp : "14 - 15", Value : 0},
														{Timestamp : "15 - 16", Value : 0},
														{Timestamp : "16 - 17", Value : 0},
														{Timestamp : "17 - 18", Value : 0},
														{Timestamp : "18 - 19", Value : 0},
														{Timestamp : "19 - 20", Value : 0},
														{Timestamp : "20 - 21", Value : 0},
														{Timestamp : "21 - 22", Value : 0},
														{Timestamp : "22 - 23", Value : 0},
														{Timestamp : "23 - 24", Value : 0}
													 ];	  
						send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  
						send2FrontDailyTimestamp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				     	
				      	var date1Year = formValues[0].slice(0,4);
						var date1Month = formValues[0].slice(5,7);
						var date1Day = formValues[0].slice(8,10);
						var counter4smt=0;

						for (var i = 0; i < response.data.Items.length; i++) {

							oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
							dateStringFromAPI = String(oldTimeapi);
							dateFromAPI = new Date(dateStringFromAPI);
							dateFromAPI.setHours(dateFromAPI.getHours() + 3);
							dateFromAPI = dateFromAPI.toISOString();
							newResponse = String(dateFromAPI);

							if((newResponse.slice(0,4) == date1Year) && (newResponse.slice(5,7) == date1Month) && (newResponse.slice(8,10) == date1Day)){												
									send2FrontDailyValues[counter4smt] = response.data.Items[i].Value;
									send2FrontDailyTimestamp[counter4smt] = newResponse;
									counter4smt++;																
							}
						}

						for (var i = 0; i <= 23; i++) {
							send2FrontDailyValues2Front[i].Value = send2FrontDailyValues[i];
							send2FrontDailyTimestamp[i] = String(send2FrontDailyTimestamp[i]);
							oldTimeapi = send2FrontDailyTimestamp[i].slice(0,50);
							dateStringFromAPI = String(oldTimeapi);
							dateFromAPI = new Date(dateStringFromAPI);
							dateFromAPI.setHours(dateFromAPI.getHours() - 3);
							dateFromAPI = dateFromAPI.toISOString();
							changingDateFormat = new Date(dateFromAPI);						
							newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
							send2FrontDailyValues2Front[i].Timestamp = newResponse;
						}
						scope.DataItems = send2FrontDailyValues2Front;
						scope.sending2FrontDateinFront ="PTF Veri";
				  }				   
				  })()

			});
		}
	 			 
	};

	var definition = { 
		typeName: 'data-tableavrEpias', 
		iconUrl: 'Scripts\\app\\editor\\symbols\\ext\\icons\\table1.png',
		inject: ['$http'],
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single, 
		visObjectType: symbolVis, 
		getDefaultConfig: function() { 
			return { 
				DataShape: 'Value', 
				Height: 250, 
				Width: 700 
			}; 
		} 
	}; 
	PV.symbolCatalog.register(definition);

})(window.PIVisualization);