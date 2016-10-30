import React from 'react';

export default class Map extends React.Component {
  componentDidMount() {
    window.require([
        "esri/Map",
        "esri/views/SceneView",
        "esri/layers/FeatureLayer",
        "esri/renderers/UniqueValueRenderer",
        "esri/symbols/ExtrudeSymbol3DLayer",
        "esri/symbols/PolygonSymbol3D",
        "esri/symbols/SimpleFillSymbol",
        "esri/widgets/Track",
        "dojo/parser",
        "dijit/layout/BorderContainer",
        "dijit/layout/ContentPane",
        "dojo/domReady"
    ], function(
      Map,
      SceneView,
      FeatureLayer,
      UniqueValueRenderer,
      ExtrudeSymbol3DLayer,
      PolygonSymbol3D,
      SimpleFillSymbol,
      Track,
      parser
    ) {
      parser.parse();
        //all requests to route.arcgis.com will proxy to the proxyUrl defined in this object.

        var map = new Map({basemap: "dark-gray"});

        var size = 100
        var view = new SceneView({
            container: "viewDiv",
            map: map,
            zoom: 18,
            center: [-79.0458, 35.9095]
        });
        /********************
             * Add feature layer
             ********************/

        var symbol = new PolygonSymbol3D({
            symbolLayers: [new ExtrudeSymbol3DLayer({
                    size: size, // 100,000 meters in height
                    //material: { color: size > 300 ? 'red' : 'blue' }
                })]
        });
        var template = {
            "fieldInfos": [
                {
                    "fieldName": "Name",
                    "format": {
                        "places": 0,
                        "digitSeparator": true
                    }
                },
         "title": "Found! {Address} amount of friends here",		 +        {
             fieldName: "Name",
             visible: true,
             format: {
               places: 0
             }
           }
            ],
            "title": "Found! {Name} are here",
        };
        //var citiesRenderer = new UniqueValueRenderer({
        //symbol: symbol
        //});
        var renderer = new UniqueValueRenderer({field: "Address", defaultSymbol: new SimpleFillSymbol()});
        renderer.addUniqueValueInfo("high", new SimpleFillSymbol({color: "red"}));
        renderer.addUniqueValueInfo("mid", new SimpleFillSymbol({color: "yellow"}));
        renderer.addUniqueValueInfo("low", new SimpleFillSymbol({color: "green"}));
        var renderer2 = new UniqueValueRenderer({
       field: "Name",
       defaultSymbol: new SimpleFillSymbol()
      });
        renderer.visualVariables = [
            {
                type: "opacityInfo",
                field: "Address",
                normalizationField: "SQ_KM",
                // features with 30 ppl/sq km or below are assiged the first opacity value
                stops: [
                    {
                        value: 100,
                        opacity: 0.15
                    }, {
                        value: 1000,
                        opacity: 0.90
                    }
                ]
            }
        ];
        // Carbon storage of trees in Warren Wilson College.
        var featureLayer = new FeatureLayer({
          url: "http://services7.arcgis.com/cS890GsOFd26sODz/arcgis/rest/services/UNCV2/FeatureServer/0",
          renderer: renderer,
          refreshInterval: 0.1
        });

        featureLayer.popupTemplate = template;
        map.add(featureLayer);
    });


  }

  render() {
    return <div id="viewDiv" style={{opacity: 0.85}}/>
  }
}
