var map = new nyc.ol.Basemap({target: 'map'});

var pointSource = new ol.source.Vector({
  url: 'data/point.json',
  format: new ol.format.GeoJSON()
});
var polygonSource = new ol.source.Vector({
  url: 'data/polygon.json',
  format: new ol.format.GeoJSON({defaultDataProjection: 'EPSG:4326'})
});
var pointLayer = new ol.layer.Vector({
  source: pointSource,
  style: pointStyle
});
var polygonLayer = new ol.layer.Vector({
  source: polygonSource,
  style: polygonStyle
});

map.addLayer(polygonLayer);
map.addLayer(pointLayer);

map.on('click', mapClickHandler);