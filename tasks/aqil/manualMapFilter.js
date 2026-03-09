export function manualMap(arr,callback) {
    console.log("==========Manual Map=========="); //menampilkan judul saat fungsi dijalankan
    //validasi : mengecek apakah parameter pertama bertipe array
    if(!Array.isArray(arr)) {
        throw new Error("Input harus bertipe data Array"); // jika bukan array, program akan melempar error
    }
    // validasi: mengecek apakah parameter kedua adalah function
    if(typeof callback !== "function"){
        throw new Error("Input kedua harus bertipekan sebuah function"); // jika bukan function, program akan melempar error
    }
    // membuat array baru dengan panjang yang sama seperti array input
    const hasil = new Array(arr.length); // array akan disimpan di hasil
    // melakukan perulangan untuk mengakses setiap elemen array
    for (let i = 0; i < arr.length; i++) {
        // menjalankan callback pada setiap element, hasil dari callback akan di masukkan ke array hasil pada index yang sama
        hasil[i] = callback(arr[i]);
    }
    // mengembalikkan array hasil transformasi
    return hasil;
}

export function manualFilter(arr, callback) {
    console.log("==========Manual Filter=========="); //menampilkan judul saat fungsi dijalankan
    //validasi : mengecek apakah parameter pertama bertipe array
    if (!Array.isArray(arr)) {
        throw new Error("Parameter pertama harus bertipe Array"); // jika bukan array, program akan melempar error
    }
    // validasi: mengecek apakah parameter kedua adalah function
    if (typeof callback !== "function") {
        throw new Error("Parameter kedua harus berupa function"); // jika bukan function, program akan melempar error
    }
    // membuat array baru dengan panjang yang sama seperti array input
    const temp = new Array(arr.length);
    // Variabel untuk menyimpan posisi index pada array hasil
    let index = 0;
    // Melakukan perulangan untuk memeriksa setiap elemen array
    for (let i = 0; i < arr.length; i++) {
        // menjalankan callback, Jika callback mengembalikan true maka elemen disimpan
        if (callback(arr[i], i, arr)) {
            temp[index] = arr[i]; // Menyimpan elemen ke array sementara
            index++;
        }
    }
    // Membuat array baru dengan ukuran sesuai jumlah elemen yang lolos filter
    const result = new Array(index);
    // Menyalin elemen dari array sementara ke array hasil akhir
    for (let i = 0; i < index; i++) {
        result[i] = temp[i];
    }
    // mengemabalikan array hasil filter
    return result;
}