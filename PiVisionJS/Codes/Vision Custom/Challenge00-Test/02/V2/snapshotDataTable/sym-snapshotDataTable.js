/***************************************************************************
   Copyright 2016 OSIsoft, LLC.

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
	//'use strict';
	// Specify the symbol definition	
	var myCustomSymbolDefinition = {
		// Specify the unique name for this symbol; this instructs PI Coresight to also
		// look for HTML template and config template files called sym-<typeName>-template.html and sym-<typeName>-config.html
		typeName: 'snapshotDataTable',
		// Specify the user-friendly name of the symbol that will appear in PI Coresight
		displayName: 'Snapshot Data Table',
		// Specify the number of data sources for this symbol; just a single data source or multiple
		datasourceBehavior: CS.Extensibility.Enums.DatasourceBehaviors.Multiple,
		// Specify the location of an image file to use as the icon for this symbol
		iconUrl: '/Scripts/app/editor/symbols/ext/Icons/snapshotDataTable.png',
		visObjectType: symbolVis,
		// Specify default configuration for this symbol
		getDefaultConfig: function () {
			return {
				//
				DataShape: 'Table',
				//DataQueryMode:  CS.Extensibility.Enums.DataQueryMode.ModeEvents,
				// Specify the default height and width of this symbol
				Height: 250,
				Width: 500,
				// Specify the value of custom configuration options; see the "configure" section below
				textColor: "#cc4748",
				labelColor: "white",
				labelBackgroundColor: "gray",
				backgroundColor: "black",
				borderColor: "white",
				fontSize: 11,
				scrolling: "hidden"
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
        }
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
		var symbolContainerDiv = elem.find('#container')[0];
        // Use random functions to generate a new unique id for this symbol, to make it unique among all other custom symbols
		var newUniqueIDString = "myCustomSymbol_" + Math.random().toString(36).substr(2, 16);
		// Write that new unique ID back to overwrite the old id
        symbolContainerDiv.id = newUniqueIDString;
		// Create a variable to hold the custom visualization object
		var customVisualizationObject;
		// Create vars to hold the labels and units
		var dataItemLabelArray = [];
		var dataItemUnitsArray = [];
		//************************************
		// When a data update occurs...
		//************************************
		function myCustomDataUpdateFunction(data) {
			// If there is indeed new data in the update
			//console.log("Data object: ",data);
			if(data) {
				// If the custom visualization hasn't been made yet... create the custom visualization!
				// Custom code begins here:
				// --------------------------------------------------------------------------------------------------
				//console.log("Now creating custom visualization...");
				// Clear the table
				if(customVisualizationObject) {
					$('#' + symbolContainerDiv.id + ' tbody').remove();
				}
				customVisualizationObject = true;
				// Define styling variables	
				var rowStyling = "width: 100%;border: 1px solid " + scope.config.borderColor + ";font-size: " + scope.config.fontSize + "px";
				var labelStyling = "padding:10px;vertical-align: middle;background-color: " + scope.config.labelBackgroundColor + ";color: " + scope.config.labelColor;
				var cellStyling  = "padding:10px;vertical-align: middle;background-color: " + scope.config.backgroundColor + ";padding-left:10px;padding-right:10px;border: 1px solid " + scope.config.borderColor + ";color: " + scope.config.textColor;
				// Add the data item names
				var newRow = symbolContainerDiv.insertRow(0);
				newRow.style = rowStyling;
				var labelCell = newRow.insertCell(-1);
				labelCell.innerHTML = "Data Item";
				labelCell.style = labelStyling;
				for (var i = 0; i < data.Rows.length; i++) {
					var newCell = newRow.insertCell(-1);
					// Check if the label exists; if it does, add it to the global array
					if (data.Rows[i].Label) {
						dataItemLabelArray[i] = data.Rows[i].Label;
					}
					newCell.innerHTML = dataItemLabelArray[i];
					// Apply padding and the specified color for this column
					newCell.style = cellStyling;
				}
				// Add the data item values
				var newRow = symbolContainerDiv.insertRow(1);
				newRow.style = rowStyling;
				var labelCell = newRow.insertCell(-1);
				labelCell.innerHTML = "Value";
				labelCell.style = labelStyling;
				for (var i = 0; i < data.Rows.length; i++) {
					var newCell = newRow.insertCell(-1);
					// Check if the units exists; if it does, add it to the global array
					if (!dataItemUnitsArray[i]) {
						dataItemUnitsArray[i] = "";
					}
					if (data.Rows[i].Units) {
						dataItemUnitsArray[i] = data.Rows[i].Units;
					} 
					newCell.innerHTML = data.Rows[i].Value + " " + dataItemUnitsArray[i];
					// Apply padding and the specified color for this column
					newCell.style = cellStyling;
				}

				// Add the data item timestamps
				var newRow = symbolContainerDiv.insertRow(2);
				newRow.style = rowStyling;
				var labelCell = newRow.insertCell(-1);
				labelCell.innerHTML = "Timestamp";
				labelCell.style = labelStyling;
				for (var i = 0; i < data.Rows.length; i++) {
					var newCell = newRow.insertCell(-1);
					newCell.innerHTML = data.Rows[i].Time;
					// Apply padding and the specified color for this column
					newCell.style = cellStyling;
				}				
			}
		}

		//************************************
		// Function that is called when custom configuration changes are made
		//************************************
		function myCustomConfigurationChangeFunction(data) {
			// All configuration changes for this symbol are set up to take effect
			// automatically every data update, so there's no need for specific config change code here
		}
		// Specify which function to call when a data update or configuration change occurs 
		//return { dataUpdate: myCustomDataUpdateFunction, configChange:myCustomConfigurationChangeFunction };		
	}
	// Register this custom symbol definition with PI Coresight
	CS.symbolCatalog.register(myCustomSymbolDefinition);
	
})(window.Coresight);