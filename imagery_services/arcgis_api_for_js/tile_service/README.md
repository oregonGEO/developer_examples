# Consuming a Tile Layer Using the ArcGIS API for JavaScript

Tile layers allows you work with a cached [map service](https://enterprise.arcgis.com/en/server/latest/publish-services/windows/what-is-a-map-service.htm){:target="_blank"} exposed by the ArcGIS Server REST API and add it to a Map as a [tile layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html){:target="_blank"}. A cached service accesses tiles from a cache instead of dynamically rendering images. Because they are cached, tiled layers render faster than [MapImageLayers](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html){:target="_blank"}.

## Example

In this example, we will be using the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/){:target="_blank"}.

+ [View Example](https://oregongeo.github.io/developer_examples/imagery_services/arcgis_api_for_js/tile_service/){:target="_blank"}
+ [View Source](https://github.com/oregonGEO/developer_examples/tree/gh-pages/imagery_services/arcgis_api_for_js/tile_service){:target="_blank"}

We will need to create two files to setup our project:

1. `index.html`
2. `main.js`

First, let's create our `index.html` file:

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
  <title>TileLayer</title>

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

1. Include th CSS and JavaScript files for the ArcGIS API for JavaScript from the cdn https://js.arcgis.com.
2. Create the <div> with an ID of `myMap` and set it’s height and width to fill up the entire window.
3. Include our own JavaScript file main.js ->  `<script src="./main.js"></script>`

`main.js`

```js
require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/TileLayer"
], function (Map, MapView, TileLayer) {

  var layer = new TileLayer({
    url: "https://imagery.oregonexplorer.info/arcgis/rest/services/NAIP_2009/NAIP_2009_WM/ImageServer",
  });

  var map = new Map({
    basemap: "gray",
    layers: [layer]
  });

  var view = new MapView({
    container: "myMap",
    map: map,
    center: [-123, 44],
    zoom: 13
  });
});
```

In the `main.js` file, we:

1. Include the relevant modules (esri/map, esri/views/MapView, esri/layers/TileLayer) using the AMD format.
2. Instantiate our map and view.
3. Instantiate a `tile layer`, providing the url to the statewide imagery layer from `2009`.

