cursor1 = L.circleMarker([0, 0], { radius: 25, fillOpacity: 0.1, color: '#FFF48D', fillColor: '#FFFFFF' });
cursor1.addTo(map1);
cursor2 = L.circleMarker([0, 0], { radius: 25, fillOpacity: 0.1, color: '#FFF48D', fillColor: '#FFFFFF' });
cursor2.addTo(map2);

map1.on('mousemove', function (e) {
    cursor1.setLatLng(e.latlng);
    cursor2.setLatLng(e.latlng);
});
map2.on('mousemove', function (e) {
    cursor1.setLatLng(e.latlng);
    cursor2.setLatLng(e.latlng);
});