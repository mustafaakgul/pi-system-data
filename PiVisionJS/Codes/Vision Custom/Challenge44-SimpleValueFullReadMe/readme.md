Simple Value Symbol
In this section, you will be creating a simple value symbol, much like the current PI Coresight value symbol. This will show the basics of creating a new custom symbol and will not rely on any of the existing value symbol code.

Create a new file called sym-simplevalue.js in your PI Coresight installation folder, INSTALLATION_FOLDER\Scripts\app\editor\symbols\ext. If the ext folder does not exist, create it.

Add the following code to the file, this will initialize the structure used for creating custom symbols. This creates an IIFE, immediately invoked functional expression, which is a JavaScript function that runs as soon as it is defined. It takes in a PI Coresight object that will be used for symbol registration.

(function (CS) {
})(window.Coresight);
The first step is to create our visualization object which will be built on later. In this step, you are creating a function as a container for your symbol. The function will be extended via PI Coresight helper functions to add some default behaviors.

(function (CS) {

    function symbolVis() { }
    CS.deriveVisualizationFromBase(symbolVis);

})(window.Coresight);
Next by creating the symbol definition Object that will be used to register the symbol with PI Coresight. Here we use the PI Coresight object passed in to gain access to the symbol catalog. We are starting with passing in the visualization object type, visObjectType, which is the function acting as the container object for the symbol. The symbol catalog is the object we use for registering and holding all Coresight symbols. We are creating an empty object and passing that into the register function. Since this is in an IIFE, as soon as the browser executes it, it will run the registration code.

(function (CS) {
    function symbolVis() { }
    CS.deriveVisualizationFromBase(symbolVis);

    var definition = {
        visObjectType: symbolVis
    };
    CS.symbolCatalog.register(definition);

})(window.Coresight);
Let's start by building out the required parts of the new symbol. The typeName is the internal name that PI Coresight will use to register this symbol. It must be unique among all PI Coresight symbols. datasourceBehavior is used to specify the number of search results that can be used to create this symbol. The options are None, Single, Multiple. None is used for static, i.e. not data driven symbols. Single is used for a symbol that is based on one PI tag or attribute. Multiple is used for a symbol that is based on multiple PI tags, attributes or elements.

(function (CS) {
    function symbolVis() { }
    CS.deriveVisualizationFromBase(symbolVis);

    var definition = {
        typeName: 'simplevalue',
        datasourceBehavior: CS.Extensibility.Enums.DatasourceBehaviors.Single,
        visObjectType: symbolVis
    };
    CS.symbolCatalog.register(definition);
})(window.Coresight);
Next, let's begin filling in some details about the type of data will be using. Here we have added the getDefaultConfig property to the definition object. The getDefaultConfig function is used to specify the collection of parameters that should be serialized to the backend database, it returns a JavaScript object. Here we are adding the DataShape property to the object returned by getDefaultConfig. This property is used to tell the application server the information that this symbol needs to represent the data. In this case, we will be creating a value symbol. We also add the default Height and Width properties.

(function (CS) {
    function symbolVis() { }
    CS.deriveVisualizationFromBase(symbolVis);

    var definition = {
        typeName: 'simplevalue',
        datasourceBehavior: CS.Extensibility.Enums.DatasourceBehaviors.Single,
        visObjectType: symbolVis,
        getDefaultConfig: function() {
            return {
                DataShape: 'Value',
                Height: 150,
                Width: 150
            };
        }
    };
    CS.symbolCatalog.register(definition);
})(window.Coresight);
Next, let's set up the symbol initialization code. This is done on the prototype of the function being used as the symbol container, e.g. symbolVis.

(function (CS) {
    function symbolVis() { }
    CS.deriveVisualizationFromBase(symbolVis);

    symbolVis.prototype.init = function () {
    };

    var definition = {
        typeName: 'simplevalue',
        datasourceBehavior: CS.Extensibility.Enums.DatasourceBehaviors.Single,
        visObjectType: symbolVis,
        getDefaultConfig: function() {
            return {
                DataShape: 'Value',
                Height: 150,
                Width: 150
            };
        }
    };

    CS.symbolCatalog.register(definition);
})(window.Coresight);
Before going any further with implementation, let's get the initial presentation layer done. First, we will create an HTML file in the same directory as our JavaScript file and name it sym-simplevalue-template.html. The naming convention here is sym-SYMBOL_TYPE_NAME-template.html. This is the default name that the symbol framework will look for if the template is not specified in the symbol definition. Add the following to the HTML file. This is just placeholder text until we write the actual presentation layer code.

<div style="background: red">
    <div>Simple Value</div>
</div>
At this point, in order for the new symbol to be served up by the PI Coresight web server, you must perform an IIS reset.

Launch PI Coresight and this time perform a search for a data item, such as sinusoid.

Select the simplevalue symbol icon from the symbol selector menu and drag the data item to the display. The symbol can now be selected, moved, and is completely integrated into undo stack.

Now that the infrastructure is in place, it is time to have the symbol do something. For this we will have to expand out the init function. We will add a parameter to the function, scope. Scope is an object borrowed from AngularJS 1 that allows the implementation and the presentation to communicate with each other. The init funciton will also have a function inside it to handle when the symbol receives new data and that function will be added onto the prototype as this.onDataUpdate, to let the PI Coresight infrastructure know how to communicate with the symbol.

symbolVis.prototype.init = function (scope) {
    this.onDataUpdate = dataUpdate;

    function dataUpdate(data) {

    }
};
The code above tells the PI Coresight infrastructure to call the dataUpdate function every time a data update occurs. We now need to do something with the data provided to our dataUpdate function.

Using the code below, we add some variables to our scope, value, time, and label. Adding these variables to the scope will make them available in the presentation HTML. For completeness, we are verifying that the data passed into onUpdate is defined as well as checking that the Label is defined. Some properties of a data item change infrequently, such as the data item name or its unit of measure. To reduce the response size and improve performance, these metadata fields are returned on the first request and only periodically afterward.

symbolVis.prototype.init = function (scope) {
    this.onDataUpdate = dataUpdate;

    function dataUpdate(data) {
        if(data) {
            scope.value = data.Value;
            scope.time = data.Time;
            if(data.Label) {
                scope.label = data.Label;
            }
        }
    }
};
Now to update the presentation HTML file to show these values. In the HTML, we are using AngularJS style binding notation, {{}}, to link fields in the HTML that should be updated based on properties added to the scope. We are also adding a bit of color to the div for the background and text color.

<div style="background: orange; color: black">
    <div>{{label}}</div>
    <div>{{value}}</div>
    <div>{{time}}</div>
</div>
Retry again in PI Coresight by adding the new symbol.

While this is very nice, it would be much better if the user of the symbol could configure the colors shown here. To do this, we need to add symbol configuration to the symbol definition. To do this, we will add a configTitle to the definition object. This is used to create a context menu for the symbol that will have an entry titled 'Format Symbol'.

var definition = {
    typeName: 'simplevalue',
    datasourceBehavior: CS.Extensibility.Enums.DatasourceBehaviors.Single,
    visObjectType: symbolVis,
    getDefaultConfig: function() {
	    return {
	        DataShape: 'Value',
	        Height: 150,
            Width: 150
        };
    },
    configTitle: 'Format Symbol'
};
Next we need to add the default values for the options we wish to configure. This is done in getDefaultConfig. Here we are adding both a BackgroundColor and TextColor to the object returned by getDefaultConfig.

var definition = {
    typeName: 'simplevalue',
    datasourceBehavior: CS.Extensibility.Enums.DatasourceBehaviors.Single,
    visObjectType: symbolVis,
    getDefaultConfig: function() {
	    return {
	        DataShape: 'Value',
	        Height: 150,
            Width: 150,
            BackgroundColor: 'rgb(255,0,0)',
            TextColor: 'rgb(0,255,0)'
        };
    },
    configTitle: 'Format Symbol'
};
Now that we have it defined in the implementation, we need to create the configuration HTML file. Create a file named sym-simplevalue-config.html in the same directory as the implementation and presentation files. The naming convention here is sym-SYMBOL_TYPE_NAME-config.html. This is the default name that the symbol framework will look for if the configuration template is not specified in the symbol definition. Like the presentation layer, the configuration layer is basic HTML. In the example below, we define two sections, Text Color and Background Color, and add a color picker custom control, cs-color-picker, under each section. cs-color-picker is an AngularJS directive to add the ability to use the PI Coresight color picker to a custom symbol. cs-color-picker has two custom attributes that are used to link it back to the underlying symbol, property and config. property points to a property on the passed in config object. config is the config object of the symbol.

<div class="c-side-pane t-toolbar">
    <span style="color:#fff; margin-left:15px">Text Color</span>
</div>
<div class="config-option-format">
    <cs-color-picker id="textcolor" ng-model="config.TextColor"></cs-color-picker>
</div>
<div class="c-side-pane t-toolbar">
    <span style="color:#fff; margin-left:15px">Background Color</span>
</div>
<div class="config-option-format">
    <cs-color-picker id="backgroundcolor" ng-model="config.BackgroundColor"></cs-color-picker>
</div>
Now by launching PI Coresight, you will see you can right click on the symbol to configure it. When the configuration pane opens, the two color pickers defined in the config HTML are listed, but they have no effect on the symbol.

To hook up the color pickers to the presentation, we must modify the presentation layer to use those variables that were previously defined on the symbol's scope. Here we are changing the div's style to an AngularJS helper, ng-style. This allows us to use data binding to hook up the variables set on the config object to the symbol's presentation.

<div ng-style="{background: config.BackgroundColor, color: config.TextColor}">
    <div>{{label}}</div>
    <div>{{value}}</div>
    <div>{{time}}</div>
</div>
The last thing we want to do with our symbol, with respect to symbol configuration, is to turn on or off individual parts, such as the label and time. To do this, we will first update the getDefaultConfig function to contain the Booleans for showing and hiding the label and time. By default, we will show the label, but not the time.

getDefaultConfig: function() {
    return {
        DataShape: 'Value',
        Height: 150,
        Width: 150,
        BackgroundColor: 'rgb(255,0,0)',
        TextColor: 'rgb(0,255,0)',
        ShowLabel: true,
        ShowTime: false
    };
},
Next we will update the presentation to honor these settings. This is done using another AngularJS directive, ng-show. ng-show will show the element, in this case a div, if the value it is bound to is true. Otherwise, it will hide the element.

<div ng-style="{background: config.BackgroundColor, color: config.TextColor}">
    <div ng-show="config.ShowLabel">{{label}}</div>
    <div>{{value}}</div>
    <div ng-show="config.ShowTime">{{time}}</div>
</div>
Finally, we will update the configuration to support these options. Here we have added another section, Show Options, that contains two HTML checkboxes with labels. These checkboxes are bound to the show and hide properties above using the AngularJS directive ng-model.

<div class="c-side-pane t-toolbar">
    <span style="color:#fff; margin-left:15px">Text Color</span>
</div>
<div class="config-option-format">
    <cs-color-picker id="textcolor" ng-model="config.TextColor"></cs-color-picker>
</div>
<div class="c-side-pane t-toolbar">
    <span style="color:#fff; margin-left:15px">Background Color</span>
</div>
<div class="config-option-format">
    <cs-color-picker id="backgroundcolor" ng-model="config.BackgroundColor"></cs-color-picker>
</div>
<div class="c-side-pane t-toolbar">
    <span style="color:#fff; margin-left:15px">Show Options</span>
</div>
<div class="c-config-content">Show Label:
    <input type="checkbox" ng-model="config.ShowLabel">
</div>
<div class="c-config-content">Show Time:
    <input type="checkbox" ng-model="config.ShowTime">
</div>
Now that basic value symbol is complete, let's move on to allowing the user to make it configured with a multistate. To do this, we must add the StateVariables to the symbol's definition object. StateVariables is an array of strings. The variable listed will be added to the symbol’s scope and available for data binding in HTML.

var definition = {
    typeName: 'simplevalue',
    datasourceBehavior: CS.Extensibility.Enums.DatasourceBehaviors.Single,
    visObjectType: symbolVis,
    getDefaultConfig: function() {
	    return {
	        DataShape: 'Value',
	        Height: 150,
            Width: 150,
            BackgroundColor: 'rgb(255,0,0)',
            TextColor: 'rgb(0,255,0)',
            ShowLabel: true,
            ShowTime: false
        };
    },
    configTitle: 'Format Symbol',
    StateVariables: [ 'MultistateColor' ]
};
Now by launching PI Coresight, you will see when right click on the symbol, you get a context menu with the option to add the multistate. After selecting this option, the multistate configuration pane will open and the symbol will be use it's configured data point as it's multistate data point as well.

Now it is time to make the multistate affect the symbol. We will have the multistate control the color of the text displayed. To do this, we will edit the symbol's template HTML, sym-simplevalue-template.html. The name used in the StateVariables section of the symbol definition needs to be used in the symbol template, but does not need to be MultistateColor. Here we are telling the binding system that that color used for the symbol should be MultistateColor if it is defined, i.e. this symbol was configured with a multistate, or use the configured TextColor if MultistateColor is not defined.

<div ng-style="{background: config.BackgroundColor, color: MultistateColor || config.TextColor}">
	<div ng-show="config.ShowLabel">{{label}}</div>
	<div>{{value}}</div>
	<div ng-show="config.ShowTime">{{time}}</div>
</div>