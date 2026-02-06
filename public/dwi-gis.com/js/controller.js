import { mapCenter, mapZoom, backendURL } from "./config.js";
import { popupContent } from "./template.js";
// Import library jscroot (contoh penggunaan modul api)
import { get } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.6/croot.js";

export function initMap() {
  // Inisialisasi Peta Leaflet
  const map = L.map("map").setView(mapCenter, mapZoom);

  // Tambahkan Tile Layer (OpenStreetMap)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  return map;
}

export function loadCTFPoints(map) {
  // Menggunakan fetch native atau jscroot 'get'
  // Disini kita pakai fetch native ES6 agar kompatibel penuh
  fetch(backendURL)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data CTF:", data);

      data.forEach((ctf) => {
        // Membuat Marker
        const marker = L.marker([ctf.lat, ctf.lng]).addTo(map);

        // Menambahkan Popup
        marker.bindPopup(popupContent(ctf.nama, ctf.keterangan, ctf.poin));
      });
    })
    .catch((error) => console.error("Gagal load data:", error));
}
