/* a. referenceError: user is not defined 
        berarti varibale user tidak ditemukan atau tidak didaftarkan.
        lokasi file: app.js, fungsi: getUserData, Baris ke 15.

   b. TypeError: Cannot read properties of null (reading 'length')
        dimana memiliki pesan "Cannot read properties of null(reading 'length')" yang berarti data tersbeut bernilai null atau kosong dan juga tidak bisa mengukur panjnag dari array yang tidak ada.
        lokasi file: data.js, fungsi:processData, baris ke 8.

    c.SyntaxError:Unxepected token ')'
        dimana ada kelalaian dalam menulis code, jadi ada tanda kurung tutup ) yang kelebihan atau mungkin salah penempatan.
        lokasi file:script.js, baris ke 5.
    
    d. TypeError: Cannot set properties of undefined (setting 'status')
        berarti dimana contoh saya, mencoba mengubah atau menambahkan properti dengan nama status ke dalm sebuah objek. error terjadi karena objek utamanya contoh "pesanan" bernilai tidak ada isisnya.
        lokasi file: order.js, fungsi: updateOrder, baris ke 18.

    e. RangeError: Maximum call stack size exceeded
        berarti dimana error ini terus manggil didrinya sendiri tanpa berhenti. akibatnya, tumpukan meori mencapai batas maksimal dan sistem jadinya crash.
        lokasi file: app.js, fungsi: recursiveFunction, baris ke 10
*/

