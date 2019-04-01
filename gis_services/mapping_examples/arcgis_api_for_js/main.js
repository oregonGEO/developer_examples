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
    center: [-123.018723,44.925675],
    zoom: 12
  });

  var featureLayer = new FeatureLayer({
    url: "http://navigator.state.or.us/arcgis/rest/services/Framework/Haz_GeneralMap_WM/MapServer/3"
  });

  map.add(featureLayer);
});