export function countArray (arr) {
    console.log("==========Count Array==========")
    if(!Array.isArray(arr)) {
        throw new Error("Input harus bertipe data Array");
    }
    let total = 1;
    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            throw new Error ("semua elemen didalam array harus angka/integer")
        }
        total *= arr[i];
    }
    return total;
}
// console.log(countArray([1,2,3,4,5]))