# 🗺️ GIS Capture The Flag (CTF) System

Project ini adalah tugas Semester 5 untuk mata kuliah Sistem Informasi Geografis. Sistem ini dibangun dengan arsitektur Microservices menggunakan 3 repository terpisah yang saling terintegrasi.

## Link Arsitektur Project

| Komponen | Repository GitHub | Keterangan |
| :--- | :--- | :--- |
| **Frontend (Web)** | [dwifirdaus08/pingbox](https://github.com/dwifirdaus08/pingbox) | Berisi kode JS ES6, Peta Leaflet, dan Server Statis VirtualHost. |
| **Backend (API)** | [dwifirdaus08/lemes](https://github.com/dwifirdaus08/lemes) | REST API berbasis Golang untuk menyuplai data titik koordinat (JSON). |
| **DNS Server** | [dwifirdaus08/alodek](https://github.com/dwifirdaus08/alodek) | DNS Resolver untuk routing domain `dwi-gis.com`. |

## Cara Akses (Live Demo)

Jika server (Alodek & Pingbox) sedang berjalan, frontend dapat diakses melalui browser di alamat:

👉 **http://dwi-gis.com**

*(Note: Pastikan DNS Client diarahkan ke IP Server Alodek)*

## Teknologi

1.  **Vanilla JS ES6 Modules** (JSCroot Architecture)
2.  **Golang Backend** (Lemes - Custom API Endpoint `/api/locations`)
3.  **Golang Frontend Server** (Pingbox - Virtual Host `public/dwi-gis.com`)
4.  **Golang DNS** (Alodek - A Record Mapping)

---
*Dibuat oleh: Dwi Firdaus (714230065/3B)*
# PingBox

Logger for Web Service
