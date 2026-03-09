/* a. referenceError: user is not defined 
        berarti variable user tidak ditemukan atau tidak didaftarkan.
        lokasi file: app.js, fungsi: getUserData, Baris ke 15 column 10.

   b. TypeError: Cannot read properties of null (reading 'length')
        dimana memiliki pesan "Cannot read properties of null(reading 'length')" yang berarti data tersebut bernilai null atau kosong dan juga tidak bisa mengukur panjnag dari array yang tidak ada.
        lokasi file: data.js, fungsi:processData, baris ke 8 column 15.

    c.SyntaxError:Unxepected token ')'
        dimana ada kelalaian dalam menulis code, jadi ada tanda kurung tutup ")" yang kelebihan atau mungkin salah penempatan.
        lokasi file:script.js, baris ke 5.
    
    d. TypeError: Cannot set properties of undefined (setting 'status')
        berarti dimana contoh saya, mencoba mengubah atau menambahkan properti dengan nama status ke dalm sebuah objek. error terjadi karena objek utamanya contoh "pesanan" bernilai tidak ada isi nya.
        lokasi file: order.js, fungsi: updateOrder, baris ke 18 column 12.

    e. RangeError: Maximum call stack size exceeded
        berarti dimana error ini terus manggil didrinya sendiri tanpa berhenti. akibatnya, tumpukan teori mencapai batas maksimal dan sistem jadinya crash.
        lokasi file: app.js, fungsi: recursiveFunction, baris ke 10 column 3.
*/

