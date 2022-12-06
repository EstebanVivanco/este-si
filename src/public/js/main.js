let map = L.map('map').setView([-34.17083,-70.74444], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marler
let mark = L.marker([-34.17083,-70.74444],{
    draggable: true
}).addTo(map);

mark.on("moveend", function(e) {
   const lat = (e.target._latlng.lat);
   const lng = (e.target._latlng.lng);

   document.getElementById('Coordlat').value = lat;
   document.getElementById('Coordlng').value = lng;
   
   console.log('lat', Coordlat)
   console.log('lng :>> ', Coordlng);

  const type = document.getElementById('typeid').value;

  
console.log('type', type)
   
});



