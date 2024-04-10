/***************************************************************************
   Copyright 2017 OSIsoft, LLC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 ***************************************************************************/

//************************************
// Begin defining a new symbol
//************************************
(function (CS) {
	'use strict';
	// Specify the symbol definition	
	var myCustomSymbolDefinition = {
		// Specify the unique name for this symbol; this instructs PI Coresight to also
		// look for HTML template and config template files called sym-<typeName>-template.html and sym-<typeName>-config.html
		typeName: 'imageurl',
		// Specify the user-friendly name of the symbol that will appear in PI Coresight
		displayName: 'ImageURL',
		// Specify the number of data sources for this symbol
		datasourceBehavior: CS.Extensibility.Enums.DatasourceBehaviors.Single,
		// Specify the location of an image file to use as the icon for this symbol
		iconUrl: '/Scripts/app/editor/symbols/ext/Icons/imageurl.png',
		visObjectType: symbolVis,
		// Specify default configuration for this symbol
		getDefaultConfig: function () {
			return {
				// Specify the data shape type (for symbols that update with new data)
				DataShape: 'Value',
				// Specify the default height and width of this symbol
				Height: 600,
				Width: 300,
				// Specify the value of custom configuration options; see the "configure" section below
				prefixURL: "",
				enablePrefixURL: false,
				noDataURL: "http://www.osisoft.com/images/osi-logo.png"
			};
		},
		// By including this, you're specifying that you want to allow configuration options for this symbol
		 configOptions: function () {
            return [{
				// Add a title that will appear when the user right-clicks a symbol
				title: 'Format Symbol',
				// Supply a unique name for this cofiguration setting, so it can be reused, if needed
                mode: 'format'
            }];
        },
		// Include variables that will be used in the custom configuration pane.
		// Define a keyword and the value of that keyword for each variable.
		// You'll specify the value for these in the getDefaultConfig section
		// by referencing these variables by the value of their keyword
		// 
		configure: {
			prefixURLKeyword: 'prefixURL',
			enablePrefixURLKeyword: 'enablePrefixURL',
			noDataURLKeyword: 'noDataURL'
		},
		// Specify the name of the function that will be called to initialize the symbol
		//init: myCustomSymbolInitFunction
	};
	
	//************************************
	// Function called to initialize the symbol
	//************************************
	//function myCustomSymbolInitFunction(scope, elem) {
	function symbolVis() { }
    CS.deriveVisualizationFromBase(symbolVis);
	symbolVis.prototype.init = function(scope, elem) {
		// Specify which function to call when a data update or configuration change occurs 	
		this.onDataUpdate = myCustomDataUpdateFunction;		
		this.onConfigChange = myCustomConfigurationChangeFunction;
		
		// Locate the html div that will contain the symbol, using its id, which is "container" by default
		var symbolContainerElement = elem.find('#container')[0];
        // Use random functions to generate a new unique id for this symbol, to make it unique among all other custom symbols
		var newUniqueIDString = "myCustomSymbol_" + Math.random().toString(36).substr(2, 16);
		// Write that new unique ID back to overwrite the old id
        symbolContainerElement.id = newUniqueIDString;
		// Create a variable to hold the custom visualization object
		var customVisualizationObject;
		// Create a timer variable to be used for refreshes
		if(!customVisualizationObject) {
			customVisualizationObject = true;
			// Set the source of the iframe
			myUpdateIFrameURLFunction();
		}
		
		function myCustomDataUpdateFunction(data) {
			if (data) {
                scope.value = data.Value;
                scope.time = data.Time;
                if(data.Label) {
                    scope.label = data.Label;
				}	
				myUpdateIFrameURLFunction();
			}
		}
		
		//************************************
		// Function that is called when custom configuration changes are made
		//************************************
		function myCustomConfigurationChangeFunction() {
			// If the chart exists...
			if(customVisualizationObject) {
				console.log("Now updating visualization with new configuration...");
				// Update the iFrame to the new desired URL
				myUpdateIFrameURLFunction();
			}
		}
		//************************************
		// Function that is called to refresh the iframe
		//************************************
		function myUpdateIFrameURLFunction() {
			console.log((new Date) + " : Refreshing iFrame...");
			// Refresh the iFrame 
			if (scope.value != "No Data") {
				if (scope.config.enablePrefixURL) {
					symbolContainerElement.src = scope.config.prefixURL + scope.value;
				} else {
					symbolContainerElement.src = scope.value;
				}
			} else {
				symbolContainerElement.src = scope.config.noDataURL;
			}
		}
		
	}
	// Register this custom symbol definition with PI Coresight
	CS.symbolCatalog.register(myCustomSymbolDefinition);
	
	})(window.Coresight);
