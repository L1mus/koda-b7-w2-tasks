export const manualMap = (array, callback, thisValue = undefined) => {
  if (!Array.isArray(array)) throw new Error("Value must be Array"); // melakukan validasi pada data yang diterima harus berbentuk array
  if (typeof callback !== "function") throw new Error("Callback must be a function!"); // melakukan validasi pada parameter callback supaya yang diterima bersifat function
  const result = []; // membuat array kosong untuk menampung hasil map

  // lakukan proses looping untuk proses perubahan data satu persatu
  for (let i = 0; i < array.length; i++) {
    if (i in array) { // check apakah urutan i ada pada index array
      if (thisValue !== undefined && thisValue !== null) { // check apakah thisValue memiliki isi atau tidak
        if (typeof thisValue !== "object") throw new Error("Default value should an Object!"); // validasi terlebih dahulu apakah thisValue adalah object karena harus bertipe object
        
        // membuat variable yang berisi Object yang di dalamnya sudah ada object dari thisValue
        const context = Object(thisValue);
        context.newFn = callback; // menambahkan function callback kedalam object
    
        // melakukan operasi maping ditambah adanya default value berbentuk 'this' didalamnya
        result[i] = context.newFn(array[i], i, array);

        // hapus fungsi tersebut supaya bersih
        delete context.newFn;
      } else {
        // jika thisValue tidak ada maka gunakan operasi langsung dari callback function
        result[i] = callback(array[i], i, array);
      }
    }
  }

  console.log("\n---- 1a. Manual Process on Built-In Map Method Program ----");
  return result; // function manualMap menghasilkan array terbaru dari variable result
};

export const manualFilter = (array, callback, thisValue = undefined) => {
  if (!Array.isArray(array)) throw new Error("Value must be Array"); // melakukan validasi pada data yang diterima harus berbentuk array
  if (typeof callback !== "function") throw new Error("Callback must be a function!"); // melakukan validasi pada parameter callback supaya yang diterima bersifat function
  const result = []; // membuat array kosong untuk menampung hasil filter
  let index = 0;
  // lakukan proses looping untuk proses perubahan data satu persatu
  for (let i = 0; i < array.length; i++) {
    if (i in array) { // check apakah urutan i ada pada index array
      if (thisValue !== undefined && thisValue !== null) { // check apakah thisValue memiliki isi atau tidak
        if (typeof thisValue !== "object") throw new Error("Default value should an Object!"); // validasi terlebih dahulu apakah thisValue adalah object karena harus bertipe object
        
        // membuat variable yang berisi Object yang di dalamnya sudah ada object dari thisValue
        const context = Object(thisValue);
        context.newFn = callback; // menambahkan function callback kedalam object
    
        // mengecek apakah callback function return true
        if (context.newFn(array[i], i, array)) {
          result[index] = array[i]; // jika true maka value urutan ke 'i' dimasukkan kedalam result
          index++;
        }

        // hapus fungsi tersebut supaya bersih
        delete context.newFn;
      } else {
        // jika thisValue tidak ada maka gunakan operasi langsung dari callback function
        // mengecek apakah callback function return true
        if (callback(array[i], i, array)) {
          result[i] = array[i]; // jika true maka value urutan ke 'i' dimasukkan kedalam result
        }
      }
    }
  }

  console.log("\n---- 1b. Manual Process on Built-In Filter Method Program ----");
  return result; // function manualMap menghasilkan array terbaru dari variable result
};