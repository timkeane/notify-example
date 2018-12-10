function extend(extent, features) {
  for (var i = 0; i < features.length; i++) {
    var geom = features[i].getGeometry();
    ol.extent.extend(extent, geom.getExtent());
  }
};

function getExtent(points, polygons) {
  var extent = ol.extent.createEmpty();
  extend(extent, points);
  extend(extent, polygons);
  return ol.extent.buffer(extent, 0 /*meters*/);
};

var interval = setInterval(function() {
  var points = pointSource.getFeatures();
  var polygons = polygonSource.getFeatures();
  if (points.length > 0 && polygons.length > 0) {
    map.getView().fit(
      getExtent(points, polygons),
      {
        size: map.getSize(),
        duration: 1000
      }
    );
    clearInterval(interval);
  }
}, 200);