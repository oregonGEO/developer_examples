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