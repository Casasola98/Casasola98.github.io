var map = L.map('map').setView([9.9098391, -84.0004016], 14);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext: 'jpg'
}).addTo(map);

function onEachFeature(feature, layer) {
    var popupContent = "";

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.name;
        popupContent += "<br>";
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
}

var McIcon = L.Icon.extend({
    options: {
        iconSize: [38, 38],
        iconAnchor: [19, 40],
        popupAnchor: [-3, -76]
    }
});

var geojson = L.geoJson(puntos, {

    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        var mcDIcon = new McIcon({ iconUrl: feature.properties.image });
        return L.marker(latlng, { icon: mcDIcon });
    }

});


var markers = L.markerClusterGroup();
markers.addLayer(geojson);

map.addLayer(markers);

