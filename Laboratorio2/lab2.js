var map = L.map('map').setView([9.9098391, -84.0004016], 15);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(9.9095817, -83.9848582),
        L.latLng(9.9082876, -83.9849440),
        L.latLng(9.9085309, -83.9869949),
        L.latLng(9.9090369, -83.9950979),
        L.latLng(9.9098391, -84.0004016),
        L.latLng(9.9087741, -84.0044765),
        L.latLng(9.9109301, -84.0132736),
        L.latLng(9.9116193, -84.0175325)
    ],
    routeWhileDragging: true,
    collapsible: true
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
        iconSize:     [38, 38],
        iconAnchor:   [19, 40],
        popupAnchor:  [-3, -76]
    }
});

L.geoJSON(puntos, {

    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        var mcDIcon = new McIcon({iconUrl: feature.properties.image});
        return L.marker(latlng, {icon: mcDIcon});
    }
}).addTo(map);