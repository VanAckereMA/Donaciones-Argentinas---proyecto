var map = L.map('map').setView([-34.61315, -58.37723], 13);

/*L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.streetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);*/



googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    attribution: '© DonArg',
    subdomains:['mt0','mt1','mt2','mt3']
});

googleStreets.addTo(map);


document.getElementById('select-location').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords, 18);
    L.marker(coords).addTo(map);
});
   