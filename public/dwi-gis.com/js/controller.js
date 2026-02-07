import { mapCenter, mapZoom, backendURL } from "./config.js";
import { popupContent } from "./template.js";

export function initMap() {
  // Inisialisasi Peta
  const map = L.map("map", {
    zoomControl: false 
  }).setView(mapCenter, mapZoom);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  L.control.zoom({
    position: 'bottomright'
  }).addTo(map);

  map.on('mousemove', function(e) {
    const coordBox = document.getElementById('coordinate-display');
    if(coordBox) {
        coordBox.innerText = `LAT: ${e.latlng.lat.toFixed(4)} | LNG: ${e.latlng.lng.toFixed(4)}`;
    }
  });

  return map;
}

export function loadCTFPoints(map) {
  fetch(backendURL)
    .then((response) => response.json())
    .then((data) => {
      if (!data || data.length === 0) return;

      data.forEach((ctf) => {
       
        const marker = L.circleMarker([ctf.lat, ctf.lng], {
            color: '#00ff41',       // Garis Hijau Neon
            fillColor: '#00ff41',   // Isi Hijau
            fillOpacity: 0.2,       // Transparan
            radius: 8               // Ukuran
        }).addTo(map);

        // Efek 'Pulse' sederhana dengan menambahkan marker kedua yang lebih besar
        L.circleMarker([ctf.lat, ctf.lng], {
            color: '#00ff41',
            fill: false,
            radius: 15,
            weight: 1,
            opacity: 0.3
        }).addTo(map);

        marker.bindPopup(popupContent(ctf.name, ctf.description, ctf.score));
      });
    })
    .catch((error) => console.error("Error loading CTF data:", error));
}