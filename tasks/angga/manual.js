export const manualMap = (array, callback) => {
  if (!Array.isArray(array)) throw new Error("Value must be Array"); // melakukan validasi pada data yang diterima harus berbentuk array
  if (typeof callback !== "function") throw new Error("Callback must be a function!"); // melakukan validasi pada parameter callback supaya yang diterima bersifat function
  const result = []; // membuat array kosong untuk menampung hasil map

  // lakukan proses looping untuk proses perubahan data satu persatu
  for (let i = 0; i < array.length; i++) {
    if (i in array) { // check apakah urutan i ada pada index array
      
      // masukkan semua data dari kondisi callback function kedalam result
      result[i] = callback(array[i], i, array);
    }
  }

  console.log("\n---- 1a. Manual Process on Built-In Map Method Program ----");
  return result; // function manualMap menghasilkan array terbaru dari variable result
};

export const manualFilter = (array, callback) => {
  if (!Array.isArray(array)) throw new Error("Value must be Array"); // melakukan validasi pada data yang diterima harus berbentuk array
  if (typeof callback !== "function") throw new Error("Callback must be a function!"); // melakukan validasi pada parameter callback supaya yang diterima bersifat function
  const result = []; // membuat array kosong untuk menampung hasil filter
  let index = 0;
  // lakukan proses looping untuk proses perubahan data satu persatu
  for (let i = 0; i < array.length; i++) {
    if (i in array) { // check apakah urutan i ada pada index array
      // mengecek apakah callback function return true
      if (callback(array[i], i, array)) {
        result[index] = array[i]; // jika true maka value urutan ke 'i' dimasukkan kedalam result
        index++;
      }
    }
  }

  console.log("\n---- 1b. Manual Process on Built-In Filter Method Program ----");
  return result; // function manualMap menghasilkan array terbaru dari variable result
};