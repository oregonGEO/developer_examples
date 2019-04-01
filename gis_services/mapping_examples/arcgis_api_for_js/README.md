# ArcGIS API for JavaScript

The Esri [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/guide/get-api/){:target:"_blank"} natively supports adding our GIS layers to a map with the [FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html){:target="_blank"} layer type.

## Example

In this example, we will add the service, [Oregon 500-yr Flood Zones](http://navigator.state.or.us/arcgis/rest/services/Framework/Haz_GeneralMap_WM/MapServer/3){:target="_blank"}, to a web map using the latest version of the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/guide/quick-start/){:target="_blank"}.


To get started, create a file called `index.html`.

```html
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
  <title>500 Year Flood Zones</title>

  <link rel="stylesheet" href="https://js.arcgis.com/4.11/esri/themes/light/main.css" />
  <script src="https://js.arcgis.com/4.11/"></script>

  <style>
    html,
    body,
    #myMap {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
    }
  </style>
</head>

<body>
  <div id="myMap"></div>
  <script src="./main.js"></script>
</body>

</html>
```

In the `index.html` file, we:

1. Include th `CSS` and `JavaScript` files for the ArcGIS API for JavaScript from the cdn `https://js.arcgis.com`.
2. Create the `<div>` with an ID of `myMap` and set it's `height` and `width` to fill up the entire window.
3. Include our own JavaScript file `main.js` -> `<script src="./main.js"></script>`

Next, we need to actually create the `main.js` file for our site.

```js
require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function (Map, MapView, FeatureLayer) {
  var map = new Map({
    basemap: "hybrid"
  });

  var view = new MapView({
    container: "myMap",
    map: map,
    center: [-122.617893,44.851488],
    zoom: 12
  });

  var featureLayer = new FeatureLayer({
    url: "http://navigator.state.or.us/arcgis/rest/services/Framework/Haz_GeneralMap_WM/MapServer/3"
  });

  map.add(featureLayer);
});
```

In the `main.js` file, we:

1. Include the relevant modules (`esri/map`, `esri/views/MapView`, `esri/layers/FeatureLayer`) using the [AMD](https://requirejs.org/docs/whyamd.html){:target="_blank"} format.
2. Instantiate our map and view.
3. Instantiate a new feature layer, providing the url to the 500-yr flood zone service.
4. Add the layer to our map.