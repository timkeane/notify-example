function mapClickHandler(event) {
  map.forEachFeatureAtPixel(event.pixel, function(feature, layer) {
    console.info('feature:', feature.getProperties());
  });
};