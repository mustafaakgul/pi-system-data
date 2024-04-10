(function (PV) { 

	function symbolVis() { 

	} 
	PV.deriveVisualizationFromBase(symbolVis);

	//var baseUrlx = PV.ClientSettings.PIWebAPIUrl;
	var baseUrl = "https://172.16.4.95/piwebapi";

	var total = 0;
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
		"07D" : 0,
	}
	var dictMontly4W = {
		"01W" : 0,
		"02W" : 0,
		"03W" : 0,
		"04W" : 0
	}
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
	}
	//var baseUrl = "https://172.16.4.32/piwebapi";
	//var fullUrl = "https://172.16.4.32/piwebapi/assetservers";
	//var headersx = headers:{'Content-Type': 'application/json', 'Authorization': "Basic S01UXFBJVmlzaW9uOkttXzEyMzQ=" };
	symbolVis.prototype.init = function (scope, elem, $http) {
		var path = scope.symbol.DataSources[0].slice(3);

		//$http.get(baseUrl + '/assetservers').then(function (response) {
		//	console.log(response); 
		//});

		$http({url:"https://172.16.4.95/piwebapi/attributes?path=" + path,
           method:'GET',
           crossDomain: true,
           dataType: "json",
           data:{},
           headers: {"Authorization" : "Basic S01UXFZpc2lvbkRVc2VyOlBhc3N3b3JkMQ==",
           			"Accept" : "application/json", 
           			"X-Requested-With" : "XMLHttpRequest",
           			//"X-Requested-With" : "Origin",
           			"Content-Type" : "application/json",
           			//"Access-Control-Allow-Origin" : ""
           			//'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization',
           			//"Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
           			//'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'


           		}
            }).then(function (response) {
            scope.webId = response.data.WebId;
            //console.log(baseUrl);
			//console.log(response);
			//console.log(response.data.WebId);
			//console.log(baseUrlx);
		});


		//console.log(baseUrl);
		//alert(baseUrl);
		//alert("abc");
		//alert(response);


		scope.sendValueAllData = function () {
			//var data1 = JSON.stringify({ Timestamp: '*', Value: 987 }); 
			//$http.post(baseUrl + '/streams/' + scope.webId + '/value', data1);
			//url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-10&endTime=*'
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-10d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {"Authorization" : "Basic S01UXFBJNERldjpQYXNzd29yZDE=",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",
	           			"Content-Type" : "application/json",
	           		}
	            }).then(function (response) {
	            //scope.webId = response.data.WebId;
	            //console.log(baseUrl);
				console.log(response.data.Items);
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
	           			"Authorization" : "Basic S01UXFBJNERldjpQYXNzd29yZDE=",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",
	           			"Content-Type" : "application/json",
	           		}
	            }).then(function (response) {
				console.log(response.data.Items);
				scope.DataItems = response.data.Items;
				var d = new Date();
				var newtimeformat = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + "T";
				x = ((d.getDate() - 1).toString());
				//console.log(x);
				//console.log(typeof(x));
				var beforeformatted;
				var formattedMonth;
				var formattedDay ;

				var findDay = d.getDate() - minusDay;
				var unformattedValues = [0,0];
				if( findDay <= 0 ){
					//console.log("errorrr");
					unformattedValues = solveTimeComplexity( d.getDate(), d.getMonth(), d.getFullYear(), minusDay);

					if(unformattedValues[0].toString().length !=2 ){
						beforeformatted = "0";
						formattedDay = beforeformatted.concat((unformattedValues[0]).toString());
					}
					else{
						formattedDay = (unformattedValues[0]).toString();
					}
					console.log(formattedDay);

					if( (unformattedValues[1]).toString().length != 2 ){
							beforeformatted = "0";
							formattedMonth = beforeformatted.concat((unformattedValues[1]).toString());
					}
					else{
						formattedMonth = (d.getMonth() + 1).toString();
					}
					console.log(formattedMonth);

				}
				else{

					if( (d.getMonth() + 1).toString().length != 2 ){
							beforeformatted = "0";
							formattedMonth = beforeformatted.concat((d.getMonth() + 1).toString());
					}
					else{
						formattedMonth = (d.getMonth() + 1).toString();
					}
					console.log(formattedMonth);

					
					if( (d.getDate() - minusDay).toString().length != 2 ){
							beforeformatted = "0";
							formattedDay = beforeformatted.concat((d.getDate() - minusDay).toString());
					}
					else{
						formattedDay = (d.getDate() - minusDay).toString();
					}
					console.log(formattedDay);

				}

				for (var i = 0; i < response.data.Items.length; i++) {


					if((response.data.Items[i].Timestamp.slice(0,4) == (d.getFullYear()).toString()) && (response.data.Items[i].Timestamp.slice(5,7) == formattedMonth) && (response.data.Items[i].Timestamp.slice(8,10) == formattedDay)){

						if (response.data.Items[i].Timestamp.slice(11,13) == "00"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[0] = send2FrontDailyValue[0] + response.data.Items[i].Value;
								send2FrontDailyCounter[0]++;
								dictDaily["00"] = send2FrontDailyValue[0];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "01"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[1] = send2FrontDailyValue[1] + response.data.Items[i].Value;
            send2FrontDailyCounter[1]++;
            dictDaily["01"] = send2FrontDailyValue[1] / send2FrontDailyCounter[1];
            send2FrontDailyValues[1] = send2FrontDailyValue[1] / send2FrontDailyCounter[1];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "02"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[2] = send2FrontDailyValue[2] + response.data.Items[i].Value;
            send2FrontDailyCounter[2]++;
            dictDaily["02"] = send2FrontDailyValue[2] / send2FrontDailyCounter[2];
            send2FrontDailyValues[2] = send2FrontDailyValue[2] / send2FrontDailyCounter[2];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "03"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[3] = send2FrontDailyValue[3] + response.data.Items[i].Value;
            send2FrontDailyCounter[3]++;
            dictDaily["03"] = send2FrontDailyValue[3] / send2FrontDailyCounter[3];
            send2FrontDailyValues[3] = send2FrontDailyValue[3] / send2FrontDailyCounter[3];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "04"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[4] = send2FrontDailyValue[4] + response.data.Items[i].Value;
            send2FrontDailyCounter[4]++;
            dictDaily["04"] = send2FrontDailyValue[4] / send2FrontDailyCounter[4];
            send2FrontDailyValues[4] = send2FrontDailyValue[4] / send2FrontDailyCounter[4];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "05"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[5] = send2FrontDailyValue[5] + response.data.Items[i].Value;
            send2FrontDailyCounter[5]++;
            dictDaily["05"] = send2FrontDailyValue[5] / send2FrontDailyCounter[5];
            send2FrontDailyValues[5] = send2FrontDailyValue[5] / send2FrontDailyCounter[5];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "06"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[6] = send2FrontDailyValue[6] + response.data.Items[i].Value;
            send2FrontDailyCounter[6]++;
            dictDaily["06"] = send2FrontDailyValue[6] / send2FrontDailyCounter[6];
            send2FrontDailyValues[6] = send2FrontDailyValue[6] / send2FrontDailyCounter[6];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "07"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[7] = send2FrontDailyValue[7] + response.data.Items[i].Value;
            send2FrontDailyCounter[7]++;
            dictDaily["07"] = send2FrontDailyValue[7] / send2FrontDailyCounter[7];
            send2FrontDailyValues[7] = send2FrontDailyValue[7] / send2FrontDailyCounter[7];
						}

						if (response.data.Items[i].Timestamp.slice(11,13) == "08"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[8] = send2FrontDailyValue[8] + response.data.Items[i].Value;
            send2FrontDailyCounter[8]++;
            dictDaily["08"] = send2FrontDailyValue[8] / send2FrontDailyCounter[8];
            send2FrontDailyValues[8] = send2FrontDailyValue[8] / send2FrontDailyCounter[8];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "09"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[9] = send2FrontDailyValue[9] + response.data.Items[i].Value;
            send2FrontDailyCounter[9]++;
            dictDaily["09"] = send2FrontDailyValue[9] / send2FrontDailyCounter[9];
            send2FrontDailyValues[9] = send2FrontDailyValue[9] / send2FrontDailyCounter[9];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "10"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[10] = send2FrontDailyValue[10] + response.data.Items[i].Value;
            send2FrontDailyCounter[10]++;
            dictDaily["10"] = send2FrontDailyValue[10] / send2FrontDailyCounter[10];
            send2FrontDailyValues[10] = send2FrontDailyValue[10] / send2FrontDailyCounter[10];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "11"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[11] = send2FrontDailyValue[11] + response.data.Items[i].Value;
            send2FrontDailyCounter[11]++;
            dictDaily["11"] = send2FrontDailyValue[11] / send2FrontDailyCounter[11];
            send2FrontDailyValues[11] = send2FrontDailyValue[11] / send2FrontDailyCounter[11];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "12"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[12] = send2FrontDailyValue[12] + response.data.Items[i].Value;
            send2FrontDailyCounter[12]++;
            dictDaily["12"] = send2FrontDailyValue[12] / send2FrontDailyCounter[12];
            send2FrontDailyValues[12] = send2FrontDailyValue[12] / send2FrontDailyCounter[12];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "13"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[13] = send2FrontDailyValue[13] + response.data.Items[i].Value;
            send2FrontDailyCounter[13]++;
            dictDaily["13"] = send2FrontDailyValue[13] / send2FrontDailyCounter[13];
            send2FrontDailyValues[13] = send2FrontDailyValue[13] / send2FrontDailyCounter[13];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "14"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[14] = send2FrontDailyValue[14] + response.data.Items[i].Value;
            send2FrontDailyCounter[14]++;
            dictDaily["14"] = send2FrontDailyValue[14] / send2FrontDailyCounter[14];
            send2FrontDailyValues[14] = send2FrontDailyValue[14] / send2FrontDailyCounter[14];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "15"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[15] = send2FrontDailyValue[15] + response.data.Items[i].Value;
					            send2FrontDailyCounter[15]++;
					            dictDaily["15"] = send2FrontDailyValue[15] / send2FrontDailyCounter[15];
					            send2FrontDailyValues[15] = send2FrontDailyValue[15] / send2FrontDailyCounter[15];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "16"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[16] = send2FrontDailyValue[16] + response.data.Items[i].Value;
            send2FrontDailyCounter[16]++;
            dictDaily["16"] = send2FrontDailyValue[16] / send2FrontDailyCounter[16];
            send2FrontDailyValues[16] = send2FrontDailyValue[16] / send2FrontDailyCounter[16];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "17"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[17] = send2FrontDailyValue[17] + response.data.Items[i].Value;
            send2FrontDailyCounter[17]++;
            dictDaily["17"] = send2FrontDailyValue[17] / send2FrontDailyCounter[17];
            send2FrontDailyValues[17] = send2FrontDailyValue[17] / send2FrontDailyCounter[17];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "18"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[18] = send2FrontDailyValue[18] + response.data.Items[i].Value;
            send2FrontDailyCounter[18]++;
            dictDaily["18"] = send2FrontDailyValue[18] / send2FrontDailyCounter[18];
            send2FrontDailyValues[18] = send2FrontDailyValue[18] / send2FrontDailyCounter[18];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "19"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[19] = send2FrontDailyValue[19] + response.data.Items[i].Value;
            send2FrontDailyCounter[19]++;
            dictDaily["19"] = send2FrontDailyValue[19] / send2FrontDailyCounter[19];
            send2FrontDailyValues[19] = send2FrontDailyValue[19] / send2FrontDailyCounter[19];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "20"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[20] = send2FrontDailyValue[20] + response.data.Items[i].Value;
            send2FrontDailyCounter[20]++;
            dictDaily["20"] = send2FrontDailyValue[20] / send2FrontDailyCounter[20];
            send2FrontDailyValues[20] = send2FrontDailyValue[20] / send2FrontDailyCounter[20];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "21"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[21] = send2FrontDailyValue[21] + response.data.Items[i].Value;
					            send2FrontDailyCounter[21]++;
					            dictDaily["21"] = send2FrontDailyValue[21] / send2FrontDailyCounter[21];
					            send2FrontDailyValues[21] = send2FrontDailyValue[21] / send2FrontDailyCounter[21];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "22"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[22] = send2FrontDailyValue[22] + response.data.Items[i].Value;
								send2FrontDailyCounter[22]++;
								dictDaily["22"] = send2FrontDailyValue[22] / send2FrontDailyCounter[22];
								send2FrontDailyValues[22] = send2FrontDailyValue[22] / send2FrontDailyCounter[22];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "23"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[23] = send2FrontDailyValue[23] + response.data.Items[i].Value;
								send2FrontDailyCounter[23]++;
								dictDaily["23"] = send2FrontDailyValue[23] / send2FrontDailyCounter[23];
								send2FrontDailyValues[23] = send2FrontDailyValue[23] / send2FrontDailyCounter[23];
						}
					}
				}
				console.log(send2FrontDailyValue);
				console.log(send2FrontDailyCounter);
				console.log(dictDaily);
				for (var i = 0; i < send2FrontDailyValues.length; i++) {
				 	total += send2FrontDailyValues[i];
				 } 
				 total = total / 24;
				 return total;
			});
		}

		scope.sendValueWeekly = function () {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-10d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic S01UXFBJNERldjpQYXNzd29yZDE=",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",	          
	           			"Content-Type" : "application/json",	           			
	           		}
	            }).then(function (response) {
	  
				console.log(response.data.Items);

				dict4Weekly = [0,0,0,0,0,0,0];
				var dateNow4Week = new Date();
				var y = -1;

				for (var i = 1; i <= 7; i++) {
					y = -1;
					y = y * i;
					dict4Weekly[i] = stringWrite(y);
				}
	
			});
		 }

		testFunc = function(test){
			console.log(test+2);
		}

		scope.sendValueDaily = function () {
			//var data1 = JSON.stringify({ Timestamp: '*', Value: 987 }); 
			//$http.post(baseUrl + '/streams/' + scope.webId + '/value', data1);
			//url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-10&endTime=*'
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-10d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {"Authorization" : "Basic S01UXFBJNERldjpQYXNzd29yZDE=",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",
	           			//"X-Requested-With" : "Origin",
	           			"Content-Type" : "application/json",
	           			//"Access-Control-Allow-Origin" : ""
	           			//'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization',
	           			//"Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
	           			//'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'


	           		}
	            }).then(function (response) {
	            //scope.webId = response.data.WebId;
	            //console.log(baseUrl);
				console.log(response.data.Items);
				scope.DataItems = response.data.Items;

				//stringWrite();
				testFunc(5);

				var d = new Date();
				var newtimeformat = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + "T";

				//console.log(response.data.Items[0]);
				//console.log(response.data.Items[1]);
				//console.log(response.data.Items[2]);
				x = ((d.getDate() - 1).toString());
				console.log(x);
				console.log(typeof(x));


				var beforeformatted;
				var formattedMonth;
				if( (d.getMonth() + 1).toString().length != 2 ){
						beforeformatted = "0";
						formattedMonth = beforeformatted.concat((d.getMonth() + 1).toString());
				}
				else{
					formattedMonth = (d.getMonth() + 1).toString();
				}
				console.log(formattedMonth);


				var formattedDay ;
				if( (d.getDate() - 1).toString().length != 2 ){
						beforeformatted = "0";
						formattedDay = beforeformatted.concat((d.getDate() - 1).toString());
				}
				else{
					formattedDay = (d.getDate() - 1).toString();
				}
				console.log(formattedDay);


				for (var i = 0; i < response.data.Items.length; i++) {


					if((response.data.Items[i].Timestamp.slice(0,4) == (d.getFullYear()).toString()) && (response.data.Items[i].Timestamp.slice(5,7) == formattedMonth) && (response.data.Items[i].Timestamp.slice(8,10) == formattedDay)){

						if (response.data.Items[i].Timestamp.slice(11,13) == "00"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[0] = send2FrontDailyValue[0] + response.data.Items[i].Value;
								send2FrontDailyCounter[0]++;
								dictDaily["00"] = send2FrontDailyValue[0];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "01"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[1] = send2FrontDailyValue[1] + response.data.Items[i].Value;
								send2FrontDailyCounter[1]++;
								dictDaily["01"] = send2FrontDailyValue[1];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "02"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[2] = send2FrontDailyValue[2] + response.data.Items[i].Value;
								send2FrontDailyCounter[2]++;
								dictDaily["02"] = send2FrontDailyValue[2];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "03"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[3] = send2FrontDailyValue[3] + response.data.Items[i].Value;
								send2FrontDailyCounter[3]++;
								dictDaily["03"] = send2FrontDailyValue[3];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "04"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[4] = send2FrontDailyValue[4] + response.data.Items[i].Value;
								send2FrontDailyCounter[4]++;
								dictDaily["04"] = send2FrontDailyValue[4];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "05"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[5] = send2FrontDailyValue[5] + response.data.Items[i].Value;
								send2FrontDailyCounter[5]++;
								dictDaily["05"] = send2FrontDailyValue[5];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "06"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[6] = send2FrontDailyValue[6] + response.data.Items[i].Value;
								send2FrontDailyCounter[6]++;
								dictDaily["06"] = send2FrontDailyValue[6];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "07"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[7] = send2FrontDailyValue[7] + response.data.Items[i].Value;
								send2FrontDailyCounter[7]++;
								dictDaily["07"] = send2FrontDailyValue[7];
						}

						if (response.data.Items[i].Timestamp.slice(11,13) == "08"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[8] = send2FrontDailyValue[8] + response.data.Items[i].Value;
								send2FrontDailyCounter[8]++;
								dictDaily["08"] = send2FrontDailyValue[8];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "09"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[9] = send2FrontDailyValue[9] + response.data.Items[i].Value;
								send2FrontDailyCounter[9]++;
								dictDaily["09"] = send2FrontDailyValue[9];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "10"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[10] = send2FrontDailyValue[10] + response.data.Items[i].Value;
								send2FrontDailyCounter[10]++;
								dictDaily["10"] = send2FrontDailyValue[10];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "11"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[11] = send2FrontDailyValue[11] + response.data.Items[i].Value;
								send2FrontDailyCounter[11]++;
								dictDaily["11"] = send2FrontDailyValue[11];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "12"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[12] = send2FrontDailyValue[12] + response.data.Items[i].Value;
								send2FrontDailyCounter[12]++;
								dictDaily["12"] = send2FrontDailyValue[12];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "13"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[13] = send2FrontDailyValue[13] + response.data.Items[i].Value;
								send2FrontDailyCounter[13]++;
								dictDaily["13"] = send2FrontDailyValue[13];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "14"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[14] = send2FrontDailyValue[14] + response.data.Items[i].Value;
								send2FrontDailyCounter[14]++;
								dictDaily["14"] = send2FrontDailyValue[14];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "15"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[15] = send2FrontDailyValue[15] + response.data.Items[i].Value;
								send2FrontDailyCounter[15]++;
								dictDaily["15"] = send2FrontDailyValue[15];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "16"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[16] = send2FrontDailyValue[16] + response.data.Items[i].Value;
								send2FrontDailyCounter[16]++;
								dictDaily["16"] = send2FrontDailyValue[16];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "17"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[17] = send2FrontDailyValue[17] + response.data.Items[i].Value;
								send2FrontDailyCounter[17]++;
								dictDaily["17"] = send2FrontDailyValue[17];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "18"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[18] = send2FrontDailyValue[18] + response.data.Items[i].Value;
								send2FrontDailyCounter[18]++;
								dictDaily["18"] = send2FrontDailyValue[18];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "19"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[19] = send2FrontDailyValue[19] + response.data.Items[i].Value;
								send2FrontDailyCounter[19]++;
								dictDaily["19"] = send2FrontDailyValue[19];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "20"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[20] = send2FrontDailyValue[20] + response.data.Items[i].Value;
								send2FrontDailyCounter[20]++;
								dictDaily["20"] = send2FrontDailyValue[20];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "21"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[21] = send2FrontDailyValue[21] + response.data.Items[i].Value;
								send2FrontDailyCounter[21]++;
								dictDaily["21"] = send2FrontDailyValue[21];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "22"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[22] = send2FrontDailyValue[22] + response.data.Items[i].Value;
								send2FrontDailyCounter[22]++;
								dictDaily["22"] = send2FrontDailyValue[22];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "23"){
						console.log("as");

						
							if(typeof(response.data.Items[i].Value) == "number")
								//console.log("its a number");
								send2FrontDailyValue[23] = send2FrontDailyValue[23] + response.data.Items[i].Value;
								send2FrontDailyCounter[23]++;
								dictDaily["23"] = send2FrontDailyValue[23];
						}
					}
				}
				console.log(send2FrontDailyValue);
				console.log(send2FrontDailyCounter);
				console.log(dictDaily);
				


				//var abc = response.data.Items[0].Timestamp.slice(14,16);
				//console.log(abc);


				//console.log(response.data.WebId);
				//console.log(baseUrlx);
			});

		 }

		 scope.sendValueMontly = function () {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-10d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic S01UXFBJNERldjpQYXNzd29yZDE=",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",	          
	           			"Content-Type" : "application/json",	           			
	           		}
	            }).then(function (response) {
	  
				console.log(response.data.Items);

				var dateNow = new Date();
				var maxLength4Month = 0;
				var currentMonthMinus;
				var currentYear;
				currentMonthMinus = dateNow.getMonth();
				currentYear = dateNow.getFullYear();

				maxLength4Month = daysInMonth(currentMonthMinus, currentYear);

				for (var i = 1; i <= maxLength4Month; i++) {
					dictMontly4DArray[i - 1] = sendValueDailyEdit(i);
				}
	
			});
		 }

		

		 sendValueDailyEdit = function (exactDay) {
	
			$http({url:baseUrl + '/streams/' + scope.webId + '/recorded?startTime=*-10d',
	           method:'GET',
	           crossDomain: true,
	           dataType: "json",
	           data:{},
	           headers: {
	           			"Authorization" : "Basic S01UXFBJNERldjpQYXNzd29yZDE=",
	           			"Accept" : "application/json", 
	           			"X-Requested-With" : "XMLHttpRequest",	          
	           			"Content-Type" : "application/json",	           			
	           		}
	            }).then(function (response) {

				var d = new Date();
				var newtimeformat = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + "T";

				x = ((d.getDate() - 1).toString());

				var beforeformatted;
				var formattedMonth;
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

				console.log(formattedDay);
				console.log(formattedMonth);

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

				for (var i = 0; i < response.data.Items.length; i++) {


					if((response.data.Items[i].Timestamp.slice(0,4) == (d.getFullYear()).toString()) && (response.data.Items[i].Timestamp.slice(5,7) == formattedMonth) && (response.data.Items[i].Timestamp.slice(8,10) == formattedDay)){

						if (response.data.Items[i].Timestamp.slice(11,13) == "00"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[0] = send2FrontDailyValue[0] + response.data.Items[i].Value;
								send2FrontDailyCounter[0]++;
								dictDaily["00"] = send2FrontDailyValue[0] / send2FrontDailyCounter[0];
								send2FrontDailyValues[0] = send2FrontDailyValue[0] / send2FrontDailyCounter[0];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "01"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[1] = send2FrontDailyValue[1] + response.data.Items[i].Value;
								send2FrontDailyCounter[1]++;
								dictDaily["01"] = send2FrontDailyValue[1] / send2FrontDailyCounter[1];
								send2FrontDailyValues[1] = send2FrontDailyValue[1] / send2FrontDailyCounter[1];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "02"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[2] = send2FrontDailyValue[2] + response.data.Items[i].Value;
								send2FrontDailyCounter[2]++;
								dictDaily["02"] = send2FrontDailyValue[2] / send2FrontDailyCounter[2];
								send2FrontDailyValues[2] = send2FrontDailyValue[2] / send2FrontDailyCounter[2];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "03"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[3] = send2FrontDailyValue[3] + response.data.Items[i].Value;
								send2FrontDailyCounter[3]++;
								dictDaily["03"] = send2FrontDailyValue[3] / send2FrontDailyCounter[3];
								send2FrontDailyValues[3] = send2FrontDailyValue[3] / send2FrontDailyCounter[3];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "04"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[4] = send2FrontDailyValue[4] + response.data.Items[i].Value;
								send2FrontDailyCounter[4]++;
								dictDaily["04"] = send2FrontDailyValue[4] / send2FrontDailyCounter[4];
								send2FrontDailyValues[4] = send2FrontDailyValue[4] / send2FrontDailyCounter[4];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "05"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[5] = send2FrontDailyValue[5] + response.data.Items[i].Value;
								send2FrontDailyCounter[5]++;
								dictDaily["05"] = send2FrontDailyValue[5] / send2FrontDailyCounter[5];
								send2FrontDailyValues[5] = send2FrontDailyValue[5] / send2FrontDailyCounter[5];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "06"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[6] = send2FrontDailyValue[6] + response.data.Items[i].Value;
								send2FrontDailyCounter[6]++;
								dictDaily["06"] = send2FrontDailyValue[6] / send2FrontDailyCounter[6];
								send2FrontDailyValues[6] = send2FrontDailyValue[6] / send2FrontDailyCounter[6];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "07"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[7] = send2FrontDailyValue[7] + response.data.Items[i].Value;
								send2FrontDailyCounter[7]++;
								dictDaily["07"] = send2FrontDailyValue[7] / send2FrontDailyCounter[7];
								send2FrontDailyValues[7] = send2FrontDailyValue[7] / send2FrontDailyCounter[7];
						}

						if (response.data.Items[i].Timestamp.slice(11,13) == "08"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[8] = send2FrontDailyValue[8] + response.data.Items[i].Value;
								send2FrontDailyCounter[8]++;
								dictDaily["08"] = send2FrontDailyValue[8] / send2FrontDailyCounter[8];
								send2FrontDailyValues[8] = send2FrontDailyValue[8] / send2FrontDailyCounter[8];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "09"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[9] = send2FrontDailyValue[9] + response.data.Items[i].Value;
								send2FrontDailyCounter[9]++;
								dictDaily["09"] = send2FrontDailyValue[9] / send2FrontDailyCounter[9];
								send2FrontDailyValues[9] = send2FrontDailyValue[9] / send2FrontDailyCounter[9];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "10"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[10] = send2FrontDailyValue[10] + response.data.Items[i].Value;
								send2FrontDailyCounter[10]++;
								dictDaily["10"] = send2FrontDailyValue[10] / send2FrontDailyCounter[10];
								send2FrontDailyValues[10] = send2FrontDailyValue[10] / send2FrontDailyCounter[10];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "11"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[11] = send2FrontDailyValue[11] + response.data.Items[i].Value;
								send2FrontDailyCounter[11]++;
								dictDaily["11"] = send2FrontDailyValue[11] / send2FrontDailyCounter[11];
								send2FrontDailyValues[11] = send2FrontDailyValue[11] / send2FrontDailyCounter[11];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "12"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[12] = send2FrontDailyValue[12] + response.data.Items[i].Value;
								send2FrontDailyCounter[12]++;
								dictDaily["12"] = send2FrontDailyValue[12] / send2FrontDailyCounter[12];
								send2FrontDailyValues[12] = send2FrontDailyValue[12] / send2FrontDailyCounter[12];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "13"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[13] = send2FrontDailyValue[13] + response.data.Items[i].Value;
								send2FrontDailyCounter[13]++;
								dictDaily["13"] = send2FrontDailyValue[13] / send2FrontDailyCounter[13];
								send2FrontDailyValues[13] = send2FrontDailyValue[13] / send2FrontDailyCounter[13];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "14"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[14] = send2FrontDailyValue[14] + response.data.Items[i].Value;
								send2FrontDailyCounter[14]++;
								dictDaily["14"] = send2FrontDailyValue[14] / send2FrontDailyCounter[14];
								send2FrontDailyValues[14] = send2FrontDailyValue[14] / send2FrontDailyCounter[14];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "15"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[15] = send2FrontDailyValue[15] + response.data.Items[i].Value;
								send2FrontDailyCounter[15]++;
								dictDaily["15"] = send2FrontDailyValue[15] / send2FrontDailyCounter[15];
								send2FrontDailyValues[15] = send2FrontDailyValue[15] / send2FrontDailyCounter[15];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "16"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[16] = send2FrontDailyValue[16] + response.data.Items[i].Value;
								send2FrontDailyCounter[16]++;
								dictDaily["16"] = send2FrontDailyValue[16] / send2FrontDailyCounter[16];
								send2FrontDailyValues[16] = send2FrontDailyValue[16] / send2FrontDailyCounter[16];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "17"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[17] = send2FrontDailyValue[17] + response.data.Items[i].Value;
								send2FrontDailyCounter[17]++;
								dictDaily["17"] = send2FrontDailyValue[17] / send2FrontDailyCounter[17];
								send2FrontDailyValues[17] = send2FrontDailyValue[17] / send2FrontDailyCounter[17];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "18"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[18] = send2FrontDailyValue[18] + response.data.Items[i].Value;
								send2FrontDailyCounter[18]++;
								dictDaily["18"] = send2FrontDailyValue[18] / send2FrontDailyCounter[18];
								send2FrontDailyValues[18] = send2FrontDailyValue[18] / send2FrontDailyCounter[18];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "19"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[19] = send2FrontDailyValue[19] + response.data.Items[i].Value;
								send2FrontDailyCounter[19]++;
								dictDaily["19"] = send2FrontDailyValue[19] / send2FrontDailyCounter[19];
								send2FrontDailyValues[19] = send2FrontDailyValue[19] / send2FrontDailyCounter[19];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "20"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[20] = send2FrontDailyValue[20] + response.data.Items[i].Value;
								send2FrontDailyCounter[20]++;
								dictDaily["20"] = send2FrontDailyValue[20] / send2FrontDailyCounter[20];
								send2FrontDailyValues[20] = send2FrontDailyValue[20] / send2FrontDailyCounter[20];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "21"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[21] = send2FrontDailyValue[21] + response.data.Items[i].Value;
								send2FrontDailyCounter[21]++;
								dictDaily["21"] = send2FrontDailyValue[21] / send2FrontDailyCounter[21];
								send2FrontDailyValues[21] = send2FrontDailyValue[21] / send2FrontDailyCounter[21];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "22"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[22] = send2FrontDailyValue[22] + response.data.Items[i].Value;
								send2FrontDailyCounter[22]++;
								dictDaily["22"] = send2FrontDailyValue[22] / send2FrontDailyCounter[22];
								send2FrontDailyValues[22] = send2FrontDailyValue[22] / send2FrontDailyCounter[22];
						}


						if (response.data.Items[i].Timestamp.slice(11,13) == "23"){
						
							if(typeof(response.data.Items[i].Value) == "number")
								send2FrontDailyValue[23] = send2FrontDailyValue[23] + response.data.Items[i].Value;
								send2FrontDailyCounter[23]++;
								dictDaily["23"] = send2FrontDailyValue[23] / send2FrontDailyCounter[23];
								send2FrontDailyValues[23] = send2FrontDailyValue[23] / send2FrontDailyCounter[23];
						}
					}
				}
				//console.log(send2FrontDailyValue);
				//console.log(send2FrontDailyCounter);
				//console.log(dictDaily);	
				for (var i = 0; i < send2FrontDailyValues.length; i++) {
				 	total += send2FrontDailyValues[i];
				 } 
				 total = total / 24;
				 return total;

			});
		 }
	};

	var definition = { 
		typeName: 'data-entry', 
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