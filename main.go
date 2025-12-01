package main

import (
	"fmt"
	"log"
	"net/http"
	"path/filepath"
	"strings"
)

// virtualHostHandler adalah fungsi handler yang akan menangani semua permintaan masuk.
func virtualHostHandler(w http.ResponseWriter, r *http.Request) {
	// 1. Dapatkan nama host dari permintaan (misal: "a.com" atau "b.com:8080")
	// Kita potong bagian portnya jika ada.
	host := strings.Split(r.Host, ":")[0]

	// 2. Bersihkan nama host dari prefix "www."
	// Ini agar "www.a.com" dan "a.com" mengarah ke folder yang sama.
	host = strings.TrimPrefix(host, "www.")

	// 3. Buat path ke direktori yang sesuai.
	// filepath.Join adalah cara yang aman untuk membuat path lintas platform.
	// Jika host adalah "a.com", maka path akan menjadi "./public/a.com"
	direktori := filepath.Join("public", host)

	// 4. Buat file server baru yang spesifik untuk direktori host tersebut.
	fileServer := http.FileServer(http.Dir(direktori))

	// 5. Jalankan file server tersebut untuk menangani permintaan.
	// Kita "meneruskan" permintaan (w dan r) ke file server yang baru dibuat.
	fileServer.ServeHTTP(w, r)
}

func main() {
	// Daftarkan fungsi handler kita untuk semua route "/".
	// Sekarang, semua permintaan akan melalui fungsi virtualHostHandler terlebih dahulu.
	http.HandleFunc("/", virtualHostHandler)

	// Untuk pengujian, kita gunakan port 8080.
	// Port 80 membutuhkan hak akses administrator/root.
	port := ":80"

	fmt.Printf("Server berjalan di http://localhost%s\n", port)
	fmt.Println("Pastikan Anda telah mengatur file /etc/hosts (atau hosts di Windows) untuk menguji virtual host.")
	fmt.Println("Contoh: 127.0.0.1 a.com")

	// Jalankan server web
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatal("Gagal menjalankan server: ", err)
	}
}
