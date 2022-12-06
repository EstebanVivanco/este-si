
const lat = document.getElementById('lat').value;
const lng = document.getElementById('lng').value;


console.log('lat', lat)
console.log('lng', lng)

let map = L.map('map').setView([-34.17083,-70.74444], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marler
let marki = L.marker([lat,lng],{
}).addTo(map);