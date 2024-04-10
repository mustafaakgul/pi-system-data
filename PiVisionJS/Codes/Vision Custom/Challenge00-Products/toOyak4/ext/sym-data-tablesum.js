(function (PV) { 

	function symbolVis() { 

	} 

	PV.deriveVisualizationFromBase(symbolVis);

	var baseUrl = "https://172.16.4.31/piwebapi";

	var authenticationToken = "Basic S01UXERBVEE6S21fMTIzNA==";

	var testArray = [];
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

	var dictMontly4D2FrontJson =[];

	symbolVis.prototype.init = function (scope, elem, $http) {
		var path = scope.symbol.DataSources[0].slice(3);

		$http({url:"https://172.16.4.31/piwebapi/attributes?path=" + path,
           method:'GET',
           crossDomain: true,
           dataType: "json",
           data:{},
           headers: {
           			"Authorization" : authenticationToken,
           			"Accept" : "application/json", 
           			"X-Requested-With" : "XMLHttpRequest",
           			"Content-Type" : "application/json",
           		}
            }).then(function (response) {
            scope.webId = response.data.WebId;
            scope.label4tag = response.data.Name;
		});

        timestampFilter = function(oldTime){

        	dateStringFromAPI = String(oldTime);
			dateFromAPI = new Date(dateStringFromAPI);

			dateFromAPI.setHours(dateFromAPI.getHours() + 3);
			return dateFromAPI;
        }

        function monthDiff(d1, d2) {
		    var months;
		    months = (d2.getFullYear() - d1.getFullYear()) * 12;
		    months -= d1.getMonth() + 1;
		    months += d2.getMonth();
		    // edit: increment months if d2 comes later in its month than d1 in its month
		    if (d2.getDate() >= d1.getDate())
		        months++
		    // end edit
		    return months <= 0 ? 0 : months;
		}

        function weeks_between(date1, date2) {
		    var ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
		    var date1_ms = date1.getTime();
		    var date2_ms = date2.getTime();
		    var difference_ms = Math.abs(date1_ms - date2_ms);
		    return Math.floor(difference_ms / ONE_WEEK);
		}

		scope.sendValueAllData = function () {
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-600d&maxCount=150000',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : authenticationToken,
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
				scope.sending2FrontDateinFront = scope.label4tag;
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

			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-20d&maxCount=150000',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : authenticationToken,
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
						formattedMonth = (d.getMonth()).toString();
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
					dateFromAPI.setHours(dateFromAPI.getHours() + 2);
					dateFromAPI = dateFromAPI.toISOString();
					newResponse = String(dateFromAPI);

					if((newResponse.slice(0,4) == (d.getFullYear()).toString()) && (newResponse.slice(5,7) == formattedMonth) && (newResponse.slice(8,10) == formattedDay)){

						if (newResponse.slice(11,13) == "00"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[0] = send2FrontDailyValue[0] + response.data.Items[i].Value;
								send2FrontDailyValues[0] = send2FrontDailyValue[0];
							}
						}

						if (newResponse.slice(11,13) == "01"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[1] = send2FrontDailyValue[1] + response.data.Items[i].Value;
								send2FrontDailyValues[1] = send2FrontDailyValue[1];
							}
						}

						if (newResponse.slice(11,13) == "02"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[2] = send2FrontDailyValue[2] + response.data.Items[i].Value;
								send2FrontDailyValues[2] = send2FrontDailyValue[2];
							}
						}

						if (newResponse.slice(11,13) == "03"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[3] = send2FrontDailyValue[3] + response.data.Items[i].Value;
								send2FrontDailyValues[3] = send2FrontDailyValue[3];
							}
						}

						if (newResponse.slice(11,13) == "04"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[4] = send2FrontDailyValue[4] + response.data.Items[i].Value;
								send2FrontDailyValues[4] = send2FrontDailyValue[4];
							}
						}

						if (newResponse.slice(11,13) == "05"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[5] = send2FrontDailyValue[5] + response.data.Items[i].Value;
								send2FrontDailyValues[5] = send2FrontDailyValue[5];
							}
						}

						if (newResponse.slice(11,13) == "06"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[6] = send2FrontDailyValue[6] + response.data.Items[i].Value;
								send2FrontDailyValues[6] = send2FrontDailyValue[6];
							}
						}

						if (newResponse.slice(11,13) == "07"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[7] = send2FrontDailyValue[7] + response.data.Items[i].Value;
								send2FrontDailyValues[7] = send2FrontDailyValue[7];
							}
						}

						if (newResponse.slice(11,13) == "08"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[8] = send2FrontDailyValue[8] + response.data.Items[i].Value;
								send2FrontDailyValues[8] = send2FrontDailyValue[8];
							}
						}

						if (newResponse.slice(11,13) == "09"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[9] = send2FrontDailyValue[9] + response.data.Items[i].Value;
								send2FrontDailyValues[9] = send2FrontDailyValue[9];
							}
						}

						if (newResponse.slice(11,13) == "10"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[10] = send2FrontDailyValue[10] + response.data.Items[i].Value;
								send2FrontDailyValues[10] = send2FrontDailyValue[10];
							}
						}

						if (newResponse.slice(11,13) == "11"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[11] = send2FrontDailyValue[11] + response.data.Items[i].Value;
								send2FrontDailyValues[11] = send2FrontDailyValue[11];
							}
						}

						if (newResponse.slice(11,13) == "12"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[12] = send2FrontDailyValue[12] + response.data.Items[i].Value;
								send2FrontDailyValues[12] = send2FrontDailyValue[12];
							}						
						}

						if (newResponse.slice(11,13) == "13"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[13] = send2FrontDailyValue[13] + response.data.Items[i].Value;
								send2FrontDailyValues[13] = send2FrontDailyValue[13];
							}
						}

						if (newResponse.slice(11,13) == "14"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[14] = send2FrontDailyValue[14] + response.data.Items[i].Value;
								send2FrontDailyValues[14] = send2FrontDailyValue[14];
							}
						}

						if (newResponse.slice(11,13) == "15"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[15] = send2FrontDailyValue[15] + response.data.Items[i].Value;
								send2FrontDailyValues[15] = send2FrontDailyValue[15];
							}
						}

						if (newResponse.slice(11,13) == "16"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[16] = send2FrontDailyValue[16] + response.data.Items[i].Value;
								send2FrontDailyValues[16] = send2FrontDailyValue[16];
							}
						}

						if (newResponse.slice(11,13) == "17"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[17] = send2FrontDailyValue[17] + response.data.Items[i].Value;
								send2FrontDailyValues[17] = send2FrontDailyValue[17];
							}
						}

						if (newResponse.slice(11,13) == "18"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[18] = send2FrontDailyValue[18] + response.data.Items[i].Value;
								send2FrontDailyValues[18] = send2FrontDailyValue[18];
							}
						}

						if (newResponse.slice(11,13) == "19"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[19] = send2FrontDailyValue[19] + response.data.Items[i].Value;
								send2FrontDailyValues[19] = send2FrontDailyValue[19];
							}
						}

						if (newResponse.slice(11,13) == "20"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[20] = send2FrontDailyValue[20] + response.data.Items[i].Value;
								send2FrontDailyValues[20] = send2FrontDailyValue[20];
							}
						}

						if (newResponse.slice(11,13) == "21"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[21] = send2FrontDailyValue[21] + response.data.Items[i].Value;
								send2FrontDailyValues[21] = send2FrontDailyValue[21];
							}
						}

						if (newResponse.slice(11,13) == "22"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[22] = send2FrontDailyValue[22] + response.data.Items[i].Value;
								send2FrontDailyValues[22] = send2FrontDailyValue[22];
							}
						}

						if (newResponse.slice(11,13) == "23"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[23] = send2FrontDailyValue[23] + response.data.Items[i].Value;
								send2FrontDailyValues[23] = send2FrontDailyValue[23];
							}
						}
					}
				}
				
				total = 0;
				var counter4Here = 0;
				for (var i = 0; i < send2FrontDailyValues.length; i++) {
				 	total = total + send2FrontDailyValues[i];
				 }

				 dictWeekly2Front[difference - minusDay].Value = total;			 
			});	
		}

		scope.sendValueWeekly = function () {

				dict4Weekly = [0,0,0,0,0,0,0];
				dictWeekly2Front = [
					{Timestamp : "Pazartesi", Value : 0},
					{Timestamp : "Salı", Value : 0},
					{Timestamp : "Çarşamba", Value : 0},
					{Timestamp : "Perşembe", Value : 0},
					{Timestamp : "Cuma", Value : 0},
					{Timestamp : "Cumartesi", Value : 0},
					{Timestamp : "Pazar", Value : 0}
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

				var weeklyDate = new Date();
				var weeklydifference = weeklyDate.getDay();
				var testDate1 = new Date();
				var testDate2 = new Date();
				var send4Edit = 0;

				if (weeklydifference == 1) {
					testDate1.setDate(weeklyDate.getDate() - 1);
					testDate2.setDate(weeklyDate.getDate() - 7);
					send4Edit = 7;
					for (var i = 1; i <= 7; i++) {
					stringWrite(i, send4Edit);	
					testDate2.setDate(weeklyDate.getDate() - 7 + (i-1))
					dictWeekly2Front[i-1].Timestamp = testDate2.toLocaleString('tr-TR', { timeZone: 'UTC' }).slice(0,10) + " " + dictWeekly2Front[i-1].Timestamp;	
					}
				}
				else if(weeklydifference == 2){
					testDate1.setDate(weeklyDate.getDate() - 2);
					testDate2.setDate(weeklyDate.getDate() - 8);
					send4Edit = 8;
					for (var i = 2; i <= 8; i++) {
					stringWrite(i, send4Edit);	
					testDate2.setDate(weeklyDate.getDate() - 8 + (i-2))
					dictWeekly2Front[i-2].Timestamp = testDate2.toLocaleString('tr-TR', { timeZone: 'UTC' }).slice(0,10) + " " + dictWeekly2Front[i-2].Timestamp;	
					}
				}
				else if(weeklydifference == 3){
					testDate1.setDate(weeklyDate.getDate() - 3);
					testDate2.setDate(weeklyDate.getDate() - 9);
					send4Edit = 9;
					for (var i = 3; i <= 9; i++) {
					stringWrite(i, send4Edit);	
					testDate2.setDate(weeklyDate.getDate() - 9 + (i-3))
					dictWeekly2Front[i-3].Timestamp = testDate2.toLocaleString('tr-TR', { timeZone: 'UTC' }).slice(0,10) + " " + dictWeekly2Front[i-3].Timestamp;	
					}
				}
				else if(weeklydifference == 4){
					testDate1.setDate(weeklyDate.getDate() - 4);
					testDate2.setDate(weeklyDate.getDate() - 10);
					send4Edit = 10;
					for (var i = 4; i <= 10; i++) {
					stringWrite(i, send4Edit);	
					testDate2.setDate(weeklyDate.getDate() - 10 + (i-4))
					dictWeekly2Front[i-4].Timestamp = testDate2.toLocaleString('tr-TR', { timeZone: 'UTC' }).slice(0,10) + " " + dictWeekly2Front[i-4].Timestamp;	
					}
				}
				else if(weeklydifference == 5){
					testDate1.setDate(weeklyDate.getDate() - 5);
					testDate2.setDate(weeklyDate.getDate() - 11);
					send4Edit = 11;
					for (var i = 5; i <= 11; i++) {
					stringWrite(i, send4Edit);	
					testDate2.setDate(weeklyDate.getDate() - 11 + (i-5))
					dictWeekly2Front[i-5].Timestamp = testDate2.toLocaleString('tr-TR', { timeZone: 'UTC' }).slice(0,10) + " " + dictWeekly2Front[i-5].Timestamp;
					}
				}
				else if(weeklydifference == 6){
					testDate1.setDate(weeklyDate.getDate() - 6);
					testDate2.setDate(weeklyDate.getDate() - 12);
					send4Edit = 12;
					for (var i = 6; i <= 12; i++) {
					stringWrite(i, send4Edit);	
					testDate2.setDate(weeklyDate.getDate() - 12 + (i-6))
					dictWeekly2Front[i-6].Timestamp = testDate2.toLocaleString('tr-TR', { timeZone: 'UTC' }).slice(0,10) + " " + dictWeekly2Front[i-6].Timestamp;	
					}
				}
				else if(weeklydifference == 0){
					testDate1.setDate(weeklyDate.getDate() - 7);
					testDate2.setDate(weeklyDate.getDate() - 13);
					send4Edit = 13;
					for (var i = 7; i <= 13; i++) {
					stringWrite(i, send4Edit);	
					testDate2.setDate(weeklyDate.getDate() - 13 + (i-7))
					dictWeekly2Front[i-7].Timestamp = testDate2.toLocaleString('tr-TR', { timeZone: 'UTC' }).slice(0,10) + " " + dictWeekly2Front[i-7].Timestamp;	
					}
				}

				scope.DataItems = dictWeekly2Front;	
				scope.sending2FrontDateinFront = scope.label4tag;
		 }

		scope.sendValueDaily = function () {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-3d&maxCount=150000',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : authenticationToken,
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

				for (var i = 0; i < response.data.Items.length; i++) {

					oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
					dateStringFromAPI = String(oldTimeapi);
					dateFromAPI = new Date(dateStringFromAPI);
					dateFromAPI.setHours(dateFromAPI.getHours());
					dateFromAPI = dateFromAPI.toISOString();
					newResponse = String(dateFromAPI);			

					if((newResponse.slice(0,4) == (d.getFullYear()).toString()) && (newResponse.slice(5,7) == formattedMonth) && (newResponse.slice(8,10) == formattedDay)){

						if (newResponse.slice(11,13) == "00"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[0] = send2FrontDailyValue[0] + response.data.Items[i].Value;
								send2FrontDailyValues[0] = send2FrontDailyValue[0];
							}
						}

						if (newResponse.slice(11,13) == "01"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[1] = send2FrontDailyValue[1] + response.data.Items[i].Value;
								send2FrontDailyValues[1] = send2FrontDailyValue[1];
							}
						}

						if (newResponse.slice(11,13) == "02"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[2] = send2FrontDailyValue[2] + response.data.Items[i].Value;
								send2FrontDailyValues[2] = send2FrontDailyValue[2];
							}
						}

						if (newResponse.slice(11,13) == "03"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[3] = send2FrontDailyValue[3] + response.data.Items[i].Value;
								send2FrontDailyValues[3] = send2FrontDailyValue[3];
							}
						}

						if (newResponse.slice(11,13) == "04"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[4] = send2FrontDailyValue[4] + response.data.Items[i].Value;
								send2FrontDailyValues[4] = send2FrontDailyValue[4];
							}
						}

						if (newResponse.slice(11,13) == "05"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[5] = send2FrontDailyValue[5] + response.data.Items[i].Value;
								send2FrontDailyValues[5] = send2FrontDailyValue[5];
							}
						}

						if (newResponse.slice(11,13) == "06"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[6] = send2FrontDailyValue[6] + response.data.Items[i].Value;
								send2FrontDailyValues[6] = send2FrontDailyValue[6];
							}
						}

						if (newResponse.slice(11,13) == "07"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[7] = send2FrontDailyValue[7] + response.data.Items[i].Value;
								send2FrontDailyValues[7] = send2FrontDailyValue[7];
							}
						}

						if (newResponse.slice(11,13) == "08"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[8] = send2FrontDailyValue[8] + response.data.Items[i].Value;
								send2FrontDailyValues[8] = send2FrontDailyValue[8];
							}
						}

						if (newResponse.slice(11,13) == "09"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[9] = send2FrontDailyValue[9] + response.data.Items[i].Value;
								send2FrontDailyValues[9] = send2FrontDailyValue[9];
							}
						}

						if (newResponse.slice(11,13) == "10"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[10] = send2FrontDailyValue[10] + response.data.Items[i].Value;
								send2FrontDailyValues[10] = send2FrontDailyValue[10];
							}
						}

						if (newResponse.slice(11,13) == "11"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[11] = send2FrontDailyValue[11] + response.data.Items[i].Value;
								send2FrontDailyValues[11] = send2FrontDailyValue[11];
							}
						}

						if (newResponse.slice(11,13) == "12"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[12] = send2FrontDailyValue[12] + response.data.Items[i].Value;
								send2FrontDailyValues[12] = send2FrontDailyValue[12];
							}
						}

						if (newResponse.slice(11,13) == "13"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[13] = send2FrontDailyValue[13] + response.data.Items[i].Value;
								send2FrontDailyValues[13] = send2FrontDailyValue[13];
							}
						}

						if (newResponse.slice(11,13) == "14"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[14] = send2FrontDailyValue[14] + response.data.Items[i].Value;
								send2FrontDailyValues[14] = send2FrontDailyValue[14];
							}
						}

						if (newResponse.slice(11,13) == "15"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[15] = send2FrontDailyValue[15] + response.data.Items[i].Value;
								send2FrontDailyValues[15] = send2FrontDailyValue[15];
							}
						}

						if (newResponse.slice(11,13) == "16"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[16] = send2FrontDailyValue[16] + response.data.Items[i].Value;
								send2FrontDailyValues[16] = send2FrontDailyValue[16];
							}
						}

						if (newResponse.slice(11,13) == "17"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[17] = send2FrontDailyValue[17] + response.data.Items[i].Value;
								send2FrontDailyValues[17] = send2FrontDailyValue[17];
							}
						}

						if (newResponse.slice(11,13) == "18"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[18] = send2FrontDailyValue[18] + response.data.Items[i].Value;
								send2FrontDailyValues[18] = send2FrontDailyValue[18];
							}
						}

						if (newResponse.slice(11,13) == "19"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[19] = send2FrontDailyValue[19] + response.data.Items[i].Value;
								send2FrontDailyValues[19] = send2FrontDailyValue[19];
							}
						}

						if (newResponse.slice(11,13) == "20"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[20] = send2FrontDailyValue[20] + response.data.Items[i].Value;
								send2FrontDailyValues[20] = send2FrontDailyValue[20];
							}
						}

						if (newResponse.slice(11,13) == "21"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[21] = send2FrontDailyValue[21] + response.data.Items[i].Value;
								send2FrontDailyValues[21] = send2FrontDailyValue[21];
							}
						}

						if (newResponse.slice(11,13) == "22"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[22] = send2FrontDailyValue[22] + response.data.Items[i].Value;
								send2FrontDailyValues[22] = send2FrontDailyValue[22];
							}
						}

						if (newResponse.slice(11,13) == "23"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[23] = send2FrontDailyValue[23] + response.data.Items[i].Value;
								send2FrontDailyValues[23] = send2FrontDailyValue[23];
							}
						}
					}
				}
				for (var i = 0; i <= 23; i++) {
					send2FrontDailyValues2Front[i].Value = send2FrontDailyValues[i];
					send2FrontDailyValues2Front[i].Timestamp = formattedDay + "." + formattedMonth + "."  + (d.getFullYear()) + " " + send2FrontDailyValues2Front[i].Timestamp;
				}
				scope.DataItems = send2FrontDailyValues2Front;	
				scope.sending2FrontDateinFront = scope.label4tag;
			});
		 }

		 sendValueDailyEdit = function (exactDay) {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-60d&maxCount=150000',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : authenticationToken,
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
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[0] = send2FrontDailyValue[0] + response.data.Items[i].Value;
								send2FrontDailyValues[0] = send2FrontDailyValue[0];
							}
						}

						if (newResponse.slice(11,13) == "01"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[1] = send2FrontDailyValue[1] + response.data.Items[i].Value;
								send2FrontDailyValues[1] = send2FrontDailyValue[1];
							}
						}

						if (newResponse.slice(11,13) == "02"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[2] = send2FrontDailyValue[2] + response.data.Items[i].Value;
								send2FrontDailyValues[2] = send2FrontDailyValue[2];
							}
						}

						if (newResponse.slice(11,13) == "03"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[3] = send2FrontDailyValue[3] + response.data.Items[i].Value;
								send2FrontDailyValues[3] = send2FrontDailyValue[3];
							}
						}

						if (newResponse.slice(11,13) == "04"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[4] = send2FrontDailyValue[4] + response.data.Items[i].Value;
								send2FrontDailyValues[4] = send2FrontDailyValue[4];
							}
						}

						if (newResponse.slice(11,13) == "05"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[5] = send2FrontDailyValue[5] + response.data.Items[i].Value;
								send2FrontDailyValues[5] = send2FrontDailyValue[5];
							}
						}

						if (newResponse.slice(11,13) == "06"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[6] = send2FrontDailyValue[6] + response.data.Items[i].Value;
								send2FrontDailyValues[6] = send2FrontDailyValue[6];
							}
						}

						if (newResponse.slice(11,13) == "07"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[7] = send2FrontDailyValue[7] + response.data.Items[i].Value;
								send2FrontDailyValues[7] = send2FrontDailyValue[7];
							}
						}

						if (newResponse.slice(11,13) == "08"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[8] = send2FrontDailyValue[8] + response.data.Items[i].Value;
								send2FrontDailyValues[8] = send2FrontDailyValue[8];
							}
						}

						if (newResponse.slice(11,13) == "09"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[9] = send2FrontDailyValue[9] + response.data.Items[i].Value;
								send2FrontDailyValues[9] = send2FrontDailyValue[9];
							}
						}

						if (newResponse.slice(11,13) == "10"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[10] = send2FrontDailyValue[10] + response.data.Items[i].Value;
								send2FrontDailyValues[10] = send2FrontDailyValue[10];
							}
						}

						if (newResponse.slice(11,13) == "11"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[11] = send2FrontDailyValue[11] + response.data.Items[i].Value;
								send2FrontDailyValues[11] = send2FrontDailyValue[11];
							}
						}

						if (newResponse.slice(11,13) == "12"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[12] = send2FrontDailyValue[12] + response.data.Items[i].Value;
								send2FrontDailyValues[12] = send2FrontDailyValue[12];
							}
						}

						if (newResponse.slice(11,13) == "13"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[13] = send2FrontDailyValue[13] + response.data.Items[i].Value;
								send2FrontDailyValues[13] = send2FrontDailyValue[13];
							}
						}

						if (newResponse.slice(11,13) == "14"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[14] = send2FrontDailyValue[14] + response.data.Items[i].Value;
								send2FrontDailyValues[14] = send2FrontDailyValue[14];
							}
						}

						if (newResponse.slice(11,13) == "15"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[15] = send2FrontDailyValue[15] + response.data.Items[i].Value;
								send2FrontDailyValues[15] = send2FrontDailyValue[15];
							}
						}

						if (newResponse.slice(11,13) == "16"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[16] = send2FrontDailyValue[16] + response.data.Items[i].Value;
								send2FrontDailyValues[16] = send2FrontDailyValue[16];
							}
						}

						if (newResponse.slice(11,13) == "17"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[17] = send2FrontDailyValue[17] + response.data.Items[i].Value;
								send2FrontDailyValues[17] = send2FrontDailyValue[17];
							}
						}

						if (newResponse.slice(11,13) == "18"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[18] = send2FrontDailyValue[18] + response.data.Items[i].Value;
								send2FrontDailyValues[18] = send2FrontDailyValue[18];
							}
						}

						if (newResponse.slice(11,13) == "19"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[19] = send2FrontDailyValue[19] + response.data.Items[i].Value;
								send2FrontDailyValues[19] = send2FrontDailyValue[19];
							}
						}

						if (newResponse.slice(11,13) == "20"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[20] = send2FrontDailyValue[20] + response.data.Items[i].Value;
								send2FrontDailyValues[20] = send2FrontDailyValue[20];
							}
						}

						if (newResponse.slice(11,13) == "21"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[21] = send2FrontDailyValue[21] + response.data.Items[i].Value;
								send2FrontDailyValues[21] = send2FrontDailyValue[21];
							}
						}

						if (newResponse.slice(11,13) == "22"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[22] = send2FrontDailyValue[22] + response.data.Items[i].Value;
								send2FrontDailyValues[22] = send2FrontDailyValue[22];
							}
						}

						if (newResponse.slice(11,13) == "23"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[23] = send2FrontDailyValue[23] + response.data.Items[i].Value;
								send2FrontDailyValues[23] = send2FrontDailyValue[23];
							}
						}
					}
				}
			
				total = 0;
				for (var i = 0; i < send2FrontDailyValues.length; i++) {
				 	total = total + send2FrontDailyValues[i];
				 }

				 dictMontly4DArray[exactDay - 1] = total;
				 dictMontly4D2Front[exactDay - 1].Value = total;
			});
		 }

		 scope.sendValueMontly = function () {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-70d&maxCount=150000',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : authenticationToken,
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
				
				for (var i = 0; i < maxLength4Month; i++) {
				dictMontly4D2FrontJson[i] = dictMontly4D2Front[i];
				dictMontly4D2FrontJson[i].Timestamp = (i+1) + "." + currentMonthMinus + "." + currentYear;
				}				
				scope.DataItems = dictMontly4D2FrontJson;
				scope.sending2FrontDateinFront = scope.label4tag;
			});
		 }	

		 sendValueDailyEdit4Year = function (exactDay, exactMonth) {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-60d&maxCount=150000',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : authenticationToken,
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

				for (var i = 0; i < response.data.Items.length; i++) {

					oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
					dateStringFromAPI = String(oldTimeapi);
					dateFromAPI = new Date(dateStringFromAPI);
					dateFromAPI.setHours(dateFromAPI.getHours() + 3);
					dateFromAPI = dateFromAPI.toISOString();			
					newResponse = String(dateFromAPI);

					if((newResponse.slice(0,4) == (d.getFullYear() - 1).toString()) && (newResponse.slice(5,7) == formattedMonth) && (newResponse.slice(8,10) == formattedDay)){

						if (newResponse.slice(11,13) == "00"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[0] = send2FrontDailyValue[0] + response.data.Items[i].Value;
								send2FrontDailyValues[0] = send2FrontDailyValue[0];
							}
						}

						if (newResponse.slice(11,13) == "01"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[1] = send2FrontDailyValue[1] + response.data.Items[i].Value;
								send2FrontDailyValues[1] = send2FrontDailyValue[1];
							}
						}

						if (newResponse.slice(11,13) == "02"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[2] = send2FrontDailyValue[2] + response.data.Items[i].Value;
								send2FrontDailyValues[2] = send2FrontDailyValue[2];
							}
						}

						if (newResponse.slice(11,13) == "03"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[3] = send2FrontDailyValue[3] + response.data.Items[i].Value;
								send2FrontDailyValues[3] = send2FrontDailyValue[3];
							}
						}

						if (newResponse.slice(11,13) == "04"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[4] = send2FrontDailyValue[4] + response.data.Items[i].Value;
								send2FrontDailyValues[4] = send2FrontDailyValue[4];
							}
						}

						if (newResponse.slice(11,13) == "05"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[5] = send2FrontDailyValue[5] + response.data.Items[i].Value;
								send2FrontDailyValues[5] = send2FrontDailyValue[5];
							}
						}

						if (newResponse.slice(11,13) == "06"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[6] = send2FrontDailyValue[6] + response.data.Items[i].Value;
								send2FrontDailyValues[6] = send2FrontDailyValue[6];
							}
						}

						if (newResponse.slice(11,13) == "07"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[7] = send2FrontDailyValue[7] + response.data.Items[i].Value;
								send2FrontDailyValues[7] = send2FrontDailyValue[7];
							}
						}

						if (newResponse.slice(11,13) == "08"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[8] = send2FrontDailyValue[8] + response.data.Items[i].Value;
								send2FrontDailyValues[8] = send2FrontDailyValue[8];
							}
						}

						if (newResponse.slice(11,13) == "09"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[9] = send2FrontDailyValue[9] + response.data.Items[i].Value;
								send2FrontDailyValues[9] = send2FrontDailyValue[9];
							}
						}

						if (newResponse.slice(11,13) == "10"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[10] = send2FrontDailyValue[10] + response.data.Items[i].Value;
								send2FrontDailyValues[10] = send2FrontDailyValue[10];
							}
						}

						if (newResponse.slice(11,13) == "11"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[11] = send2FrontDailyValue[11] + response.data.Items[i].Value;
								send2FrontDailyValues[11] = send2FrontDailyValue[11];
							}
						}

						if (newResponse.slice(11,13) == "12"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[12] = send2FrontDailyValue[12] + response.data.Items[i].Value;
								send2FrontDailyValues[12] = send2FrontDailyValue[12];
							}
						}

						if (newResponse.slice(11,13) == "13"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[13] = send2FrontDailyValue[13] + response.data.Items[i].Value;
								send2FrontDailyValues[13] = send2FrontDailyValue[13];
							}
						}

						if (newResponse.slice(11,13) == "14"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[14] = send2FrontDailyValue[14] + response.data.Items[i].Value;
								send2FrontDailyValues[14] = send2FrontDailyValue[14];
							}
						}

						if (newResponse.slice(11,13) == "15"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[15] = send2FrontDailyValue[15] + response.data.Items[i].Value;
								send2FrontDailyValues[15] = send2FrontDailyValue[15];
							}
						}

						if (newResponse.slice(11,13) == "16"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[16] = send2FrontDailyValue[16] + response.data.Items[i].Value;
								send2FrontDailyValues[16] = send2FrontDailyValue[16];
							}
						}

						if (newResponse.slice(11,13) == "17"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[17] = send2FrontDailyValue[17] + response.data.Items[i].Value;
								send2FrontDailyValues[17] = send2FrontDailyValue[17];
							}
						}

						if (newResponse.slice(11,13) == "18"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[18] = send2FrontDailyValue[18] + response.data.Items[i].Value;
								send2FrontDailyValues[18] = send2FrontDailyValue[18];
							}
						}

						if (newResponse.slice(11,13) == "19"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[19] = send2FrontDailyValue[19] + response.data.Items[i].Value;
								send2FrontDailyValues[19] = send2FrontDailyValue[19];
							}
						}

						if (newResponse.slice(11,13) == "20"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[20] = send2FrontDailyValue[20] + response.data.Items[i].Value;
								send2FrontDailyValues[20] = send2FrontDailyValue[20];
							}
						}

						if (newResponse.slice(11,13) == "21"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[21] = send2FrontDailyValue[21] + response.data.Items[i].Value;
								send2FrontDailyValues[21] = send2FrontDailyValue[21];
							}
						}

						if (newResponse.slice(11,13) == "22"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[22] = send2FrontDailyValue[22] + response.data.Items[i].Value;
								send2FrontDailyValues[22] = send2FrontDailyValue[22];
							}
						}

						if (newResponse.slice(11,13) == "23"){
						
							if(typeof(response.data.Items[i].Value) == "number"){
								send2FrontDailyValue[23] = send2FrontDailyValue[23] + response.data.Items[i].Value;
								send2FrontDailyValues[23] = send2FrontDailyValue[23];
							}
						}
					}
				}
			
				total = 0;
				for (var i = 0; i < send2FrontDailyValues.length; i++) {
				 	total = total + send2FrontDailyValues[i]; 	
				 }		

				 dictMontly4DArray[exactDay - 1] = total;
				 dictMontly4D2Front[exactDay - 1].Value = total;
			});
		 }

		 scope.sendValueYearly = function () {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-380d&maxCount=150000',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : authenticationToken,
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
						{Timestamp : "Ocak", Value : 0},
						{Timestamp : "Şubat", Value : 0},
						{Timestamp : "Mart", Value : 0},
						{Timestamp : "Nisan", Value : 0},
						{Timestamp : "Mayıs", Value : 0},
						{Timestamp : "Haziran", Value : 0},
						{Timestamp : "Temmuz", Value : 0},
						{Timestamp : "Ağustos", Value : 0},
						{Timestamp : "Eylül", Value : 0},
						{Timestamp : "Ekim", Value : 0},
						{Timestamp : "Kasım", Value : 0},
						{Timestamp : "Aralık", Value : 0}	
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
					dictYearly4D2Front[month4Loop].Timestamp = dictYearly4D2Front[month4Loop].Timestamp + " " + pastYear4Year;

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
				scope.sending2FrontDateinFront = scope.label4tag;
			});
		 }	

		 findHowManyDay = function(first, second){
			var date1 = new Date(first);
			var date2 = new Date(second);

			var diff1 = date2.getTime() - date1.getTime();
			var diff2 = diff1 / (1000*3600*24);

			return diff2;
		}

		findHowManyWeek = function(first, second){
			var date1 = new Date(first);
			var date2 = new Date(second);

			var diff1 = date2.getTime() - date1.getTime();
			var diff2 = diff1 / (1000*3600*24);

			return diff2;
		}

		scope.specific = function () {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-7200d&maxCount=150000',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : authenticationToken,
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",	          
	           			"Content-Type" : "application/json",	           			
	           		}
	            }).then(function (response) {
	  
				  (async () => {

				    const { value: formValues } = await Swal.fire({
				      title: 'Seçimleriniz',
				      html:
				          '<input id="swal-input1" class="swal2-input" type="date">' +
				          '<input id="swal-input2" class="swal2-input" type="date">' +
				          '<select id="swal-input3" class="swal2-input"> <option value="avr">Ortalama</option> <option value="sum">Toplam</option>  <option value="spot">Son Deger</option> </select>' +
				          '<select id="swal-input4" class="swal2-input"> <option value="hourly">Saatlik</option> <option value="daily">Günlük</option> <option value="weekly">Haftalık</option>  <option value="montly">Aylık</option> <option value="yearly">Yıllık</option> </select>',
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

				      Swal.fire({
							        title: 'Veriler Alındı.',
							        html:
							            'SEÇİMLERİNİZ: <pre><code>' +
							            JSON.stringify(formValues) +
							            '</code></pre>',
							            confirmButtonText: 'Kapat'
				     			})

				      options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour :"numeric", minute: "numeric", second:"numeric" };

				      	/////
				      	var oldTimeapi = day4thisDay;
						var dateStringFromAPI;
						var dateFromAPI;
						var changingDateFormat;
						var newResponse;
						/////

				      if(formvalues4form[2] == "avr" && formvalues4form[3] == "hourly"){

				      	send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      	send2FrontDailyValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      	send2FrontDailyCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

				      	var emptyArray = [];
				      	var date1Year = formvalues4form[0].slice(0,4);
						var date1Month = formvalues4form[0].slice(5,7);
						var date1Day = formvalues4form[0].slice(8,10);
						var date2Year = formvalues4form[1].slice(0,4);
						var date2Month = formvalues4form[1].slice(5,7);
						var date2Day = formvalues4form[1].slice(8,10);

						var beforeformatted;
						var formattedMonth1;
						var formattedDay1;
						var formattedMonth2;
						var formattedDay2;
						var nowdate = new Date();

						if( (date1Month).toString().length != 2 ){
								beforeformatted = "0";
								formattedMonth1 = beforeformatted.concat((date1Month).toString());
						}
						else{
							formattedMonth1 = (date1Month).toString();
						}

						if( (date2Month).toString().length != 2 ){
								beforeformatted = "0";
								formattedMonth2 = beforeformatted.concat((date2Month).toString());
						}
						else{
							formattedMonth2 = (date2Month).toString();
						}


						if( (date1Day).toString().length != 2 ){
								beforeformatted = "0";
								formattedDay1 = beforeformatted.concat((date1Day).toString());
						}
						else{
							formattedDay1 = (date1Day).toString();
						}

						if( (date2Day).toString().length != 2 ){
								beforeformatted = "0";
								formattedDay2 = beforeformatted.concat((date2Day).toString());
						}
						else{
							formattedDay2 = (date2Day).toString();
						}				

						var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
					    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

						var differencedays = findHowManyDay(g1, g2);					

						if(g2.getFullYear() == nowdate.getFullYear() && g2.getMonth() == (nowdate.getMonth()) && g2.getDate() == nowdate.getDate()){
							differencedays = differencedays - 1;
						}

						var day4thisDay = new Date(g1);

						emptyArray = [];
						var day4thisDay4Gorsel;

						for (var y = 0; y < differencedays + 1; y++) {

							send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      		send2FrontDailyValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      		send2FrontDailyCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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
						
							for (var i = 0; i < response.data.Items.length; i++) {

								day4thisDay = new Date(g1);
								day4thisDay.setDate(g1.getDate() + y);

								oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours() + 2);
								dateFromAPI = dateFromAPI.toISOString();
								newResponse = String(dateFromAPI);	

								if((newResponse.slice(0,4).toString() == day4thisDay.getFullYear().toString()) && (newResponse.slice(5,7).toString() == (day4thisDay.getMonth()+1).toString()) && (newResponse.slice(8,10).toString() == day4thisDay.getDate().toString())){

									if (newResponse.slice(11,13) == "00"){
						
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[0] = send2FrontDailyValue[0] + response.data.Items[i].Value;
											send2FrontDailyCounter[0]++;
											dictDaily["00"] = send2FrontDailyValue[0] / send2FrontDailyCounter[0];
											send2FrontDailyValues[0] = send2FrontDailyValue[0] / send2FrontDailyCounter[0];
										}
									}

									if (newResponse.slice(11,13) == "01"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[1] = send2FrontDailyValue[1] + response.data.Items[i].Value;
											send2FrontDailyCounter[1]++;
											dictDaily["01"] = send2FrontDailyValue[1] / send2FrontDailyCounter[1];
											send2FrontDailyValues[1] = send2FrontDailyValue[1] / send2FrontDailyCounter[1];
										}
									}

									if (newResponse.slice(11,13) == "02"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[2] = send2FrontDailyValue[2] + response.data.Items[i].Value;
											send2FrontDailyCounter[2]++;
											dictDaily["02"] = send2FrontDailyValue[2] / send2FrontDailyCounter[2];
											send2FrontDailyValues[2] = send2FrontDailyValue[2] / send2FrontDailyCounter[2];
										}
									}

									if (newResponse.slice(11,13) == "03"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[3] = send2FrontDailyValue[3] + response.data.Items[i].Value;
											send2FrontDailyCounter[3]++;
											dictDaily["03"] = send2FrontDailyValue[3] / send2FrontDailyCounter[3];
											send2FrontDailyValues[3] = send2FrontDailyValue[3] / send2FrontDailyCounter[3];
										}
									}

									if (newResponse.slice(11,13) == "04"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[4] = send2FrontDailyValue[4] + response.data.Items[i].Value;
											send2FrontDailyCounter[4]++;
											dictDaily["04"] = send2FrontDailyValue[4] / send2FrontDailyCounter[4];
											send2FrontDailyValues[4] = send2FrontDailyValue[4] / send2FrontDailyCounter[4];
										}
									}

									if (newResponse.slice(11,13) == "05"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[5] = send2FrontDailyValue[5] + response.data.Items[i].Value;
											send2FrontDailyCounter[5]++;
											dictDaily["05"] = send2FrontDailyValue[5] / send2FrontDailyCounter[5];
											send2FrontDailyValues[5] = send2FrontDailyValue[5] / send2FrontDailyCounter[5];
										}
									}

									if (newResponse.slice(11,13) == "06"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[6] = send2FrontDailyValue[6] + response.data.Items[i].Value;
											send2FrontDailyCounter[6]++;
											dictDaily["06"] = send2FrontDailyValue[6] / send2FrontDailyCounter[6];
											send2FrontDailyValues[6] = send2FrontDailyValue[6] / send2FrontDailyCounter[6];
										}
									}

									if (newResponse.slice(11,13) == "07"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[7] = send2FrontDailyValue[7] + response.data.Items[i].Value;
											send2FrontDailyCounter[7]++;
											dictDaily["07"] = send2FrontDailyValue[7] / send2FrontDailyCounter[7];
											send2FrontDailyValues[7] = send2FrontDailyValue[7] / send2FrontDailyCounter[7];
										}
									}

									if (newResponse.slice(11,13) == "08"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[8] = send2FrontDailyValue[8] + response.data.Items[i].Value;
											send2FrontDailyCounter[8]++;
											dictDaily["08"] = send2FrontDailyValue[8] / send2FrontDailyCounter[8];
											send2FrontDailyValues[8] = send2FrontDailyValue[8] / send2FrontDailyCounter[8];
										}
									}

									if (newResponse.slice(11,13) == "09"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[9] = send2FrontDailyValue[9] + response.data.Items[i].Value;
											send2FrontDailyCounter[9]++;
											dictDaily["09"] = send2FrontDailyValue[9] / send2FrontDailyCounter[9];
											send2FrontDailyValues[9] = send2FrontDailyValue[9] / send2FrontDailyCounter[9];
										}
									}

									if (newResponse.slice(11,13) == "10"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[10] = send2FrontDailyValue[10] + response.data.Items[i].Value;
											send2FrontDailyCounter[10]++;
											dictDaily["10"] = send2FrontDailyValue[10] / send2FrontDailyCounter[10];
											send2FrontDailyValues[10] = send2FrontDailyValue[10] / send2FrontDailyCounter[10];
										}
									}

									if (newResponse.slice(11,13) == "11"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[11] = send2FrontDailyValue[11] + response.data.Items[i].Value;
											send2FrontDailyCounter[11]++;
											dictDaily["11"] = send2FrontDailyValue[11] / send2FrontDailyCounter[11];
											send2FrontDailyValues[11] = send2FrontDailyValue[11] / send2FrontDailyCounter[11];
										}
									}

									if (newResponse.slice(11,13) == "12"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[12] = send2FrontDailyValue[12] + response.data.Items[i].Value;
											send2FrontDailyCounter[12]++;
											dictDaily["12"] = send2FrontDailyValue[12] / send2FrontDailyCounter[12];
											send2FrontDailyValues[12] = send2FrontDailyValue[12] / send2FrontDailyCounter[12];
										}
									}

									if (newResponse.slice(11,13) == "13"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[13] = send2FrontDailyValue[13] + response.data.Items[i].Value;
											send2FrontDailyCounter[13]++;
											dictDaily["13"] = send2FrontDailyValue[13] / send2FrontDailyCounter[13];
											send2FrontDailyValues[13] = send2FrontDailyValue[13] / send2FrontDailyCounter[13];
										}
									}

									if (newResponse.slice(11,13) == "14"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[14] = send2FrontDailyValue[14] + response.data.Items[i].Value;
											send2FrontDailyCounter[14]++;
											dictDaily["14"] = send2FrontDailyValue[14] / send2FrontDailyCounter[14];
											send2FrontDailyValues[14] = send2FrontDailyValue[14] / send2FrontDailyCounter[14];
										}
									}

									if (newResponse.slice(11,13) == "15"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[15] = send2FrontDailyValue[15] + response.data.Items[i].Value;
											send2FrontDailyCounter[15]++;
											dictDaily["15"] = send2FrontDailyValue[15] / send2FrontDailyCounter[15];
											send2FrontDailyValues[15] = send2FrontDailyValue[15] / send2FrontDailyCounter[15];
										}
									}

									if (newResponse.slice(11,13) == "16"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[16] = send2FrontDailyValue[16] + response.data.Items[i].Value;
											send2FrontDailyCounter[16]++;
											dictDaily["16"] = send2FrontDailyValue[16] / send2FrontDailyCounter[16];
											send2FrontDailyValues[16] = send2FrontDailyValue[16] / send2FrontDailyCounter[16];
										}
									}

									if (newResponse.slice(11,13) == "17"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[17] = send2FrontDailyValue[17] + response.data.Items[i].Value;
											send2FrontDailyCounter[17]++;
											dictDaily["17"] = send2FrontDailyValue[17] / send2FrontDailyCounter[17];
											send2FrontDailyValues[17] = send2FrontDailyValue[17] / send2FrontDailyCounter[17];
										}
									}

									if (newResponse.slice(11,13) == "18"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[18] = send2FrontDailyValue[18] + response.data.Items[i].Value;
											send2FrontDailyCounter[18]++;
											dictDaily["18"] = send2FrontDailyValue[18] / send2FrontDailyCounter[18];
											send2FrontDailyValues[18] = send2FrontDailyValue[18] / send2FrontDailyCounter[18];
										}
									}

									if (newResponse.slice(11,13) == "19"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[19] = send2FrontDailyValue[19] + response.data.Items[i].Value;
											send2FrontDailyCounter[19]++;
											dictDaily["19"] = send2FrontDailyValue[19] / send2FrontDailyCounter[19];
											send2FrontDailyValues[19] = send2FrontDailyValue[19] / send2FrontDailyCounter[19];
										}
									}

									if (newResponse.slice(11,13) == "20"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[20] = send2FrontDailyValue[20] + response.data.Items[i].Value;
											send2FrontDailyCounter[20]++;
											dictDaily["20"] = send2FrontDailyValue[20] / send2FrontDailyCounter[20];
											send2FrontDailyValues[20] = send2FrontDailyValue[20] / send2FrontDailyCounter[20];
										}
									}

									if (newResponse.slice(11,13) == "21"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[21] = send2FrontDailyValue[21] + response.data.Items[i].Value;
											send2FrontDailyCounter[21]++;
											dictDaily["21"] = send2FrontDailyValue[21] / send2FrontDailyCounter[21];
											send2FrontDailyValues[21] = send2FrontDailyValue[21] / send2FrontDailyCounter[21];
										}
									}

									if (newResponse.slice(11,13) == "22"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[22] = send2FrontDailyValue[22] + response.data.Items[i].Value;
											send2FrontDailyCounter[22]++;
											dictDaily["22"] = send2FrontDailyValue[22] / send2FrontDailyCounter[22];
											send2FrontDailyValues[22] = send2FrontDailyValue[22] / send2FrontDailyCounter[22];
										}
									}

									if (newResponse.slice(11,13) == "23"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[23] = send2FrontDailyValue[23] + response.data.Items[i].Value;
											send2FrontDailyCounter[23]++;
											dictDaily["23"] = send2FrontDailyValue[23] / send2FrontDailyCounter[23];
											send2FrontDailyValues[23] = send2FrontDailyValue[23] / send2FrontDailyCounter[23];
										}
									}
								}
							}
							
							for (var loop1 = 0; loop1 < 24; loop1++){
								send2FrontDailyValues2Front[loop1].Value = send2FrontDailyValues[loop1];
								day4thisDay4Gorsel = new Date(g1);
								day4thisDay4Gorsel.setDate(g1.getDate() + y);

								//////////
								oldTimeapi = day4thisDay4Gorsel;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								day4thisDay4Gorsel = newResponse;
								var n = day4thisDay4Gorsel.search("00:00:00");
								day4thisDay4Gorsel = day4thisDay4Gorsel.slice(0,n);
								/////////

								send2FrontDailyValues2Front[loop1].Timestamp = day4thisDay4Gorsel + " " + send2FrontDailyValues2Front[loop1].Timestamp;
 							}
 							console.log(send2FrontDailyValues);
 							console.log(send2FrontDailyValues2Front);
														
							for (var loop2 = 0; loop2 < 24; loop2++){
								emptyArray.push(send2FrontDailyValues2Front[loop2]);
							}
						}
					
						scope.DataItems = emptyArray;	
						scope.sending2FrontDateinFront = scope.label4tag;
					  }

					  if(formvalues4form[2] == "sum" && formvalues4form[3] == "hourly"){

					  	send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      	send2FrontDailyValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      	send2FrontDailyCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

					  	var emptyArray = [];
					  	var date1Year = formvalues4form[0].slice(0,4);
						var date1Month = formvalues4form[0].slice(5,7);
						var date1Day = formvalues4form[0].slice(8,10);
						var date2Year = formvalues4form[1].slice(0,4);
						var date2Month = formvalues4form[1].slice(5,7);
						var date2Day = formvalues4form[1].slice(8,10);

						var beforeformatted;
						var formattedMonth1;
						var formattedDay1;
						var formattedMonth2;
						var formattedDay2;
						var nowdate = new Date();

						if( (date1Month).toString().length != 2 ){
								beforeformatted = "0";
								formattedMonth1 = beforeformatted.concat((date1Month).toString());
						}
						else{
							formattedMonth1 = (date1Month).toString();
						}

						if( (date2Month).toString().length != 2 ){
								beforeformatted = "0";
								formattedMonth2 = beforeformatted.concat((date2Month).toString());
						}
						else{
							formattedMonth2 = (date2Month).toString();
						}


						if( (date1Day).toString().length != 2 ){
								beforeformatted = "0";
								formattedDay1 = beforeformatted.concat((date1Day).toString());
						}
						else{
							formattedDay1 = (date1Day).toString();
						}

						if( (date2Day).toString().length != 2 ){
								beforeformatted = "0";
								formattedDay2 = beforeformatted.concat((date2Day).toString());
						}
						else{
							formattedDay2 = (date2Day).toString();
						}

						var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
					    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

						var differencedays = findHowManyDay(g1, g2);					

						if(g2.getFullYear() == nowdate.getFullYear() && g2.getMonth() == nowdate.getMonth() && g2.getDate() == nowdate.getDate()){
							differencedays = differencedays - 1;
						}

						var day4thisDay = new Date(g1);

						emptyArray = [];
						var day4thisDay4Gorsel;

						for (var y = 0; y < differencedays + 1; y++) {

							send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      		send2FrontDailyValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      		send2FrontDailyCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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
						
							for (var i = 0; i < response.data.Items.length; i++) {

								day4thisDay = new Date(g1);
								day4thisDay.setDate(g1.getDate() + y);

								oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours() + 2);
								dateFromAPI = dateFromAPI.toISOString();
								newResponse = String(dateFromAPI);			

								if((newResponse.slice(0,4).toString() == day4thisDay.getFullYear().toString()) && (newResponse.slice(5,7).toString() == (day4thisDay.getMonth()+1).toString()) && (newResponse.slice(8,10).toString() == day4thisDay.getDate().toString())){

									if (newResponse.slice(11,13) == "00"){
						
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[0] = send2FrontDailyValue[0] + response.data.Items[i].Value;
											send2FrontDailyValues[0] = send2FrontDailyValue[0];
										}
									}

									if (newResponse.slice(11,13) == "01"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[1] = send2FrontDailyValue[1] + response.data.Items[i].Value;
											send2FrontDailyValues[1] = send2FrontDailyValue[1];
										}
									}

									if (newResponse.slice(11,13) == "02"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[2] = send2FrontDailyValue[2] + response.data.Items[i].Value;
											send2FrontDailyValues[2] = send2FrontDailyValue[2];
										}
									}

									if (newResponse.slice(11,13) == "03"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[3] = send2FrontDailyValue[3] + response.data.Items[i].Value;
											send2FrontDailyValues[3] = send2FrontDailyValue[3];
										}
									}

									if (newResponse.slice(11,13) == "04"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[4] = send2FrontDailyValue[4] + response.data.Items[i].Value;
											send2FrontDailyValues[4] = send2FrontDailyValue[4];
										}
									}

									if (newResponse.slice(11,13) == "05"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[5] = send2FrontDailyValue[5] + response.data.Items[i].Value;
											send2FrontDailyValues[5] = send2FrontDailyValue[5];
										}
									}

									if (newResponse.slice(11,13) == "06"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[6] = send2FrontDailyValue[6] + response.data.Items[i].Value;
											send2FrontDailyValues[6] = send2FrontDailyValue[6];
										}
									}

									if (newResponse.slice(11,13) == "07"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[7] = send2FrontDailyValue[7] + response.data.Items[i].Value;
											send2FrontDailyValues[7] = send2FrontDailyValue[7];
										}
									}

									if (newResponse.slice(11,13) == "08"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[8] = send2FrontDailyValue[8] + response.data.Items[i].Value;
											send2FrontDailyValues[8] = send2FrontDailyValue[8];
										}
									}

									if (newResponse.slice(11,13) == "09"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[9] = send2FrontDailyValue[9] + response.data.Items[i].Value;
											send2FrontDailyValues[9] = send2FrontDailyValue[9];
										}
									}

									if (newResponse.slice(11,13) == "10"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[10] = send2FrontDailyValue[10] + response.data.Items[i].Value;
											send2FrontDailyValues[10] = send2FrontDailyValue[10];
										}
									}

									if (newResponse.slice(11,13) == "11"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[11] = send2FrontDailyValue[11] + response.data.Items[i].Value;
											send2FrontDailyValues[11] = send2FrontDailyValue[11];
										}
									}

									if (newResponse.slice(11,13) == "12"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[12] = send2FrontDailyValue[12] + response.data.Items[i].Value;
											send2FrontDailyValues[12] = send2FrontDailyValue[12];
										}
									}

									if (newResponse.slice(11,13) == "13"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[13] = send2FrontDailyValue[13] + response.data.Items[i].Value;
											send2FrontDailyValues[13] = send2FrontDailyValue[13];
										}
									}

									if (newResponse.slice(11,13) == "14"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[14] = send2FrontDailyValue[14] + response.data.Items[i].Value;
											send2FrontDailyValues[14] = send2FrontDailyValue[14];
										}
									}

									if (newResponse.slice(11,13) == "15"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[15] = send2FrontDailyValue[15] + response.data.Items[i].Value;
											send2FrontDailyValues[15] = send2FrontDailyValue[15];
										}
									}

									if (newResponse.slice(11,13) == "16"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[16] = send2FrontDailyValue[16] + response.data.Items[i].Value;
											send2FrontDailyValues[16] = send2FrontDailyValue[16];
										}
									}

									if (newResponse.slice(11,13) == "17"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[17] = send2FrontDailyValue[17] + response.data.Items[i].Value;
											send2FrontDailyValues[17] = send2FrontDailyValue[17];
										}
									}

									if (newResponse.slice(11,13) == "18"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[18] = send2FrontDailyValue[18] + response.data.Items[i].Value;
											send2FrontDailyValues[18] = send2FrontDailyValue[18];
										}
									}

									if (newResponse.slice(11,13) == "19"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[19] = send2FrontDailyValue[19] + response.data.Items[i].Value;
											send2FrontDailyValues[19] = send2FrontDailyValue[19];
										}
									}

									if (newResponse.slice(11,13) == "20"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[20] = send2FrontDailyValue[20] + response.data.Items[i].Value;
											send2FrontDailyValues[20] = send2FrontDailyValue[20];
										}
									}

									if (newResponse.slice(11,13) == "21"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[21] = send2FrontDailyValue[21] + response.data.Items[i].Value;
											send2FrontDailyValues[21] = send2FrontDailyValue[21];
										}
									}

									if (newResponse.slice(11,13) == "22"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[22] = send2FrontDailyValue[22] + response.data.Items[i].Value;
											send2FrontDailyValues[22] = send2FrontDailyValue[22];
										}
									}

									if (newResponse.slice(11,13) == "23"){
									
										if(typeof(response.data.Items[i].Value) == "number"){
											send2FrontDailyValue[23] = send2FrontDailyValue[23] + response.data.Items[i].Value;
											send2FrontDailyValues[23] = send2FrontDailyValue[23];
										}
									}
								}
							}
							for (var loop1 = 0; loop1 < 24; loop1++){
								send2FrontDailyValues2Front[loop1].Value = send2FrontDailyValues[loop1];
								day4thisDay4Gorsel = new Date(g1);
								day4thisDay4Gorsel.setDate(g1.getDate() + y);

								//////////
								oldTimeapi = day4thisDay4Gorsel;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								day4thisDay4Gorsel = newResponse;
								var n = day4thisDay4Gorsel.search("00:00:00");
								day4thisDay4Gorsel = day4thisDay4Gorsel.slice(0,n);
								/////////

								send2FrontDailyValues2Front[loop1].Timestamp = day4thisDay4Gorsel + " " + send2FrontDailyValues2Front[loop1].Timestamp;
 							}
														
							for (var loop2 = 0; loop2 < 24; loop2++){
								emptyArray.push(send2FrontDailyValues2Front[loop2]);
							}
						}

						scope.DataItems = emptyArray;	
						scope.sending2FrontDateinFront = scope.label4tag;
					  }

					  if(formvalues4form[2] == "spot" && formvalues4form[3] == "hourly"){

					  	send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      	send2FrontDailyValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      	send2FrontDailyCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

					  	var emptyArray = [];
					  	var date1Year = formvalues4form[0].slice(0,4);
						var date1Month = formvalues4form[0].slice(5,7);
						var date1Day = formvalues4form[0].slice(8,10);
						var date2Year = formvalues4form[1].slice(0,4);
						var date2Month = formvalues4form[1].slice(5,7);
						var date2Day = formvalues4form[1].slice(8,10);

						var beforeformatted;
						var formattedMonth1;
						var formattedDay1;
						var formattedMonth2;
						var formattedDay2;
						var nowdate = new Date();

						if( (date1Month).toString().length != 2 ){
								beforeformatted = "0";
								formattedMonth1 = beforeformatted.concat((date1Month).toString());
						}
						else{
							formattedMonth1 = (date1Month).toString();
						}

						if( (date2Month).toString().length != 2 ){
								beforeformatted = "0";
								formattedMonth2 = beforeformatted.concat((date2Month).toString());
						}
						else{
							formattedMonth2 = (date2Month).toString();
						}


						if( (date1Day).toString().length != 2 ){
								beforeformatted = "0";
								formattedDay1 = beforeformatted.concat((date1Day).toString());
						}
						else{
							formattedDay1 = (date1Day).toString();
						}

						if( (date2Day).toString().length != 2 ){
								beforeformatted = "0";
								formattedDay2 = beforeformatted.concat((date2Day).toString());
						}
						else{
							formattedDay2 = (date2Day).toString();
						}

						var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
					    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

						var differencedays = findHowManyDay(g1, g2);					

						if(g2.getFullYear() == nowdate.getFullYear() && g2.getMonth() == nowdate.getMonth() && g2.getDate() == nowdate.getDate()){
							differencedays = differencedays - 1;
						}

						var day4thisDay = new Date(g1);

						emptyArray = [];
						var day4thisDay4Gorsel;

						function sortDates(a, b)
						{
						    return a.getTime() - b.getTime();
						}
						var dates4sorting = [];
						var min4sortingDateArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

						for (var i = 0; i < min4sortingDateArray.length; i++) {
							min4sortingDateArray[i] = new Date("04.15.2099 15:34:32");
						}

						for (var y = 0; y < differencedays + 1; y++) {

							send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      		send2FrontDailyValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      		send2FrontDailyCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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
						
							for (var i = 0; i < response.data.Items.length; i++) {

								day4thisDay = new Date(g1);
								day4thisDay.setDate(g1.getDate() + y);

								oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours() + 2);
								dateFromAPI = dateFromAPI.toISOString();
								newResponse = String(dateFromAPI);			

								if((newResponse.slice(0,4).toString() == day4thisDay.getFullYear().toString()) && (newResponse.slice(5,7).toString() == (day4thisDay.getMonth()+1).toString()) && (newResponse.slice(8,10).toString() == day4thisDay.getDate().toString())){
									
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

							console.log(send2FrontDailyValues);

							for (var loop1 = 0; loop1 < 24; loop1++){
								send2FrontDailyValues2Front[loop1].Value = send2FrontDailyValues[loop1];
								day4thisDay4Gorsel = new Date(g1);
								day4thisDay4Gorsel.setDate(g1.getDate() + y);

								//////////
								oldTimeapi = day4thisDay4Gorsel;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								day4thisDay4Gorsel = newResponse;
								var n = day4thisDay4Gorsel.search("00:00:00");
								day4thisDay4Gorsel = day4thisDay4Gorsel.slice(0,n);
								/////////

								send2FrontDailyValues2Front[loop1].Timestamp = day4thisDay4Gorsel + " " + send2FrontDailyValues2Front[loop1].Timestamp;
 							}
														
							for (var loop2 = 0; loop2 < 24; loop2++){
								emptyArray.push(send2FrontDailyValues2Front[loop2]);
							}
						}
						scope.DataItems = emptyArray;	
						scope.sending2FrontDateinFront = scope.label4tag;
					  }				    

				      if(formvalues4form[2] == "avr" && formvalues4form[3] == "daily"){

				      	var daily4specific = 0;
				      	var daily4specificCounter = 0;

				      	var emptyArray = [];
				      	var date1Year = formvalues4form[0].slice(0,4);
						var date1Month = formvalues4form[0].slice(5,7);
						var date1Day = formvalues4form[0].slice(8,10);
						var date2Year = formvalues4form[1].slice(0,4);
						var date2Month = formvalues4form[1].slice(5,7);
						var date2Day = formvalues4form[1].slice(8,10);

						var beforeformatted;
						var formattedMonth1;
						var formattedDay1;
						var formattedMonth2;
						var formattedDay2;
						var nowdate = new Date();

						if( (date1Month).toString().length != 2 ){
								beforeformatted = "0";
								formattedMonth1 = beforeformatted.concat((date1Month).toString());
						}
						else{
							formattedMonth1 = (date1Month).toString();
						}

						if( (date2Month).toString().length != 2 ){
								beforeformatted = "0";
								formattedMonth2 = beforeformatted.concat((date2Month).toString());
						}
						else{
							formattedMonth2 = (date2Month).toString();
						}


						if( (date1Day).toString().length != 2 ){
								beforeformatted = "0";
								formattedDay1 = beforeformatted.concat((date1Day).toString());
						}
						else{
							formattedDay1 = (date1Day).toString();
						}

						if( (date2Day).toString().length != 2 ){
								beforeformatted = "0";
								formattedDay2 = beforeformatted.concat((date2Day).toString());
						}
						else{
							formattedDay2 = (date2Day).toString();
						}				

						var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
					    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

						var differencedays = findHowManyDay(g1, g2);					

						if(g2.getFullYear() == nowdate.getFullYear() && g2.getMonth() == (nowdate.getMonth()) && g2.getDate() == nowdate.getDate()){
							differencedays = differencedays - 1;
						}

						var day4thisDay = new Date(g1);

						emptyArray = [];
						var day4thisDay4Gorsel;

						for (var y = 0; y < differencedays + 1; y++) {

							send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      		send2FrontDailyValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      		send2FrontDailyCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				      		
				      		daily4specific = 0;
				      		daily4specificCounter = 0;

				      		day4thisDay = new Date(g1);
							day4thisDay.setDate(g1.getDate() + y);
						
							for (var i = 0; i < response.data.Items.length; i++) {

								oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours() + 2);
								dateFromAPI = dateFromAPI.toISOString();
								newResponse = String(dateFromAPI);	

								if((newResponse.slice(0,4).toString() == day4thisDay.getFullYear().toString()) && (newResponse.slice(5,7).toString() == (day4thisDay.getMonth()+1).toString()) && (newResponse.slice(8,10).toString() == day4thisDay.getDate().toString())){

									if(typeof(response.data.Items[i].Value) == "number"){
										daily4specific = daily4specific + response.data.Items[i].Value;
										daily4specificCounter++;
									}
								}
							}
							var average4specificdaily = daily4specific / daily4specificCounter;
							emptyArray.push({Timestamp : "00 - 01", Value : 0});
							emptyArray[y].Value = average4specificdaily;

							//////////
							oldTimeapi = day4thisDay;
							dateStringFromAPI = String(oldTimeapi);
							dateFromAPI = new Date(dateStringFromAPI);
							dateFromAPI.setHours(dateFromAPI.getHours());
							dateFromAPI = dateFromAPI.toISOString();
							changingDateFormat = new Date(dateFromAPI);
							newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
							day4thisDay = newResponse;
							var n = day4thisDay.search("00:00:00");
							day4thisDay = day4thisDay.slice(0,n);
							/////////


							emptyArray[y].Timestamp = day4thisDay;
						}
						scope.DataItems = emptyArray;	
						scope.sending2FrontDateinFront = scope.label4tag;
					  }

					  if(formvalues4form[2] == "sum" && formvalues4form[3] == "daily"){		

							var daily4specific = 0;
					      	var daily4specificCounter = 0;

					      	var emptyArray = [];
					      	var date1Year = formvalues4form[0].slice(0,4);
							var date1Month = formvalues4form[0].slice(5,7);
							var date1Day = formvalues4form[0].slice(8,10);
							var date2Year = formvalues4form[1].slice(0,4);
							var date2Month = formvalues4form[1].slice(5,7);
							var date2Day = formvalues4form[1].slice(8,10);

							var beforeformatted;
							var formattedMonth1;
							var formattedDay1;
							var formattedMonth2;
							var formattedDay2;
							var nowdate = new Date();

							if( (date1Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth1 = beforeformatted.concat((date1Month).toString());
							}
							else{
								formattedMonth1 = (date1Month).toString();
							}

							if( (date2Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth2 = beforeformatted.concat((date2Month).toString());
							}
							else{
								formattedMonth2 = (date2Month).toString();
							}


							if( (date1Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay1 = beforeformatted.concat((date1Day).toString());
							}
							else{
								formattedDay1 = (date1Day).toString();
							}

							if( (date2Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay2 = beforeformatted.concat((date2Day).toString());
							}
							else{
								formattedDay2 = (date2Day).toString();
							}				

							var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
						    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

							var differencedays = findHowManyDay(g1, g2);					

							if(g2.getFullYear() == nowdate.getFullYear() && g2.getMonth() == (nowdate.getMonth()) && g2.getDate() == nowdate.getDate()){
								differencedays = differencedays - 1;
							}

							var day4thisDay = new Date(g1);

							emptyArray = [];
							var day4thisDay4Gorsel;

							for (var y = 0; y < differencedays + 1; y++) {

								send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
					      		send2FrontDailyValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
					      		send2FrontDailyCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
					      		
					      		daily4specific = 0;
					      		daily4specificCounter = 0;

					      		day4thisDay = new Date(g1);
								day4thisDay.setDate(g1.getDate() + y);
								console.log(day4thisDay);

							
								for (var i = 0; i < response.data.Items.length; i++) {
								
									oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
									dateStringFromAPI = String(oldTimeapi);
									dateFromAPI = new Date(dateStringFromAPI);
									dateFromAPI.setHours(dateFromAPI.getHours() + 2);
									dateFromAPI = dateFromAPI.toISOString();
									newResponse = String(dateFromAPI);	
											
									if((newResponse.slice(0,4).toString() == day4thisDay.getFullYear().toString()) && (newResponse.slice(5,7).toString() == (day4thisDay.getMonth()+1).toString()) && (newResponse.slice(8,10).toString() == day4thisDay.getDate().toString())){

										if(typeof(response.data.Items[i].Value) == "number"){
											daily4specific = daily4specific + response.data.Items[i].Value;
										}														
									}
								}																
								var average4specificdaily = daily4specific;
								emptyArray.push({Timestamp : "00 - 01", Value : 0});
								emptyArray[y].Value = average4specificdaily;

								//////////
								oldTimeapi = day4thisDay;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								day4thisDay = newResponse;
								var n = day4thisDay.search("00:00:00");
								day4thisDay = day4thisDay.slice(0,n);
								/////////

								emptyArray[y].Timestamp = day4thisDay;
							}
							scope.DataItems = emptyArray;	
							scope.sending2FrontDateinFront = scope.label4tag;
					  }

					  if(formvalues4form[2] == "spot" && formvalues4form[3] == "daily"){

					  		var daily4specific = 0;
					      	var daily4specificCounter = 0;

					      	var emptyArray = [];
					      	var date1Year = formvalues4form[0].slice(0,4);
							var date1Month = formvalues4form[0].slice(5,7);
							var date1Day = formvalues4form[0].slice(8,10);
							var date2Year = formvalues4form[1].slice(0,4);
							var date2Month = formvalues4form[1].slice(5,7);
							var date2Day = formvalues4form[1].slice(8,10);

							var beforeformatted;
							var formattedMonth1;
							var formattedDay1;
							var formattedMonth2;
							var formattedDay2;
							var nowdate = new Date();

							if( (date1Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth1 = beforeformatted.concat((date1Month).toString());
							}
							else{
								formattedMonth1 = (date1Month).toString();
							}

							if( (date2Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth2 = beforeformatted.concat((date2Month).toString());
							}
							else{
								formattedMonth2 = (date2Month).toString();
							}


							if( (date1Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay1 = beforeformatted.concat((date1Day).toString());
							}
							else{
								formattedDay1 = (date1Day).toString();
							}

							if( (date2Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay2 = beforeformatted.concat((date2Day).toString());
							}
							else{
								formattedDay2 = (date2Day).toString();
							}				

							var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
						    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

							var differencedays = findHowManyDay(g1, g2);					

							if(g2.getFullYear() == nowdate.getFullYear() && g2.getMonth() == (nowdate.getMonth()) && g2.getDate() == nowdate.getDate()){
								differencedays = differencedays - 1;
							}

							var day4thisDay = new Date(g1);

							emptyArray = [];
							var day4thisDay4Gorsel;

							function sortDates(a, b){
							    return a.getTime() - b.getTime();
							}
							var dates4sorting = [];
							var min4sortingDateArray = new Date("04.15.2099 15:34:32");							
							var resultspot;

							for (var y = 0; y < differencedays + 1; y++) {

								send2FrontDailyValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
					      		send2FrontDailyValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
					      		send2FrontDailyCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
					      		
					      		daily4specific = 0;
					      		daily4specificCounter = 0;

					      		day4thisDay = new Date(g1);
								day4thisDay.setDate(g1.getDate() + y);

								min4sortingDateArray = new Date("04.15.2099 15:34:32");
							
								for (var i = 0; i < response.data.Items.length; i++) {								

									oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
									dateStringFromAPI = String(oldTimeapi);
									dateFromAPI = new Date(dateStringFromAPI);
									dateFromAPI.setHours(dateFromAPI.getHours() + 2);
									dateFromAPI = dateFromAPI.toISOString();
									newResponse = String(dateFromAPI);	
											
									if((newResponse.slice(0,4).toString() == day4thisDay.getFullYear().toString()) && (newResponse.slice(5,7).toString() == (day4thisDay.getMonth()+1).toString()) && (newResponse.slice(8,10).toString() == day4thisDay.getDate().toString())){

										if(typeof(response.data.Items[i].Value) == "number"){

											console.log("If içi: ", newResponse);
											if(response.data.Items[i].Value){

											var itemValue = response.data.Items[i].Value;

											break;

											}
										}														
									}
								}					
								//console.log(resultspot);			
								var average4specificdaily = itemValue;
								emptyArray.push({Timestamp : "00 - 01", Value : 0});
								emptyArray[y].Value = average4specificdaily;

								//////////
								oldTimeapi = day4thisDay;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								day4thisDay = newResponse;
								var n = day4thisDay.search("00:00:00");
								day4thisDay = day4thisDay.slice(0,n);
								/////////

								emptyArray[y].Timestamp = day4thisDay;
							}
							scope.DataItems = emptyArray;
							scope.sending2FrontDateinFront = scope.label4tag;							
					  }

					  if(formvalues4form[2] == "avr" && formvalues4form[3] == "weekly"){

					  	var daily4specific = 0;
				      	var daily4specificCounter = 0;

				      	var emptyArray = [];
				      	var date1Year = formvalues4form[0].slice(0,4);
						var date1Month = formvalues4form[0].slice(5,7);
						var date1Day = formvalues4form[0].slice(8,10);
						var date2Year = formvalues4form[1].slice(0,4);
						var date2Month = formvalues4form[1].slice(5,7);
						var date2Day = formvalues4form[1].slice(8,10);

						var beforeformatted;
						var formattedMonth1;
						var formattedDay1;
						var formattedMonth2;
						var formattedDay2;
						var nowdate = new Date();

						if( (date1Month).toString().length != 2 ){
								beforeformatted = "0";
								formattedMonth1 = beforeformatted.concat((date1Month).toString());
						}
						else{
							formattedMonth1 = (date1Month).toString();
						}

						if( (date2Month).toString().length != 2 ){
								beforeformatted = "0";
								formattedMonth2 = beforeformatted.concat((date2Month).toString());
						}
						else{
							formattedMonth2 = (date2Month).toString();
						}


						if( (date1Day).toString().length != 2 ){
								beforeformatted = "0";
								formattedDay1 = beforeformatted.concat((date1Day).toString());
						}
						else{
							formattedDay1 = (date1Day).toString();
						}

						if( (date2Day).toString().length != 2 ){
								beforeformatted = "0";
								formattedDay2 = beforeformatted.concat((date2Day).toString());
						}
						else{
							formattedDay2 = (date2Day).toString();
						}				

						var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
					    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

					    //console.log(g1);
					    //console.log(g2);

						var differenceweek = weeks_between(g1, g2);	
						//console.log(differenceweek);				

						/*if(g2.getFullYear() == nowdate.getFullYear() && g2.getMonth() == (nowdate.getMonth()) && g2.getDate() == nowdate.getDate()){
							differencedays = differencedays - 1;
						}*/

						var day4thisDay = new Date(g1);

						emptyArray = [];
						var day4thisDay4Gorsel;


						var first;
						var last;
						var newResponse2;

						for (var y = 0; y < differenceweek; y++) {

				      		daily4specific = 0;
				      		daily4specificCounter = 0;

				      		//day4thisDay = new Date(g1);
							//day4thisDay.setDate(g1.getDate() + y);
							//console.log(day4thisDay);

							//console.log(day4thisDay);
							first = new Date(day4thisDay);
							console.log(first);
							day4thisDay.setDate(day4thisDay.getDate() + 7)
							last = new Date(day4thisDay);
							console.log(last);

							console.log(first.getFullYear());
							console.log(last.getFullYear());

						
							for (var i = 0; i < response.data.Items.length; i++) {

								oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours() + 2);
								dateFromAPI = dateFromAPI.toISOString();
								newResponse = String(dateFromAPI);	
								newResponse2 = new Date(dateFromAPI);

								if((newResponse2.getTime() < last.getTime()) && (newResponse2.getTime() > first.getTime())){

									if(typeof(response.data.Items[i].Value) == "number"){
										daily4specific = daily4specific + response.data.Items[i].Value;
										daily4specificCounter++;
									}												
								}
							}
							emptyArray.push({Timestamp : "00 - 01", Value : 0});
							var average4specificdaily = daily4specific / daily4specificCounter;
							emptyArray[y].Value = average4specificdaily;

							//////////
							oldTimeapi = first;
							dateStringFromAPI = String(oldTimeapi);
							dateFromAPI = new Date(dateStringFromAPI);
							dateFromAPI.setHours(dateFromAPI.getHours());
							dateFromAPI = dateFromAPI.toISOString();
							changingDateFormat = new Date(dateFromAPI);
							newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
							first = newResponse;

							oldTimeapi = last;
							dateStringFromAPI = String(oldTimeapi);
							dateFromAPI = new Date(dateStringFromAPI);
							dateFromAPI.setHours(dateFromAPI.getHours());
							dateFromAPI = dateFromAPI.toISOString();
							changingDateFormat = new Date(dateFromAPI);
							newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
							last = newResponse;

							var n = first.search("00:00:00");
							first = first.slice(0,n);
							var n = last.search("00:00:00");
							last = last.slice(0,n);
							/////////

							emptyArray[y].Timestamp = first + " - " + last;

						}
						scope.DataItems = emptyArray;
						scope.sending2FrontDateinFront = scope.label4tag;
					  	
					  }

					  if(formvalues4form[2] == "sum" && formvalues4form[3] == "weekly"){
					  	
						  	var daily4specific = 0;
					      	var daily4specificCounter = 0;

					      	var emptyArray = [];
					      	var date1Year = formvalues4form[0].slice(0,4);
							var date1Month = formvalues4form[0].slice(5,7);
							var date1Day = formvalues4form[0].slice(8,10);
							var date2Year = formvalues4form[1].slice(0,4);
							var date2Month = formvalues4form[1].slice(5,7);
							var date2Day = formvalues4form[1].slice(8,10);

							var beforeformatted;
							var formattedMonth1;
							var formattedDay1;
							var formattedMonth2;
							var formattedDay2;
							var nowdate = new Date();

							if( (date1Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth1 = beforeformatted.concat((date1Month).toString());
							}
							else{
								formattedMonth1 = (date1Month).toString();
							}

							if( (date2Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth2 = beforeformatted.concat((date2Month).toString());
							}
							else{
								formattedMonth2 = (date2Month).toString();
							}


							if( (date1Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay1 = beforeformatted.concat((date1Day).toString());
							}
							else{
								formattedDay1 = (date1Day).toString();
							}

							if( (date2Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay2 = beforeformatted.concat((date2Day).toString());
							}
							else{
								formattedDay2 = (date2Day).toString();
							}				

							var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
						    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

						    //console.log(g1);
						    //console.log(g2);

							var differenceweek = weeks_between(g1, g2);	
							//console.log(differenceweek);				

							/*if(g2.getFullYear() == nowdate.getFullYear() && g2.getMonth() == (nowdate.getMonth()) && g2.getDate() == nowdate.getDate()){
								differencedays = differencedays - 1;
							}*/

							var day4thisDay = new Date(g1);

							emptyArray = [];
							var day4thisDay4Gorsel;


							var first;
							var last;
							var newResponse2;

							for (var y = 0; y < differenceweek; y++) {

					      		daily4specific = 0;
					      		daily4specificCounter = 0;

					      		//day4thisDay = new Date(g1);
								//day4thisDay.setDate(g1.getDate() + y);
								//console.log(day4thisDay);

								//console.log(day4thisDay);
								first = new Date(day4thisDay);
								console.log(first);
								day4thisDay.setDate(day4thisDay.getDate() + 7)
								last = new Date(day4thisDay);
								console.log(last);

								console.log(first.getFullYear());
								console.log(last.getFullYear());

							
								for (var i = 0; i < response.data.Items.length; i++) {

									oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
									dateStringFromAPI = String(oldTimeapi);
									dateFromAPI = new Date(dateStringFromAPI);
									dateFromAPI.setHours(dateFromAPI.getHours() + 2);
									dateFromAPI = dateFromAPI.toISOString();
									newResponse = String(dateFromAPI);	
									newResponse2 = new Date(dateFromAPI);

									if((newResponse2.getTime() < last.getTime()) && (newResponse2.getTime() > first.getTime())){

										if(typeof(response.data.Items[i].Value) == "number"){
											daily4specific = daily4specific + response.data.Items[i].Value;
											//daily4specificCounter++;
										}												
									}
								}
								emptyArray.push({Timestamp : "00 - 01", Value : 0});
								var average4specificdaily = daily4specific;
								emptyArray[y].Value = average4specificdaily;

								//////////
								oldTimeapi = first;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								first = newResponse;

								oldTimeapi = last;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								last = newResponse;

								var n = first.search("00:00:00");
								first = first.slice(0,n);
								var n = last.search("00:00:00");
								last = last.slice(0,n);
								/////////

								emptyArray[y].Timestamp = first + " - " + last;

							}
							scope.DataItems = emptyArray;
							scope.sending2FrontDateinFront = scope.label4tag;
					  }

					  if(formvalues4form[2] == "spot" && formvalues4form[3] == "weekly"){
					  	
					  		var daily4specific = 0;
					      	var daily4specificCounter = 0;

					      	var emptyArray = [];
					      	var date1Year = formvalues4form[0].slice(0,4);
							var date1Month = formvalues4form[0].slice(5,7);
							var date1Day = formvalues4form[0].slice(8,10);
							var date2Year = formvalues4form[1].slice(0,4);
							var date2Month = formvalues4form[1].slice(5,7);
							var date2Day = formvalues4form[1].slice(8,10);

							var beforeformatted;
							var formattedMonth1;
							var formattedDay1;
							var formattedMonth2;
							var formattedDay2;
							var nowdate = new Date();

							if( (date1Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth1 = beforeformatted.concat((date1Month).toString());
							}
							else{
								formattedMonth1 = (date1Month).toString();
							}

							if( (date2Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth2 = beforeformatted.concat((date2Month).toString());
							}
							else{
								formattedMonth2 = (date2Month).toString();
							}


							if( (date1Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay1 = beforeformatted.concat((date1Day).toString());
							}
							else{
								formattedDay1 = (date1Day).toString();
							}

							if( (date2Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay2 = beforeformatted.concat((date2Day).toString());
							}
							else{
								formattedDay2 = (date2Day).toString();
							}				

							var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
						    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

						    //console.log(g1);
						    //console.log(g2);

							var differenceweek = weeks_between(g1, g2);	
							//console.log(differenceweek);				

							/*if(g2.getFullYear() == nowdate.getFullYear() && g2.getMonth() == (nowdate.getMonth()) && g2.getDate() == nowdate.getDate()){
								differencedays = differencedays - 1;
							}*/

							var day4thisDay = new Date(g1);

							emptyArray = [];
							var day4thisDay4Gorsel;


							var first;
							var last;
							var newResponse2;

							function sortDates(a, b)
							{
							    return a.getTime() - b.getTime();
							}
							var dates4sorting = [];
							var min4sortingDateArray;

							
							min4sortingDateArray = new Date("04.15.2099 15:34:32");

							var resultspot;

							for (var y = 0; y < differenceweek; y++) {

					      		daily4specific = 0;
					      		daily4specificCounter = 0;

					      		//day4thisDay = new Date(g1);
								//day4thisDay.setDate(g1.getDate() + y);
								//console.log(day4thisDay);

								//console.log(day4thisDay);
								first = new Date(day4thisDay);
								console.log(first);
								day4thisDay.setDate(day4thisDay.getDate() + 7)
								last = new Date(day4thisDay);
								console.log(last);

								console.log(first.getFullYear());
								console.log(last.getFullYear());

							
								for (var i = 0; i < response.data.Items.length; i++) {

									oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
									dateStringFromAPI = String(oldTimeapi);
									dateFromAPI = new Date(dateStringFromAPI);
									dateFromAPI.setHours(dateFromAPI.getHours() + 2);
									dateFromAPI = dateFromAPI.toISOString();
									newResponse = String(dateFromAPI);	
									newResponse2 = new Date(dateFromAPI);

									if((newResponse2.getTime() < last.getTime()) && (newResponse2.getTime() > first.getTime())){

										if(typeof(response.data.Items[i].Value) == "number"){

											console.log("If içi: ", newResponse);
											if(response.data.Items[i].Value){

											var itemValue = response.data.Items[i].Value;

											break;

											}
										}												
									}
								}
								emptyArray.push({Timestamp : "00 - 01", Value : 0});
								var average4specificdaily = itemValue;
								emptyArray[y].Value = average4specificdaily;

								//////////
								oldTimeapi = first;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								first = newResponse;

								oldTimeapi = last;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								last = newResponse;

								var n = first.search("00:00:00");
								first = first.slice(0,n);
								var n = last.search("00:00:00");
								last = last.slice(0,n);
								/////////

								emptyArray[y].Timestamp = first + " - " + last;

							}
							scope.DataItems = emptyArray;
							scope.sending2FrontDateinFront = scope.label4tag;
					  }

					 if(formvalues4form[2] == "avr" && formvalues4form[3] == "montly"){

						 	var daily4specific = 0;
					      	var daily4specificCounter = 0;

					      	var emptyArray = [];
					      	var date1Year = formvalues4form[0].slice(0,4);
							var date1Month = formvalues4form[0].slice(5,7);
							var date1Day = formvalues4form[0].slice(8,10);
							var date2Year = formvalues4form[1].slice(0,4);
							var date2Month = formvalues4form[1].slice(5,7);
							var date2Day = formvalues4form[1].slice(8,10);

							var beforeformatted;
							var formattedMonth1;
							var formattedDay1;
							var formattedMonth2;
							var formattedDay2;
							var nowdate = new Date();

							if( (date1Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth1 = beforeformatted.concat((date1Month).toString());
							}
							else{
								formattedMonth1 = (date1Month).toString();
							}

							if( (date2Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth2 = beforeformatted.concat((date2Month).toString());
							}
							else{
								formattedMonth2 = (date2Month).toString();
							}


							if( (date1Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay1 = beforeformatted.concat((date1Day).toString());
							}
							else{
								formattedDay1 = (date1Day).toString();
							}

							if( (date2Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay2 = beforeformatted.concat((date2Day).toString());
							}
							else{
								formattedDay2 = (date2Day).toString();
							}				

							var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
						    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

						    //console.log(g1);
						    //console.log(g2);

							var differenceweek = monthDiff(g1, g2);	
							console.log(differenceweek);			

							

							var day4thisDay = new Date(g1);

							emptyArray = [];
							var day4thisDay4Gorsel;


							var first;
							var last;
							var newResponse2;

							for (var y = 0; y < differenceweek; y++) {

					      		daily4specific = 0;
					      		daily4specificCounter = 0;

					      		//day4thisDay = new Date(g1);
								//day4thisDay.setDate(g1.getDate() + y);
								//console.log(day4thisDay);

								//console.log(day4thisDay);
								first = new Date(day4thisDay);
								console.log(first);
								day4thisDay.setMonth(day4thisDay.getMonth() + 1)
								last = new Date(day4thisDay);
								console.log(last);

								//console.log(first.getFullYear());
								//console.log(last.getFullYear());

							
								for (var i = 0; i < response.data.Items.length; i++) {

									oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
									dateStringFromAPI = String(oldTimeapi);
									dateFromAPI = new Date(dateStringFromAPI);
									dateFromAPI.setHours(dateFromAPI.getHours() + 2);
									dateFromAPI = dateFromAPI.toISOString();
									newResponse = String(dateFromAPI);	
									newResponse2 = new Date(dateFromAPI);

									if((newResponse2.getTime() < last.getTime()) && (newResponse2.getTime() > first.getTime())){

										if(typeof(response.data.Items[i].Value) == "number"){
											daily4specific = daily4specific + response.data.Items[i].Value;
											daily4specificCounter++;
										}												
									}
								}
								emptyArray.push({Timestamp : "00 - 01", Value : 0});
								var average4specificdaily = daily4specific / daily4specificCounter;
								emptyArray[y].Value = average4specificdaily;

								//////////
								oldTimeapi = first;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								first = newResponse;

								oldTimeapi = last;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								last = newResponse;

								var n = first.search("00:00:00");
								first = first.slice(0,n);
								var n = last.search("00:00:00");
								last = last.slice(0,n);
								/////////

								emptyArray[y].Timestamp = first + " - " + last;

							}
							scope.DataItems = emptyArray;
					  		scope.sending2FrontDateinFront = scope.label4tag;
					}

					  

					  if(formvalues4form[2] == "sum" && formvalues4form[3] == "montly"){
					  	

					  		var daily4specific = 0;
					      	var daily4specificCounter = 0;

					      	var emptyArray = [];
					      	var date1Year = formvalues4form[0].slice(0,4);
							var date1Month = formvalues4form[0].slice(5,7);
							var date1Day = formvalues4form[0].slice(8,10);
							var date2Year = formvalues4form[1].slice(0,4);
							var date2Month = formvalues4form[1].slice(5,7);
							var date2Day = formvalues4form[1].slice(8,10);

							var beforeformatted;
							var formattedMonth1;
							var formattedDay1;
							var formattedMonth2;
							var formattedDay2;
							var nowdate = new Date();

							if( (date1Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth1 = beforeformatted.concat((date1Month).toString());
							}
							else{
								formattedMonth1 = (date1Month).toString();
							}

							if( (date2Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth2 = beforeformatted.concat((date2Month).toString());
							}
							else{
								formattedMonth2 = (date2Month).toString();
							}


							if( (date1Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay1 = beforeformatted.concat((date1Day).toString());
							}
							else{
								formattedDay1 = (date1Day).toString();
							}

							if( (date2Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay2 = beforeformatted.concat((date2Day).toString());
							}
							else{
								formattedDay2 = (date2Day).toString();
							}				

							var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
						    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

						    //console.log(g1);
						    //console.log(g2);

							var differenceweek = monthDiff(g1, g2);	
							console.log(differenceweek);			

							

							var day4thisDay = new Date(g1);

							emptyArray = [];
							var day4thisDay4Gorsel;


							var first;
							var last;
							var newResponse2;

							for (var y = 0; y < differenceweek; y++) {

					      		daily4specific = 0;
					      		daily4specificCounter = 0;

					      		//day4thisDay = new Date(g1);
								//day4thisDay.setDate(g1.getDate() + y);
								//console.log(day4thisDay);

								//console.log(day4thisDay);
								first = new Date(day4thisDay);
								console.log(first);
								day4thisDay.setMonth(day4thisDay.getMonth() + 1);
								last = new Date(day4thisDay);
								console.log(last);

								//console.log(first.getFullYear());
								//console.log(last.getFullYear());

							
								for (var i = 0; i < response.data.Items.length; i++) {

									oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
									dateStringFromAPI = String(oldTimeapi);
									dateFromAPI = new Date(dateStringFromAPI);
									dateFromAPI.setHours(dateFromAPI.getHours() + 2);
									dateFromAPI = dateFromAPI.toISOString();
									newResponse = String(dateFromAPI);	
									newResponse2 = new Date(dateFromAPI);

									if((newResponse2.getTime() < last.getTime()) && (newResponse2.getTime() > first.getTime())){

										if(typeof(response.data.Items[i].Value) == "number"){
											daily4specific = daily4specific + response.data.Items[i].Value;
											//daily4specificCounter++;
										}												
									}
								}
								emptyArray.push({Timestamp : "00 - 01", Value : 0});
								var average4specificdaily = daily4specific;
								emptyArray[y].Value = average4specificdaily;

								//////////
								oldTimeapi = first;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								first = newResponse;

								oldTimeapi = last;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								last = newResponse;

								var n = first.search("00:00:00");
								first = first.slice(0,n);
								var n = last.search("00:00:00");
								last = last.slice(0,n);
								/////////

								emptyArray[y].Timestamp = first + " - " + last;

							}
							scope.DataItems = emptyArray;
							scope.sending2FrontDateinFront = scope.label4tag;
					 }

					  

					  

					  if(formvalues4form[2] == "spot" && formvalues4form[3] == "montly"){
					  	

					  		var daily4specific = 0;
					      	var daily4specificCounter = 0;

					      	var emptyArray = [];
					      	var date1Year = formvalues4form[0].slice(0,4);
							var date1Month = formvalues4form[0].slice(5,7);
							var date1Day = formvalues4form[0].slice(8,10);
							var date2Year = formvalues4form[1].slice(0,4);
							var date2Month = formvalues4form[1].slice(5,7);
							var date2Day = formvalues4form[1].slice(8,10);

							var beforeformatted;
							var formattedMonth1;
							var formattedDay1;
							var formattedMonth2;
							var formattedDay2;
							var nowdate = new Date();

							if( (date1Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth1 = beforeformatted.concat((date1Month).toString());
							}
							else{
								formattedMonth1 = (date1Month).toString();
							}

							if( (date2Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth2 = beforeformatted.concat((date2Month).toString());
							}
							else{
								formattedMonth2 = (date2Month).toString();
							}


							if( (date1Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay1 = beforeformatted.concat((date1Day).toString());
							}
							else{
								formattedDay1 = (date1Day).toString();
							}

							if( (date2Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay2 = beforeformatted.concat((date2Day).toString());
							}
							else{
								formattedDay2 = (date2Day).toString();
							}				

							var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
						    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

						    //console.log(g1);
						    //console.log(g2);

							var differenceweek = monthDiff(g1, g2);	
							//console.log(differenceweek);				

							/*if(g2.getFullYear() == nowdate.getFullYear() && g2.getMonth() == (nowdate.getMonth()) && g2.getDate() == nowdate.getDate()){
								differencedays = differencedays - 1;
							}*/

							var day4thisDay = new Date(g1);

							emptyArray = [];
							var day4thisDay4Gorsel;


							var first;
							var last;
							var newResponse2;

							function sortDates(a, b)
							{
							    return a.getTime() - b.getTime();
							}
							var dates4sorting = [];
							var min4sortingDateArray;

							
							min4sortingDateArray = new Date("04.15.2099 15:34:32");

							var resultspot;

							for (var y = 0; y < differenceweek; y++) {

					      		daily4specific = 0;
					      		daily4specificCounter = 0;

					      		//day4thisDay = new Date(g1);
								//day4thisDay.setDate(g1.getDate() + y);
								//console.log(day4thisDay);

								//console.log(day4thisDay);
								first = new Date(day4thisDay);
								console.log(first);
								day4thisDay.setMonth(day4thisDay.getMonth() + 1);
								last = new Date(day4thisDay);
								console.log(last);

								console.log(first.getFullYear());
								console.log(last.getFullYear());

							
								for (var i = 0; i < response.data.Items.length; i++) {

									oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
									dateStringFromAPI = String(oldTimeapi);
									dateFromAPI = new Date(dateStringFromAPI);
									dateFromAPI.setHours(dateFromAPI.getHours() + 2);
									dateFromAPI = dateFromAPI.toISOString();
									newResponse = String(dateFromAPI);	
									newResponse2 = new Date(dateFromAPI);

									if((newResponse2.getTime() < last.getTime()) && (newResponse2.getTime() > first.getTime())){

										if(typeof(response.data.Items[i].Value) == "number"){

											console.log("If içi: ", newResponse);
											if(response.data.Items[i].Value){

											var itemValue = response.data.Items[i].Value;

											break;

											}
										}												
									}
								}
								emptyArray.push({Timestamp : "00 - 01", Value : 0});
								var average4specificdaily = itemValue;
								emptyArray[y].Value = average4specificdaily;

								//////////
								oldTimeapi = first;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								first = newResponse;

								oldTimeapi = last;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								last = newResponse;

								var n = first.search("00:00:00");
								first = first.slice(0,n);
								var n = last.search("00:00:00");
								last = last.slice(0,n);
								/////////

								emptyArray[y].Timestamp = first + " - " + last;

							}
							scope.DataItems = emptyArray;
							scope.sending2FrontDateinFront = scope.label4tag;
					  }

					 if(formvalues4form[2] == "avr" && formvalues4form[3] == "yearly"){
						
							var daily4specific = 0;
					      	var daily4specificCounter = 0;

					      	var emptyArray = [];
					      	var date1Year = formvalues4form[0].slice(0,4);
							var date1Month = formvalues4form[0].slice(5,7);
							var date1Day = formvalues4form[0].slice(8,10);
							var date2Year = formvalues4form[1].slice(0,4);
							var date2Month = formvalues4form[1].slice(5,7);
							var date2Day = formvalues4form[1].slice(8,10);

							var beforeformatted;
							var formattedMonth1;
							var formattedDay1;
							var formattedMonth2;
							var formattedDay2;
							var nowdate = new Date();

							if( (date1Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth1 = beforeformatted.concat((date1Month).toString());
							}
							else{
								formattedMonth1 = (date1Month).toString();
							}

							if( (date2Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth2 = beforeformatted.concat((date2Month).toString());
							}
							else{
								formattedMonth2 = (date2Month).toString();
							}


							if( (date1Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay1 = beforeformatted.concat((date1Day).toString());
							}
							else{
								formattedDay1 = (date1Day).toString();
							}

							if( (date2Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay2 = beforeformatted.concat((date2Day).toString());
							}
							else{
								formattedDay2 = (date2Day).toString();
							}				

							var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
						    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

						    //console.log(g1);
						    //console.log(g2);

						    var betweenDate = Math.abs(g2 - g1);
							var diffDay = betweenDate / (1000 * 60 * 60 * 24)
							var diffYear = Math.abs(Math.floor(diffDay / 365.25));
							if (Number(diffYear) > 0){
								console.log(diffYear);
								console.log("ygs");
								var differenceweek = diffYear;

							}
							else{
								console.log("asdadas");

							}

							//var differenceweek = monthDiff(g1, g2);	
							//console.log(differenceweek);			

							

							var day4thisDay = new Date(g1);

							emptyArray = [];
							var day4thisDay4Gorsel;


							var first;
							var last;
							var newResponse2;

							for (var y = 0; y < differenceweek; y++) {

					      		daily4specific = 0;
					      		daily4specificCounter = 0;

					      		//day4thisDay = new Date(g1);
								//day4thisDay.setDate(g1.getDate() + y);
								//console.log(day4thisDay);

								//console.log(day4thisDay);
								first = new Date(day4thisDay);
								//console.log(first);
								day4thisDay.setFullYear(day4thisDay.getFullYear() + 1);
								last = new Date(day4thisDay);
								//console.log(last);

								//console.log(first.getFullYear());
								//console.log(last.getFullYear());

							
								for (var i = 0; i < response.data.Items.length; i++) {

									oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
									dateStringFromAPI = String(oldTimeapi);
									dateFromAPI = new Date(dateStringFromAPI);
									dateFromAPI.setHours(dateFromAPI.getHours() + 2);
									dateFromAPI = dateFromAPI.toISOString();
									newResponse = String(dateFromAPI);	
									newResponse2 = new Date(dateFromAPI);

									if((newResponse2.getTime() < last.getTime()) && (newResponse2.getTime() > first.getTime())){

										if(typeof(response.data.Items[i].Value) == "number"){
											daily4specific = daily4specific + response.data.Items[i].Value;
											daily4specificCounter++;
										}												
									}
								}
								emptyArray.push({Timestamp : "00 - 01", Value : 0});
								var average4specificdaily = daily4specific / daily4specificCounter;
								emptyArray[y].Value = average4specificdaily;

								//////////
								oldTimeapi = first;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								first = newResponse;

								oldTimeapi = last;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								last = newResponse;

								var n = first.search("00:00:00");
								first = first.slice(0,n);
								var n = last.search("00:00:00");
								last = last.slice(0,n);
								/////////

								emptyArray[y].Timestamp = first + " - " + last;

							}
							scope.DataItems = emptyArray;
							scope.sending2FrontDateinFront = scope.label4tag;
					 }

					 if(formvalues4form[2] == "sum" && formvalues4form[3] == "yearly"){
					  	
					  		var daily4specific = 0;
					      	var daily4specificCounter = 0;

					      	var emptyArray = [];
					      	var date1Year = formvalues4form[0].slice(0,4);
							var date1Month = formvalues4form[0].slice(5,7);
							var date1Day = formvalues4form[0].slice(8,10);
							var date2Year = formvalues4form[1].slice(0,4);
							var date2Month = formvalues4form[1].slice(5,7);
							var date2Day = formvalues4form[1].slice(8,10);

							var beforeformatted;
							var formattedMonth1;
							var formattedDay1;
							var formattedMonth2;
							var formattedDay2;
							var nowdate = new Date();

							if( (date1Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth1 = beforeformatted.concat((date1Month).toString());
							}
							else{
								formattedMonth1 = (date1Month).toString();
							}

							if( (date2Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth2 = beforeformatted.concat((date2Month).toString());
							}
							else{
								formattedMonth2 = (date2Month).toString();
							}


							if( (date1Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay1 = beforeformatted.concat((date1Day).toString());
							}
							else{
								formattedDay1 = (date1Day).toString();
							}

							if( (date2Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay2 = beforeformatted.concat((date2Day).toString());
							}
							else{
								formattedDay2 = (date2Day).toString();
							}				

							var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
						    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

						    //console.log(g1);
						    //console.log(g2);

						    var betweenDate = Math.abs(g2 - g1);
							var diffDay = betweenDate / (1000 * 60 * 60 * 24)
							var diffYear = Math.abs(Math.floor(diffDay / 365.25));
							if (Number(diffYear) > 0){
								console.log(diffYear);
								console.log("ygs");
								var differenceweek = diffYear;

							}
							else{
								console.log("asdadas");

							}

							//var differenceweek = monthDiff(g1, g2);	
							//console.log(differenceweek);			

							

							var day4thisDay = new Date(g1);

							emptyArray = [];
							var day4thisDay4Gorsel;


							var first;
							var last;
							var newResponse2;

							for (var y = 0; y < differenceweek; y++) {

					      		daily4specific = 0;
					      		daily4specificCounter = 0;

					      		//day4thisDay = new Date(g1);
								//day4thisDay.setDate(g1.getDate() + y);
								//console.log(day4thisDay);

								//console.log(day4thisDay);
								first = new Date(day4thisDay);
								//console.log(first);
								day4thisDay.setFullYear(day4thisDay.getFullYear() + 1);
								last = new Date(day4thisDay);
								//console.log(last);

								//console.log(first.getFullYear());
								//console.log(last.getFullYear());

							
								for (var i = 0; i < response.data.Items.length; i++) {

									oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
									dateStringFromAPI = String(oldTimeapi);
									dateFromAPI = new Date(dateStringFromAPI);
									dateFromAPI.setHours(dateFromAPI.getHours() + 2);
									dateFromAPI = dateFromAPI.toISOString();
									newResponse = String(dateFromAPI);	
									newResponse2 = new Date(dateFromAPI);

									if((newResponse2.getTime() < last.getTime()) && (newResponse2.getTime() > first.getTime())){

										if(typeof(response.data.Items[i].Value) == "number"){
											daily4specific = daily4specific + response.data.Items[i].Value;
											//daily4specificCounter++;
										}												
									}
								}
								emptyArray.push({Timestamp : "00 - 01", Value : 0});
								var average4specificdaily = daily4specific;
								emptyArray[y].Value = average4specificdaily;

								//////////
								oldTimeapi = first;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								first = newResponse;

								oldTimeapi = last;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								last = newResponse;

								var n = first.search("00:00:00");
								first = first.slice(0,n);
								var n = last.search("00:00:00");
								last = last.slice(0,n);
								/////////

								emptyArray[y].Timestamp = first + " - " + last;

							}
							scope.DataItems = emptyArray;
							scope.sending2FrontDateinFront = scope.label4tag;
					 }

					 if(formvalues4form[2] == "spot" && formvalues4form[3] == "yearly"){
					  	
					  		var daily4specific = 0;
					      	var daily4specificCounter = 0;

					      	var emptyArray = [];
					      	var date1Year = formvalues4form[0].slice(0,4);
							var date1Month = formvalues4form[0].slice(5,7);
							var date1Day = formvalues4form[0].slice(8,10);
							var date2Year = formvalues4form[1].slice(0,4);
							var date2Month = formvalues4form[1].slice(5,7);
							var date2Day = formvalues4form[1].slice(8,10);

							var beforeformatted;
							var formattedMonth1;
							var formattedDay1;
							var formattedMonth2;
							var formattedDay2;
							var nowdate = new Date();

							if( (date1Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth1 = beforeformatted.concat((date1Month).toString());
							}
							else{
								formattedMonth1 = (date1Month).toString();
							}

							if( (date2Month).toString().length != 2 ){
									beforeformatted = "0";
									formattedMonth2 = beforeformatted.concat((date2Month).toString());
							}
							else{
								formattedMonth2 = (date2Month).toString();
							}


							if( (date1Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay1 = beforeformatted.concat((date1Day).toString());
							}
							else{
								formattedDay1 = (date1Day).toString();
							}

							if( (date2Day).toString().length != 2 ){
									beforeformatted = "0";
									formattedDay2 = beforeformatted.concat((date2Day).toString());
							}
							else{
								formattedDay2 = (date2Day).toString();
							}				

							var g1 = new Date(date1Year + "-" + formattedMonth1 + "-" + formattedDay1); 
						    var g2 = new Date(date2Year + "-" + formattedMonth2 + "-" + formattedDay2); 

						    //console.log(g1);
						    //console.log(g2);

						    var betweenDate = Math.abs(g2 - g1);
							var diffDay = betweenDate / (1000 * 60 * 60 * 24)
							var diffYear = Math.abs(Math.floor(diffDay / 365.25));
							if (Number(diffYear) > 0){
								console.log(diffYear);
								console.log("ygs");
								var differenceweek = diffYear;

							}
							else{
								console.log("asdadas");

							}

							//var differenceweek = monthDiff(g1, g2);	
							//console.log(differenceweek);				

							/*if(g2.getFullYear() == nowdate.getFullYear() && g2.getMonth() == (nowdate.getMonth()) && g2.getDate() == nowdate.getDate()){
								differencedays = differencedays - 1;
							}*/

							var day4thisDay = new Date(g1);

							emptyArray = [];
							var day4thisDay4Gorsel;


							var first;
							var last;
							var newResponse2;

							function sortDates(a, b)
							{
							    return a.getTime() - b.getTime();
							}
							var dates4sorting = [];
							var min4sortingDateArray;

							
							min4sortingDateArray = new Date("04.15.2099 15:34:32");

							var resultspot;

							for (var y = 0; y < differenceweek; y++) {

					      		daily4specific = 0;
					      		daily4specificCounter = 0;

					      		//day4thisDay = new Date(g1);
								//day4thisDay.setDate(g1.getDate() + y);
								//console.log(day4thisDay);

								//console.log(day4thisDay);
								first = new Date(day4thisDay);
								console.log(first);
								day4thisDay.setFullYear(day4thisDay.getFullYear() + 1);
								last = new Date(day4thisDay);
								console.log(last);

								console.log(first.getFullYear());
								console.log(last.getFullYear());

							
								for (var i = 0; i < response.data.Items.length; i++) {

									oldTimeapi = response.data.Items[i].Timestamp.slice(0,50);
									dateStringFromAPI = String(oldTimeapi);
									dateFromAPI = new Date(dateStringFromAPI);
									dateFromAPI.setHours(dateFromAPI.getHours() + 2);
									dateFromAPI = dateFromAPI.toISOString();
									newResponse = String(dateFromAPI);	
									newResponse2 = new Date(dateFromAPI);

									if((newResponse2.getTime() < last.getTime()) && (newResponse2.getTime() > first.getTime())){

										if(typeof(response.data.Items[i].Value) == "number"){

											console.log("If içi: ", newResponse);
											if(response.data.Items[i].Value){

											var itemValue = response.data.Items[i].Value;

											break;

											}
										}												
									}
								}
								emptyArray.push({Timestamp : "00 - 01", Value : 0});
								var average4specificdaily = itemValue;
								emptyArray[y].Value = average4specificdaily;

								//////////
								oldTimeapi = first;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								first = newResponse;

								oldTimeapi = last;
								dateStringFromAPI = String(oldTimeapi);
								dateFromAPI = new Date(dateStringFromAPI);
								dateFromAPI.setHours(dateFromAPI.getHours());
								dateFromAPI = dateFromAPI.toISOString();
								changingDateFormat = new Date(dateFromAPI);
								newResponse = changingDateFormat.toLocaleDateString('TR-TR', options);
								last = newResponse;

								var n = first.search("00:00:00");
								first = first.slice(0,n);
								var n = last.search("00:00:00");
								last = last.slice(0,n);
								/////////

								emptyArray[y].Timestamp = first + " - " + last;

							}
							scope.DataItems = emptyArray;
							scope.sending2FrontDateinFront = scope.label4tag;
					 }
				    }
				  })()  				  
			});
		 }	
		 
	};

	var definition = { 
		typeName: 'data-tablesum',
		iconUrl: 'Scripts\\app\\editor\\symbols\\ext\\icons\\table2.jpg', 
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