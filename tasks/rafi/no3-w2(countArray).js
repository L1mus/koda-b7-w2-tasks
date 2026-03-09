export function countArray(arr){
    if (!Array.isArray(arr)) {
    throw new Error("Parameter harus berupa Array!");
    }

    let hasilArray = 1;
    for(let i = 0; i < arr.length;i++){
        hasilArray *= arr[i];
    }
    return hasilArray;
}

// console.log(countArray([1,2,3,4,5]));