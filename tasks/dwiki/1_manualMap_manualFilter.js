export function manualMap(arr, cb){
    if(!Array.isArray(arr)){
        return "Input harus berupa array";
    }
    if(typeof cb !== "function"){
        throw new Error("Input kedua harus bertipekan sebuah function");
    }
    const hasil = [];

    for(let i = 0; i < arr.length; i++){
        hasil[i] = cb(arr[i]);
    }

    return hasil;
}

/*
1. map digunakan untuk mengambil setiap nilai dalam array dan mengembalikan sebuah array baru
2. maka saya menggunakan perulangan for untuk menelusuri setiap elemen dalam array
3. for akan saya lakukan selama indeks kurang dari arr length
4. kemudian saya akan menyimpan nilai arr lama ke array baru, maka array hasil akan memiliki nilai yang sama dengan arr lama
5. jika ingin mengubah hasil dari tiap elemen maka hanya perlu mengganti atau menambahkan para baris hasil[i] = arr[i]
*/


export function manualFilter(arr, cb){
    if(!Array.isArray(arr)){
        return "Input harus berupa array";
    }
    if(typeof cb !== "function"){
        throw new Error("Input kedua harus bertipekan sebuah function");
    }
    const hasil = [];
    let j = 0;

    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            hasil[j] = arr[i];
            j++;
        }
    }

    return hasil;
}



/*
1. filter berfungsi untuk melakukan pengambilan elemen pada array berdasarkan filter atau batasan yang diberikan
2. maka saya membuat sebuah perulangan for yang menelusuri setiap elemen dalam array 
3. di dalam for tersebut saya berikan if untuk filter yang akan diterapkan
4. ketika memenuhi syarat maka akan menambahkan elemen tersebut kedalam sebuah array baru bernama hasil
*/