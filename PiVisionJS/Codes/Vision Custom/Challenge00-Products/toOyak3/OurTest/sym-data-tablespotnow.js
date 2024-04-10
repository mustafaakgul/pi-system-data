(function (PV) { 

	function symbolVis() { 

	} 

	PV.deriveVisualizationFromBase(symbolVis);

	var baseUrl = "https://172.16.4.31/piwebapi";

	var formvalues4form = [];

	var total;
	var send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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
		{Timestamp : "Pazartesi 00:00", Value : 0},
		{Timestamp : "Salı      00:00", Value : 0},
		{Timestamp : "Çarşamba  00:00", Value : 0},
		{Timestamp : "Perşembe  00:00", Value : 0},
		{Timestamp : "Cuma      00:00", Value : 0},
		{Timestamp : "Cumartesi 00:00", Value : 0},
		{Timestamp : "Pazar     00:00", Value : 0}
	];
	var send2FrontDailyValues2Front = [
		{Timestamp : "00 - 01 00:00", Value : 0},
		{Timestamp : "01 - 02 00:00", Value : 0},
		{Timestamp : "02 - 03 00:00", Value : 0},
		{Timestamp : "03 - 04 00:00", Value : 0},
		{Timestamp : "04 - 05 00:00", Value : 0},
		{Timestamp : "05 - 06 00:00", Value : 0},
		{Timestamp : "06 - 07 00:00", Value : 0},
		{Timestamp : "07 - 08 00:00", Value : 0},
		{Timestamp : "08 - 09 00:00", Value : 0},
		{Timestamp : "09 - 10 00:00", Value : 0},
		{Timestamp : "10 - 11 00:00", Value : 0},
		{Timestamp : "11 - 12 00:00", Value : 0},
		{Timestamp : "12 - 13 00:00", Value : 0},
		{Timestamp : "13 - 14 00:00", Value : 0},
		{Timestamp : "14 - 15 00:00", Value : 0},
		{Timestamp : "15 - 16 00:00", Value : 0},
		{Timestamp : "16 - 17 00:00", Value : 0},
		{Timestamp : "17 - 18 00:00", Value : 0},
		{Timestamp : "18 - 19 00:00", Value : 0},
		{Timestamp : "19 - 20 00:00", Value : 0},
		{Timestamp : "20 - 21 00:00", Value : 0},
		{Timestamp : "21 - 22 00:00", Value : 0},
		{Timestamp : "22 - 23 00:00", Value : 0},
		{Timestamp : "23 - 24 00:00", Value : 0}
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

	var dictMontly4D2FrontJson =[];

	symbolVis.prototype.init = function (scope, elem, $http) {
		var path = scope.symbol.DataSources[0].slice(3);

		$http({url:"https://172.16.4.31/piwebapi/attributes?path=" + path,
           method:'GET',
           crossDomain: true,
           dataType: "json",
           data:{},
           headers: {
           			"Authorization" : "Basic S01UXERBVEE6S21fMTIzNA==",
           			"Accept" : "application/json", 
           			"X-Requested-With" : "XMLHttpRequest",
           			"Content-Type" : "application/json",
           		}
            }).then(function (response) {
            scope.webId = response.data.WebId;
		});

        timestampFilter = function(oldTime){

        	dateStringFromAPI = String(oldTime);
			dateFromAPI = new Date(dateStringFromAPI);

			dateFromAPI.setHours(dateFromAPI.getHours() + 3);
			return dateFromAPI;
        }

		scope.sendValueAllData = function () {
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-600d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic S01UXERBVEE6S21fMTIzNA==",
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
					dateFromAPI.setHours(dateFromAPI.getHours() + 3);
					dateFromAPI = dateFromAPI.toISOString();
					changingDateFormat = new Date(dateFromAPI);
				
					newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
					response.data.Items[i].Timestamp = newResponse;
				}		
				scope.DataItems = response.data.Items;
				scope.sending2FrontDateinFront ="Bütün Veri";	
			});
		 }

		daysInMonth = function(month, year) {
        	return new Date(year, month, 0).getDate();
    	} 

		solveTimeComplexity = function(wrongDay, wrongMonth, exactYear, minus){

			var result = [0,0];
			var oxo = daysInMonth(wrongMonth, exactYear);
			result[0] = wrongDay - minus + oxo;
			result[1] = wrongMonth;

			return result;
		}

		stringWrite = function(minusDay, difference){

			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-10d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic S01UXERBVEE6S21fMTIzNA==",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",
	           			"Content-Type" : "application/json",
	           		}
	            }).then(function (response) {
	
				var d = new Date();				
				var beforeformatted = "";
				var formattedMonth = "";
				var formattedDay = "";
				var findDay = d.getDate() - minusDay;
				var unformattedValues = [0,0];

				total = 0;
				send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				send2FrontDailyValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				send2FrontDailyCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				dictDaily = {
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

				if( findDay <= 0 ){
					unformattedValues = solveTimeComplexity( d.getDate(), d.getMonth(), d.getFullYear(), minusDay);

					if(unformattedValues[0].toString().length !=2 ){
						beforeformatted = "0";
						formattedDay = beforeformatted.concat((unformattedValues[0]).toString());
					}
					else{
						formattedDay = (unformattedValues[0]).toString();
					}

					if( (unformattedValues[1]).toString().length != 2 ){
							beforeformatted = "0";
							formattedMonth = beforeformatted.concat((unformattedValues[1]).toString());
					}
					else{
						formattedMonth = (d.getMonth() + 1).toString();
					}

				}
				else{

					if( (d.getMonth() + 1).toString().length != 2 ){
							beforeformatted = "0";
							formattedMonth = beforeformatted.concat((d.getMonth() + 1).toString());
					}
					else{
						formattedMonth = (d.getMonth() + 1).toString();
					}
					
					if( (d.getDate() - minusDay).toString().length != 2 ){
							beforeformatted = "0";
							formattedDay = beforeformatted.concat((d.getDate() - minusDay).toString());
					}
					else{
						formattedDay = (d.getDate() - minusDay).toString();
					}

				}

				function sortDates(a, b)
				{
				    return a.getTime() - b.getTime();
				}
				var dates4sorting = [];
				var min4sortingDateArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

				for (var i = 0; i < min4sortingDateArray.length; i++) {
					min4sortingDateArray[i] = new Date("04.15.2099 15:34:32");
				}
				
				for (var i = 0; i < response.data.Items.length; i++) {

					oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
					dateStringFromAPI = String(oldTimeapi);
					dateFromAPI = new Date(dateStringFromAPI);
					dateFromAPI.setHours(dateFromAPI.getHours() + 2);
					dateFromAPI = dateFromAPI.toISOString();
					newResponse = String(dateFromAPI);		

					if((newResponse.slice(0,4) == (d.getFullYear()).toString()) && (newResponse.slice(5,7) == formattedMonth) && (newResponse.slice(8,10) == formattedDay)){

						if (newResponse.slice(11,13) == "00"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(Date(min4sortingDateArray[0]));
								dates4sorting.push(Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[0] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[0] = response.data.Items[i].Value;
								}
							}								
						}

						if (newResponse.slice(11,13) == "01"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[1]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[1] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[1] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "02"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[2]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[2] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[2] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "03"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								
								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[3]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[3] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[3] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "04"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[4]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[4] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[4] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "05"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[5]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[5] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[5] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "06"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[6]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[6] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[6] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "07"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[7]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[7] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[7] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "08"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[8]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[8] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[8] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "09"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[9]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[9] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[9] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "10"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[10]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[10] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[10] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "11"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[11]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[11] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[11] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "12"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[12]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[12] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[12] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "13"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[13]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[13] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[13] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "14"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[14]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[14] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[14] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "15"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[15]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[15] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[15] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "16"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[16]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[16] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[16] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "17"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[17]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[17] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[17] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "18"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[18]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[18] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[18] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "19"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[19]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[19] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[19] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "20"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[20]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[20] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[20] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "21"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[21]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[21] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[21] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "22"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[22]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[22] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[22] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "23"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[23]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[23] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[23] = response.data.Items[i].Value;
								}
							}
						}
					}
				}
				var obtainedSortedValue;
				for (var i = 0; i < send2FrontDailyValues.length; i++) {
					if(send2FrontDailyValues[i] > 0){
						obtainedSortedValue = send2FrontDailyValues[i];
						break;
					}
				 } 
				 //console.log(send2FrontDailyValues);
				 dictWeekly2Front[minusDay -1].Value = obtainedSortedValue;			 
			});	
		}

		scope.sendValueWeekly = function () {

				dict4Weekly = [0,0,0,0,0,0,0];
				dictWeekly2Front = [
					{Timestamp : "Pazartesi 00:00", Value : 0},
					{Timestamp : "Salı      00:00", Value : 0},
					{Timestamp : "Çarşamba  00:00", Value : 0},
					{Timestamp : "Perşembe  00:00", Value : 0},
					{Timestamp : "Cuma      00:00", Value : 0},
					{Timestamp : "Cumartesi 00:00", Value : 0},
					{Timestamp : "Pazar     00:00", Value : 0}
				];
				dictWeekly = {
					"01D" : 0,
					"02D" : 0,
					"03D" : 0,
					"04D" : 0,
					"05D" : 0,
					"06D" : 0,
					"07D" : 0
				};


				var send4Edit = 7;

				for (var i = 1; i <= 7; i++) {
					stringWrite(i, send4Edit);		
				}

				scope.DataItems = dictWeekly2Front;	
				console.log(dictWeekly2Front);
				scope.sending2FrontDateinFront = testDate2.getDate() + "." + (testDate2.getMonth()+1) + "." + testDate2.getFullYear() + "-" + testDate1.getDate() + "." + (testDate1.getMonth()+1) + "." + testDate1.getFullYear();
		 }

		scope.sendValueDaily = function () {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-3d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic S01UXERBVEE6S21fMTIzNA==",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",
	           			"Content-Type" : "application/json",	         
	           		}
	            }).then(function (response) {

				var d = new Date();
				var beforeformatted;
				var formattedMonth;

				total = 0;
				send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				send2FrontDailyValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				send2FrontDailyCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				dictDaily = {
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
				send2FrontDailyValues2Front = [
					{Timestamp : "00 - 01 00:00", Value : 0},
					{Timestamp : "01 - 02 00:00", Value : 0},
					{Timestamp : "02 - 03 00:00", Value : 0},
					{Timestamp : "03 - 04 00:00", Value : 0},
					{Timestamp : "04 - 05 00:00", Value : 0},
					{Timestamp : "05 - 06 00:00", Value : 0},
					{Timestamp : "06 - 07 00:00", Value : 0},
					{Timestamp : "07 - 08 00:00", Value : 0},
					{Timestamp : "08 - 09 00:00", Value : 0},
					{Timestamp : "09 - 10 00:00", Value : 0},
					{Timestamp : "10 - 11 00:00", Value : 0},
					{Timestamp : "11 - 12 00:00", Value : 0},
					{Timestamp : "12 - 13 00:00", Value : 0},
					{Timestamp : "13 - 14 00:00", Value : 0},
					{Timestamp : "14 - 15 00:00", Value : 0},
					{Timestamp : "15 - 16 00:00", Value : 0},
					{Timestamp : "16 - 17 00:00", Value : 0},
					{Timestamp : "17 - 18 00:00", Value : 0},
					{Timestamp : "18 - 19 00:00", Value : 0},
					{Timestamp : "19 - 20 00:00", Value : 0},
					{Timestamp : "20 - 21 00:00", Value : 0},
					{Timestamp : "21 - 22 00:00", Value : 0},
					{Timestamp : "22 - 23 00:00", Value : 0},
					{Timestamp : "23 - 24 00:00", Value : 0}
				];	

				if( (d.getMonth() + 1).toString().length != 2 ){
						beforeformatted = "0";
						formattedMonth = beforeformatted.concat((d.getMonth() + 1).toString());
				}
				else{
					formattedMonth = (d.getMonth() + 1).toString();
				}

				var formattedDay ;
				if( (d.getDate() - 1).toString().length != 2 ){

					formattedDay = (d.getDate() - 1);

					if (formattedDay == 0) {
						var date4Last = new Date();

						var currentMonthMinus4Last;
						var currentYear4Last;
						currentMonthMinus4Last = date4Last.getMonth();
						currentYear4Last = date4Last.getFullYear();
						console.log("asda");
						var lastday = daysInMonth(currentMonthMinus4Last, currentYear4Last);
						formattedDay = lastday.toString();
						formattedMonth = (d.getMonth()).toString();

					}
					else{
						beforeformatted = "0";
						formattedDay = beforeformatted.concat((d.getDate() - 1).toString());
					}
						
				}
				else{
					
					formattedDay = (d.getDate() - 1).toString();
				}

				function sortDates(a, b)
				{
				    return a.getTime() - b.getTime();
				}
				var dates4sorting = [];
				var min4sortingDateArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

				for (var i = 0; i < min4sortingDateArray.length; i++) {
					min4sortingDateArray[i] = new Date("04.15.2099 15:34:32");
				}
				
				for (var i = 0; i < response.data.Items.length; i++) {

					oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
					dateStringFromAPI = String(oldTimeapi);
					dateFromAPI = new Date(dateStringFromAPI);
					dateFromAPI.setHours(dateFromAPI.getHours() + 2);
					dateFromAPI = dateFromAPI.toISOString();
					newResponse = String(dateFromAPI);		

					if((newResponse.slice(0,4) == (d.getFullYear()).toString()) && (newResponse.slice(5,7) == formattedMonth) && (newResponse.slice(8,10) == formattedDay)){

						if (newResponse.slice(11,13) == "00"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(Date(min4sortingDateArray[0]));
								dates4sorting.push(Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[0] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[0] = response.data.Items[i].Value;
								}
							}								
						}

						if (newResponse.slice(11,13) == "01"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[1]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[1] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[1] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "02"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[2]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[2] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[2] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "03"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								
								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[3]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[3] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[3] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "04"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[4]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[4] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[4] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "05"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[5]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[5] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[5] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "06"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[6]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[6] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[6] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "07"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[7]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[7] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[7] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "08"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[8]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[8] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[8] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "09"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[9]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[9] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[9] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "10"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[10]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[10] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[10] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "11"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[11]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[11] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[11] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "12"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[12]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[12] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[12] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "13"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[13]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[13] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[13] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "14"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[14]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[14] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[14] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "15"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[15]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[15] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[15] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "16"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[16]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[16] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[16] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "17"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[17]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[17] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[17] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "18"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[18]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[18] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[18] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "19"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[19]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[19] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[19] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "20"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[20]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[20] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[20] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "21"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[21]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[21] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[21] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "22"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[22]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[22] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[22] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "23"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[23]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[23] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[23] = response.data.Items[i].Value;
								}
							}
						}
					}
				}
				
				for (var i = 0; i <= 23; i++) {
					send2FrontDailyValues2Front[i].Value = send2FrontDailyValues[i]
				}
				scope.DataItems = send2FrontDailyValues2Front;	
				scope.sending2FrontDateinFront =formattedDay + "." + formattedMonth + "." + d.getFullYear().toString();
			});
		 }

		 sendValueDailyEdit = function (exactDay) {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-60d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic S01UXERBVEE6S21fMTIzNA==",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",	          
	           			"Content-Type" : "application/json",	           			
	           		}
	            }).then(function (response) {

				var d = new Date();	
				var beforeformatted;
				var formattedMonth;

				total = 0;
				send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				send2FrontDailyValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				send2FrontDailyCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				dictDaily = {
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

				if( (d.getMonth()).toString().length != 2 ){
						beforeformatted = "0";
						formattedMonth = beforeformatted.concat((d.getMonth()).toString());
				}
				else{
					formattedMonth = (d.getMonth()).toString();
				}

				var formattedDay ;
				if( exactDay.toString().length != 2 ){
						beforeformatted = "0";
						formattedDay = beforeformatted.concat(exactDay.toString());
				}
				else{
					formattedDay = exactDay.toString();
				}

				function sortDates(a, b)
				{
				    return a.getTime() - b.getTime();
				}
				var dates4sorting = [];
				var min4sortingDateArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

				for (var i = 0; i < min4sortingDateArray.length; i++) {
					min4sortingDateArray[i] = new Date("04.15.2099 15:34:32");
				}
				
				for (var i = 0; i < response.data.Items.length; i++) {

					oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
					dateStringFromAPI = String(oldTimeapi);
					dateFromAPI = new Date(dateStringFromAPI);
					dateFromAPI.setHours(dateFromAPI.getHours() + 2);
					dateFromAPI = dateFromAPI.toISOString();
					newResponse = String(dateFromAPI);		

					if((newResponse.slice(0,4) == (d.getFullYear()).toString()) && (newResponse.slice(5,7) == formattedMonth) && (newResponse.slice(8,10) == formattedDay)){

						if (newResponse.slice(11,13) == "00"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(Date(min4sortingDateArray[0]));
								dates4sorting.push(Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[0] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[0] = response.data.Items[i].Value;
								}
							}								
						}

						if (newResponse.slice(11,13) == "01"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[1]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[1] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[1] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "02"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[2]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[2] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[2] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "03"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								
								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[3]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[3] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[3] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "04"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[4]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[4] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[4] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "05"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[5]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[5] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[5] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "06"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[6]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[6] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[6] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "07"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[7]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[7] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[7] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "08"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[8]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[8] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[8] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "09"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[9]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[9] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[9] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "10"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[10]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[10] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[10] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "11"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[11]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[11] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[11] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "12"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[12]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[12] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[12] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "13"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[13]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[13] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[13] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "14"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[14]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[14] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[14] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "15"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[15]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[15] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[15] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "16"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[16]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[16] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[16] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "17"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[17]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[17] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[17] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "18"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[18]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[18] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[18] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "19"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[19]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[19] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[19] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "20"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[20]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[20] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[20] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "21"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[21]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[21] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[21] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "22"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[22]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[22] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[22] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "23"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[23]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[23] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[23] = response.data.Items[i].Value;
								}
							}
						}
					}
				}
			
				for (var i = 0; i < send2FrontDailyValues.length; i++) {
					 total = total + send2FrontDailyValues[i];
				 } 
				 total = total / 24;
				 dictMontly4DArray[exactDay - 1] = total;
				 dictMontly4D2Front[exactDay - 1].Value = total;
			});
		 }


		 scope.sendValueMontly = function () {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-70d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic S01UXERBVEE6S21fMTIzNA==",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",	          
	           			"Content-Type" : "application/json",	           			
	           		}
	            }).then(function (response) {
	  
				var dateNow = new Date();
				var maxLength4Month = 0;
				var currentMonthMinus;
				var currentYear;
				currentMonthMinus = dateNow.getMonth();
				currentYear = dateNow.getFullYear();
				dictMontly4D2Front = [
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
						{Timestamp : "31D", Value : 0},	
					];
				dictMontly4DArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				maxLength4Month = daysInMonth(currentMonthMinus, currentYear);

				for (var i = 1; i <= maxLength4Month; i++) {
					sendValueDailyEdit(i);
				}
				
				console.log(maxLength4Month);
				for (var i = 0; i < maxLength4Month; i++) {
				dictMontly4D2FrontJson[i] = dictMontly4D2Front[i];
				dictMontly4D2FrontJson[i].Timestamp = (i+1) + "." + currentMonthMinus + "." + currentYear + "  00:00";
				}				
				scope.DataItems = dictMontly4D2FrontJson;
				scope.sending2FrontDateinFront =currentMonthMinus + "." + currentYear;
			});
		 }	

		 sendValueDailyEdit4Year = function (exactDay, exactMonth) {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-60d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic S01UXERBVEE6S21fMTIzNA==",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",	          
	           			"Content-Type" : "application/json",	           			
	           		}
	            }).then(function (response) {

				var d = new Date();	
				var beforeformatted;
				var formattedMonth;

				total = 0;
				send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				send2FrontDailyValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				send2FrontDailyCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				dictDaily = {
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

				if( (exactMonth).toString().length != 2 ){
						beforeformatted = "0";
						formattedMonth = beforeformatted.concat((exactMonth).toString());
				}
				else{
					formattedMonth = (exactMonth).toString();
				}

				var formattedDay ;
				if( exactDay.toString().length != 2 ){
						beforeformatted = "0";
						formattedDay = beforeformatted.concat(exactDay.toString());
				}
				else{
					formattedDay = exactDay.toString();
				}

				function sortDates(a, b)
				{
				    return a.getTime() - b.getTime();
				}
				var dates4sorting = [];
				var min4sortingDateArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

				for (var i = 0; i < min4sortingDateArray.length; i++) {
					min4sortingDateArray[i] = new Date("04.15.2099 15:34:32");
				}
				
				for (var i = 0; i < response.data.Items.length; i++) {

					oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
					dateStringFromAPI = String(oldTimeapi);
					dateFromAPI = new Date(dateStringFromAPI);
					dateFromAPI.setHours(dateFromAPI.getHours() + 2);
					dateFromAPI = dateFromAPI.toISOString();
					newResponse = String(dateFromAPI);		

					if((newResponse.slice(0,4) == (d.getFullYear()).toString()) && (newResponse.slice(5,7) == formattedMonth) && (newResponse.slice(8,10) == formattedDay)){

						if (newResponse.slice(11,13) == "00"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(Date(min4sortingDateArray[0]));
								dates4sorting.push(Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[0] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[0] = response.data.Items[i].Value;
								}
							}								
						}

						if (newResponse.slice(11,13) == "01"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[1]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[1] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[1] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "02"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[2]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[2] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[2] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "03"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								
								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[3]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[3] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[3] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "04"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[4]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[4] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[4] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "05"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[5]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[5] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[5] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "06"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[6]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[6] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[6] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "07"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[7]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[7] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[7] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "08"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[8]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[8] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[8] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "09"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[9]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[9] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[9] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "10"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[10]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[10] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[10] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "11"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[11]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[11] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[11] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "12"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[12]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[12] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[12] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "13"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[13]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[13] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[13] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "14"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[14]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[14] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[14] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "15"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[15]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[15] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[15] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "16"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[16]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[16] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[16] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "17"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[17]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[17] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[17] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "18"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[18]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[18] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[18] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "19"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[19]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[19] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[19] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "20"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[20]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[20] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[20] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "21"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[21]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[21] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[21] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "22"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[22]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[22] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[22] = response.data.Items[i].Value;
								}
							}
						}

						if (newResponse.slice(11,13) == "23"){
						
							if(typeof(response.data.Items[i].Value) == "number"){

								dates4sorting = [];
								dates4sorting.push(new Date(min4sortingDateArray[23]));
								dates4sorting.push(new Date(newResponse));
								var sorted = dates4sorting.sort(sortDates);
								var minDate = sorted[0];
								min4sortingDateArray[23] = minDate;

								if(minDate.toString() == new Date(newResponse).toString()){
									send2FrontDailyValues[23] = response.data.Items[i].Value;
								}
							}
						}
					}
				}
			
				for (var i = 0; i < send2FrontDailyValues.length; i++) {
					 total = total + send2FrontDailyValues[i];
				 } 
				 total = total / 24;
				 dictMontly4DArray[exactDay - 1] = total;
				 dictMontly4D2Front[exactDay - 1].Value = total;
			});
		 }

		 scope.sendValueYearly = function () {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-380d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic S01UXERBVEE6S21fMTIzNA==",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",	          
	           			"Content-Type" : "application/json",	           			
	           		}
	            }).then(function (response) {
	  
				dictMontly4D2Front = [
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
						{Timestamp : "31D", Value : 0},	
					];
				var dictYearly4D2Front = [
						{Timestamp : "Ocak    00:00", Value : 0},
						{Timestamp : "Şubat   00:00", Value : 0},
						{Timestamp : "Mart    00:00", Value : 0},
						{Timestamp : "Nisan   00:00", Value : 0},
						{Timestamp : "Mayıs   00:00", Value : 0},
						{Timestamp : "Haziran 00:00", Value : 0},
						{Timestamp : "Temmuz  00:00", Value : 0},
						{Timestamp : "Ağustos 00:00", Value : 0},
						{Timestamp : "Eylül   00:00", Value : 0},
						{Timestamp : "Ekim    00:00", Value : 0},
						{Timestamp : "Kasım   00:00", Value : 0},
						{Timestamp : "Aralık  00:00", Value : 0}	
					];
				
				var dateNow4Year = new Date();
				var maxLength4Month4Year = 0;
				var currentMonthMinus4Year;
				var pastYear4Year;
				currentMonthMinus4Year = dateNow4Year.getMonth();
				pastYear4Year = (dateNow4Year.getFullYear()) - 1;
				
				for (var month4Loop = 0; month4Loop < 12; month4Loop++) {

					maxLength4Month4Year = daysInMonth((month4Loop+1), pastYear4Year);
					
					for (var i = 1; i <= maxLength4Month4Year; i++) {
						sendValueDailyEdit4Year(i, (month4Loop+1));
					}
					
					var total4Month4Year = 0;
					for (var i = 0; i < dictMontly4D2Front.length; i++) {
						total4Month4Year = total4Month4Year + dictMontly4D2Front[i].Value;

					}
					dictYearly4D2Front[month4Loop].Value = total4Month4Year;
					dictMontly4D2Front = [
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
				}
				
				scope.DataItems = dictYearly4D2Front;
				scope.sending2FrontDateinFront = pastYear4Year;
			});
		 }	

		 scope.specific = function () {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-380d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic S01UXERBVEE6S21fMTIzNA==",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",	          
	           			"Content-Type" : "application/json",	           			
	           		}
	            }).then(function (response) {
	  
				  (async () => {

				    const { value: formValues } = await Swal.fire({
				      title: 'Multiple inputs',
				      html:
				          '<input id="swal-input1" class="swal2-input" type="date">' +
				          '<input id="swal-input2" class="swal2-input" type="date">' +
				          '<select id="swal-input3" class="swal2-input"> <option value="avr">Ortalama</option> <option value="sum">Toplam</option>  <option value="spot">Son Deger</option> </select>' +
				          '<select id="swal-input4" class="swal2-input"> <option value="daily">Günlük</option> <option value="weekly">Weekly</option>  <option value="montly">Montly</option>  <option value="yearly">Yearly</option> </select>',
				      focusConfirm: false,
				      preConfirm: () => {
				        return [
				          document.getElementById('swal-input1').value,
				          document.getElementById('swal-input2').value,
				          document.getElementById('swal-input3').value,
				          document.getElementById('swal-input4').value
				        ]
				      }
				    })

				    if (formValues) {

				    	formvalues4form = formValues;

				    	for (var i = 0; i < 4; i++) {
					        console.log(formvalues4form[i]);
					      }

				      Swal.fire({
							        title: 'Veriler Alındı.',
							        html:
							            'SEÇİMLERİNİZ: <pre><code>' +
							            JSON.stringify(formValues) +
							            '</code></pre>',
							            confirmButtonText: 'Kapat'
				     			})
				    }
				  })()  
			});
		 }	
		 
	};

	var definition = { 
		typeName: 'data-tablespotnow', 
		inject: ['$http'],
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single, 
		visObjectType: symbolVis, 
		getDefaultConfig: function() { 
			return { 
				DataShape: 'Value', 
				Height: 150, 
				Width: 150 
			}; 
		} 
	}; 
	PV.symbolCatalog.register(definition);

})(window.PIVisualization);