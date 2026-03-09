//a.Map 
export function manualMap(array, callback){
    //siapkan "wadah" kosong untuk array
    const arr = [];
    //lakukan looping
    for(let i = 0;i < array.length;i++){
        //panggil fungsi callbacknya
        const hasilArray = callback(array[i]);
        //push hasil nya ke wadah
        arr.push(hasilArray);
    }
    return arr;
}

// let hasilfungsi = fungsiArray([1,2,3,4,5], angka => angka *2);
// console.log(hasilfungsi);

//b. filter
//buat fungsi untuk melakukan manual filter
export function manualFilter(array, mengecek){
    //bikin wadah kosong
    const arr = [];
    //lakukan perulangan dari array
    for(let i = 0;i < array.length;i++){
        //mengecek dimana apakah array[i] ini lolos
        if(mengecek(array[i])){
            arr.push(array[i]);
        }
    }
    // return wadahnya
    return arr;
}

// function runManualFilter(angka){
//     return angka > 2;
// }

// let hasilRunFilter = manualFilter([1,2,3,4,5], runManualFilter);
// console.log(hasilRunFilter);