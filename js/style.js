function pointStyle(feature, resolution) {
  return new ol.style.Style({
    image: new ol.style.Icon({
      scale: 24 / 40, //desired by actual size
      src: 'img/alert-28x40.svg',
      imgSize: [28, 40],
      anchor: [0.5, 1]
    })
  });
};

function polygonStyle(feature, resolution) {
  return new ol.style.Style({
    fill: new ol.style.Fill({color: 'rgba(255,0,0,0.3)'}),
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 3
    })
  });
};