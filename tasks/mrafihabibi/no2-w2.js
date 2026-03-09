export function cetakTable(n){
    if(typeof n !== "number" || n < 0){
        throw new Error("Parameter harus bertipe data nomor dan harus bertipe positif");
        return;
    }

    for(let i = 1; i <= 10;i++){
        console.log(`${n} x ${i} = ${n * i}`);
    }
    
}
// cetakTable(10);