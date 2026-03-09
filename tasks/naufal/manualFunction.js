// a. Map

// Membuat fungsi timesByTwo untuk mengkalikan setiap element pada array dengan 2
// fungsi menerima dua argumen dengan parameter arr sebagai data source, dan juga callback sebagai logika perubahan
export const manualMap = (arr, cb) => {
    // melakukan pengecekkan tipe data dari parameter arr, jika bukan array, maka akan muncul error  
    if(!(arr instanceof Array)){
        throw new Error('Input pertama harus bertipekan array')
    }
    if(typeof cb !== 'function'){
        throw new Error('Input kedua harus bertipekan sebuah function')
    }

    // buat sebuah objek array baru dengan panjang sama seperti array arr
    let result = new Array(arr.length)

    // lakukan perulangan dengan for loop untuk mengkalikan setiap element dengan 2
    for (let i = 0; i < arr.length; i++) {
        // lalu result[i] yang mana mulanya adalah 0, akan ditambahkan dengan nilai dari index arr ke i dikalikan dengan 2
        result[i] = cb(arr[i])
    }
    // setelah perulangan berakhir, data dari hasil akhir (result) akan kita keluarkan
    return result
}

