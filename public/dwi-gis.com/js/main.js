import { initMap, loadCTFPoints } from "./controller.js";

// Jalankan saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
  const map = initMap();
  loadCTFPoints(map);

  console.log("GIS CTF System Loaded using JSCroot Architecture");
});
