export function countArray(arr){
    if(Array.isArray(arr)){
        let hasil = 1;
        for(let i = 0; i < arr.length; i++){
            if(typeof arr[i] === "number"){
                hasil *= arr[i];
            }else{
                return "Array harus bertipe number";
            }
    }
    return hasil;
    }else{
        return "Input harus berupa Array";
    }
}

console.log(countArray([1,2,3,4,5]));
