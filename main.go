package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	// Tentukan folder tempat file-file statis berada
	direktori := "./public"

	// Buat file server yang akan melayani file dari folder 'public'
	// http.Dir mengubah string path menjadi tipe yang dikenali oleh http.FileServer
	fileServer := http.FileServer(http.Dir(direktori))

	// Daftarkan handler untuk route '/'.
	// Semua permintaan yang masuk akan ditangani oleh fileServer kita.
	// Go akan secara otomatis mencari file yang sesuai di dalam folder 'public'.
	// Misal: request ke '/' akan mencari 'public/index.html'
	//        request ke '/style.css' akan mencari 'public/style.css'
	http.Handle("/", fileServer)

	// Tentukan port yang akan digunakan
	port := ":80"

	// Tampilkan pesan di konsol bahwa server telah berjalan
	fmt.Printf("Server berjalan di http://localhost%s\n", port)

	// Jalankan server web
	// http.ListenAndServe akan memulai server dan mendengarkan permintaan di port yang ditentukan.
	// Jika terjadi error (misalnya port sudah digunakan), program akan berhenti dan menampilkan error.
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatal("Gagal menjalankan server: ", err)
	}
}
