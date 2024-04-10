(function (PV) { 

	function symbolVis() { 

	} 
	PV.deriveVisualizationFromBase(symbolVis);

	var baseUrl = "https://10.13.63.234/piwebapi";

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
		{Timestamp : "01D", Value : 0},
		{Timestamp : "02D", Value : 0},
		{Timestamp : "03D", Value : 0},
		{Timestamp : "04D", Value : 0},
		{Timestamp : "05D", Value : 0},
		{Timestamp : "06D", Value : 0},
		{Timestamp : "07D", Value : 0}
	];
	var send2FrontDailyValues2Front = [
		{Timestamp : "00", Value : 0},
		{Timestamp : "01", Value : 0},
		{Timestamp : "02", Value : 0},
		{Timestamp : "03", Value : 0},
		{Timestamp : "04", Value : 0},
		{Timestamp : "05", Value : 0},
		{Timestamp : "06", Value : 0},
		{Timestamp : "07", Value : 0},
		{Timestamp : "08", Value : 0},
		{Timestamp : "09", Value : 0},
		{Timestamp : "10", Value : 0},
		{Timestamp : "11", Value : 0},
		{Timestamp : "12", Value : 0},
		{Timestamp : "13", Value : 0},
		{Timestamp : "14", Value : 0},
		{Timestamp : "15", Value : 0},
		{Timestamp : "16", Value : 0},
		{Timestamp : "17", Value : 0},
		{Timestamp : "18", Value : 0},
		{Timestamp : "19", Value : 0},
		{Timestamp : "20", Value : 0},
		{Timestamp : "21", Value : 0},
		{Timestamp : "22", Value : 0},
		{Timestamp : "23", Value : 0}
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
			{Timestamp : "31D", Value : 0},	
		];

	var dateStringFromAPI;
	var dateFromAPI;
	var returningTime;
	var oldTimeapi;
	var changingDateFormat;

	var newResponse;

	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour :"numeric", minute: "numeric", second:"numeric" };


	symbolVis.prototype.init = function (scope, elem, $http) {
		var path = scope.symbol.DataSources[0].slice(3);

		$http({url:"https://10.13.63.234/piwebapi/attributes?path=" + path,
           method:'GET',
           crossDomain: true,
           dataType: "json",
           data:{},
           headers: {
           			"Authorization" : "Basic b3lha2NpbWVudG9cb2NwaWRhdGE6UGFzc3dvcmQxMjMq",
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
	           			"Authorization" : "Basic b3lha2NpbWVudG9cb2NwaWRhdGE6UGFzc3dvcmQxMjMq",
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
					//newResponse = String(dateFromAPI);
					//response.data.Items[i].Timestamp = newResponse.toLocaleDateString('TR-TR', options);
					//response.data.Items[i].Timestamp = response.data.Items[i].Timestamp
					//console.log(response.data.Items[i].Timestamp);
					//console.log(newResponse);
					//console.log(newResponse.toLocaleDateString('TR-TR', options));
					newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
					console.log(newResponse);
					response.data.Items[i].Timestamp = newResponse;
				}		
				scope.DataItems = response.data.Items;	
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

		stringWrite = function(minusDay){

			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-10d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic b3lha2NpbWVudG9cb2NwaWRhdGE6UGFzc3dvcmQxMjMq",
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

				for (var i = 0; i < response.data.Items.length; i++) {

					oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
					dateStringFromAPI = String(oldTimeapi);
					dateFromAPI = new Date(dateStringFromAPI);
					dateFromAPI.setHours(dateFromAPI.getHours());
					dateFromAPI = dateFromAPI.toISOString();
					newResponse = String(dateFromAPI);

					if((newResponse.slice(0,4) == (d.getFullYear()).toString()) && (newResponse.slice(5,7) == formattedMonth) && (newResponse.slice(8,10) == formattedDay)){

						if (newResponse.slice(11,13) == "00"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[0] = send2FrontDailyValue[0] + response.data.Items[i].Value;
								send2FrontDailyCounter[0]++;
								dictDaily["00"] = send2FrontDailyValue[0] / send2FrontDailyCounter[0];
								send2FrontDailyValues[0] = send2FrontDailyValue[0] / send2FrontDailyCounter[0];
						}

						if (newResponse.slice(11,13) == "01"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[1] = send2FrontDailyValue[1] + response.data.Items[i].Value;
								send2FrontDailyCounter[1]++;
								dictDaily["01"] = send2FrontDailyValue[1] / send2FrontDailyCounter[1];
								send2FrontDailyValues[1] = send2FrontDailyValue[1] / send2FrontDailyCounter[1];
						}

						if (newResponse.slice(11,13) == "02"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[2] = send2FrontDailyValue[2] + response.data.Items[i].Value;
								send2FrontDailyCounter[2]++;
								dictDaily["02"] = send2FrontDailyValue[2] / send2FrontDailyCounter[2];
								send2FrontDailyValues[2] = send2FrontDailyValue[2] / send2FrontDailyCounter[2];
						}

						if (newResponse.slice(11,13) == "03"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[3] = send2FrontDailyValue[3] + response.data.Items[i].Value;
								send2FrontDailyCounter[3]++;
								dictDaily["03"] = send2FrontDailyValue[3] / send2FrontDailyCounter[3];
								send2FrontDailyValues[3] = send2FrontDailyValue[3] / send2FrontDailyCounter[3];
						}

						if (newResponse.slice(11,13) == "04"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[4] = send2FrontDailyValue[4] + response.data.Items[i].Value;
								send2FrontDailyCounter[4]++;
								dictDaily["04"] = send2FrontDailyValue[4] / send2FrontDailyCounter[4];
								send2FrontDailyValues[4] = send2FrontDailyValue[4] / send2FrontDailyCounter[4];
						}

						if (newResponse.slice(11,13) == "05"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[5] = send2FrontDailyValue[5] + response.data.Items[i].Value;
								send2FrontDailyCounter[5]++;
								dictDaily["05"] = send2FrontDailyValue[5] / send2FrontDailyCounter[5];
								send2FrontDailyValues[5] = send2FrontDailyValue[5] / send2FrontDailyCounter[5];
						}

						if (newResponse.slice(11,13) == "06"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[6] = send2FrontDailyValue[6] + response.data.Items[i].Value;
								send2FrontDailyCounter[6]++;
								dictDaily["06"] = send2FrontDailyValue[6] / send2FrontDailyCounter[6];
								send2FrontDailyValues[6] = send2FrontDailyValue[6] / send2FrontDailyCounter[6];
						}

						if (newResponse.slice(11,13) == "07"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[7] = send2FrontDailyValue[7] + response.data.Items[i].Value;
								send2FrontDailyCounter[7]++;
								dictDaily["07"] = send2FrontDailyValue[7] / send2FrontDailyCounter[7];
								send2FrontDailyValues[7] = send2FrontDailyValue[7] / send2FrontDailyCounter[7];
						}

						if (newResponse.slice(11,13) == "08"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[8] = send2FrontDailyValue[8] + response.data.Items[i].Value;
								send2FrontDailyCounter[8]++;
								dictDaily["08"] = send2FrontDailyValue[8] / send2FrontDailyCounter[8];
								send2FrontDailyValues[8] = send2FrontDailyValue[8] / send2FrontDailyCounter[8];
						}

						if (newResponse.slice(11,13) == "09"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[9] = send2FrontDailyValue[9] + response.data.Items[i].Value;
								send2FrontDailyCounter[9]++;
								dictDaily["09"] = send2FrontDailyValue[9] / send2FrontDailyCounter[9];
								send2FrontDailyValues[9] = send2FrontDailyValue[9] / send2FrontDailyCounter[9];
						}

						if (newResponse.slice(11,13) == "10"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[10] = send2FrontDailyValue[10] + response.data.Items[i].Value;
								send2FrontDailyCounter[10]++;
								dictDaily["10"] = send2FrontDailyValue[10] / send2FrontDailyCounter[10];
								send2FrontDailyValues[10] = send2FrontDailyValue[10] / send2FrontDailyCounter[10];
						}

						if (newResponse.slice(11,13) == "11"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[11] = send2FrontDailyValue[11] + response.data.Items[i].Value;
								send2FrontDailyCounter[11]++;
								dictDaily["11"] = send2FrontDailyValue[11] / send2FrontDailyCounter[11];
								send2FrontDailyValues[11] = send2FrontDailyValue[11] / send2FrontDailyCounter[11];
						}

						if (newResponse.slice(11,13) == "12"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[12] = send2FrontDailyValue[12] + response.data.Items[i].Value;
								send2FrontDailyCounter[12]++;
								dictDaily["12"] = send2FrontDailyValue[12] / send2FrontDailyCounter[12];
								send2FrontDailyValues[12] = send2FrontDailyValue[12] / send2FrontDailyCounter[12];
						}

						if (newResponse.slice(11,13) == "13"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[13] = send2FrontDailyValue[13] + response.data.Items[i].Value;
								send2FrontDailyCounter[13]++;
								dictDaily["13"] = send2FrontDailyValue[13] / send2FrontDailyCounter[13];
								send2FrontDailyValues[13] = send2FrontDailyValue[13] / send2FrontDailyCounter[13];
						}

						if (newResponse.slice(11,13) == "14"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[14] = send2FrontDailyValue[14] + response.data.Items[i].Value;
								send2FrontDailyCounter[14]++;
								dictDaily["14"] = send2FrontDailyValue[14] / send2FrontDailyCounter[14];
								send2FrontDailyValues[14] = send2FrontDailyValue[14] / send2FrontDailyCounter[14];
						}

						if (newResponse.slice(11,13) == "15"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[15] = send2FrontDailyValue[15] + response.data.Items[i].Value;
								send2FrontDailyCounter[15]++;
								dictDaily["15"] = send2FrontDailyValue[15] / send2FrontDailyCounter[15];
								send2FrontDailyValues[15] = send2FrontDailyValue[15] / send2FrontDailyCounter[15];
						}

						if (newResponse.slice(11,13) == "16"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[16] = send2FrontDailyValue[16] + response.data.Items[i].Value;
								send2FrontDailyCounter[16]++;
								dictDaily["16"] = send2FrontDailyValue[16] / send2FrontDailyCounter[16];
								send2FrontDailyValues[16] = send2FrontDailyValue[16] / send2FrontDailyCounter[16];
						}

						if (newResponse.slice(11,13) == "17"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[17] = send2FrontDailyValue[17] + response.data.Items[i].Value;
								send2FrontDailyCounter[17]++;
								dictDaily["17"] = send2FrontDailyValue[17] / send2FrontDailyCounter[17];
								send2FrontDailyValues[17] = send2FrontDailyValue[17] / send2FrontDailyCounter[17];
						}

						if (newResponse.slice(11,13) == "18"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[18] = send2FrontDailyValue[18] + response.data.Items[i].Value;
								send2FrontDailyCounter[18]++;
								dictDaily["18"] = send2FrontDailyValue[18] / send2FrontDailyCounter[18];
								send2FrontDailyValues[18] = send2FrontDailyValue[18] / send2FrontDailyCounter[18];
						}

						if (newResponse.slice(11,13) == "19"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[19] = send2FrontDailyValue[19] + response.data.Items[i].Value;
								send2FrontDailyCounter[19]++;
								dictDaily["19"] = send2FrontDailyValue[19] / send2FrontDailyCounter[19];
								send2FrontDailyValues[19] = send2FrontDailyValue[19] / send2FrontDailyCounter[19];
						}

						if (newResponse.slice(11,13) == "20"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[20] = send2FrontDailyValue[20] + response.data.Items[i].Value;
								send2FrontDailyCounter[20]++;
								dictDaily["20"] = send2FrontDailyValue[20] / send2FrontDailyCounter[20];
								send2FrontDailyValues[20] = send2FrontDailyValue[20] / send2FrontDailyCounter[20];
						}

						if (newResponse.slice(11,13) == "21"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[21] = send2FrontDailyValue[21] + response.data.Items[i].Value;
								send2FrontDailyCounter[21]++;
								dictDaily["21"] = send2FrontDailyValue[21] / send2FrontDailyCounter[21];
								send2FrontDailyValues[21] = send2FrontDailyValue[21] / send2FrontDailyCounter[21];
						}

						if (newResponse.slice(11,13) == "22"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[22] = send2FrontDailyValue[22] + response.data.Items[i].Value;
								send2FrontDailyCounter[22]++;
								dictDaily["22"] = send2FrontDailyValue[22] / send2FrontDailyCounter[22];
								send2FrontDailyValues[22] = send2FrontDailyValue[22] / send2FrontDailyCounter[22];
						}

						if (newResponse.slice(11,13) == "23"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[23] = send2FrontDailyValue[23] + response.data.Items[i].Value;
								send2FrontDailyCounter[23]++;
								dictDaily["23"] = send2FrontDailyValue[23] / send2FrontDailyCounter[23];
								send2FrontDailyValues[23] = send2FrontDailyValue[23] / send2FrontDailyCounter[23];
						}
					}
				}
				
				for (var i = 0; i < send2FrontDailyValues.length; i++) {
				 	total = total + send2FrontDailyValues[i];
				 	console.log("asda");
				 	console.log(total);
				 } 
				 total = total / 24;
				 dictWeekly2Front[minusDay - 1].Value = total;			 
			});	
		}

		scope.sendValueWeekly = function () {

				dict4Weekly = [0,0,0,0,0,0,0];
				dictWeekly2Front = [
					{Timestamp : "01D", Value : 0},
					{Timestamp : "02D", Value : 0},
					{Timestamp : "03D", Value : 0},
					{Timestamp : "04D", Value : 0},
					{Timestamp : "05D", Value : 0},
					{Timestamp : "06D", Value : 0},
					{Timestamp : "07D", Value : 0}
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

				for (var i = 1; i <= 7; i++) {
					stringWrite(i);		
				}
				scope.DataItems = dictWeekly2Front;	
		 }

		scope.sendValueDaily = function () {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-3d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic b3lha2NpbWVudG9cb2NwaWRhdGE6UGFzc3dvcmQxMjMq",
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
					{Timestamp : "00", Value : 0},
					{Timestamp : "01", Value : 0},
					{Timestamp : "02", Value : 0},
					{Timestamp : "03", Value : 0},
					{Timestamp : "04", Value : 0},
					{Timestamp : "05", Value : 0},
					{Timestamp : "06", Value : 0},
					{Timestamp : "07", Value : 0},
					{Timestamp : "08", Value : 0},
					{Timestamp : "09", Value : 0},
					{Timestamp : "10", Value : 0},
					{Timestamp : "11", Value : 0},
					{Timestamp : "12", Value : 0},
					{Timestamp : "13", Value : 0},
					{Timestamp : "14", Value : 0},
					{Timestamp : "15", Value : 0},
					{Timestamp : "16", Value : 0},
					{Timestamp : "17", Value : 0},
					{Timestamp : "18", Value : 0},
					{Timestamp : "19", Value : 0},
					{Timestamp : "20", Value : 0},
					{Timestamp : "21", Value : 0},
					{Timestamp : "22", Value : 0},
					{Timestamp : "23", Value : 0}
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
						beforeformatted = "0";
						formattedDay = beforeformatted.concat((d.getDate() - 1).toString());
				}
				else{
					formattedDay = (d.getDate() - 1).toString();
				}

				for (var i = 0; i < response.data.Items.length; i++) {

					oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
					dateStringFromAPI = String(oldTimeapi);
					dateFromAPI = new Date(dateStringFromAPI);
					dateFromAPI.setHours(dateFromAPI.getHours());
					dateFromAPI = dateFromAPI.toISOString();
					newResponse = String(dateFromAPI);			

					if((newResponse.slice(0,4) == (d.getFullYear()).toString()) && (newResponse.slice(5,7) == formattedMonth) && (newResponse.slice(8,10) == formattedDay)){

						if (newResponse.slice(11,13) == "00"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[0] = send2FrontDailyValue[0] + response.data.Items[i].Value;
								send2FrontDailyCounter[0]++;
								dictDaily["00"] = send2FrontDailyValue[0] / send2FrontDailyCounter[0];
								send2FrontDailyValues[0] = send2FrontDailyValue[0] / send2FrontDailyCounter[0];
						}

						if (newResponse.slice(11,13) == "01"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[1] = send2FrontDailyValue[1] + response.data.Items[i].Value;
								send2FrontDailyCounter[1]++;
								dictDaily["01"] = send2FrontDailyValue[1] / send2FrontDailyCounter[1];
								send2FrontDailyValues[1] = send2FrontDailyValue[1] / send2FrontDailyCounter[1];
						}

						if (newResponse.slice(11,13) == "02"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[2] = send2FrontDailyValue[2] + response.data.Items[i].Value;
								send2FrontDailyCounter[2]++;
								dictDaily["02"] = send2FrontDailyValue[2] / send2FrontDailyCounter[2];
								send2FrontDailyValues[2] = send2FrontDailyValue[2] / send2FrontDailyCounter[2];
						}

						if (newResponse.slice(11,13) == "03"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[3] = send2FrontDailyValue[3] + response.data.Items[i].Value;
								send2FrontDailyCounter[3]++;
								dictDaily["03"] = send2FrontDailyValue[3] / send2FrontDailyCounter[3];
								send2FrontDailyValues[3] = send2FrontDailyValue[3] / send2FrontDailyCounter[3];
						}

						if (newResponse.slice(11,13) == "04"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[4] = send2FrontDailyValue[4] + response.data.Items[i].Value;
								send2FrontDailyCounter[4]++;
								dictDaily["04"] = send2FrontDailyValue[4] / send2FrontDailyCounter[4];
								send2FrontDailyValues[4] = send2FrontDailyValue[4] / send2FrontDailyCounter[4];
						}

						if (newResponse.slice(11,13) == "05"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[5] = send2FrontDailyValue[5] + response.data.Items[i].Value;
								send2FrontDailyCounter[5]++;
								dictDaily["05"] = send2FrontDailyValue[5] / send2FrontDailyCounter[5];
								send2FrontDailyValues[5] = send2FrontDailyValue[5] / send2FrontDailyCounter[5];
						}

						if (newResponse.slice(11,13) == "06"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[6] = send2FrontDailyValue[6] + response.data.Items[i].Value;
								send2FrontDailyCounter[6]++;
								dictDaily["06"] = send2FrontDailyValue[6] / send2FrontDailyCounter[6];
								send2FrontDailyValues[6] = send2FrontDailyValue[6] / send2FrontDailyCounter[6];
						}

						if (newResponse.slice(11,13) == "07"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[7] = send2FrontDailyValue[7] + response.data.Items[i].Value;
								send2FrontDailyCounter[7]++;
								dictDaily["07"] = send2FrontDailyValue[7] / send2FrontDailyCounter[7];
								send2FrontDailyValues[7] = send2FrontDailyValue[7] / send2FrontDailyCounter[7];
						}

						if (newResponse.slice(11,13) == "08"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[8] = send2FrontDailyValue[8] + response.data.Items[i].Value;
								send2FrontDailyCounter[8]++;
								dictDaily["08"] = send2FrontDailyValue[8] / send2FrontDailyCounter[8];
								send2FrontDailyValues[8] = send2FrontDailyValue[8] / send2FrontDailyCounter[8];
						}

						if (newResponse.slice(11,13) == "09"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[9] = send2FrontDailyValue[9] + response.data.Items[i].Value;
								send2FrontDailyCounter[9]++;
								dictDaily["09"] = send2FrontDailyValue[9] / send2FrontDailyCounter[9];
								send2FrontDailyValues[9] = send2FrontDailyValue[9] / send2FrontDailyCounter[9];
						}

						if (newResponse.slice(11,13) == "10"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[10] = send2FrontDailyValue[10] + response.data.Items[i].Value;
								send2FrontDailyCounter[10]++;
								dictDaily["10"] = send2FrontDailyValue[10] / send2FrontDailyCounter[10];
								send2FrontDailyValues[10] = send2FrontDailyValue[10] / send2FrontDailyCounter[10];
						}

						if (newResponse.slice(11,13) == "11"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[11] = send2FrontDailyValue[11] + response.data.Items[i].Value;
								send2FrontDailyCounter[11]++;
								dictDaily["11"] = send2FrontDailyValue[11] / send2FrontDailyCounter[11];
								send2FrontDailyValues[11] = send2FrontDailyValue[11] / send2FrontDailyCounter[11];
						}

						if (newResponse.slice(11,13) == "12"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[12] = send2FrontDailyValue[12] + response.data.Items[i].Value;
								send2FrontDailyCounter[12]++;
								dictDaily["12"] = send2FrontDailyValue[12] / send2FrontDailyCounter[12];
								send2FrontDailyValues[12] = send2FrontDailyValue[12] / send2FrontDailyCounter[12];
						}

						if (newResponse.slice(11,13) == "13"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[13] = send2FrontDailyValue[13] + response.data.Items[i].Value;
								send2FrontDailyCounter[13]++;
								dictDaily["13"] = send2FrontDailyValue[13] / send2FrontDailyCounter[13];
								send2FrontDailyValues[13] = send2FrontDailyValue[13] / send2FrontDailyCounter[13];
						}

						if (newResponse.slice(11,13) == "14"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[14] = send2FrontDailyValue[14] + response.data.Items[i].Value;
								send2FrontDailyCounter[14]++;
								dictDaily["14"] = send2FrontDailyValue[14] / send2FrontDailyCounter[14];
								send2FrontDailyValues[14] = send2FrontDailyValue[14] / send2FrontDailyCounter[14];
						}

						if (newResponse.slice(11,13) == "15"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[15] = send2FrontDailyValue[15] + response.data.Items[i].Value;
								send2FrontDailyCounter[15]++;
								dictDaily["15"] = send2FrontDailyValue[15] / send2FrontDailyCounter[15];
								send2FrontDailyValues[15] = send2FrontDailyValue[15] / send2FrontDailyCounter[15];
						}

						if (newResponse.slice(11,13) == "16"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[16] = send2FrontDailyValue[16] + response.data.Items[i].Value;
								send2FrontDailyCounter[16]++;
								dictDaily["16"] = send2FrontDailyValue[16] / send2FrontDailyCounter[16];
								send2FrontDailyValues[16] = send2FrontDailyValue[16] / send2FrontDailyCounter[16];
						}

						if (newResponse.slice(11,13) == "17"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[17] = send2FrontDailyValue[17] + response.data.Items[i].Value;
								send2FrontDailyCounter[17]++;
								dictDaily["17"] = send2FrontDailyValue[17] / send2FrontDailyCounter[17];
								send2FrontDailyValues[17] = send2FrontDailyValue[17] / send2FrontDailyCounter[17];
						}

						if (newResponse.slice(11,13) == "18"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[18] = send2FrontDailyValue[18] + response.data.Items[i].Value;
								send2FrontDailyCounter[18]++;
								dictDaily["18"] = send2FrontDailyValue[18] / send2FrontDailyCounter[18];
								send2FrontDailyValues[18] = send2FrontDailyValue[18] / send2FrontDailyCounter[18];
						}

						if (newResponse.slice(11,13) == "19"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[19] = send2FrontDailyValue[19] + response.data.Items[i].Value;
								send2FrontDailyCounter[19]++;
								dictDaily["19"] = send2FrontDailyValue[19] / send2FrontDailyCounter[19];
								send2FrontDailyValues[19] = send2FrontDailyValue[19] / send2FrontDailyCounter[19];
						}

						if (newResponse.slice(11,13) == "20"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[20] = send2FrontDailyValue[20] + response.data.Items[i].Value;
								send2FrontDailyCounter[20]++;
								dictDaily["20"] = send2FrontDailyValue[20] / send2FrontDailyCounter[20];
								send2FrontDailyValues[20] = send2FrontDailyValue[20] / send2FrontDailyCounter[20];
						}

						if (newResponse.slice(11,13) == "21"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[21] = send2FrontDailyValue[21] + response.data.Items[i].Value;
								send2FrontDailyCounter[21]++;
								dictDaily["21"] = send2FrontDailyValue[21] / send2FrontDailyCounter[21];
								send2FrontDailyValues[21] = send2FrontDailyValue[21] / send2FrontDailyCounter[21];
						}

						if (newResponse.slice(11,13) == "22"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[22] = send2FrontDailyValue[22] + response.data.Items[i].Value;
								send2FrontDailyCounter[22]++;
								dictDaily["22"] = send2FrontDailyValue[22] / send2FrontDailyCounter[22];
								send2FrontDailyValues[22] = send2FrontDailyValue[22] / send2FrontDailyCounter[22];
						}

						if (newResponse.slice(11,13) == "23"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[23] = send2FrontDailyValue[23] + response.data.Items[i].Value;
								send2FrontDailyCounter[23]++;
								dictDaily["23"] = send2FrontDailyValue[23] / send2FrontDailyCounter[23];
								send2FrontDailyValues[23] = send2FrontDailyValue[23] / send2FrontDailyCounter[23];
						}
					}
				}
				for (var i = 0; i <= 23; i++) {
					send2FrontDailyValues2Front[i].Value = send2FrontDailyValues[i]
				}
				scope.DataItems = send2FrontDailyValues2Front;	
			});
		 }

		 sendValueDailyEdit = function (exactDay) {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-60d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic b3lha2NpbWVudG9cb2NwaWRhdGE6UGFzc3dvcmQxMjMq",
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

				for (var i = 0; i < response.data.Items.length; i++) {

					oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
					dateStringFromAPI = String(oldTimeapi);
					dateFromAPI = new Date(dateStringFromAPI);
					dateFromAPI.setHours(dateFromAPI.getHours() + 3);
					dateFromAPI = dateFromAPI.toISOString();			
					newResponse = String(dateFromAPI);

					if((newResponse.slice(0,4) == (d.getFullYear()).toString()) && (newResponse.slice(5,7) == formattedMonth) && (newResponse.slice(8,10) == formattedDay)){

						if (newResponse.slice(11,13) == "00"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[0] = send2FrontDailyValue[0] + response.data.Items[i].Value;
								send2FrontDailyCounter[0]++;
								dictDaily["00"] = send2FrontDailyValue[0] / send2FrontDailyCounter[0];
								send2FrontDailyValues[0] = send2FrontDailyValue[0] / send2FrontDailyCounter[0];
						}

						if (newResponse.slice(11,13) == "01"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[1] = send2FrontDailyValue[1] + response.data.Items[i].Value;
								send2FrontDailyCounter[1]++;
								dictDaily["01"] = send2FrontDailyValue[1] / send2FrontDailyCounter[1];
								send2FrontDailyValues[1] = send2FrontDailyValue[1] / send2FrontDailyCounter[1];
						}

						if (newResponse.slice(11,13) == "02"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[2] = send2FrontDailyValue[2] + response.data.Items[i].Value;
								send2FrontDailyCounter[2]++;
								dictDaily["02"] = send2FrontDailyValue[2] / send2FrontDailyCounter[2];
								send2FrontDailyValues[2] = send2FrontDailyValue[2] / send2FrontDailyCounter[2];
						}

						if (newResponse.slice(11,13) == "03"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[3] = send2FrontDailyValue[3] + response.data.Items[i].Value;
								send2FrontDailyCounter[3]++;
								dictDaily["03"] = send2FrontDailyValue[3] / send2FrontDailyCounter[3];
								send2FrontDailyValues[3] = send2FrontDailyValue[3] / send2FrontDailyCounter[3];
						}

						if (newResponse.slice(11,13) == "04"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[4] = send2FrontDailyValue[4] + response.data.Items[i].Value;
								send2FrontDailyCounter[4]++;
								dictDaily["04"] = send2FrontDailyValue[4] / send2FrontDailyCounter[4];
								send2FrontDailyValues[4] = send2FrontDailyValue[4] / send2FrontDailyCounter[4];
						}

						if (newResponse.slice(11,13) == "05"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[5] = send2FrontDailyValue[5] + response.data.Items[i].Value;
								send2FrontDailyCounter[5]++;
								dictDaily["05"] = send2FrontDailyValue[5] / send2FrontDailyCounter[5];
								send2FrontDailyValues[5] = send2FrontDailyValue[5] / send2FrontDailyCounter[5];
						}

						if (newResponse.slice(11,13) == "06"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[6] = send2FrontDailyValue[6] + response.data.Items[i].Value;
								send2FrontDailyCounter[6]++;
								dictDaily["06"] = send2FrontDailyValue[6] / send2FrontDailyCounter[6];
								send2FrontDailyValues[6] = send2FrontDailyValue[6] / send2FrontDailyCounter[6];
						}

						if (newResponse.slice(11,13) == "07"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[7] = send2FrontDailyValue[7] + response.data.Items[i].Value;
								send2FrontDailyCounter[7]++;
								dictDaily["07"] = send2FrontDailyValue[7] / send2FrontDailyCounter[7];
								send2FrontDailyValues[7] = send2FrontDailyValue[7] / send2FrontDailyCounter[7];
						}

						if (newResponse.slice(11,13) == "08"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[8] = send2FrontDailyValue[8] + response.data.Items[i].Value;
								send2FrontDailyCounter[8]++;
								dictDaily["08"] = send2FrontDailyValue[8] / send2FrontDailyCounter[8];
								send2FrontDailyValues[8] = send2FrontDailyValue[8] / send2FrontDailyCounter[8];
						}

						if (newResponse.slice(11,13) == "09"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[9] = send2FrontDailyValue[9] + response.data.Items[i].Value;
								send2FrontDailyCounter[9]++;
								dictDaily["09"] = send2FrontDailyValue[9] / send2FrontDailyCounter[9];
								send2FrontDailyValues[9] = send2FrontDailyValue[9] / send2FrontDailyCounter[9];
						}

						if (newResponse.slice(11,13) == "10"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[10] = send2FrontDailyValue[10] + response.data.Items[i].Value;
								send2FrontDailyCounter[10]++;
								dictDaily["10"] = send2FrontDailyValue[10] / send2FrontDailyCounter[10];
								send2FrontDailyValues[10] = send2FrontDailyValue[10] / send2FrontDailyCounter[10];
						}

						if (newResponse.slice(11,13) == "11"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[11] = send2FrontDailyValue[11] + response.data.Items[i].Value;
								send2FrontDailyCounter[11]++;
								dictDaily["11"] = send2FrontDailyValue[11] / send2FrontDailyCounter[11];
								send2FrontDailyValues[11] = send2FrontDailyValue[11] / send2FrontDailyCounter[11];
						}

						if (newResponse.slice(11,13) == "12"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[12] = send2FrontDailyValue[12] + response.data.Items[i].Value;
								send2FrontDailyCounter[12]++;
								dictDaily["12"] = send2FrontDailyValue[12] / send2FrontDailyCounter[12];
								send2FrontDailyValues[12] = send2FrontDailyValue[12] / send2FrontDailyCounter[12];
						}

						if (newResponse.slice(11,13) == "13"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[13] = send2FrontDailyValue[13] + response.data.Items[i].Value;
								send2FrontDailyCounter[13]++;
								dictDaily["13"] = send2FrontDailyValue[13] / send2FrontDailyCounter[13];
								send2FrontDailyValues[13] = send2FrontDailyValue[13] / send2FrontDailyCounter[13];
						}

						if (newResponse.slice(11,13) == "14"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[14] = send2FrontDailyValue[14] + response.data.Items[i].Value;
								send2FrontDailyCounter[14]++;
								dictDaily["14"] = send2FrontDailyValue[14] / send2FrontDailyCounter[14];
								send2FrontDailyValues[14] = send2FrontDailyValue[14] / send2FrontDailyCounter[14];
						}

						if (newResponse.slice(11,13) == "15"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[15] = send2FrontDailyValue[15] + response.data.Items[i].Value;
								send2FrontDailyCounter[15]++;
								dictDaily["15"] = send2FrontDailyValue[15] / send2FrontDailyCounter[15];
								send2FrontDailyValues[15] = send2FrontDailyValue[15] / send2FrontDailyCounter[15];
						}

						if (newResponse.slice(11,13) == "16"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[16] = send2FrontDailyValue[16] + response.data.Items[i].Value;
								send2FrontDailyCounter[16]++;
								dictDaily["16"] = send2FrontDailyValue[16] / send2FrontDailyCounter[16];
								send2FrontDailyValues[16] = send2FrontDailyValue[16] / send2FrontDailyCounter[16];
						}

						if (newResponse.slice(11,13) == "17"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[17] = send2FrontDailyValue[17] + response.data.Items[i].Value;
								send2FrontDailyCounter[17]++;
								dictDaily["17"] = send2FrontDailyValue[17] / send2FrontDailyCounter[17];
								send2FrontDailyValues[17] = send2FrontDailyValue[17] / send2FrontDailyCounter[17];
						}

						if (newResponse.slice(11,13) == "18"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[18] = send2FrontDailyValue[18] + response.data.Items[i].Value;
								send2FrontDailyCounter[18]++;
								dictDaily["18"] = send2FrontDailyValue[18] / send2FrontDailyCounter[18];
								send2FrontDailyValues[18] = send2FrontDailyValue[18] / send2FrontDailyCounter[18];
						}

						if (newResponse.slice(11,13) == "19"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[19] = send2FrontDailyValue[19] + response.data.Items[i].Value;
								send2FrontDailyCounter[19]++;
								dictDaily["19"] = send2FrontDailyValue[19] / send2FrontDailyCounter[19];
								send2FrontDailyValues[19] = send2FrontDailyValue[19] / send2FrontDailyCounter[19];
						}

						if (newResponse.slice(11,13) == "20"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[20] = send2FrontDailyValue[20] + response.data.Items[i].Value;
								send2FrontDailyCounter[20]++;
								dictDaily["20"] = send2FrontDailyValue[20] / send2FrontDailyCounter[20];
								send2FrontDailyValues[20] = send2FrontDailyValue[20] / send2FrontDailyCounter[20];
						}

						if (newResponse.slice(11,13) == "21"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[21] = send2FrontDailyValue[21] + response.data.Items[i].Value;
								send2FrontDailyCounter[21]++;
								dictDaily["21"] = send2FrontDailyValue[21] / send2FrontDailyCounter[21];
								send2FrontDailyValues[21] = send2FrontDailyValue[21] / send2FrontDailyCounter[21];
						}

						if (newResponse.slice(11,13) == "22"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[22] = send2FrontDailyValue[22] + response.data.Items[i].Value;
								send2FrontDailyCounter[22]++;
								dictDaily["22"] = send2FrontDailyValue[22] / send2FrontDailyCounter[22];
								send2FrontDailyValues[22] = send2FrontDailyValue[22] / send2FrontDailyCounter[22];
						}

						if (newResponse.slice(11,13) == "23"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[23] = send2FrontDailyValue[23] + response.data.Items[i].Value;
								send2FrontDailyCounter[23]++;
								dictDaily["23"] = send2FrontDailyValue[23] / send2FrontDailyCounter[23];
								send2FrontDailyValues[23] = send2FrontDailyValue[23] / send2FrontDailyCounter[23];
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
	           			"Authorization" : "Basic b3lha2NpbWVudG9cb2NwaWRhdGE6UGFzc3dvcmQxMjMq",
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
				scope.DataItems = dictMontly4D2Front;
			});
		 }		
	};

	var definition = { 
		typeName: 'data-table', 
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