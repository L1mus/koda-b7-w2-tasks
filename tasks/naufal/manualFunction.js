// a. Map

// fungsi menerima dua argumen dengan parameter arr sebagai data source, dan juga callback sebagai logika perubahan
export const manualMap = (arr, cb) => {
    console.log("\n---- manual map function ----");
    // melakukan pengecekkan tipe data dari parameter arr, jika bukan array, maka akan muncul error  
    if(!(arr instanceof Array)){
        throw new Error("Input pertama harus bertipekan array");
    }
    // melakukan pengecekkan pada parameter cb, jika bukan function maka akan muncul error
    if(typeof cb !== "function"){
        throw new Error("Input kedua harus bertipekan sebuah function");
    }

    // buat sebuah objek array baru dengan panjang sama seperti array arr
    const result = new Array(arr.length);

    // lakukan perulangan dengan for loop untuk mengiterasi setiap element
    for (let i = 0; i < arr.length; i++) {
        // menjalankan fungsi callback dan akan dimasukkan ke dalam result[i] untuk setiap element yang diiterasi
        result[i] = cb(arr[i]);
    }
    // setelah perulangan berakhir, data dari hasil akhir (result) akan kita keluarkan
    return result;
};

// b. Filter

// fungsi menerima dua argumen dengan parameter arr sebagai data source, dan juga callback sebagai logika pemilter
export const manualFilter = (arr, cb) => {
    console.log("\n---- manual filter function ----");
    // melakukan pengecekkan tipe data dari parameter arr, jika bukan array, maka akan muncul error  
    if(!(arr instanceof Array)){
        throw new Error("Input pertama harus bertipekan array");
    }
    // melakukan pengecekkan pada parameter cb, jika bukan function maka akan muncul error
    if(typeof cb !== "function"){
        throw new Error("Input kedua harus bertipekan sebuah function");
    }

    // membuat array kosong dengan nama result sebagai penampung hasil
    const result = [];

    // membuat variable bernama resultIndex sebagai index dari result, karena nanti menggunakan direct assignment 
    // result[resultIndex] = arr[i], jika kita tidak menggunakan resultIndex, dan hanya menggunakan result[i], 
    // maka jika ada callback yang menghasilkan false, i proses assign tidak berjalan dan i akan ditambah 1,
    // menyebabkan index yang terlewat akan menjadi kosong
    // maka dari itu kita menggunakan resultIndex, jika callback menghasilkan true, baru si resultIndex ditambah dengan 1
     let resultIndex = 0;
    // membuat perulangan for 
    for (let i = 0; i < arr.length; i++) {
        // melakukan pengecekkan, jika callback bernilai true maka akan dijalankan direct asign dari arr[i] ke result[resultIndex]
        // lalu resultIndex ditambah dengan 1
        if(cb(arr[i])){
            result[resultIndex] = arr[i];
            resultIndex++;   
        }
    }
    // setelah perulangan berakhir, data dari hasil akhir (result) akan kita keluarkan
    return result;
};
