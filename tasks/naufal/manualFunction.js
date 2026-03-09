// a. Map

const arr = [1,2,3,4,]
// Membuat fungsi timesByTwo untuk mengkalikan setiap element pada array dengan 2
// fungsi menerima argumen dengan parameter arr
export const timesByTwo = (arr) => {
    // melakukan pengecekkan tipe data dari parameter arr, jika bukan array, maka akan muncul error  
    if(!(arr instanceof Array)){
        throw new Error('Input harus bertipekan array')
    }

    // buat sebuah array kosong untuk menampung hasil akhir
    let result = []

    // lakukan perulangan dengan for loop untuk mengkalikan setiap element dengan 2
    for (let i = 0; i < arr.length; i++) {
        // lakukan pengecekkan setiap index pada result, dikarenakan result length nya kosong, akan menimbulkan undefined
        // jika result[i] == undefined
        // maka setiap index akan kita inisialisasi dengan 0, agar ketika proses menambahkan tidak menghasilkan NaN
        if(result[i] == undefined){
            result[i] = 0
        }

        // lalu result[i] yang mana mulanya adalah 0, akan ditambahkan dengan nilai dari index arr ke i dikalikan dengan 2
        result[i] += arr[i] * 2
    }

    // setelah perulangan berakhir, data dari hasil akhir (result) akan kita keluarkan
    return result
}
