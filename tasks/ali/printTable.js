export const cetakTabel = (data) =>{
    if(typeof data !== "number" || data < 0){
        throw new Error("Input tidak valid , harus Nomor")
    }
    for(let i = 1 ; i <= 10 ; i++){
        console.log(`${data} x ${i} = ${data*i}`)
    }
}