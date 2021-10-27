var mymap = L.map('mapid').setView([19.36214, -99.26055], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHJoYXgiLCJhIjoiY2txZWVydWFwMHJvYTJxbnZxZHBuOTBhdiJ9.RoMK-_Sg0HTgI2NtsgqP5w', {
    maxZoom: 19,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var marker = L.marker([19.35914, -99.26055]).addTo(mymap);

marker.bindPopup("<h1>Want to visit us?</h1><p><br>We are located at: <br>Instituto Tecnologico de Estudios Superiores de Monterrey (ITESM) Campus santa fe.<br><br>Avenida Carlos Lazo, Tlacayapa, Álvaro Obregón, Mexico City, 01389, Mexico</p>").openPopup();
