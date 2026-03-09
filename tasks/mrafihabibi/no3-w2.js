export function countArray(arr){
    let hasilArray = 1;
    for(let i = 0; i < arr.length;i++){
        hasilArray *= arr[i];
    }
    return hasilArray;
}

// console.log(countArray([1,2,3,4,5]));