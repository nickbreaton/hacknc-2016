import React from 'react';

export default class Map extends React.Component {
  componentDidMount() {
    window.require([
        "esri/core/urlUtils",
        "esri/Map",
        "esri/views/SceneView",
        "esri/layers/FeatureLayer",
        "esri/renderers/UniqueValueRenderer",
        "esri/symbols/ExtrudeSymbol3DLayer",
        "esri/symbols/PolygonSymbol3D",
        "esri/symbols/SimpleFillSymbol",
        "esri/widgets/Track",
        //"esri/dijit/Directions",
        "dojo/parser",
        "dijit/layout/BorderContainer",
        "dijit/layout/ContentPane",
        "dojo/domReady!"
    ], function(
      urlUtils,
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
        urlUtils.addProxyRule({urlPrefix: "route.arcgis.com", proxyUrl: "/sproxy/"});
        urlUtils.addProxyRule({urlPrefix: "traffic.arcgis.com", proxyUrl: "/sproxy/"});

        var map = new Map({basemap: "dark-gray"});

        var size = 100
        var view = new SceneView({
            container: "viewDiv",
            map: map,
            zoom: 17,
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
                    "fieldName": "Address",
                    "format": {
                        "places": 0,
                        "digitSeparator": true
                    }
                }
            ],
            "title": "Found! {Address} amount of friends here"
        };
        //var citiesRenderer = new UniqueValueRenderer({
        //symbol: symbol
        //});
        var renderer = new UniqueValueRenderer({field: "Address", defaultSymbol: new SimpleFillSymbol()});
        renderer.addUniqueValueInfo("high", new SimpleFillSymbol({color: "red"}));
        renderer.addUniqueValueInfo("mid", new SimpleFillSymbol({color: "green"}));
        renderer.addUniqueValueInfo("low", new SimpleFillSymbol({color: "yellow"}));
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
          refreshInterval: 0.01
        });

        var track = new Track({view: view});
        view.ui.add(track, "top-left");
        // The sample will start tracking your location
        // once the view becomes ready
        view.then(function() {
            // track.start();
        });

        featureLayer.popupTemplate = template;
        map.add(featureLayer);
    });
  }

  render() {
    return <div id="viewDiv" style={{opacity: 0.85}}/>
  }
}
